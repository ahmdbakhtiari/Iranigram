'use client'
import Link from 'next/link'
import MobileMenu from './MobileMenu'
import Image from 'next/image'
import './NavBar.css'
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function NavBar() {
    return (
        <div className='flex items-center justify-between h-24 '>

            {/* LeftSide*/}
            <div className='md:hidden lg:block w-[20%]'><Link href={'/'} className='font-bold text-xl text-blue-500 md:hidden lg:block'>IraniGram</Link></div>

            {/* Center*/}
            <div className='hidden md:flex md:gap-4 md:w-[34%] xl:w-[50%]  text-sm items-center justify-between'>
                <Link className='flex gap-2 items-center' href={'/'}>
                    <Image src={'/home.png'} alt='HomePage' width={16} height={16} />
                    <span className='text-sm'>خانه</span>
                </Link>
                <Link className='flex gap-2 items-center' href={'/'}>
                    <Image src={'/friends.png'} alt='HomePage' width={16} height={16} />
                    <span className='text-sm'>دوستان</span>
                </Link>
                <Link className='flex gap-2 items-center' href={'/'}>
                    <Image src={'/stories.png'} alt='HomePage' width={16} height={16} />
                    <span className='text-sm'>استوری ها</span>
                </Link>

                <div id='searchDiv' className='hidden xl:flex p-2  bg-slate-100 items-center rounded-xl'>
                    <input type='text' placeholder='جستجو...' className='bg-transparent outline-none' onFocus={() => {
                        document.getElementById("searchDiv")? document.getElementById("searchDiv")?.setAttribute("style" , "outline : 2px solid rgb(96 165 250 / 25%)") : " "
                    }} onBlur={() => {
                        document.getElementById("searchDiv")? document.getElementById("searchDiv")?.setAttribute("style" , "outline : transparent ") : " "
                    }} />
                    <Image src={'/search.png'} alt='search' width={14} height={14} />
                </div>
            </div>


            {/* RightSide*/}
            <div className='w-[30%] flex items-center gap-4 xl:gap-5 justify-end text-sm'>
                <ClerkLoading>
                    <div
                        className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-e-transparent align-[-0.125em] text-blue-500 motion-reduce:animate-[spin_1.5s_linear_infinite]"
                        role="status">
                        <span
                            className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
                        >Loading...</span>
                    </div>
                </ClerkLoading>
                <ClerkLoaded>
                    <SignedIn>
                        <div className='cursor-pointer'>
                            <Image src={'/people.png'} alt='people' width={19} height={19} />
                        </div>
                        <div className='cursor-pointer'>
                            <Image src={'/messages.png'} alt='messages' width={19} height={19} />
                        </div>
                        <div className='cursor-pointer'>
                            <Image src={'/notifications.png'} alt='notifications' width={19} height={19} />
                        </div>
                        <div className='bg-red' >
                            <UserButton />
                        </div>
                    </SignedIn>
                    <SignedOut>
                        <div className='flex items-center gap-2'>
                            <Image src={'/NoAvatar.png'} alt='login' width={20} height={20} />
                            <Link href={'/sign-in'}>ورود/ثبت نام</Link>
                        </div>
                    </SignedOut>
                </ClerkLoaded>
                <MobileMenu />
            </div>

        </div>
    )
}
