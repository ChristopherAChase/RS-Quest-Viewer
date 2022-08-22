# Scraping
The "Scraping" directory of the project is the location for all of the scripts that are used to gather the Runescape Wiki's data that is used either for the RS Quest Viewer application, or for other personal uses.

## Purpose
Effort was put into gathering this data because this data was not available anywhere else that I could find that was convenient to use, complete, and reliable. Existing sources were things like janky excel files, .txt files that were missing some crucial information, etc. The only place the data could be consistently, reliably found was the Runescape Wiki page.

## Data
As of today, the data gathered for each quest is structured as such:

```
{
    Name: String,
    URL: String,
    Quick_Guide_URL: String,
    Members: String ("Yes"|"No"),
    Difficulty: String ("Novice" | "Intermediate" | "Experienced" | "Master" | "Grandmaster" | "Special"),
    Length: String ("Short" | "Short to Medium" | "Medium" | "Medium to Long" | "Long" | "Long to Very Long" | "Very Long" | "Very, Very Long"),
    Age: String,
    Quest_Points: Int,
    Series: [
        {
            Name: String,
            URL: String
        },
    ],
    Skill_Requirements: [
        {
            Skill: String,
            Level: Int
        },
    ]
}
```

## Future Improvements
- Gather quest pre-requisites
- (Potentially) Gather Rewards of the quest as well.
  - The importance of the quest viewer application is to display the requirements of a quest and how a player stacks with those requirements, so the reward part is less important to meet this purpose.