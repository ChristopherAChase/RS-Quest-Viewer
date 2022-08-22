import React from "react";

const Row = (quest) => {
    const {
        Name: questName,
        URL: questURL,
        Members: isMembers,
        Difficulty: difficulty,
        Length: length,
        Quest_Points: questPoints
    } = quest.quest;

    return (
        <tr>
            <td><a href={questURL} target="None">{questName}</a></td>
            <td>{difficulty}</td>
            <td>{length}</td>
            <td>{questPoints}</td>
            <td>{isMembers}</td>
        </tr>
    );
};

export default Row;