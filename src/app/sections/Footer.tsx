import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-black text-[#BCBCBC] text-sm py-10 text-center'>
      <div className="container">
        <div className='inline-flex relative'>
          <Image src="/logosaas.png" alt='SaaS logo' width={50} height={50} />
        </div>
        <nav className='flex flex-col md:flex-row md:justify-center gap-6 mt-6'>
          <a href="">About</a>
          <a href="">Features</a>
          <a href="">Customers</a>
          <a href="">Pricing</a>
          <a href="">Help</a>
          <a href="">Careers</a>
        </nav>
        <div className='flex justify-center gap-6 mt-6'>
          <Image src='social-x.svg' alt='social' width={40} height={40} className='filter-brightness-invert' />
          <Image src='social-insta.svg' alt='social' width={40} height={40} className='filter-brightness-invert' />
          <Image src='social-linkedin.svg' alt='social' width={40} height={40} className='filter-brightness-invert' />
          <Image src='social-pin.svg' alt='social' width={40} height={40} className='filter-brightness-invert' />
          <Image src='social-youtube.svg' alt='social' width={40} height={40} className='filter-brightness-invert' />
        </div>
        <p className='mt-6'>&copy; 2024 Your Company, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer