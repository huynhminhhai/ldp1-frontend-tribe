import Image from 'next/image'
import React from 'react'

const CallToActions = () => {
  return (
    <section className='py-12 md:py-24 bg-gradient-to-b from-white to-[#D2DCFF] overflow-x-clip'>
      <div className="container">
        <div className="section-heading relative">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-desc mt-5">
            Celebrate the joy of accomplishment with an app designed to track your progress and motivate your efforts.
          </p>
          <Image src='/star.png' alt='star' width={360} height={360} className='absolute -left-[350px] -top-[137px] animate-shake'/>
          <Image src='/spring.png' alt='spring' width={360} height={360} className='absolute -right-[331px] -top-[19px] animate-shake2' />
          <div className='flex gap-2 mt-10 justify-center'>
            <button className='btn btn-primary'>Get for free</button>
            <button className='btn btn-text gap-1'>
              <span>Learn more</span>
              <Image src='/arrow-right.svg' alt='arrow' height={5} width={5} className='h-5 w-5 mt-2/3'/>
            </button>
          </div>
        </div>        
      </div>
    </section>
  )
}

export default CallToActions