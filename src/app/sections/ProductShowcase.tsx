import Image from 'next/image'
import React from 'react'

const ProductShowcase = () => {
  return (
    <div className='bg-gradient-to-b from-[#fff] to-[#D2DCFF] py-12 md:py-24 overflow-x-clip'>
      <div className='container'>
        <div className='max-w-[560px] mx-auto'>
          <div className='flex justify-center'>
            <div className='tag'>Boots your productivity</div>
          </div>
          <h2 className='text-center text-3xl md:text-[54px] md:leading-[60px] font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text mt-5'>A more effective way to track progress</h2>
          <p className='text-center text-[22px] leading-[30px] tracking-tight text-[#010D3E] mt-5'>
            Effortlessly turn your ideas into a fully functional, responsive, SaaS Website in just minutes with this template.
          </p>
        </div>
        <div className='relative'>
          <Image src='/product-image.png' alt='product image' width={10000} height={10000} className='mt-10 w-[100%] h-auto' />
          <Image src='/pyramid.png' alt='pyramid img' width={262} height={262} className='absolute -top-24 -right-44 md:-right-24 animate-shake' />
          <Image src='/tube.png' alt='tube img' width={248} height={248} className='absolute -bottom-16 -left-48 md:-left-32 animate-shake2' />
        </div>
      </div>
    </div>
  )
}

export default ProductShowcase