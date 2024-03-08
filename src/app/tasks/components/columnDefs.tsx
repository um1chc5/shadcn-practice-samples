import { ColumnDef } from '@tanstack/react-table'
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
import { Checkbox } from '@/components/ui/checkbox'
import { Button } from '@/components/ui/button'
import { DotsHorizontalIcon } from '@radix-ui/react-icons'
import { Task } from '../types/task.type'
import { uppercaseFirstLetter } from '@/lib/utils'

export const columns: ColumnDef<Task>[] = [
  {
    id: 'select',
    enableHiding: false,
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
  },
  {
    accessorKey: 'id',
    header: 'Task',
    cell: ({ row }) => <div>{row.getValue('id')}</div>,
    enableHiding: false,
    enableSorting: false,
  },
  {
    accessorKey: 'title',
    header: 'Title',
    cell: ({ row }) => (
      <div className="font-medium flex gap-3">
        <Badge variant={'outline'}>{uppercaseFirstLetter(row.original.label)}</Badge>
        <span>{row.getValue('title')}</span>
      </div>
    ),
  },
  {
    accessorKey: 'label',
    enableHiding: false,
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
