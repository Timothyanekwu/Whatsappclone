import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex flex-col gap-2'>
      <Link href="/dashboard/chats">Chats</Link>
        <Link href="/dashboard/status">Status</Link>
        <Link href="/dashboard/channels">channels</Link>
        <Link href="/dashboard/communities">communities</Link>
        <Link href="/dashboard/tools">tools</Link>
        <Link href="/dashboard/settings">settings</Link>
    </div>
  )
}

export default Navbar