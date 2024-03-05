import { Separator } from '@/components/ui/separator'
import React from 'react'

function Notfound() {
  return (
    <section about="Email content" className="h-full flex flex-col">
      <div className="h-[52px]"></div>
      <Separator />
      <div className="flex grow justify-center items-center">
        <h2 className="text-3xl font-semibold">Inbox is not found</h2>
      </div>
    </section>
  )
}

export default Notfound
