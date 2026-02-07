from typing import Dict, List, Optional
from app.services.ai_service import ai_service
from app.i18n.state import get_language
from app.i18n.translations import JOY_COACH_SYSTEM_PROMPT, CHAT_INITIAL_MESSAGE
import json
import re


class ChatService:
    """对话服务：处理与用户的交互逻辑"""

    @staticmethod
    def start_conversation() -> Dict:
        """开始新的对话"""
        lang = get_language()
        return {
            "initial_message": CHAT_INITIAL_MESSAGE[lang]
        }

    @staticmethod
    def process_message(conversation_history: List[Dict], user_message: str) -> Dict:
        """
        处理用户消息并返回AI回复

        Returns:
            {
                "assistant_reply": "AI的回复",
                "is_complete": True/False,
                "formula": {...} if is_complete else None
            }
        """
        # 添加用户消息到历史
        messages = conversation_history + [{"role": "user", "content": user_message}]

        # 调用AI
        lang = get_language()
        ai_reply = ai_service.chat(
            system_prompt=JOY_COACH_SYSTEM_PROMPT[lang],
            messages=messages,
            temperature=0.7
        )

        # 检查是否包含完整的公式（检测JSON输出）
        formula_data = ChatService._extract_formula(ai_reply)

        return {
            "assistant_reply": ai_reply,
            "is_complete": formula_data is not None,
            "formula": formula_data,
            "updated_history": messages + [{"role": "assistant", "content": ai_reply}]
        }

    @staticmethod
    def _extract_formula(ai_reply: str) -> Optional[Dict]:
        """从AI回复中提取公式JSON"""
        # 查找JSON代码块
        json_match = re.search(r'```json\s*(\{.*?\})\s*```', ai_reply, re.DOTALL)
        if not json_match:
            return None

        try:
            data = json.loads(json_match.group(1))
            if data.get("stage") == "complete" and "formula" in data:
                return data
        except json.JSONDecodeError:
            return None

        return None
