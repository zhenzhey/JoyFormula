from typing import List, Dict
from app.services.ai_service import ai_service
from app.models.joy_card import JoyCard
from app.i18n.state import get_language
from app.i18n.translations import INSIGHT_GENERATION_PROMPT, INSIGHT_SYSTEM_PROMPT
import json
import re


class InsightService:
    """快乐定律生成服务"""

    @staticmethod
    def generate_insights(cards: List[JoyCard]) -> List[Dict]:
        """
        基于用户的快乐卡片生成定律

        Args:
            cards: 用户的快乐卡片列表

        Returns:
            生成的定律列表
        """
        if len(cards) < 5:
            raise ValueError("需要至少5张卡片才能生成定律")

        # 构建卡片数据
        cards_data = []
        for card in cards:
            cards_data.append({
                "id": card.id,
                "summary": card.card_summary,
                "raw_input": card.raw_input,
                "formula": {
                    "scene": card.formula_scene,
                    "people": card.formula_people,
                    "event": card.formula_event,
                    "trigger": card.formula_trigger,
                    "sensation": card.formula_sensation
                }
            })

        cards_json = json.dumps(cards_data, ensure_ascii=False, indent=2)

        lang = get_language()
        prompt = INSIGHT_GENERATION_PROMPT[lang].format(cards_json=cards_json)

        # 调用AI
        ai_reply = ai_service.chat(
            system_prompt=INSIGHT_SYSTEM_PROMPT[lang],
            messages=[{"role": "user", "content": prompt}],
            temperature=0.8,
            max_tokens=8000
        )

        # 提取JSON
        insights = InsightService._extract_insights(ai_reply)
        return insights

    @staticmethod
    def _extract_json_by_braces(text: str, start: int) -> str | None:
        """从 start 位置的 '{' 开始，找到匹配的闭合 '}'，返回完整 JSON 字符串"""
        if start < 0 or start >= len(text) or text[start] != '{':
            return None
        depth = 0
        in_string = False
        escape = False
        for i in range(start, len(text)):
            ch = text[i]
            if escape:
                escape = False
                continue
            if ch == '\\' and in_string:
                escape = True
                continue
            if ch == '"' and not escape:
                in_string = not in_string
                continue
            if in_string:
                continue
            if ch == '{':
                depth += 1
            elif ch == '}':
                depth -= 1
                if depth == 0:
                    return text[start:i + 1]
        return None

    @staticmethod
    def _extract_insights(ai_reply: str) -> List[Dict]:
        """从AI回复中提取定律JSON"""
        if not ai_reply:
            print("[DEBUG] AI reply is empty")
            return []

        # Strategy 1: ```json ... ``` complete code block
        json_match = re.search(r'```json\s*(.*?)\s*```', ai_reply, re.DOTALL)
        if json_match:
            try:
                data = json.loads(json_match.group(1))
                print(f"[DEBUG] Parsed from code block, insights count: {len(data.get('insights', []))}")
                return data.get("insights", [])
            except json.JSONDecodeError as e:
                print(f"[DEBUG] JSON decode failed (code block): {e}")

        # Strategy 2: ```json without closing ``` (truncated response)
        # Extract everything after ```json and use balanced braces
        json_match = re.search(r'```(?:json)?\s*\n', ai_reply)
        if json_match:
            content_after = ai_reply[json_match.end():]
            brace_pos = content_after.find('{')
            if brace_pos != -1:
                json_str = InsightService._extract_json_by_braces(content_after, brace_pos)
                if json_str:
                    try:
                        data = json.loads(json_str)
                        print(f"[DEBUG] Parsed from code block (balanced braces), insights count: {len(data.get('insights', []))}")
                        return data.get("insights", [])
                    except json.JSONDecodeError as e:
                        print(f"[DEBUG] JSON decode failed (code block balanced): {e}")

        # Strategy 3: find "insights" keyword anywhere and extract JSON via balanced braces
        insights_pos = ai_reply.find('"insights"')
        if insights_pos != -1:
            start = ai_reply.rfind('{', 0, insights_pos)
            if start != -1:
                json_str = InsightService._extract_json_by_braces(ai_reply, start)
                if json_str:
                    try:
                        data = json.loads(json_str)
                        print(f"[DEBUG] Parsed from balanced braces, insights count: {len(data.get('insights', []))}")
                        return data.get("insights", [])
                    except json.JSONDecodeError as e:
                        print(f"[DEBUG] JSON decode failed (balanced): {e}")

        print(f"[DEBUG] No parseable JSON found. AI reply preview: {ai_reply[:500]}")
        return []
