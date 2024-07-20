'use client'
import Link from 'next/link'
import React, { useState } from 'react'
export default function MobileMenu() {
    const [isOpen , setIsOpen] = useState(false)
  return (
    <div className='md:hidden'>
        <div className='flex flex-col gap-1 cursor-pointer' onClick={() => setIsOpen((prev) => !prev)}>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? 'rotate-45' : "" } origin-left transition-all`}/>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? 'opacity-0' : "" } transition-all`}/>
            <div className={`w-6 h-1 bg-blue-500 rounded-sm ${isOpen ? '-rotate-45' : "" } origin-left transition-all`}/>
        </div>
        {isOpen && (
            <div className='absolute left-0 top-24 h-[calc(100vh-96px)]  w-full bg-white flex flex-col items-center justify-center text-center gap-1 font-medium text-xl '>
                <Link href={'/'}>خانه</Link>
                <Link href={'/'}>دوستان</Link>
                <Link href={'/'}>گروه ها</Link>
                <Link href={'/'}>استوری ها</Link>
                <Link href={'/'}>ورود</Link>
            </div>
        )}
    </div>
  )
}
