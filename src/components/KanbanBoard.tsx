import React, { useState } from 'react'
import Sidebar from './Sidebar';
import DataGrid from './DataGrid';
import Detail from './Detail';
import "./../styles/style.css"

function KanbanBoard() {
    const [includeInProgress, SetIncludeInProgress] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebarView = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

    return (
        <div id="mainBoard" className="main-container">
            <Sidebar />
            <DataGrid />
            <Detail />
        </div>
    )
}

export default KanbanBoard
