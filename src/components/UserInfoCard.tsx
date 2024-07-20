import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function UserInfoCard({ userId }: { userId: string }) {
    return (

        <div className='bg-white mb-4 rounded p-3 flex flex-col gap-6'>
            {/* TOP */}
            <div className='flex justify-between items-center text-xs'>
                <p>اطلاعات کاربر</p>
                <Link href={'/'} className='text-blue-400 hover:text-blue-700'>دیدن همه</Link>
            </div>
            {/* BOTTOM */}
            <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                    <p className='text-md text-black font-bold'>احمد بختیاری </p>
                    <span className='text-xs font-normal text-slate-400'>@ahmd_bakhtiyari</span>
                </div>
                <p className='text-xs text-slate-400'>لورم ایپسوم متن ساختگی با تولید شرایط فرایط فعلی تکنولوژی موررایط فعلی تکنولوژی مورعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با ه</p>
                <div className='flex items-center gap-1'>
                    <Image src={'/map.png'} width={14} height={14} alt='map' />
                    <p className='text-xs text-slate-500'>محل سکونت : <span>کرج</span></p>
                </div>
                <div className='flex items-center gap-1'>
                    <Image src={'/school.png'} width={14} height={14} alt='map' />
                    <p className='text-xs text-slate-500'>محل تحصیل :  <span>آزاد کرج</span></p>
                </div>
                <div className='flex items-center gap-1'>
                    <Image src={'/work.png'} width={14} height={14} alt='map' />
                    <p className='text-xs text-slate-500'>محل شغل :  <span>تهران - آزادی</span></p>
                </div>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-1'>
                        <p className='text-xs text-slate-500 -mb-1'>01/04/1403</p>
                        <Image src={'/date.png'} width={14} height={14} alt='date' />
                    </div>


                    <div className='flex items-center gap-1'>
                        <Link href={'/'} className='text-xs text-blue-500 -mb-1'>www.yoursite.com</Link>
                        <Image src={'/link.png'} width={14} height={14} alt='date' />
                    </div>

                </div>
                <button className='bg-blue-500 border-[1px] text-white text-sm py-2 mt-4 rounded-md  hover:bg-white hover:text-black hover:border-black hover:border-[1px] transition-all'>دنبال کردن</button>
                <p className='text-red-600 text-xs cursor-pointer mt-2 text-left'>بلاک کردن کاربر</p>
            </div>
        </div>
    )
}
