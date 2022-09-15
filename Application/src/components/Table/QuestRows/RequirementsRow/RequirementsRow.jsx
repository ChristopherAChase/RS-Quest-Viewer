import React from 'react';
import QuestRequirements from './QuestRequirements';
import SkillRequirements from './SkillRequirements';

const RequirementsRow = ({questRequirements, skillRequirements, expanded, ...props}) => {
  return (
    <tr className={`questData_requirements ${expanded ? "expanded" : ""}`} >
      <SkillRequirements skillRequirements={skillRequirements}></SkillRequirements>
      <QuestRequirements questRequirements={questRequirements}></QuestRequirements>
    </tr>
  )
};

export default RequirementsRow;