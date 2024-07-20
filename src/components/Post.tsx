import Image from 'next/image'
import React from 'react'
import Comments from './Comments'

export default function Post() {
    return (
        <div className=' w-[90%] mt-4  mx-auto' style={{ direction: 'ltr' }}>
            <div className='flex items-center justify-between px-2 mt-1'>
                <div className='flex items-center gap-2'>
                    <Image src={'/ahmad.png'} width={32} height={32} alt='userImage' className='rounded-full' />
                    <span className='text-sm'>Ahmad</span>
                </div>
                <Image src={'/more.png'} width={24} height={24} alt='more' />
            </div>
            <div className='w-full min-h-96 relative mt-4'>
                <Image src={'/sanjab.webp'} fill alt='postImage' className='object-cover rounded' />
            </div>
            <p className='text-sm mt-2 w-full  mx-auto text-right'>
                لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی            </p>
            <div className='my-4 flex items-center justify-between gap-3'>

                <div className='flex items-center justify-start gap-4'>
                    <div className='flex items-center justify-start gap-2 bg-slate-100 px-2 py-1 rounded-lg'>
                        <Image src={'/like.png'} width={16} height={16} alt='likes' className='cursor-pointer' />
                        <span className='text-slate-500 -mb-1 text-xs'>| 123 <span className='hidden lg:inline'>لایک</span></span>
                    </div>
                    <div className='flex items-center justify-start gap-2 bg-slate-100 px-2 py-1 rounded-lg'>
                        <Image src={'/comment.png'} width={16} height={16} alt='likes' className='cursor-pointer' />
                        <span className='text-slate-500 -mb-1 text-xs'>| 24 <span className='hidden lg:inline'>نظر</span></span>
                    </div>
                </div>

                <div className='flex items-center justify-start gap-2 bg-slate-100 px-2 py-1 rounded-lg'>
                    <Image src={'/share.png'} width={15} height={15} alt='likes' className='cursor-pointer' />
                    <span className='text-slate-500 text-xs'>| 16 <span className='hidden lg:inline'>اشتراک</span></span>
                </div>

            </div>
            <Comments />
            <hr className='mt-8 border-[1px] border-blue-300 rounded-full' />
        </div>
    )
}
