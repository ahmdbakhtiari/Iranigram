import Image from 'next/image'
import React from 'react'

export default function Comments() {
    return (
        <div>
            {/* WRITE */}
            <div className='flex items-center gap-2 w-full my-6'>
                <Image src={'/ahmad.png'} width={20} height={20} alt='userImage' className='rounded-full w-[8%]' />
                <div className='bg-slate-200 flex items-center justify-between rounded-lg px-4 py-2  w-[92%]'>
                    <input type='text' placeholder='نوشتن کامنت' className='bg-transparent outline-none w-full text-xs' />
                    <Image src={'/emoji.png'} width={14} height={14} alt='emojiImage' className=' cursor-pointer ' />
                </div>
            </div>
            {/* COMMENTS */}
            <div className='flex gap-4 pt-2 items-start justify-between'>
                <Image src={'/ahmad.png'} width={40} height={40} alt='userImage' className='rounded-full  cursor-pointer' />
                <div>
                    <p className='text-xs font-bold mb-2'>Ahmad Bakhtiyari</p>
                    <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem quisquam voluptate veniam sint amet aliquam id sequi molestiae cumque. Laborum.</p>
                    <div className='flex items-center justify-between'>
                        <span className='text-slate-700 font-bold  text-xs -mb-4 cursor-pointer transition-all hover:text-blue-500 '>پاسخ دادن</span>
                        <div style={{ direction: "rtl" }} className='flex items-center justify-start gap-2 mt-4 px-2 py-1 rounded-lg'>
                            <Image src={'/like.png'} width={12} height={12} alt='likes' className='cursor-pointer' />
                            <span className=' text-slate-500 -mb-1 text-xs'>| 123 <span className='hidden lg:inline'>لایک</span></span>
                        </div>
                    </div>

                </div>
                <Image src={'/more.png'} width={20} height={20} alt='moreImage' className='rounded-full cursor-pointer' />

            </div>
        </div>
    )
}
