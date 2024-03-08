import React from 'react'
import { Task } from '../types/task.type'
import { Table } from '@tanstack/react-table'
import { Button } from '@/components/ui/button'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from '@radix-ui/react-icons'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function TableFooter({ table }: { table: Table<Task> }) {
  return (
    <div className="px-3 mt-6 flex">
      <p className="text-sm text-muted-foreground">
        {table.getSelectedRowModel().rows.length} of {table.getRowCount()} row(s) selected.
      </p>
      <div className="flex ml-auto items-center">
        <p className="font-medium text-sm mr-3">Rows per page</p>
        <Select onValueChange={(value) => table.setPageSize(Number(value))}>
          <SelectTrigger className="w-20 text-sm">
            <SelectValue asChild placeholder="10">
              <div>{table.getState().pagination.pageSize}</div>
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {[10, 20, 30, 40, 50].map((size) => (
              <SelectItem value={size.toString()} key={size}>
                {size}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
        <p className="text-sm px-10 font-medium">
          Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
        </p>
        <div className="flex gap-2">
          <Button
            variant={'outline'}
            className="px-2 py-1"
            onClick={() => table.firstPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <DoubleArrowLeftIcon />
          </Button>
          <Button
            variant={'outline'}
            className="px-2 py-1"
            disabled={!table.getCanPreviousPage()}
            onClick={() => table.previousPage()}
          >
            <ChevronLeftIcon />
          </Button>
          <Button
            variant={'outline'}
            className="px-2 py-1"
            disabled={!table.getCanNextPage()}
            onClick={() => table.nextPage()}
          >
            <ChevronRightIcon />
          </Button>
          <Button
            variant={'outline'}
            className="px-2 py-1"
            onClick={() => table.lastPage()}
            disabled={!table.getCanNextPage()}
          >
            <DoubleArrowRightIcon />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default TableFooter
