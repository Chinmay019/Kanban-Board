import React, { useEffect, useMemo, useState } from 'react'
// import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'
import type { Task } from '../types/types'
import { Status } from '../types/types'
import { initialData } from '../store/initialState';
import Item from './Item';

interface taskData {
  todo: Task[] | null,
  inProgress: Task[] | null,
  done: Task[] | null
}

interface DataGridProps {
  setShowInProgress: any,
  showInProgress: any
}

interface columnData {
    header: string,
    id: string,
    className : string,
    attribute: string
}

function DataGrid(props : DataGridProps) {
  const [data, setData] = useState<taskData>({
    todo: initialData.filter((task) => task.status == Status.todo),
    inProgress: initialData.filter((task) => task.status == Status.inProgress),
    done: initialData.filter((task) => task.status == Status.done)
  });
  const initialColumns = [{
    header: "TO DO",
    id: "todoContainer",
    className : "container flex-well",
    attribute: "todo"
  },
  {
    header: "DONE",
    id: "doneContainer",
    className : "container flex-well",
    attribute : "done"
  }];
  const allColumns = [{
    header: "TO DO",
    id: "todoContainer",
    className : "container flex-well",
    attribute: "todo"
  },
  {
    header: "IN PROGRESS",
    id: "inProgressContainer",
    className : "container flex-well",
    attribute : "inProgress"
  },
  {
    header: "DONE",
    id: "doneContainer",
    className : "container flex-well",
    attribute: "done"
  }];
  const [columns, setColumns] = useState(initialColumns);

  const calculateColumns = useEffect(() => {
    if (props.showInProgress) {
      setColumns(allColumns);
    } else {
      setColumns(initialColumns);
    }
  }, [props.showInProgress]);

  return (
    <div id='dataGrid' className='flex'>
      <div className='main-grid'>
        {columns.map((col) => {
          return (
            <div id={`${col.id}`} className={`${col.className}`}>
              <h2 className='text-lg font-bold'>{col.header}</h2>
              {data[col.attribute as keyof taskData]?.map((item : Task) => (
                <Item task={item} />
              ))}
            </div>
          )
        })}
        {/* <div id='todoContainer' className='container flex-well'>
          {data.todo?.map((task) => (
            <Item task={task} />
          ))}
        </div>
        <div id='inProgressContainer' className='container flex-well'>
          {data.inProgress?.map((task) => (
            <Item task={task} />
          ))}
        </div>
        <div id='doneContainer' className='container flex-well'>
          {data.done?.map((task) => (
            <Item task={task} />
          ))}
        </div> */}
      </div>
    </div>
  )
}

export default DataGrid
