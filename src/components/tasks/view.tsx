'use client'

import React, { useState } from 'react'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Button } from '../ui/button'
import { CheckIcon, MixerHorizontalIcon } from '@radix-ui/react-icons'
import classNames from 'classnames'
import { Separator } from '../ui/separator'

function ViewFilter() {
  const [open, setOpen] = useState(false)
  const views = [
    {
      title: 'Title',
      checked: true,
    },
    {
      title: 'Status',
      checked: true,
    },
    {
      title: 'Priority',
      checked: true,
    },
  ]
  const [checkedViews, setCheckedViews] = useState(views)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="ml-2" asChild>
        <Button
          role="combobox"
          aria-expanded={open}
          variant="outline"
          className="py-0 h-[32px] space-x-1 px-3"
        >
          <MixerHorizontalIcon />
          <p className="text-xs">View</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="p-0 w-[150px]" align="end">
        <div className="p-3">
          <h4 className="font-bold text-sm">Toggle columns</h4>
        </div>
        <Separator />
        <div className="p-1">
          {views.map((view, index) => (
            <button
              key={view.title}
              className="w-full flex text-sm gap-1 items-center px-1 py-1.5 hover:bg-accent rounded-lg"
            >
              <div className="w-6 flex justify-center">
                <CheckIcon className={classNames({ 'opacity-0': !view.checked })} />
              </div>
              <p>{view.title}</p>
            </button>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export default ViewFilter
