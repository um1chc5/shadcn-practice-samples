'use client'

import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'
import { emailsData } from '@/data/mockData'
import { monthsFromNow } from '@/lib/utils'
import { Badge } from '../ui/badge'
import { Card } from '../ui/card'
import { ScrollArea } from '../ui/scroll-area'
import { Input } from '../ui/input'
import { Separator } from '../ui/separator'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import classNames from 'classnames'

function MailList() {
  const [mailView, setMailView] = useState('all')
  const [mails, setMails] = useState(emailsData)
  const pathname = usePathname()

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
              <Link key={mail.id} href={`/mail/${mail.id}`}>
                <Card
                  className={classNames('gap-2 p-3 hover:bg-accent cursor-pointer', {
                    'bg-accent': pathname === `/mail/${mail.id}`,
                  })}
                >
                  <div>
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold">{mail.from.name}</h3>
                        {!mail.read && <span className="h-2 w-2 rounded-full bg-blue-600"></span>}
                      </div>
                      <p className="text-xs text-muted-foreground">
                        {monthsFromNow(mail.time)} months ago
                      </p>
                    </div>
                    <h4 className="text-xs font-medium">{mail.title}</h4>
                  </div>
                  <div>
                    <p className="line-clamp-2 text-xs text-muted-foreground">{mail.content}</p>
                  </div>
                  <div>
                    {mail.tag.map((tag) => (
                      <Badge
                        className="mr-2"
                        key={tag}
                        variant={tag === 'work' ? 'default' : 'secondary'}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </Card>
              </Link>
            ))}
          </TabsContent>
        </ScrollArea>
      </div>
    </Tabs>
  )
}

export default MailList
