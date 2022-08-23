import re
from utils.constants import QUEST_REQUIREMENTS_HTML_ID, BASE_WIKI_LINK, SKILL_LINK_SUFFIX


def get_correct_article(word: str):
    return 'an' if word[0].lower() in ['a', 'e', 'i', 'o', 'u'] else 'a'


def get_skill_html_id(skill: str):
    return QUEST_REQUIREMENTS_HTML_ID.format(skill=skill, article=get_correct_article(skill))


def get_skill_wiki_url(skill: str):
    return f'{BASE_WIKI_LINK}{SKILL_LINK_SUFFIX.format(skill=skill)}'


def titleCase(phrase: str):
    return re.sub(
        r"[A-Za-z]+('[A-Za-z]+)?",
        lambda word: word.group(0).capitalize(),
        phrase
    )
