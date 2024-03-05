'use client'

import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Command, CommandGroup, CommandInput } from '../ui/command'
import { useState } from 'react'
import React from 'react'
import { Checkbox } from '../ui/checkbox'

interface Props<T extends readonly any[]> {
  title: string
  filterList: T
}

function TaskCombobox<T extends readonly any[]>({ title, filterList }: Props<T>) {
  const [open, setOpen] = useState(false)
  const [checkedList, setCheckedList] = useState<String[]>([])

  const handleChecked = (status_title: string) => () => {
    if (checkedList?.includes(status_title)) {
      setCheckedList((prev) => prev.filter((item) => item !== status_title))
    } else {
      setCheckedList((prev) => [...prev, status_title])
    }
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
          <CommandGroup className="p-1">
            {filterList.map((status) => (
              <button
                key={status.id}
                onClick={handleChecked(status.title)}
                className="w-full flex gap-2 items-center text-sm py-1 px-2 rounded-lg hover:bg-accent"
              >
                <Checkbox
                  checked={checkedList?.includes(status.title)}
                  className="border-muted-foreground/80 shadow-none"
                />
                <div className="text-muted-foreground">{status.icon}</div>
                <p>{status.title}</p>
              </button>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

export default TaskCombobox
