import requests
import json
from utils.constants import QUEST_LIST_LINK_SUFFIX, BASE_WIKI_LINK
from bs4 import BeautifulSoup, NavigableString

QUEST_LIST_URL = f'{BASE_WIKI_LINK}{QUEST_LIST_LINK_SUFFIX}'

def get_quest_table():
    soup = BeautifulSoup(requests.get(QUEST_LIST_URL).content, "html.parser")    
    return soup.find("table", "wikitable")

def get_table_headers(table: NavigableString):
    header_row = table.findNext("tr")
    column_names = [children.get_text('\n',True) for children in header_row.children if children != '\n']
    return column_names

def get_table_rows(table:NavigableString):
    table_body = table.find_next("tr").find_next_siblings("tr")
    table_rows = [[row.find_next("td")] + row.find_next("td").find_next_siblings("td") for row in table_body]
    return table_rows

def get_row_data(rows: NavigableString):
    # Need to parse each row individually in order to grab the URLs for the quest, and potentially more data
    pass
    
quest_table = get_quest_table()
table_headers = get_table_headers(table = quest_table)
table_rows = get_table_rows(table = quest_table)

# get_row_data(table_rows)

body_contents = [[td.get_text('\n', True) for td in row] for row in table_rows]

quest_dictionary = {'Quests': [{table_headers[i]: row[i] for i in range(len(row))} for row in body_contents]}

with open("quest_dictionary.json", "w", encoding='utf-8') as file:
    file.write(str(json.dumps(quest_dictionary, indent=3)))
