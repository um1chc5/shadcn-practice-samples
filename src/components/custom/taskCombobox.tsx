'use client'

import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../ui/command'
import { useMemo, useState } from 'react'
import React from 'react'
import { Checkbox } from '../ui/checkbox'
import { Badge } from '../ui/badge'
import { Separator } from '../ui/separator'
import classNames from 'classnames'
import { Table } from '@tanstack/react-table'
import { uppercaseFirstLetter } from 'src/lib/utils'
import { Task } from 'src/app/tasks/types/task.type'

interface Props {
  /**
   * title: t itle of specific filter, this title is same as the coresponding id in tanstack table column defs
   */
  title: string
  /**
   * table: table instance created with useReactTable, providing table data and related methods
   */
  table: Table<Task>

  /**
   * filterList: a list of filtering options that are related to the table
   */
  filterList: ReadonlyArray<{
    id: number
    title: string
    icon: React.ReactElement
    value: string
  }>
}

function FilterBadge({ children }: { children: React.ReactNode }) {
  return (
    <Badge className="font-medium" variant={'secondary'}>
      {children}
    </Badge>
  )
}

function TaskCombobox({ title, filterList, table }: Props) {
  const [open, setOpen] = useState(false)
  const [checkedList, setCheckedList] = useState(
    filterList.map((filter) => ({ value: filter.value, checked: false })),
  )

  const handleChecked = (status_value: string) => {
    setCheckedList((prev) =>
      prev.map((filter) =>
        filter.value === status_value ? { ...filter, checked: !filter.checked } : filter,
      ),
    )
    table.setColumnFilters(
      checkedFilters
        .filter((filter) => filter.value)
        .map((filter) => ({
          id: title,
          value: filter.value,
        })),
    )
  }

  const checkedFilters = useMemo(() => checkedList.filter((item) => item.checked), [checkedList])

  const clearAllFilters = () =>
    setCheckedList((prev) => prev.map((filter) => ({ ...filter, checked: false })))

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="ml-2" asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="outline"
          className="border-dashed duration-200 flex items-center gap-2"
        >
          <PlusCircledIcon />
          <p className="text-xs">{uppercaseFirstLetter(title)}</p>
          {checkedFilters.length > 0 && <Separator orientation="vertical" />}
          {checkedFilters.length ? (
            checkedFilters.length > 2 ? (
              <FilterBadge>{checkedFilters.length} selected</FilterBadge>
            ) : (
              checkedFilters.map((filter) => (
                <FilterBadge key={filter.value}>{uppercaseFirstLetter(filter.value)}</FilterBadge>
              ))
            )
          ) : null}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[200px]" align="start">
        <Command>
          <CommandInput placeholder={title} className="h-9 text-sm" />
          <CommandEmpty>No {title.toLowerCase()} found.</CommandEmpty>
          <CommandGroup className="p-1">
            {filterList.map((status) => (
              <CommandItem
                key={status.id}
                value={status.value}
                onSelect={handleChecked}
                className="w-full flex gap-2 items-center cursor-pointer text-sm py-1 px-2 rounded-lg hover:bg-accent"
              >
                <Checkbox
                  checked={checkedList.find(({ value }) => value === status.value)?.checked}
                  className="border-muted-foreground/80 shadow-none"
                />
                <div className="text-muted-foreground">{status.icon}</div>
                <p>{status.title}</p>
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
        <div
          className={classNames({
            'hidden ': checkedFilters.length === 0,
          })}
        >
          <Separator />
          <div className="p-1">
            <Button className="w-full font-normal" variant={'ghost'} onClick={clearAllFilters}>
              Clear filters
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default TaskCombobox
