import React from 'react';
import QuestRequirements from './QuestRequirements';
import SkillRequirements from './SkillRequirements';
import { QuestRequirement, Skill } from '../../../../../@types';

type Props = {
  questRequirements: QuestRequirement[], 
  skillRequirements: Skill[], 
  expanded: boolean, 
  props?: any[]
}

const RequirementsRow = ({questRequirements, skillRequirements, expanded, ...props}: Props) => {
  return (
    <tr className={`questData_requirements ${expanded ? "expanded" : ""}`} >
      <SkillRequirements skillRequirements={skillRequirements}></SkillRequirements>
      <QuestRequirements questRequirements={questRequirements}></QuestRequirements>
    </tr>
  )
};

export default RequirementsRow;