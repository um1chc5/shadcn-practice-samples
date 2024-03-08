import { Input } from '@/components/ui/input'
import { Table } from '@tanstack/react-table'
import React from 'react'
import { Task } from '../types/task.type'
import { debounce } from '@/lib/utils'

function TaskSearchFilter({ table }: { table: Table<Task> }) {
  const idCol = table.getColumn('id')

  const handleSearchFilter = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
    idCol?.setFilterValue(event.target.value)
  })

  return (
    <div>
      <Input
        placeholder="Filter tasks..."
        className="w-[250px] py-1"
        onChange={handleSearchFilter}
      />
    </div>
  )
}

export default TaskSearchFilter
