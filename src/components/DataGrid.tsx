import React, { useMemo, useState } from 'react'
// import { useReactTable, getCoreRowModel, flexRender, createColumnHelper } from '@tanstack/react-table'
import type { task } from '../types/types'
import { Status } from '../types/types'
import { initialData } from '../store/initialState';

function DataGrid() {
  return (
    <div id='dataGrid' className='flex'>
      <div id='todoContainer' className='container flexWell'>
        to - do container
      </div>
      <div id='inProgressContainer' className='container flexWell'>
        in progress container
      </div>
      <div id='doneContainer' className='container flexWell'>
        done container
      </div>
    </div>
  )
}

export default DataGrid
