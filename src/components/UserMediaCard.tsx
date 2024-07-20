import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UserMediaCard({ userId }: { userId: string }) {
  return (
    <div className='bg-white mb-4 rounded p-3 flex flex-col gap-6'>
      {/* TOP */}
      <div className='flex justify-between items-center text-xs'>
        <p>رسانه های کاربر</p>
        <Link href={'/'} className='text-blue-400 hover:text-blue-700'>دیدن همه</Link>
      </div>
      <div className='flex gap-4 justify-between flex-wrap'>
        <div className='relative w-1/4 h-24'>
          <Image
            src={'https://hashtagyar.com/adminz-conten/uploads/2024/01/5.jpg'}
            alt=''
            fill
            className='object-cover rounded-md'
          />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image
            src={'https://hashtagyar.com/adminz-conten/uploads/2024/04/buy-photo.jpg'}
            alt=''
            fill
            className='object-cover rounded-md'
          />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image
            src={'https://hashtagyar.com/adminz-conten/uploads/2024/01/74-istock.jpg'}
            alt=''
            fill
            className='object-cover rounded-md'
          />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image
            src={'https://hashtagyar.com/adminz-conten/uploads/2024/01/74-adobe.jpg'}
            alt=''
            fill
            className='object-cover rounded-md'
          />
        </div>
        <div className='relative w-1/4 h-24'>
          <Image
            src={'https://hashtagyar.com/adminz-conten/uploads/2024/01/74-adobe.jpg'}
            alt=''
            fill
            className='object-cover rounded-md'
          />
        </div>
      </div>
    </div>
  )
}
