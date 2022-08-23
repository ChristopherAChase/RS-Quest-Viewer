import React from "react";

const Row = ({ rowData, onToggle, expanded, ...props }) => {
  const {
    Name: questName,
    URL: questURL,
    Members: isMembers,
    Difficulty: difficulty,
    Length: length,
    Quest_Points: questPoints,
    Skill_Requirements: requiredSkills
  } = rowData;

  return (
    <>
      <tr 
        className={`questData_main ${expanded ? "expanded" : ""}`} 
        onClick={onToggle} 
      >
        <td>
          <a href={questURL} target="_blank">
            {questName}
          </a>
        </td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{questPoints}</td>
        <td>{isMembers}</td>
      </tr>
      <tr className={`questData_requirements ${expanded ? "expanded" : ""}`} >
        <td className="skill-requirements">
          <ul className={requiredSkills ? "skill-requirement-list" : ""}>
            {requiredSkills 
              ? requiredSkills.map(({ Skill, Level }, requiredSkillId) => (
                  <li key={requiredSkillId}>
                    {Skill} - {Level}
                  </li>
                ))
              : "No Required Skills"}
          </ul>
        </td>
      </tr>
    </>
  );
};

export default Row;