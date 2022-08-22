import React from "react";
import Header from "./Header";
import { Table } from "react-bulma-components";
import QuestData from '../../../../Data/quest_list.json';
import Row from "./Row";




const QuestTable = () => (
    <Table>
        <Header />
        <tbody>
            {QuestData.Quests.map(quest => <Row quest={quest} />)}
        </tbody>
    </Table>
);

export default QuestTable;