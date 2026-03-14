import React from 'react'
import type { Task } from '../types/types'

interface InputProps {
  task: Task
}

function Item({ task }: InputProps) {
  return (
    <div className='item-card'>
      <div className="status-info">
        <span className={`text-xl font-semibold ${task.status}`}>{task.title}</span>
        <p>{task.description}</p>
      </div>
    </div>
  )
}

export default Item
