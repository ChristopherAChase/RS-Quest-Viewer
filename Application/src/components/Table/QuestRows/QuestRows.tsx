//@ts-ignore
import React from "react";
import QuestOverviewRow from "./QuestOverviewRow";
import RequirementsRow from "./RequirementsRow/RequirementsRow";

const QuestRows = ({ rowData, onToggle, expanded, ...props }) => {
  const {
    skillRequirements,
    questRequirements
  } = rowData;

  return (
    <>
      <QuestOverviewRow
        rowData={rowData}
        onToggle={onToggle}
        expanded={expanded}
      />
      <RequirementsRow
        questRequirements={questRequirements}
        skillRequirements={skillRequirements}
        expanded={expanded}
      />
    </>
  );
};

export default QuestRows;