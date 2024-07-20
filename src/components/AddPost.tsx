import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function AddPost() {
  return (
    <div className='flex items-start justify-start gap-2 bg-white rounded p-2 shadow-md'>
      <Image className='rounded-full' src={'/ahmad.png'} width={56} height={56} alt='user' />
      <div className='w-[80%]'>
        <textarea className='bg-slate-100 px-2 py-1 outline-0 focus:outline-2 outline-blue-100 transition-all rounded w-full text-sm' placeholder='متن پست' />
        <div className='flex gap-3 mt-2 flex-wrap'>
          <Link className='flex items-center gap-1' href={'/'}>
            <Image src={'/addimage.png'} width={18} height={18} alt='add Image' />
            <span className='text-xs'>عکس</span>
          </Link>
          <Link className='flex items-center gap-1' href={'/'}>
            <Image src={'/addvideo.png'} width={18} height={18} alt='add Image' />
            <span className='text-xs'>ویدئو</span>
          </Link>
          <Link className='flex items-center gap-1' href={'/'}>
            <Image src={'/poll.png'} width={16} height={16} alt='add Image' />
            <span className='text-xs'>نظرسنجی</span>
          </Link>
          <Link className='flex items-center gap-1' href={'/'}>
            <Image src={'/events.png'} width={16} height={16} alt='add Image' />
            <span className='text-xs'>رویدادها</span>
          </Link>
        </div>
      </div>
      <Image className='rounded-full mt-8 cursor-pointer' src={'/emoji.png'} width={16} height={16} alt='user' />

    </div>
  )
}
