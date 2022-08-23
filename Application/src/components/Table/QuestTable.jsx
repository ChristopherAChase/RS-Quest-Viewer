import React, { useState } from "react";
import TableHeader from "./TableHeader";
import { Table } from "react-bulma-components";
import QuestData from "../../../../Data/quest_list.json";
import Row from "./Row";

const QuestTable = () => {
  const [selectedRowIndex, setSelectedRowIndex] = useState("0");

  const handleToggle = (index) => (
    selectedRowIndex === index 
      ? setSelectedRowIndex("0") 
      : setSelectedRowIndex(index)
  );

  return (
    <Table align="center" width="80%">
      <TableHeader />
      <tbody className="questTable" >
        {QuestData.Quests.map((quest, questId) => <Row rowData={quest} key={questId} onToggle={() => handleToggle(questId)} expanded={selectedRowIndex === questId} />)}
      </tbody>
    </Table>
  );
};

export default QuestTable;