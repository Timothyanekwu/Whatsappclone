'use client'

import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { ThemeContext } from '../Contexts/ThemeContext'

const layout = ({children}:{ children: React.ReactNode }) => {

  const {themeMode}: any = useContext(ThemeContext)
  
  return (
    <section style={{ background:themeMode}}  className={`w-full h-screen flex items-center justify-center p-6`}>
    <div className='w-full max-w-4/5 h-full flex gap-0'>

    <header className=' flex flex-col gap-3 bg-gray-200 p-2'>
    <Navbar />
    </header>

    <article className='w-full block md:w-[600px] md:flex'> {children} </article>

    <main className='w-full h-full bg-gray-200 flex items-center justify-center'>

    </main>

    </div>
    </section>
  )
}

export default layout