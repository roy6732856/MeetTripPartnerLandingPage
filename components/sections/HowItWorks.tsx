export default function HowItWorks() {
  const steps = [
    {
      number: 1,
      title: "Fill Out the Form",
      description: "Provide your restaurant information and the exclusive discount offer you'd like to give Meet Trip users.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: 2,
      title: "We Review & Set Up",
      description: "Our team reviews your application and creates your personalized partner page in the Meet Trip app.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      number: 3,
      title: "Go Live & Get Noticed",
      description: "Your restaurant becomes visible to thousands of Meet Trip users who can start booking and redeeming offers.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
  ]

  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-brand-dark mb-4 text-center">
          How It Works
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Partnering with Meet Trip is simple. Follow these three easy steps to start attracting new customers.
        </p>
        
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4">
          {steps.map((step, index) => (
            <div key={step.number} className="flex-1 flex flex-col items-center text-center relative group">
              <div className="w-16 h-16 rounded-full bg-brand-primary flex items-center justify-center text-white text-2xl font-bold mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                {step.number}
              </div>
              
              <div className="w-16 h-16 rounded-full bg-brand-secondary/10 flex items-center justify-center text-brand-secondary mb-6">
                {step.icon}
              </div>
              
              <h3 className="text-xl font-semibold text-brand-dark mb-3">
                {step.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
              
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-brand-primary to-brand-secondary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
