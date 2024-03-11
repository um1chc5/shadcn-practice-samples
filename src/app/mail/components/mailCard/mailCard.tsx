import { Badge } from 'src/components/ui/badge'
import { Card } from 'src/components/ui/card'
import { Mail } from 'src/data/mockData'
import { monthsFromNow } from 'src/lib/utils'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface MailCardProps {
  /**
   * Data of a specific inbox.
   */
  mail: Mail
}

function MailCard({ mail }: MailCardProps) {
  const pathname = usePathname()

  return (
    <Link key={mail.id} href={`/mail/${mail.id}`}>
      <Card
        className={classNames('gap-2 p-3 hover:bg-accent cursor-pointer max-w-[650px]', {
          'bg-accent': pathname === `/mail/${mail.id}`,
        })}
      >
        <div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2">
              <h3 className="font-semibold">{mail.from.name}</h3>
              {!mail.read && <span className="h-2 w-2 rounded-full bg-blue-600"></span>}
            </div>
            <p className="text-xs text-muted-foreground">{monthsFromNow(mail.time)} months ago</p>
          </div>
          <h4 className="text-xs font-medium">{mail.title}</h4>
        </div>
        <p className="line-clamp-2 my-2 text-xs text-muted-foreground">{mail.content}</p>
        <div>
          {mail.tag.map((tag) => (
            <Badge className="mr-2" key={tag} variant={tag === 'work' ? 'default' : 'secondary'}>
              {tag}
            </Badge>
          ))}
        </div>
      </Card>
    </Link>
  )
}

export default MailCard
