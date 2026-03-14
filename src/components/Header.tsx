import React, { useState } from 'react'
import KanbanBoard from './KanbanBoard';

function Header() {
    const [showInProgress, setShowInProgress] = useState(false);
    const handleCheckboxClick = (event: any) => {
        if (event.target.checked) {
            setShowInProgress(true);
        } else {
            setShowInProgress(false);
        }
    }
    return (
        <div className='flex flex-col w-full h-screen'>
            {/* header */}
            <div className='flex justify-between'>
                <span className='text-3xl m-5'>Kanban Board</span>

                <label htmlFor='inprogress-check' className='flex items-center gap-2 cursor-pointer select-none p-4 m-4'>
                    <span className="text-sm font-medium text-gray-700">
                        Show In-Progress Column
                    </span>
                    <input id='inprogress-check' type='checkbox' className='ml-auto h-5 w-5' checked={showInProgress} onChange={handleCheckboxClick} />
                </label>
            </div>
            <KanbanBoard
                setShowInProgress={setShowInProgress}
                showInProgress={showInProgress}
            />
        </div>
    )
}

export default Header
