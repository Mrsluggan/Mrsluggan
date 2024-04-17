import React from 'react'
import Navbar from './Navbar'

export default function Header() {
  return (
    <>
      <header className="flex justify-center p-5">
        <img src='https://media.tenor.com/A-xepNszV9YAAAAj/ai-bot.gif' className='w-1/10 hidden md:block'></img>
      </header>
      <Navbar />
    </>
  )
}
