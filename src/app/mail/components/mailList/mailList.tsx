'use client'

import React, { useEffect, useState } from 'react'
import { emailsData } from 'src/data/mockData'
import { Tabs, TabsContent, TabsList, TabsTrigger } from 'src/components/ui/tabs'
import { Separator } from 'src/components/ui/separator'
import { ScrollArea } from 'src/components/ui/scroll-area'
import { Input } from 'src/components/ui/input'
import MailCard from '../mailCard/mailCard'

function MailList() {
  const [mailView, setMailView] = useState('all')
  const [mails, setMails] = useState(emailsData)

  useEffect(() => {
    if (mailView === 'all') {
      setMails(emailsData)
    } else {
      setMails(emailsData.filter((mail) => !mail.read))
    }
  }, [mailView])

  return (
    <Tabs defaultValue="all" onValueChange={(value) => setMailView(value)}>
      <div className="h-[52px] flex justify-between px-4 items-center">
        <h1 className="font-bold text-xl">Inbox</h1>
        <TabsList>
          <TabsTrigger value="all">All mail</TabsTrigger>
          <TabsTrigger value="unread">Unread</TabsTrigger>
        </TabsList>
      </div>
      <Separator />
      <div>
        <div className="relative p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="absolute top-1/2 -translate-y-1/2 left-6 h-4 w-4 text-muted-foreground"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
          <Input className="pl-8" type="text" placeholder="Search" />
        </div>
        <ScrollArea className="h-[650px] px-4">
          <TabsContent value={mailView} className="flex flex-col gap-3 pb-8">
            {mails.map((mail, index) => (
              <MailCard key={index} mail={mail} />
            ))}
          </TabsContent>
        </ScrollArea>
      </div>
    </Tabs>
  )
}

export default MailList
