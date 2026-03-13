import React from 'react'
import type { Task } from '../types/types'

interface InputProps {
  task: Task
}

function Item({ task }: InputProps) {
  return (
    <div className='item-card'>
      <div className="status-info">
        <div className={`${task.status}`}>{task.status}</div>
      </div>
      <span>{task.title}</span>
      <p>{task.description}</p>
    </div>
  )
}

export default Item
