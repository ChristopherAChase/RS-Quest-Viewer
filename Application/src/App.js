import React from "react";
import QuestTable from "./components/Table/QuestTable";
import { Heading } from "react-bulma-components";

const App = () => (
  <React.StrictMode>
    <Heading>Runescape Quest Viewer</Heading>
    <QuestTable />
  </React.StrictMode>
);

export default App;