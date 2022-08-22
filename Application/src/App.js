import React from 'react';
import Table from './components/Table/Table';
import QuestData from '../../Data/quest_list.json';



const App = () => (
    <div>
        <h1>Runescape Quest Viewer</h1>
        <Table tableData={QuestData}/>
    </div>
);

export default App;