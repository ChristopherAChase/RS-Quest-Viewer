import re
from utils.constants import ALL_SKILLS
from utils.utility import get_skill_html_id, get_skill_wiki_url, titleCase
import requests
from bs4 import BeautifulSoup

def get_quests_requiring_skill(skill: str):
    skill_html_id = get_skill_html_id(skill)
    skill_link = get_skill_wiki_url(skill)

    soup = BeautifulSoup(requests.get(skill_link).content, "html.parser")

    quest_requirements_list_items = soup.find("span", "mw-headline", string=skill_html_id.replace('_', ' ')) \
                                        .parent.find_next_sibling("ul") \
                                        .find_all("li")

    return [requirement.text for requirement in quest_requirements_list_items]


def get_quest_requirement(requirement: str):
    stringSplitIndices = [0, re.search('[^0-9]', requirement).start(), re.search('[^0-9- ]', requirement).start()]
    return [requirement[i:j] for i, j in zip(stringSplitIndices, stringSplitIndices[1:] + [None])][::2]


def add_skill_requirements_to_quest_dictionary(quest_dictionary: dict):
    quest_list = quest_dictionary
    for skill in ALL_SKILLS:
        for requirement in get_quests_requiring_skill(skill):
            skill_level, quest_name = get_quest_requirement(requirement)

            quest = next((item for item in quest_list["Quests"] if item["name"] == titleCase(quest_name)), None)
            if quest:
                quest["skillRequirements"].append({
                    "skillName": skill,
                    "requiredLevel": int(skill_level)
                })
    return quest_list
