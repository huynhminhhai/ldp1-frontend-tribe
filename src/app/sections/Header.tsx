import Image from 'next/image'
import React from 'react'
import ArrowRightLineIcon from 'remixicon-react/ArrowRightLineIcon'

const Header = () => {
  return (
    <header className='sticky top-0'>
      <div className='flex justify-center items-center bg-black text-white text-sm gap-3 py-3'>
        <p className='text/60 hidden md:block'>StreamLine your workflow and boots your productivity</p>
        <div className='inline-flex items-center justify-center gap-1'>
          <p>Get started for free</p>
          <ArrowRightLineIcon className='w-4 h-4 inline-flex justify-center items-center ' />
        </div>
      </div>
      <div className='py-5 mx-4 md:mx-0'>
        <div className='container mx-auto'>
          <div className='flex justify-between items-center'>
            <Image src='/logosaas.png' alt='logo' height={40} width={40} />
            <Image className='h-5 w-5 md:hidden' src='/menu.svg' alt='menu' height={20} width={20} />
            <nav className='hidden md:flex items-center gap-6 text-black/60'>
              <a href="#">About</a>
              <a href="#">Features</a>
              <a href="#">Customers</a>
              <a href="#">Updates</a>
              <a href="#">Help</a>
              <button className='bg-black text-white px-4 py-2 rounded-lg font-medium inline-flex items-center justify-center tracking-tight'>Get for free</button>
            </nav>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header