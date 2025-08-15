'use client'

import { ArrowRight, Play } from 'lucide-react'

export default function HeroSection() {

  return (
    <section className="pt-20 pb-16 gradient-bg relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{animationDelay: '2s'}}></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 floating-animation" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in-up">
          <h1 className="text-4xl md:text-6xl font-outfit font-bold mb-6">
            Streamline Your{' '}
            <span className="gradient-text">Communications</span>
            <br />
            & Events Like Never Before
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            The all-in-one platform for individuals, small to medium businesses, and nonprofits 
            to manage communications, coordinate events, track projects, and organize volunteers 
            with ease.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-12">
            <button className="btn-primary flex items-center space-x-2 text-lg px-8 py-4">
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="btn-secondary flex items-center space-x-2 text-lg px-8 py-4">
              <Play className="w-5 h-5" />
              <span>Watch Demo</span>
            </button>
          </div>

          {/* Key Benefits */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">All-in-One</div>
              <div className="text-slate-600">Integrated Platform</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">Save Hours</div>
              <div className="text-slate-600">Weekly Time Savings</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold gradient-text">Zero Setup</div>
              <div className="text-slate-600">Ready to Use</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}