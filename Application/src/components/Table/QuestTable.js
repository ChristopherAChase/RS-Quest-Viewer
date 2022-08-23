// Why isn't this file called `QuestTable.jsx`, right now it is just `.js`
import React, { useState } from "react";
import Header from "./Header";
import { Table } from "react-bulma-components";
import QuestData from "../../../../Data/quest_list.json";
import Row from "./Row";

const QuestTable = () => {
  // Better name could be [selectedRowIndex, setSelectedRowIndex].
  // Better yet is your `quest` could have a unique identifier like a questId
  // and we use [selectedQuestId, setSelectedQuestId]. -z
  const [clicked, setClicked] = useState("0");

  // If you want to go down the rabbit hole, you can memoize this function call
  // so it isn't reallocated on every render. Not a big deal becaues this is a small
  // component, but if you want to, check out the hooks `useMemo` and `useCallback`.
  // `useMemo` is for variables, `useCallback` is for functions, like this. -z
  // [hooks documentation](https://reactjs.org/docs/hooks-reference.html#usecallback)
  const handleToggle = (index) => {
    return clicked === index ? setClicked("0") : setClicked(index);
  };

  return (
    <Table align="center" width="80%">
      <Header />
      {/* You've abstracted the Table and Header into their own components. Why not the body? -z*/}
      <tbody className="questTable">
        {QuestData.Quests.map((quest, index) => (
          <Row
            rowData={quest}
            // Using an index as a key is unreliable because the list might be mutated or changed.
            // This means that React is not able to determine when or when not to re-render because
            // you haven't identified the component uniquely. Again a `questId` here would be super helpful. -z
            key={index}
            onToggle={() => handleToggle(index)}
            expanded={clicked === index}
          />
        ))}
      </tbody>
    </Table>
  );
};

export default QuestTable;
