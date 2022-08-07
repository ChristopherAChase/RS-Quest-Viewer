import quests
import skills
import json
from pathlib import Path

def scrape_quest_data():
    quest_dictionary = quests.get_quest_dictionary()
    quest_dictionary_with_skills = skills.add_skill_requirements_to_quest_dictionary(quest_dictionary)
    return quest_dictionary_with_skills

def update_quest_list_json():
    path_to_json = Path(__file__).parent / "../Data/Quest_List.json"
    
    with open(path_to_json, "w", encoding='utf-8') as file:
        file.write(str(json.dumps(scrape_quest_data(), indent=3)))

update_quest_list_json()