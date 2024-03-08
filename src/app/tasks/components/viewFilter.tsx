'use client'

import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../../../components/ui/popover'
import { Button } from '../../../components/ui/button'
import { CheckIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import classNames from 'classnames'
import { Separator } from '../../../components/ui/separator'
import { Table } from '@tanstack/react-table'
import { Task } from '../types/task.type'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { uppercaseFirstLetter } from '@/lib/utils'

function ViewFilter({ table }: { table: Table<Task> }) {
  const [open, setOpen] = useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="ml-2" asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="outline"
          className="py-0 h-[32px] space-x-1 px-3 focus-visible:ring-0"
        >
          <MixerHorizontalIcon />
          <p className="text-xs">View</p>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="p-0 w-[150px]" align="end">
        <div className="p-3">
          <h4 className="font-bold text-sm">Toggle columns</h4>
        </div>
        <Separator />
        <div className="p-1">
          {table
            .getAllLeafColumns()
            .filter((col) => col.getCanHide())
            .map((column) => {
              return (
                <DropdownMenuCheckboxItem
                  key={column.id}
                  onCheckedChange={column.toggleVisibility}
                  checked={column.getIsVisible()}
                >
                  <p>{uppercaseFirstLetter(column.id)}</p>
                </DropdownMenuCheckboxItem>
              )
            })}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ViewFilter
