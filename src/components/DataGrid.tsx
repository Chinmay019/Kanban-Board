import React, { useEffect, useMemo, useState } from 'react'
// import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'
import type { Task } from '../types/types'
import { Status } from '../types/types'
import { initialData } from '../store/initialState';
import Item from './Item';

interface taskData {
  todo: Task[] | null,
  inProgress : Task[] | null,
  done: Task[] | null
}

function DataGrid() {
  const [data, setData] = useState<taskData>({
    todo : initialData.filter((task) => task.status == Status.todo),
    inProgress : initialData.filter((task) => task.status == Status.inProgress),
    done : initialData.filter((task) => task.status == Status.done)
  });
  return (
    <div id='dataGrid' className='flex'>
      <div className='main-grid'>
        <div id='todoContainer' className='container flexWell'>
          {data.todo?.map((task) => (
            <Item task={task} />
          ))}
        </div>
        <div id='inProgressContainer' className='container flexWell'>
          in progress container
        </div>
        <div id='doneContainer' className='container flexWell'>
          done container
        </div>
      </div>
    </div>
  )
}

export default DataGrid
