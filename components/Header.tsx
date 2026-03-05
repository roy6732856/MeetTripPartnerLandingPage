'use client'

import Image from 'next/image'
import { useState, useEffect } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToForm = () => {
    const formElement = document.getElementById('partner-form')
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-md py-2'
          : 'bg-brand-background py-3'
      }`}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="relative w-20 md:w-24">
            <Image
              src="/logo.png"
              alt="Meet Trip"
              width={96}
              height={30}
              className="w-full h-auto"
              priority
            />
          </div>

          <nav className="hidden md:flex items-center gap-4">
            <a
              href="#about"
              className="text-xs font-medium text-brand-dark hover:text-brand-primary transition-colors"
            >
              About
            </a>
            <a
              href="#benefits"
              className="text-xs font-medium text-brand-dark hover:text-brand-primary transition-colors"
            >
              Benefits
            </a>
            <a
              href="#how-it-works"
              className="text-xs font-medium text-brand-dark hover:text-brand-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-xs font-medium text-brand-dark hover:text-brand-primary transition-colors"
            >
              FAQ
            </a>
            <a
              href="#benefits"
              className="text-xs font-medium text-brand-dark hover:text-brand-primary transition-colors"
            >
              Benefits
            </a>
            <a
              href="#how-it-works"
              className="text-xs font-medium text-brand-dark hover:text-brand-primary transition-colors"
            >
              How It Works
            </a>
            <a
              href="#faq"
              className="text-xs font-medium text-brand-dark hover:text-brand-primary transition-colors"
            >
              FAQ
            </a>
          </nav>

          <button
            onClick={scrollToForm}
            className="bg-brand-primary text-brand-dark text-xs font-semibold px-3 py-1.5 rounded-lg hover:bg-brand-primary/90 transition-colors"
          >
            Become a Partner
          </button>
        </div>
      </div>
    </header>
  )
}
