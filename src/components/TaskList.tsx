import Item from './Item'
import type { data, Task, TaskListProps } from '../types/types';
import { useDroppable } from '@dnd-kit/react';

function TaskList(props: TaskListProps) {
    const column = props.column;
    const data : data = props.data;
    const columnsData : Task[] | null = data[column.status];

    const droppable = useDroppable({
        id : column.status
    })

    return (
        <div id={`${column.htmlID}`} className={`${droppable.isDropTarget ? 'active' : ''} ${column.className}`} ref={droppable.ref}>
            <h2 className='text-lg font-bold'>{column.header}</h2>
            {
                columnsData?.map((item: Task) => (
                    <Item task={item} key={item.taskId} />
                ))
            }
        </div>
    )
}

export default TaskList
