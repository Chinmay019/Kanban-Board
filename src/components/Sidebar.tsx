import React from 'react'

function Sidebar() {
  return (
    <div className='sidebar-master flex flex-col w-[300px] h-screen'>
      <div id="createProjectSection" className='create-project'>
        <button className='create-hover-ring' id='createNewProject'>
          Create New Project
        </button>
      </div>
      <br></br>
      <div className='sidebar-projects flex flex-col item-center min-h-[200px] max-h-[350px]'>
        no projects yet....
      </div>
    </div>
  )
}

export default Sidebar
