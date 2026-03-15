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
  id: number,
  htmlID: string,
  className: string,
  status: string
}

function DataGrid(props: DataGridProps) {
  const [data, setData] = useState<taskData>({
    todo: initialData.filter((task) => task.status == Status.todo),
    inProgress: initialData.filter((task) => task.status == Status.inProgress),
    done: initialData.filter((task) => task.status == Status.done)
  });
  const initialColumns = [{
    header: "TO DO",
    id: 1,
    htmlID: "todoContainer",
    className: "container flex-well",
    status: "todo"
  },
  {
    header: "DONE",
    id: 3,
    htmlID: "doneContainer",
    className: "container flex-well",
    status: "done"
  }];
  const allColumns = [{
    header: "TO DO",
    id: 1,
    htmlID: "todoContainer",
    className: "container flex-well",
    status: "todo"
  },
  {
    header: "IN PROGRESS",
    id: 2,
    htmlID: "inProgressContainer",
    className: "container flex-well",
    status: "inProgress"
  },
  {
    header: "DONE",
    id: 3,
    htmlID: "doneContainer",
    className: "container flex-well",
    status: "done"
  }];
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
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
            <div id={`${col.htmlID}`} className={`${col.className}`}>
              <h2 className='text-lg font-bold'>{col.header}</h2>
              {data[col.status as keyof taskData]?.map((item: Task) => (
                <Item task={item} />
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default DataGrid
