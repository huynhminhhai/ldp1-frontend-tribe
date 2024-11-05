import Image from 'next/image'
import React from 'react'

const LogoTikcer = () => {
  return (
    <div className='py-8 md:py-12 bg-white'>
      <div className='container'>
        <div className='flex overflow-hidden mask-gradient relative'>
          <div className='flex gap-14 flex-none animate-marquee whitespace-nowrap'>
            <Image className='logo-ticker-img' src='/logo-acme.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-quantum.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-echo.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-celestial.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-pulse.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-apex.png' alt='logo' width={250} height={250} />
          </div>
          <div className='flex gap-14 flex-none animate-marquee2 whitespace-nowrap absolute top-0 left-14'>
            <Image className='logo-ticker-img' src='/logo-acme.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-quantum.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-echo.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-celestial.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-pulse.png' alt='logo' width={250} height={250} />
            <Image className='logo-ticker-img' src='/logo-apex.png' alt='logo' width={250} height={250} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LogoTikcer