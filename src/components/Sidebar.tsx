import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar-master'>
      <div id="createProjectSection">
        <button className='create-project create-hover-ring' id='createNewProject'>
          Create New Project
        </button>
      </div>
      <div className='sidebar-projects'>

      </div>
    </div>
  )
}

export default Sidebar
