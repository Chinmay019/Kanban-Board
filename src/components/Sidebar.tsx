import React from 'react'

interface SidebarProps {
  projectsList: [],
  setProjectsList: React.SetStateAction<any>,
}

function Sidebar(props : SidebarProps) {

  return (
    <div className='sidebar-master flex flex-col w-[300px] h-screen'>
      <div id="createProjectSection" className='create-project py-4'>
        <button className='create-hover-ring' id='createNewProject'>
          Create New Project
        </button>
      </div>
      <hr />
      <div className='sidebar-projects mt-5 flex flex-col item-center min-h-[200px] max-h-[350px]'>
        no projects yet....
      </div>
    </div>
  )
}

export default Sidebar
