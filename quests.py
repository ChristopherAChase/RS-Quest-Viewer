import requests
from bs4 import BeautifulSoup

QUEST_LIST_URL = 'https://runescape.wiki/w/List_of_quests'

def get_quest_table():
    soup = BeautifulSoup(requests.get(QUEST_LIST_URL).content, "html.parser")

    quest_table = soup.find("table", "wikitable")

    # with open("quest_table.html", "w", encoding='utf-8') as file:
    #     file.write(str(quest_table))

    return quest_table

get_quest_table()
