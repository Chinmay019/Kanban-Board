import { useEffect, useState } from 'react'
// import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'
import type { data, DataGridProps, Task } from '../types/types'
import { Status } from '../types/types'
import { initialData } from '../store/initialState';
import { DragDropProvider } from '@dnd-kit/react';
import TaskList from './TaskList';

function DataGrid(props: DataGridProps) {
  const [data, setData] = useState<data>({
    todo: initialData.filter((task) => task.status == Status.todo) || [],
    inprogress: initialData.filter((task) => task.status == Status.inprogress) || [],
    done: initialData.filter((task) => task.status == Status.done) || []
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
    status: "inprogress"
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

  function handleDragEnd(event: any) {
    const { operation, canceled } = event;
    const { source, target } = operation;
    if (!operation) {
      console.log("no operation ");
      return;
    }
    if (canceled) {
      console.log("operation canceled");
      return;
    }

    if (!target) {
      console.log("dropped outside droppable");
      return;
    }

    const taskId = source.id;
    const task :Task = source.data.element;
    const sourceColumn = source.data.column;
    const targetStatus = target.id;

    setData((prev) => {
      // update source Column
      const updatedSource = prev[sourceColumn].filter((t : Task) => t.taskId != taskId)

      //update target column
      const targetColumn : Task[] = [
        ...prev[targetStatus], {
          ...task,
          status : targetStatus
        }
      ]
      return {
        ...prev,
        [sourceColumn] : updatedSource,
        [targetStatus] : targetColumn
      }
    });
  }

  return (
    <div id='dataGrid' className='flex'>
      <DragDropProvider
        onDragStart={(event, manager) => {
          const { operation } = event;
          console.log(`started dragging ${operation?.source.id}`)
        }}
        onDragEnd={handleDragEnd}
      >
        <div className='main-grid'>
          {columns.map((col) => {
            return (
              <TaskList data={data} column={col} key={col.id} />
            )
          })}
        </div>
      </DragDropProvider >
    </div >
  )
}

export default DataGrid
