from utils.constants import *

def get_correct_article(word:str):
    return 'an' if word[0].lower() in ['a', 'e', 'i', 'o', 'u'] else 'a'

def get_skill_html_id(skill:str):
    return QUEST_REQUIREMENTS_HTML_ID.format(skill=skill, article=get_correct_article(skill))

def get_skill_wiki_url(skill:str):
    return f'{BASE_WIKI_LINK}{SKILL_LINK_SUFFIX.format(skill=skill)}'