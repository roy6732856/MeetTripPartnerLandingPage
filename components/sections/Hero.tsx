'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'

export default function Hero() {
  const scrollToForm = () => {
    const formElement = document.getElementById('partner-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-brand-background pt-28 md:pt-32 pb-12"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="text-center lg:text-left order-2 lg:order-1">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold text-brand-dark leading-tight mb-6">
              Get Your Restaurant in Front of{' '}
              <span className="text-brand-primary">1500+</span> Active Group Diners in New Zealand
            </h1>
            <p className="text-base md:text-lg text-brand-dark/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Meet Trip connects groups of friends looking for their next meal out.
              Partner with us to fill your tables and grow your brand.
            </p>
            <Button
              onClick={scrollToForm}
              className="w-full sm:w-auto"
            >
              Become a Partner
            </Button>
          </div>

          <div className="mt-8 lg:mt-0 order-1 lg:order-2">
            <div className="relative mx-auto w-full max-w-sm lg:max-w-lg -mt-8 lg:mt-0">
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/mockup.jpg"
                  alt="Meet Trip App Mockup"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
