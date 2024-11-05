import Image from 'next/image';
import React from 'react'
import {twMerge} from 'tailwind-merge'

const pricingTiers = [
  {
    title: "Free",
    monthlyPrice: 0,
    buttonText: "Get started for free",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "2GB storage",
      "Integrations",
      "Basic support",
    ],
  },
  {
    title: "Pro",
    monthlyPrice: 9,
    buttonText: "Sign up now",
    popular: true,
    inverse: true,
    features: [
      "Up to 50 project members",
      "Unlimited tasks and projects",
      "50GB storage",
      "Integrations",
      "Priority support",
      "Advanced support",
      "Export support",
    ],
  },
  {
    title: "Business",
    monthlyPrice: 19,
    buttonText: "Sign up now",
    popular: false,
    inverse: false,
    features: [
      "Up to 5 project members",
      "Unlimited tasks and projects",
      "200GB storage",
      "Integrations",
      "Dedicated account manager",
      "Custom fields",
      "Advanced analytics",
      "Export capabilities",
      "API access",
      "Advanced security features",
    ],
  },
];

const Pricing = () => {
  return (
    <section className='py-12 md:py-24'>
      <div className="container">
        <div className="section-heading">
          <h2 className='section-title'>Pricing</h2>
          <p className='section-desc mt-5'>
            Free forever. Upgrade for unlimited tasks, better security, and exclusive features.
          </p>
        </div>
        <div className='flex flex-col gap-6 items-center mt-10 lg:flex-row lg:items-end lg:justify-center lg:gap-12'>
          {
            pricingTiers.map((item, i) => (
              <div key={i} className={twMerge('p-10 rounded-3xl shadow-[0_7px_14px_#EAEAEA] max-w-xs w-full border border-[#F1F1F1]', item.inverse && 'border-black  bg-black text-white')}>
                <div className='flex justify-between'>
                  <h3 className={twMerge('text-lg font-bold text-black/50', item.inverse && 'text-white')}>{item.title}</h3>
                  {
                    item.popular && (
                      <div className='inline-flex text-sm px-2 py-1.5 rounded-xl border border-white/20'>
                        <span className='bg-gradient-to-r from-[#DD7DDF] via-[#E1CD86] to-[#71C2EF] text-transparent bg-clip-text font-medium'>
                          Popular
                        </span>
                      </div>
                    )
                  }
                </div>
                <div className='flex items-baseline gap-1 mt-[30px]'>
                  <span className='text-4xl font-bold tracking-tighter leading-none'>${item.monthlyPrice}</span>
                  <span className='tracking-tight font-bold text-black/50'>/month</span>
                </div>
                <button className={twMerge('btn btn-primary w-full mt-[30px]', item.inverse && 'text-black bg-white')}>{item.buttonText}</button>
                <ul className='flex flex-col gap-5 mt-8'>
                  {
                    item.features.map((feature, y) => (
                      <li key={y} className='flex items-center gap-4 text-sm'>
                        <Image src='/check.svg' alt='check' width={24} height={24} className={twMerge('', item.inverse && 'filter-brightness-invert')} />
                        <span>
                          {feature}
                        </span>
                      </li>
                    ))
                  }
                </ul>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Pricing