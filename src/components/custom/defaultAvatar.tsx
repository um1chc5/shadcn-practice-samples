import React from 'react'

function DefaultAvatar({ name }: { name: string }) {
  const acronymName = name.split(' ').reduce((acc, curr) => acc + curr[0], '')

  return (
    <div className="rounded-full size-[40px] bg-accent flex justify-center items-center">
      <p className="text-sm font-semibold">{acronymName}</p>
    </div>
  )
}

export default DefaultAvatar
