import React from 'react';

const QuestRequirements = ({ questRequirements, ...props }) => {

  const getNestedRequirements = (questRequirementsList, isFirstLevel) => {
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