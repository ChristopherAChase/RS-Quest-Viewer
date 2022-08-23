import React, { useState } from "react";
import Header from "./Header";
import { Table } from "react-bulma-components";
import QuestData from '../../../../Data/quest_list.json';
import Row from "./Row";




const QuestTable = () => {
    const [clicked, setClicked] = useState("0");

    const handleToggle = (index) => {
        return clicked === index ? setClicked("0") : setClicked(index);
    }

    return (
        <Table align="center" width="80%">
            <Header />
            <tbody className="questTable" >
                {QuestData.Quests.map((quest, index) => <Row rowData={quest} key={index} onToggle={() => handleToggle(index)} expanded={clicked === index} />)}
            </tbody>
        </Table>
    );
};

export default QuestTable;