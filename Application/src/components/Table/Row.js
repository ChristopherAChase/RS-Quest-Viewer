import React from "react";

const Row = ({ rowData, ...props }) => {
    const {
        Name: questName,
        URL: questURL,
        Members: isMembers,
        Difficulty: difficulty,
        Length: length,
        Quest_Points: questPoints
    } = rowData;

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