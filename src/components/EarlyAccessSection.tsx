//src/components/EarlyAccessSection.tsx
'use client'

import { useState } from 'react'
import { Heart, CheckCircle } from 'lucide-react'
import DataCollectionModal from './DataCollectionModal'

interface FormData {
  email: string
  name: string
  organizationType: string
  organizationSize: string
  primaryChallenge: string
  currentTools: string[]
  hearAboutUs: string
  priorityFeature: string
}

export default function EarlyAccessSection() {
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [showModal, setShowModal] = useState(false)

  const handleInitialSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setShowModal(true)
    }
  }

  const handleModalSubmit = (data: FormData) => {
    // Here you would typically send the data to your backend
    console.log('Complete form data submitted:', data)
    setIsSubmitted(true)
    setShowModal(false)
    setEmail('')
  }

  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-3xl p-12 border border-slate-200">
            <Heart className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
              Be Among the First to Experience EventFlow
            </h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Join our exclusive early access program and get notified when EventFlow launches. 
              Plus, enjoy special launch pricing and priority support.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleInitialSubmit} className="max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-xl border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none text-lg placeholder:text-slate-500"
                    required
                  />
                  <button
                    type="submit"
                    className="btn-primary text-lg px-8 py-4 whitespace-nowrap"
                  >
                    Join Waitlist
                  </button>
                </div>
                
                <p className="text-xs text-slate-500 mt-4 text-center">
                  We respect your privacy and are committed to protecting your personal information. Your email and any data you provide will only be used to send you updates about EventFlow and improve our services. We will never share your information with third parties without your consent.
                </p>
              </form>
            ) : (
              <div className="max-w-md mx-auto">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <CheckCircle className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                  <p className="text-emerald-800 font-medium">Thank you for joining our waitlist!</p>
                  <p className="text-emerald-600 text-sm mt-1">We&apos;ll be in touch soon with updates.</p>
                </div>
                
                <p className="text-xs text-slate-500 mt-4 text-center">
                  We respect your privacy and are committed to protecting your personal information. Your email and any data you provide will only be used to send you updates about EventFlow and improve our services. We will never share your information with third parties without your consent.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      <DataCollectionModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        prefilledEmail={email}
        onSubmit={handleModalSubmit}
      />
    </>
  )
}