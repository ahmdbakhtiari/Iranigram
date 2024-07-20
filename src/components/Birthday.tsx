import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Birthday() {
  return (
    <div className='bg-white mb-4 rounded p-3 flex flex-col gap-6'>
      <p className=' text-xs'>تولدها</p>
      <div className='flex items-center justify-between *:flex *:items-center *:gap-2'>
        <div>
          <Link href={'/'}><Image src={'/ahmad.png'} width={32} height={32} alt='userImage' className='rounded-full' /></Link>
          <span className='text-xs'>AhmadBakhtiyari</span>
        </div>
        <button className='bg-blue-500 text-xs text-white px-2 py-1 rounded border-[1px] hover:bg-white hover:text-black hover:border-black hover:border-[1px] transition-all'>تبریک گفتن</button>
      </div>
      <div className='flex justify-start items-center gap-2 bg-slate-100 p-2 rounded'>
        <Image src={'/gift.png'} width={24} height={24} alt='gift' />
        <div>
          <p className='font-bold text-xs mb-1'>تولد ها آینده</p>
          <p className=' text-xs'>دیدن افرادی که تولد آنها نزدیک است</p>
        </div>
      </div>
    </div>
  )
}
