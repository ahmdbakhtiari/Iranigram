import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FriendRequests() {
    return (
        <div className='bg-white mb-4 rounded p-3 flex flex-col gap-6'>
            {/* TOP */}
            <div className='flex justify-between items-center text-xs'>
                <p>درخواست دوستان</p>
                <Link href={'/'} className='text-blue-400 hover:text-blue-700'>دیدن همه</Link>
            </div>
            {/* BOTTOM */}
            <div className='flex flex-col gap-4'>

                <div className='flex items-center justify-between *:flex *:items-center *:gap-2'>
                    <div>
                        <Link href={'/'}><Image src={'/ahmad.png'} width={32} height={32} alt='userImage' className='rounded-full' /></Link>
                        <span className='text-xs'>AhmadBakhtiyari</span>
                    </div>
                    <div>
                        <Image src={'/accept.png'} width={18} height={18} alt='accept' className='cursor-pointer' />
                        <Image src={'/reject.png'} width={18} height={18} alt='reject' className='cursor-pointer' />
                    </div>
                </div>

                <div className='flex items-center justify-between *:flex *:items-center *:gap-2'>
                    <div>
                        <Link href={'/'}><Image src={'/ahmad.png'} width={32} height={32} alt='userImage' className='rounded-full' /></Link>
                        <span className='text-xs'>AhmadBakhtiyari</span>
                    </div>
                    <div>
                        <Image src={'/accept.png'} width={18} height={18} alt='accept' className='cursor-pointer' />
                        <Image src={'/reject.png'} width={18} height={18} alt='reject' className='cursor-pointer' />
                    </div>
                </div>

                <div className='flex items-center justify-between *:flex *:items-center *:gap-2'>
                    <div>
                        <Link href={'/'}><Image src={'/ahmad.png'} width={32} height={32} alt='userImage' className='rounded-full' /></Link>
                        <span className='text-xs'>AhmadBakhtiyari</span>
                    </div>
                    <div>
                        <Image src={'/accept.png'} width={18} height={18} alt='accept' className='cursor-pointer' />
                        <Image src={'/reject.png'} width={18} height={18} alt='reject' className='cursor-pointer' />
                    </div>
                </div>
                
            </div>
        </div>
    )
}
