import React from 'react';

const SkillRequirements = ({skillRequirements, ...props}) => {
  return (
    <td className="skill-requirements" colSpan={2}>
      <ul className={skillRequirements.length ? "skill-requirement-list" : ""}>
        {skillRequirements.length
          ? skillRequirements.map(({ skillName, requiredLevel, skillId }) => (
            <li key={skillId}>
              {skillName} - {requiredLevel}
            </li>
          ))
          : "No Required Skills"}
      </ul>
    </td>
  )
};

export default SkillRequirements;