import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="py-12 bg-brand-dark text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <div className="relative w-32">
              <Image
                src="/logo.png"
                alt="Meet Trip"
                width={128}
                height={40}
                className="w-full h-auto"
              />
            </div>
            <p className="text-sm text-white/60 mt-2">Partner Program</p>
          </div>

          <div className="flex gap-6 mb-6">
            <a
              href="mailto:hidake20@gmail.com"
              className="text-white/60 hover:text-brand-primary transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>

          <p className="text-sm text-white/40">&copy; 2026 Meet Trip. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
