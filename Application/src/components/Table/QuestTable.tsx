//@ts-ignore
import React, { useState } from "react";
import TableHeader from "./TableHeader";
import { Table } from "react-bulma-components";
import QuestData from "../../../../Data/quest_list.json";
import QuestRows from "./QuestRows/QuestRows";

const QuestTable = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState("0");

  const handleToggle = (questId) => (
    selectedRowIndex === questId
      ? setSelectedRowIndex("0")
      : setSelectedRowIndex(questId)
  );

  return (
    <Table align="center" width="80%">
      <TableHeader />
      <tbody className="questTable" >
        {QuestData.Quests.map((quest) => <QuestRows rowData={quest} key={quest.questId} onToggle={() => handleToggle(quest.questId)} expanded={selectedRowIndex === quest.questId} />)}
      </tbody>
    </Table>
  );
};

export default QuestTable;