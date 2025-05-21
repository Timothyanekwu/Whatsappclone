import React from 'react'

const page = () => {
  return (
    <div>
      <p className='font-bold text-2xl text-green-500'>Chats</p>
      <li><a href='/chats/:chatId'>Chat1</a></li>
    </div>
  )
}

export default page