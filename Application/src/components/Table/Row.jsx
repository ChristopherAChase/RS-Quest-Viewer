import React from "react";

const Row = ({ rowData, onToggle, expanded, ...props }) => {
  const {
    name,
    questURL,
    members,
    difficulty,
    length,
    questpoints,
    skillRequirements
  } = rowData;

  return (
    <>
      <tr
        className={`questData_main ${expanded ? "expanded" : ""}`}
        onClick={onToggle}
      >
        <td>
          <a href={questURL} target="_blank">
            {name}
          </a>
        </td>
        <td>{difficulty}</td>
        <td>{length}</td>
        <td>{questpoints}</td>
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