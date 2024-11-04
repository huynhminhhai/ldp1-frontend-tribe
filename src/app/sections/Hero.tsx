import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='pt-8 pb-20 md:pt-5 md:pb-10 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,_#183EC2,_#EAEEFE_66%)] overflow-x-clip'>
      <div className='container'>
        <div className='md:flex items-center md:justify-between'>
          <div className='md:w-[478px]'>
            <div className='text-sm inline-flex border border-[#222]/10 px-3 py-1 rounded-lg tracking-tight'>Version 2.0 is here</div>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-6'>Pathway to productivity</h1>
            <p className='text-xl text-[#010D3E] tracking-tight mt-6'>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took
            </p>
            <div className='flex gap-1 items-center mt-[30px] '>
              <button className='btn btn-primary'>Get for free</button>
              <button className='btn btn-text gap-1'>
                <span>Learn more</span>
                <Image src='/arrow-right.svg' alt='arrow' height={5} width={5} className='h-5 w-5 mt-2/3'/>
              </button>
            </div>
          </div>
          <div className='mt-20 md:mt-0 md:h-[648px] md:flex-1 relative'>
            <Image src='/cog.png' alt='Cover img' height={400} width={400} className='max-w-[100%] h-auto md:absolute md:h-full md:w-auto md:max-w-none md:left-6 lg:left-0'/>
            <Image src='/cylinder.png' alt='Cylinder img' width={220} height={220} className='hidden md:block -top-8 -left-32 md:absolute ' />
            <Image src='/noodle.png' alt='Noodel img' width={220} height={220} className='hiden lg:block absolute top-[524px] left-[548px] rotate-[30deg]' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero