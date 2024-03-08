'use client'

import React, { createContext, useContext } from 'react'
import { Task } from './types/task.type'
import { Table, getCoreRowModel, getPaginationRowModel, useReactTable } from '@tanstack/react-table'
import { taskData } from './data/tasks'
import { columns } from './components/columnDefs'

interface TableContextInterface {
  table: Table<Task>
}

export const tableContext = createContext<TableContextInterface>({} as TableContextInterface)

function TableContextProvider({ children }: { children: React.ReactNode }) {
  const table = useReactTable({
    data: taskData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      columnVisibility: {
        ['label']: false,
      },
    },
  })

  return <tableContext.Provider value={{ table }}>{children}</tableContext.Provider>
}

export default TableContextProvider
