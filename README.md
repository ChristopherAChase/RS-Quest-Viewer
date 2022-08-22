# RS-Quest-Viewer
This application is a tool that a user will be able to use to see what requirements each quest in RuneScape has, whether they have those requirements, and more, all in one convenient place. Tools similar to this tool all lack at least one of the most important aspects:
- Convenience
- Helpful
- Simple

# Vision
In the future, a user will be able to search their RuneScape username, and then the app will update to reflect which quests the user has completed, which ones they meet the requirements for, which ones they don't, and which requirements they're missing, and more. The list will be sortable, and filterable to improve the convenience.

# Scraping
The scraping directory of the project contains the scripts that were used to scrape the wiki page to gather all of the quest data used to display to the user.

## Data Gathered
- List of quests
  - Name
  - URL (and URL to quest's quick guide)
  - Difficulty
  - Length
  - Quest Points
  - Age (Similar to an "era" within the world of RuneScape)
  - The series the quest is a part of (if any)
  - Is the quest a member's only quest
- Skill Requirements were Gathered per quest
  - Skill name
  - Required Level for the quest


# Application
The Application directory is the hope of the react web application that will display the quest data to the user, and allow them to link directly to the quest's guide, see how their stats compare to the quest requirements, and more in the future.