import requests
from utils.constants import QUEST_LIST_URL, BASE_WIKI_LINK
from utils.utility import titleCase
import uuid
from bs4 import BeautifulSoup, NavigableString


def get_quest_table():
    soup = BeautifulSoup(requests.get(QUEST_LIST_URL).content, "html.parser")
    return soup.find("table", "wikitable")


def get_table_headers(table: NavigableString):
    header_row = table.findNext("tr")
    column_names = [children.get_text('\n', True) for children in header_row.children if children != '\n']
    return column_names


def get_table_rows(table: NavigableString):
    table_body = table.find_next("tr").find_next_siblings("tr")
    table_rows = [[row.find_next("td")] + row.find_next("td").find_next_siblings("td") for row in table_body]
    return table_rows


def get_row_data(table_rows: NavigableString):
    header = [header[0].lower() + titleCase(header)[1:].replace(' ', '')
              for header in get_table_headers(get_quest_table())]

    print(header)
    quests = []
    for tr in table_rows:
        quest_details = {"questId": str(uuid.uuid1())}
        for col_index, td in enumerate(tr):
            if col_index < len(tr) - 1:
                quest_details[header[col_index]] = titleCase(td.text.strip().replace('\n', ''))
                if col_index == 0:
                    quest_details["questUrl"] = f"{BASE_WIKI_LINK}{td.find('a')['href']}"
                    quest_details["questQuickGuideUrl"] = f"{BASE_WIKI_LINK}{td.find('a')['href']}/Quick_guide"
                if header[col_index].lower() == 'quest points':
                    quest_details[header[col_index]] = int(td.text.strip().replace('\n', ''))
            else:
                quest_series = [{
                    "seriesName": a.text.strip().replace('\n', ''),
                    "seriesUrl": f"{BASE_WIKI_LINK}{a['href']}"
                } for a in td.find_all('a')]
                quest_details[header[col_index]] = quest_series
        quest_details["skillRequirements"] = []
        quests.append(quest_details)
    return quests


def get_quest_dictionary():
    return {'Quests': get_row_data(table_rows=get_table_rows(table=get_quest_table()))}
