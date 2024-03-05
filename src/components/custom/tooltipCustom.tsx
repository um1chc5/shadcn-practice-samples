import React from 'react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip'
import { TooltipContentProps, TooltipProps, TooltipProviderProps } from '@radix-ui/react-tooltip'

interface Props extends TooltipProviderProps, TooltipProps, TooltipContentProps {
  children: React.ReactNode
  tooltip_content: string
}

function SlotTooltip({ children, tooltip_content, className, delayDuration = 0 }: Props) {
  return (
    <TooltipProvider>
      <Tooltip delayDuration={delayDuration}>
        <TooltipTrigger
          className={
            'rounded-lg hover:bg-accent h-9 w-9 flex justify-center items-center ' + className
          }
        >
          {children}
        </TooltipTrigger>
        <TooltipContent>{tooltip_content}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

export default SlotTooltip
