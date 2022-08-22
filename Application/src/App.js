import React from 'react';
import QuestTable from './components/Table/QuestTable';
import { Heading } from 'react-bulma-components';

const App = () => (
    <>
        <Heading>Runescape Quest Viewer</Heading>
        <QuestTable />
    </>
);

export default App;