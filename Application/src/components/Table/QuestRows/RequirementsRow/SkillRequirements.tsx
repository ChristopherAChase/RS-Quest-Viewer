import React from 'react';
import { Skill } from '../../../../../@types';

type Props = {
  skillRequirements: Skill[], 
  props?: any[]
}

const SkillRequirements = ({skillRequirements, ...props}: Props) => {
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