'use client'

import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../ui/command'
import { useState } from 'react'
import React from 'react'
import { Checkbox } from '../ui/checkbox'

interface Props {
  title: string
  filterList: ReadonlyArray<{
    id: number
    title: string
    icon: React.ReactElement
    value: string
  }>
}

function TaskCombobox({ title, filterList }: Props) {
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
  }

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
          <p className="text-xs">{title}</p>
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
      </PopoverContent>
    </Popover>
  )
}

export default TaskCombobox
