import React, { useState } from 'react'
import Sidebar from './Sidebar';
import DataGrid from './DataGrid';
import Detail from './Detail';
import "./../styles/style.css"

function KanbanBoard() {
    const [showInProgress, setShowInProgress] = useState(false);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleCheckboxClick = (event: any) => {
        if (event.target.checked) {
            setShowInProgress(true);
        } else {
            setShowInProgress(false);
        }
    }
    const toggleSidebarView = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div id='wrapper' className='flex flex-col w-full h-screen'>
            {/* header */}
            <div className='header flex w-full justify-end p-4'>
                <label htmlFor='inprogress-check' className='flex items-center gap-2 cursor-pointer select-none'>
                    <span className="text-sm font-medium text-gray-700">
                        Show In-Progress Column
                    </span>
                    <input id='inprogress-check' type='checkbox' className='ml-auto h-5 w-5' checked={showInProgress} onChange={handleCheckboxClick} />
                </label>
            </div>
            <div id="mainBoard" className="main-container flex w-full">
                <Sidebar />
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
