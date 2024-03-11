'use client'

import TaskCombobox from 'src/components/custom/taskCombobox'
import { priorities, statusList } from '../data/tasksFilters'
import ViewFilter from './viewFilter'
import {
  ColumnFiltersState,
  VisibilityState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { taskData } from '../data/tasks'
import { columns } from './columnDefs'
import { useState } from 'react'
import TableFooter from './tableFooter'
import TableMain from './tableMain'
import TaskSearchFilter from './taskSearchFilter'

function TableContainer() {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState('')

  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({
    ['label']: false,
  })

  const table = useReactTable({
    data: taskData,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onColumnFiltersChange: setColumnFilters,
    onGlobalFilterChange: setGlobalFilter,
    state: {
      columnVisibility,
      columnFilters: columnFilters,
      globalFilter,
    },
  })

  return (
    <>
      <section about="Table toolbar" className="flex">
        <TaskSearchFilter table={table} />
        <TaskCombobox title="status" filterList={statusList} table={table} />
        <TaskCombobox title="priority" filterList={priorities} table={table} />
        <div className="ml-auto">
          <ViewFilter table={table} />
        </div>
      </section>
      <TableMain table={table} />
      <TableFooter table={table} />
    </>
  )
}

export default TableContainer
