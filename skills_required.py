import re
from utils.constants import ALL_SKILLS, BASE_WIKI_LINK
from utils.utility import *
import requests
from bs4 import BeautifulSoup
import json

quest_requirements = {"quests": []}

def get_correct_article(word:str):
    return 'an' if word[0].lower() in ['a', 'e', 'i', 'o', 'u'] else 'a'
  
def get_quests_requiring_skill(skill:str):
    skill_html_id = get_skill_html_id(skill)
    skill_link = get_skill_wiki_url(skill)
    
    soup = BeautifulSoup(requests.get(skill_link).content, "html.parser")

    quest_requirements_list_items = soup.find("span", "mw-headline", string=skill_html_id.replace('_', ' ')).parent.find_next_sibling("ul").find_all("li")

    return [requirement for requirement in quest_requirements_list_items]

def get_quest_or_none(quest_name):
    global quest_requirements
    return next((item for item in quest_requirements["quests"] if item["name"] == quest_name), None)

def quest_has_skill_requirement(quest: dict, required_skill:str):
    return next((skill for skill in quest["skill_requirements"] if skill["skill"] == required_skill), False)


def add_new_skill_requirement(quest:str, skill: str, level: int):
    get_quest_or_none(quest)["skill_requirements"].append({
        "skill": skill, 
        "level": int(level)
    })

def add_new_quest_and_skill_requirement(quest:str, quest_url:str , skill:str, level:int):
    global quest_requirements
    quest_requirements["quests"].append({
        "name": quest, 
        "url": f'{BASE_WIKI_LINK}{quest_url}',
        "skill_requirements": [
                {
                    "skill": skill,
                    "level": int(level)
                }
            ]
    })

def add_quests_requiring_skill(requirements:dict, skill:str):
    quest_requirements = requirements.copy()
    print(f'Adding requirements for {skill}...')

    for requirement in get_quests_requiring_skill(skill):
        requirement_text = requirement.text
        stringSplitIndices = [0, re.search('[^0-9]', requirement_text).start(), re.search('[^0-9- ]', requirement_text).start()]
        level, quest = [requirement_text[i:j] for i,j in zip(stringSplitIndices, stringSplitIndices[1:]+[None])][::2]
        quest_url = requirement.find_next("a")["href"]
        
        if get_quest_or_none(quest):
            if not quest_has_skill_requirement(get_quest_or_none(quest), skill):
                add_new_skill_requirement(quest, skill, level)
        else:
            add_new_quest_and_skill_requirement(quest, quest_url, skill, level)

    return quest_requirements

for skill in ALL_SKILLS:
    quest_requirements = add_quests_requiring_skill(quest_requirements, skill)

print(f'Added skill requirements for {len(quest_requirements["quests"])}/234 quests')

requirements = json.dumps(quest_requirements, indent=3)

with open(R'C:\Users\alyss\OneDrive\Documents\Personal\Chris\Python\Quest_Data_Scraper\Data\Quest_List.json', 'w') as outfile:
    outfile.write(requirements)

print('')
print('Done recording all skill level requirements for quests.')
print(R'Saved JSON object to C:\Users\alyss\OneDrive\Documents\Personal\Chris\Python\Quest_Data_Scraper\Quest_List.json')

