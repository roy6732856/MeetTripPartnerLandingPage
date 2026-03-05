export default function About() {
  const metrics = [
    { value: '1500+', label: 'Active Members' },
    { value: '50+', label: 'Partner Restaurants' },
    { value: '200+', label: 'Group Dining Events' },
  ]

  return (
    <section id="about" className="py-16 md:py-20 lg:py-24 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-brand-dark text-center mb-6">
          What is Meet Trip?
        </h2>

        <p className="text-base md:text-lg text-brand-dark/80 text-center max-w-2xl mx-auto mb-8">
          Meet Trip is a community-driven platform that connects groups of friends with the best dining experiences in New Zealand. We help local restaurants fill tables during off-peak hours while giving our members unforgettable group dining experiences.
        </p>

        <div className="flex justify-center mb-12">
          <a
            href="https://apps.apple.com/tw/app/meet-trip/id6757932659"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-dark text-white px-6 py-3 rounded-lg hover:bg-brand-dark/80 transition-colors"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
            </svg>
            <span className="font-semibold">Download on App Store</span>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 max-w-3xl mx-auto">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-6 bg-brand-background rounded-xl"
            >
              <div className="text-3xl md:text-4xl font-bold text-brand-primary mb-2">
                {metric.value}
              </div>
              <div className="text-sm md:text-base text-brand-dark/70">
                {metric.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
