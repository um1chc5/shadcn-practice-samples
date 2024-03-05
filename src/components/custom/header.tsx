'use client'

import { path } from '@/constants/path'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
// import { useEffect } from 'react'

function MainHeader() {
  const pathName = usePathname()
  const router = useRouter()
  // useEffect(() => {
  //   router.push(path.mail)
  // }, [])

  return (
    <div className="flex gap-3 py-2 text-mu">
      {Object.entries(path).map(([key, pathname]) => (
        <Link
          key={key}
          href={pathname}
          className={classNames('rounded-2xl text-sm px-4 py-1', {
            'font-semibold bg-accent': pathName.includes(pathname),
          })}
        >
          Mail
        </Link>
      ))}
    </div>
  )
}

export default MainHeader
