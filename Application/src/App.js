import React from "react";
import QuestTable from "./components/Table/QuestTable";
// Why no you use control-bulma-atoms 😠 -z
import { Heading } from "react-bulma-components";

const App = () => (
  <>
    <Heading>Runescape Quest Viewer</Heading>
    <QuestTable />
  </>
);

export default App;
