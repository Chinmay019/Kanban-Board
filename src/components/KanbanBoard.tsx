import React, { useState } from 'react'
import Sidebar from './Sidebar';
import DataGrid from './DataGrid';
import Detail from './Detail';
import "./../styles/style.css"

function KanbanBoard() {
    const [includeInProgress, SetIncludeInProgress] = useState(false);

    return (
        <div id="MainApp">
            <Sidebar />
            <DataGrid />
            <Detail />
        </div>
    )
}

export default KanbanBoard
