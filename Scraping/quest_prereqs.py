from utils.constants import BASE_WIKI_LINK
import requests
from bs4 import BeautifulSoup

requests.packages.urllib3.disable_warnings()


def parse_list(prereq_list):
    result = []
    for sub in prereq_list.find_all('li', recursive=False):
        if sub.a is None:
            continue
        data = {key: value for key, value in sub.a.attrs.items() if key != 'class'}
        data['questUrl'] = f"{BASE_WIKI_LINK}{data['href']}"
        data['questQuickGuideUrl'] = f"{BASE_WIKI_LINK}{data['href']}/Quick_guide"
        data.pop('href', None)
        if sub.find("ul"):
            data['prerequisites'] = parse_list(sub.find("ul"))

        if requests.head(data["questQuickGuideUrl"], verify=False, timeout=5).status_code == 200:
            result.append(data)

    return result


def get_quest_requirements(quest_url: str):
    quest_prereqs = None
    soup = BeautifulSoup(requests.get(quest_url).content, "html.parser")

    quest_details_table = soup.find("table", "questdetails")

    if quest_details_table is not None:
        quest_requirements_table = quest_details_table.find("table", "questreq")
        if quest_requirements_table is not None:
            quest_prereqs = quest_requirements_table.tr.find_next_sibling("tr").td.ul.ul

    return quest_prereqs


def add_quest_prerequisites_to_quest_dictionary(quest: dict):
    quest_requirements_list = get_quest_requirements(quest['questQuickGuideUrl'])

    if quest_requirements_list is not None:
        return parse_list(quest_requirements_list)

    return []
