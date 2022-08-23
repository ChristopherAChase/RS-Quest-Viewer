import React from "react";

const Row = ({ rowData, onToggle, expanded, ...props }) => {
  const {
    name,
    questUrl,
    members,
    difficulty,
    length,
    questPoints,
    skillRequirements
  } = rowData;

  return (
    <>
      <tr
        className={`questData_main ${expanded ? "expanded" : ""}`}
        onClick={onToggle}
      >
        <td>
          <a href={questUrl} target="_blank">
            {name}
          </a>
        </td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{questPoints}</td>
        <td>{members}</td>
      </tr>
      <tr className={`questData_requirements ${expanded ? "expanded" : ""}`} >
        <td className="skill-requirements">
          <ul className={skillRequirements.length ? "skill-requirement-list" : ""}>
            {skillRequirements.length
              ? skillRequirements.map(({ skillName, requiredLevel }, requiredSkillId) => (
                  <li key={requiredSkillId}>
                    {skillName} - {requiredLevel}
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