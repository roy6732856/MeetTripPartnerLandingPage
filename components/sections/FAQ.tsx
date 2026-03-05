'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: 'Is there a cost to join?',
    answer:
      'No. Early partners join for free. We only ask that you offer an exclusive discount to Meet Trip users.',
  },
  {
    question: 'What kind of discount should I offer?',
    answer:
      "It's up to you! Common examples: 5% off, 10% off, or a free drink. Whatever works for your business.",
  },
  {
    question: 'How long until my restaurant page is live?',
    answer:
      'Within 48 hours of submitting the form. We\'ll email you a confirmation with a preview.',
  },
  {
    question: 'Can I update my offer later?',
    answer: 'Absolutely. Just email us and we\'ll update your page.',
  },
  {
    question: 'Who are Meet Trip users?',
    answer:
      '18-40 year olds in New Zealand — many are working holiday makers and young professionals who love dining out and various social activities together, from dinner parties to weekend adventures.',
  },
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark mb-12 text-center">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-2 border-brand-dark/10 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between bg-white hover:bg-brand-background/50 transition-colors duration-200"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-semibold text-brand-dark text-lg pr-4">
                  {item.question}
                </span>
                <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-brand-primary text-brand-dark text-xl font-bold transition-transform duration-200">
                  {openIndex === index ? '−' : '+'}
                </span>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="px-6 py-4 text-brand-dark/80 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
