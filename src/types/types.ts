export enum Status {
    todo = "todo",
    inprogress = "inprogress",
    done = "done"
}

type Task = {
    taskId: string,
    title: string,
    status: Status,
    description: string,
    createdOn: Date,
    completedOn?: Date
}

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

interface data {
    todo : Task[] | null,
    inprogress : Task[] | null,
    done : Task[] | null
}

interface TaskListProps {
    data : data,
    column : columnData
}

export { type Task }
export type { columnData, DataGridProps, taskData , TaskListProps, data }
