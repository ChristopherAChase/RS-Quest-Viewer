type QuestList = Quest[];

type Quest = {
  questId: string, 
  name: string, 
  questUrl: string, 
  questQuickGuideUrl: string, 
  members: "Yes" | "No", 
  difficulty: QuestDifficulty, 
  length: QuestLength, 
  age: string, 
  questPoints: 0 | 1 | 2 | 3 | 4 | 5
  series: QuestSeries[], 
  skillRequirements: Skill[], 
  questRequirements: QuestRequirement[]
}

type QuestDifficulty = 
"Novice" 
| "Intermediate"
| "Experienced"
| "Master" 
| "Grandmaster"
| "Special"

type QuestLength = 
  "Short" 
  | "Short to Medium" 
  | "Medium"
  | "Medium to Long" 
  | "Long"
  | "Long to Very Long" 
  | "Very Long"
  | "Very, Very Long"


type QuestRequirement = {
  title: string, 
  questUrl: string, 
  questQuickGuideUrl: string, 
  prerequisites?: QuestRequirement[]
}

type QuestSeries = {
  seriesName: string, 
  seriesUrl: string;
}

type Skill = {
  skillId: number, 
  skillName: SkillName, 
  requiredLevel: number
}

type SkillName = 
"Agility"
| "Archaeology"
| "Attack"
| "Constitution"
| "Construction"
| "Cooking"
| "Crafting"
| "Defence"
| "Divination"
| "Dungeoneering"
| "Farming"
| "Firemaking"
| "Fishing"
| "Fletching"
| "Herblore"
| "Hunter"
| "Invention"
| "Magic"
| "Mining"
| "Prayer"
| "Ranged"
| "Runecrafting"
| "Slayer"
| "Smithing"
| "Strength"
| "Summoning"
| "Thieving"
| "Woodcutting";


export {
  Quest, 
  QuestList, 
  QuestSeries, 
  QuestDifficulty, 
  QuestLength, 
  QuestRequirement, 
  Skill, 
  SkillName
};