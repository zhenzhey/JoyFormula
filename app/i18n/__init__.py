"""i18n 便捷导出"""

from app.i18n.state import get_language, set_language
from app.i18n.translations import TRANSLATIONS


def t(key: str, **kwargs) -> str:
    """
    根据当前语言获取翻译文本。
    支持 {var} 插值: t("user_created", user_id="demo")
    """
    lang = get_language()
    entry = TRANSLATIONS.get(key, {})
    text = entry.get(lang) or entry.get("zh", f"[MISSING: {key}]")
    if kwargs:
        text = text.format(**kwargs)
    return text
