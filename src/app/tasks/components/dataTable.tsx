'use client'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { taskData } from '../data/tasks'
import { priorities, statusList } from '../data/tasksFilters'
import { Badge } from '@/components/ui/badge'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsHorizontalIcon,
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

export type Task = {
  id: string
  title: string
  status: 'in progress' | 'backlog' | 'todo' | 'canceled' | 'done'
  label: string
  priority: 'low' | 'high' | 'medium'
}

const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomeRowsSelected() && 'indeterminate')
        }
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'id',
    header: 'Task',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
    enableSorting: false,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => (
      <div className="font-medium flex gap-3">
        <Badge variant={'outline'}>{row.getValue('label')}</Badge>
        <span>{row.getValue('title')}</span>
      </div>
    ),
  },
  {
    accessorKey: 'label',
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => {
      const status = statusList.find((item) => item.value === row.getValue('status'))
      return (
        <div className="flex gap-2 items-center">
          <span className="opacity-60">{status?.icon}</span>
          <span>{status?.title}</span>
        </div>
      )
    },
  },
  {
    accessorKey: 'priority',
    header: 'Priority',
    cell: ({ row }) => {
      const priority = priorities.find((item) => item.value === row.getValue('priority'))
      return (
        <div className="flex gap-2 items-center">
          <span className="opacity-60">{priority?.icon}</span>
          <span>{priority?.title}</span>
        </div>
      )
    },
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

function DataTable() {
  const table = useReactTable({
    data: taskData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    initialState: {
      columnVisibility: {
        ['label']: false,
      },
      pagination: {
        pageSize: 10,
      },
    },
  })

  return (
    <>
      <div className="mt-4 border rounded-lg">
        <Table className="">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(header.column.columnDef.header, header.getContext())}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows.length &&
              table.getRowModel().rows.map((row) => (
                <TableRow key={row.id} className="text-sm">
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="py-2">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
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
    </>
  )
}

export default DataTable
