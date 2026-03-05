import type { Metadata } from 'next'
import Header from '@/components/Header'
import './globals.css'

export const metadata: Metadata = {
  title: 'Become a Partner | Meet Trip',
  description: 'Partner with Meet Trip to get your restaurant in front of 1500+ active group diners in New Zealand. Free listing, simple onboarding.',
  keywords: ['restaurant partnership', 'New Zealand restaurants', 'group dining', 'Meet Trip', 'partner program'],
  openGraph: {
    title: 'Become a Partner | Meet Trip',
    description: 'Partner with Meet Trip to get your restaurant in front of 1500+ active group diners in New Zealand.',
    type: 'website',
    locale: 'en_NZ',
    siteName: 'Meet Trip',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Become a Partner | Meet Trip',
    description: 'Partner with Meet Trip to get your restaurant in front of 1500+ active group diners in New Zealand.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/logo.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-brand-background text-brand-dark antialiased">
        <Header />
        {children}
      </body>
    </html>
  )
}
