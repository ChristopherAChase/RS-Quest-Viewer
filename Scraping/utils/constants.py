# Skill ID's are coming straight from the Runescape Wiki API page
# https://runescape.wiki/w/Application_programming_interface#Profile

ALL_SKILLS = {
  "Agility": 16,
  "Archaeology": 27,
  "Attack": 0,
  "Constitution": 3,
  "Construction": 22,
  "Cooking": 7,
  "Crafting": 12,
  "Defence": 1,
  "Divination": 25,
  "Dungeoneering": 24,
  "Farming": 19,
  "Firemaking": 11,
  "Fishing": 10,
  "Fletching": 9,
  "Herblore": 15,
  "Hunter": 21,
  "Invention": 26,
  "Magic": 6,
  "Mining": 14,
  "Prayer": 5,
  "Ranged": 4,
  "Runecrafting": 20,
  "Slayer": 18,
  "Smithing": 13,
  "Strength": 2,
  "Summoning": 23,
  "Thieving": 17,
  "Woodcutting": 8
}

BASE_WIKI_LINK = r'https://runescape.wiki'
SKILL_LINK_SUFFIX = r'/w/{skill}'
QUEST_LIST_LINK_SUFFIX = r'/w/List_of_quests'
QUEST_REQUIREMENTS_HTML_ID = r'Quests_with_{article}_{skill}_requirement'
QUEST_LIST_URL = f'{BASE_WIKI_LINK}{QUEST_LIST_LINK_SUFFIX}'
