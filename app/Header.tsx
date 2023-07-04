import React from 'react'
import {Bars3Icon} from"@heroicons/react/24/solid";
import Link from 'next/link';
import NavLinks from './NavLinks';
import SearchBox from './SearchBox';

function Header() {
  return (
 <header>
    <div className='grid grid-cols-3 p-10 items-center'>
        <Bars3Icon className='h-8 w-8 cursor-pointer'/>
        <Link href="/" prefetch={false}>
    <h1 className='font-serif text-4xl text-center'> <span className='underline decoration-6 decoration-orange-400'>GreenCoders {" "}News</span></h1>
    </Link>

    <div className='flex items-center justify-end space-x-2'>
        <button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-B lg:py-4 rounded-full dark:bg-slate-800'>
            Subscribe now
        </button>
    </div>
    </div>

    <NavLinks/>
    <div>
        <SearchBox/>
    </div>
   
 </header>
  )
}

export default Header