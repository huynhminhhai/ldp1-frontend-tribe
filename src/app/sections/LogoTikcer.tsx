'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const LogoTikcer = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden mask-gradient relative'>
          <motion.div className='flex gap-14 flex-none whitespace-nowrap'
            animate={{
              translateX: '-50%'
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: 'linear',
              repeatType: 'loop'
            }}
          >
            <Image className='logo-ticker-img' src='/logo-acme.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-quantum.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-echo.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-celestial.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-pulse.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-apex.png' alt='logo' width={250} height={250} />

            <Image className='logo-ticker-img' src='/logo-acme.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-quantum.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-echo.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-celestial.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-pulse.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-apex.png' alt='logo' width={250} height={250} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default LogoTikcer