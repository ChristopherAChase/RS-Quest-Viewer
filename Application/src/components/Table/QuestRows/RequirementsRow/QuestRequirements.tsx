import React from 'react';
import { QuestRequirement } from '../../../../../@types';

type Props = {
  questRequirements: QuestRequirement[], 
  props?: any[]
}

const QuestRequirements = ({ questRequirements, ...props }: Props) => {
  
  const getNestedRequirements = (questRequirementsList: QuestRequirement[], isFirstLevel: boolean) => {
    return (
      <ul className={isFirstLevel ? "quest-requirement-list" : ""}>
        {questRequirementsList.map(({ title, questUrl, prerequisites }, requiredQuestId) => (
          <li className={"quest-requirement"} key={requiredQuestId}>
            <a href={questUrl} target="_blank">
              {title}
            </a>
            {prerequisites?.length ? getNestedRequirements(prerequisites, false) : <></>}
          </li>
        ))}
      </ul>
    )
  }

  return (
    <td className={`quest-requirements`} colSpan={3}>
      {questRequirements.length ? getNestedRequirements(questRequirements, true) : "No Quest Requirements"}
    </td>
  )
};

export default QuestRequirements;