import re
from utils.constants import ALL_SKILLS, BASE_WIKI_LINK
from utils.utility import *
import requests
from bs4 import BeautifulSoup
import json
import quests 
quest_dictionary = quests.get_quest_dictionary()

SKILL_REQS = "Skill_Requirements"

# Gather the page's contents
def get_quests_requiring_skill(skill:str):
    skill_html_id = get_skill_html_id(skill)
    skill_link = get_skill_wiki_url(skill)
    
    soup = BeautifulSoup(requests.get(skill_link).content, "html.parser")

    quest_requirements_list_items = soup.find("span", "mw-headline", string=skill_html_id.replace('_', ' ')) \
                                        .parent.find_next_sibling("ul") \
                                        .find_all("li")

    return [requirement.text for requirement in quest_requirements_list_items]

def get_quest_requirement(requirement:str):
    stringSplitIndices = [0, re.search('[^0-9]', requirement).start(), re.search('[^0-9- ]', requirement).start()]
    return [requirement[i:j] for i,j in zip(stringSplitIndices, stringSplitIndices[1:]+[None])][::2]
    

def get_quest_or_none(quest_list, quest_name):
    return next((item for item in quest_list["Quests"] if item["Name"] == quest_name), None)

def quest_has_skill_requirement(quest: dict, required_skill:str):
    return next((skill for skill in quest[SKILL_REQS] if skill["skill"] == required_skill), False)

def add_skill_requirements_to_quest_dictionary(quest_dictionary: dict):
    quest_list = quest_dictionary
    for skill in ALL_SKILLS:
        for requirement in get_quests_requiring_skill(skill):
            skill_level, quest_name =  get_quest_requirement(requirement)

            quest = next((item for item in quest_list["Quests"] if item["Name"] == quest_name.title()), None)
            if quest:
                if not SKILL_REQS in quest:
                    quest[SKILL_REQS] = []

                quest[SKILL_REQS].append({
                        "Skill": skill,
                        "Level": int(skill_level)
                    })
    return quest_list

with open("./Data/quest_list.json", "w", encoding='utf-8') as file:
    file.write(str(json.dumps(add_skill_requirements_to_quest_dictionary(quest_dictionary), indent=3)))
