'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Textarea } from '@/components/ui/Textarea'
import { Label } from '@/components/ui/Label'

const formSchema = z.object({
  restaurantName: z.string().min(1, 'This field is required'),
  contactPerson: z.string().min(1, 'This field is required'),
  phoneNumber: z.string().min(1, 'This field is required'),
  email: z.string().min(1, 'This field is required').email('Please enter a valid email address'),
  googleMapsLink: z.string().min(1, 'This field is required').url('Please enter a valid URL'),
  discountDetails: z.string().min(1, 'This field is required'),
  notes: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

export default function PartnerForm() {
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState<string>('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormData) => {
    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      reset()
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to submit form. Please try again.')
    }
  }

  if (status === 'success') {
    return (
      <section id="partner-form" className="py-20 bg-brand-background">
        <div className="container mx-auto px-4 max-w-xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 text-center">
            <div className="w-16 h-16 bg-brand-primary/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg
                className="w-8 h-8 text-brand-primary"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Thank You!</h2>
            <p className="text-brand-dark/80 mb-6">
              We&apos;ll review your application and have your partner page live within 48 hours.
            </p>
            <Button onClick={() => setStatus('idle')} variant="secondary">
              Submit Another Application
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="partner-form" className="py-20 bg-brand-background">
      <div className="container mx-auto px-4 max-w-xl">
        <h2 className="text-3xl font-bold text-brand-dark mb-4 text-center">
          Become a Partner
        </h2>
        <p className="text-brand-dark/70 text-center mb-8">
          Join our network of amazing restaurants and cafes in New Zealand
        </p>

        <form onSubmit={handleSubmit(onSubmit)} className="bg-white rounded-2xl shadow-lg p-8 space-y-6">
          <div className="space-y-2">
            <Label htmlFor="restaurantName">Restaurant Name</Label>
            <Input
              id="restaurantName"
              type="text"
              placeholder="Enter your restaurant name"
              error={errors.restaurantName?.message}
              {...register('restaurantName')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="contactPerson">Contact Person</Label>
            <Input
              id="contactPerson"
              type="text"
              placeholder="Enter contact person's name"
              error={errors.contactPerson?.message}
              {...register('contactPerson')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              type="tel"
              placeholder="Enter phone number"
              error={errors.phoneNumber?.message}
              {...register('phoneNumber')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter email address"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="googleMapsLink">Google Maps Link</Label>
            <Input
              id="googleMapsLink"
              type="url"
              placeholder="https://maps.google.com/..."
              error={errors.googleMapsLink?.message}
              {...register('googleMapsLink')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="discountDetails">Discount / Offer Details</Label>
            <Textarea
              id="discountDetails"
              placeholder="e.g., 10% off, free drink, special menu..."
              error={errors.discountDetails?.message}
              {...register('discountDetails')}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Any additional information..."
              error={errors.notes?.message}
              {...register('notes')}
            />
          </div>

          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-50 border border-red-200 text-red-600 text-sm">
              {errorMessage}
            </div>
          )}

          <Button
            type="submit"
            className="w-full"
            disabled={status === 'submitting'}
          >
            {status === 'submitting' ? 'Submitting...' : 'Submit Application'}
          </Button>
        </form>
      </div>
    </section>
  )
}
