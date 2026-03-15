import React from 'react'
import type { Task } from '../types/types'
import { useDraggable } from '@dnd-kit/react'

interface InputProps {
  task: Task
}

function Item({ task }: InputProps) {
  return (
    <div className='item-card'>
      <div className="status-info">
        <span className={`text-xl py-5 pl-2 font-semibold ${task.status}`}>{task.title}</span>
        <p className='italic pl-2 pt-2'>{task.description}</p>
      </div>
    </div>
  )
}

export default Item
