import React, { useState } from 'react'
import Sidebar from './Sidebar';
import DataGrid from './DataGrid';
import Detail from './Detail';
import "./../styles/style.css"

interface KanbanBoardProps {
    setShowInProgress: any,
    showInProgress: any
}
function KanbanBoard(props : KanbanBoardProps) {
    const showInProgress = props.showInProgress;
    const setShowInProgress = props.setShowInProgress;
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [projectsList, setProjectsList] = useState([]);
    const toggleSidebarView = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div id='wrapper' className='flex flex-col w-full h-screen'>
            <div id="mainBoard" className="main-container flex w-full">
                <Sidebar projectsList={projectsList} setProjectsList={setProjectsList}/>
                <DataGrid
                    showInProgress={showInProgress}
                    setShowInProgress={setShowInProgress}
                />
                <Detail />
            </div>
        </div>
    )
}

export default KanbanBoard
