// Why isn't this file called `Row.jsx`, right now it is just `.js`
import React from "react";

const Row = ({ rowData, onToggle, expanded, ...props }) => {
  // It is unusual for JavaScript variables to be named by capitalized snake case.
  // Idiomatically they are camelCase. This becomes difficult to read for me in JSX
  // because I only expect Components to have capitalized naming. -z
  const {
    Name: questName,
    URL: questURL,
    Members: isMembers,
    Difficulty: difficulty,
    Length: length,
    Quest_Points: questPoints,
    Skill_Requirements: requiredSkills,
  } = rowData;

  // An icon to let me know the row is clickable would be nice :). -z
  return (
    <>
      <tr
        className={`questData_main ${expanded ? "expanded" : ""}`}
        onClick={onToggle}
      >
        <td>
          {/* You want `target="_blank"`. -z */}
          <a href={questURL} target="None">
            {questName}
          </a>
        </td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{questPoints}</td>
        <td>{isMembers}</td>
      </tr>
      <tr className={`questData_requirements ${expanded ? "expanded" : ""}`}>
        <td className="skill-requirements">
          <ul className={requiredSkills ? "skill-requirement-list" : ""}>
            {requiredSkills
              ? requiredSkills.map(({ Skill, Level }, index) => (
                  // Insert comment about index being a bad value for key. -z
                  <li key={index}>
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
