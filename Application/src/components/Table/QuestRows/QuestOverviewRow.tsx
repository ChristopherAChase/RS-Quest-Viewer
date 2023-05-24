//@ts-ignore
import React from 'react'

const QuestOverviewRow = ({ rowData, onToggle, expanded, ...props }) => {
  const {
    name,
    questUrl,
    members,
    difficulty,
    length,
    questPoints
  } = rowData;

  return (
    <tr
      className={`questData_main`}
      onClick={onToggle}
    >
      <td>
        <span className={`accordion-indicator ${expanded ? "expanded" : ""}`}></span>
        <a href={questUrl} target="_blank">
          {name}
        </a>
      </td>
      <td>{difficulty}</td>
      <td>{length}</td>
      <td>{questPoints}</td>
      <td>{members}</td>
    </tr>
  )
};

export default QuestOverviewRow;