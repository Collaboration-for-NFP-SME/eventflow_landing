//src/components/DataCollectionModal.tsx
'use client'

import { useState } from 'react'
import React from 'react'
import { X, Users, Building, Heart, CheckCircle2 } from 'lucide-react'

interface DataCollectionModalProps {
  isOpen: boolean
  onClose: () => void
  prefilledEmail: string
  onSubmit: (data: FormData) => void
}

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

export default function DataCollectionModal({ 
  isOpen, 
  onClose, 
  prefilledEmail, 
  onSubmit 
}: DataCollectionModalProps) {
  const [formData, setFormData] = useState<FormData>({
    email: prefilledEmail,
    name: '',
    organizationType: '',
    organizationSize: '',
    primaryChallenge: '',
    currentTools: [],
    hearAboutUs: '',
    priorityFeature: ''
  })

  // Update email when prefilledEmail changes
  React.useEffect(() => {
    setFormData(prev => ({ ...prev, email: prefilledEmail }))
  }, [prefilledEmail])

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showOptionalFields, setShowOptionalFields] = useState(false)
  const [submitError, setSubmitError] = useState('')

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
          organizationType: formData.organizationType,
          // Only include optional fields if they have values
          ...(formData.primaryChallenge && { primaryChallenge: formData.primaryChallenge }),
          ...(formData.currentTools.length > 0 && { currentTools: formData.currentTools }),
          ...(formData.priorityFeature && { priorityFeature: formData.priorityFeature }),
          ...(formData.hearAboutUs && { hearAboutUs: formData.hearAboutUs }),
        }),
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result.error || 'Failed to join waitlist')
      }

      // Success - call the parent onSubmit function
      onSubmit(formData)
      
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitError(error instanceof Error ? error.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleToolToggle = (tool: string) => {
    setFormData(prev => ({
      ...prev,
      currentTools: prev.currentTools.includes(tool)
        ? prev.currentTools.filter(t => t !== tool)
        : [...prev.currentTools, tool]
    }))
  }

  const organizationTypes = [
    { value: 'individual', label: 'Individual/Freelancer', icon: <Users className="w-4 h-4" /> },
    { value: 'small-business', label: 'Small Business (1-50 employees)', icon: <Building className="w-4 h-4" /> },
    { value: 'medium-business', label: 'Medium Business (51-200 employees)', icon: <Building className="w-4 h-4" /> },
    { value: 'nonprofit', label: 'Non-profit Organization', icon: <Heart className="w-4 h-4" /> }
  ]

  const currentToolsOptions = [
    'Google Workspace',
    'Microsoft 365',
    'Slack',
    'Zoom',
    'WhatsApp',
    'Email only',
    'Spreadsheets',
    'Paper/Manual processes',
    'Other CRM',
    'None - starting fresh'
  ]

  const priorityFeatures = [
    'Volunteer Management',
    'Basic CRM',
    'Board Management',
    'Collaborative Event Planning',
    'Document Management',
    'Analytics & Reporting'
  ]

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-slate-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-outfit font-bold gradient-text">Help Us Build Better</h2>
            <p className="text-slate-600">Share a few details to help us create the perfect solution for you</p>
          </div>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Error Message */}
          {submitError && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <p className="text-red-800 text-sm">{submitError}</p>
            </div>
          )}

          {/* Name and Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Your Name *
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">
                Email Address *
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                required
              />
            </div>
          </div>

          {/* Organization Type */}
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-3">
              What best describes your organization? *
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {organizationTypes.map((type) => (
                <label
                  key={type.value}
                  className={`flex items-center p-4 rounded-lg border cursor-pointer transition-all ${
                    formData.organizationType === type.value
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-slate-200 hover:border-slate-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="organizationType"
                    value={type.value}
                    checked={formData.organizationType === type.value}
                    onChange={(e) => setFormData(prev => ({ ...prev, organizationType: e.target.value }))}
                    className="sr-only"
                    required
                  />
                  <div className="flex items-center space-x-3">
                    {type.icon}
                    <span className="text-sm font-medium">{type.label}</span>
                  </div>
                  {formData.organizationType === type.value && (
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 ml-auto" />
                  )}
                </label>
              ))}
            </div>
          </div>

          {/* Optional Fields */}
          <div className="border-t border-slate-200 pt-6">
            <div className="bg-slate-50 rounded-lg p-4 mb-4">
              <p className="text-xs text-slate-500 text-center mb-3">
                We respect your privacy and are committed to protecting your personal information. Your email and any data you provide will only be used to send you updates about EventFlow and improve our services. We will never share your information with third parties without your consent.
              </p>
              
              <button
                type="button"
                onClick={() => setShowOptionalFields(!showOptionalFields)}
                className="w-full flex items-center justify-center space-x-2 text-emerald-600 hover:text-emerald-700 font-medium transition-colors"
              >
                <span>{showOptionalFields ? 'Hide' : 'Show'} Optional Information</span>
                <span className="text-sm">({showOptionalFields ? '−' : '+'})</span>
              </button>
              
              {!showOptionalFields && (
                <p className="text-xs text-slate-400 text-center mt-2">
                  Help us serve you better by sharing more details (optional)
                </p>
              )}
            </div>

            {showOptionalFields && (
              <div className="space-y-6">
                <h3 className="text-lg font-medium text-slate-900 mb-4">Optional Information (Help us serve you better)</h3>
                
                {/* Primary Challenge */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    What&apos;s your biggest organizational challenge right now?
                  </label>
                  <select
                    value={formData.primaryChallenge}
                    onChange={(e) => setFormData(prev => ({ ...prev, primaryChallenge: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                  >
                    <option value="">Select your main challenge</option>
                    <option value="volunteers">Coordinating volunteers and tracking hours</option>
                    <option value="board-governance">Board meetings and governance</option>
                    <option value="events">Organizing and promoting events</option>
                    <option value="contacts">Managing contacts and relationships</option>
                    <option value="documents">Organizing documents and compliance</option>
                    <option value="time">Too much time on administrative tasks</option>
                    <option value="tools">Too many different tools to manage</option>
                    <option value="communication">Managing communications across team/volunteers</option>
                  </select>
                </div>

                {/* Current Tools */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-3">
                    What tools do you currently use? (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {currentToolsOptions.map((tool) => (
                      <label
                        key={tool}
                        className={`flex items-center p-3 rounded-lg border cursor-pointer transition-all text-sm ${
                          formData.currentTools.includes(tool)
                            ? 'border-emerald-500 bg-emerald-50 text-emerald-700'
                            : 'border-slate-200 hover:border-slate-300'
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={formData.currentTools.includes(tool)}
                          onChange={() => handleToolToggle(tool)}
                          className="sr-only"
                        />
                        <span className="flex-1">{tool}</span>
                        {formData.currentTools.includes(tool) && (
                          <CheckCircle2 className="w-4 h-4 text-emerald-500 ml-2" />
                        )}
                      </label>
                    ))}
                  </div>
                </div>

                {/* Priority Feature */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Which feature would be most valuable to you first?
                  </label>
                  <select
                    value={formData.priorityFeature}
                    onChange={(e) => setFormData(prev => ({ ...prev, priorityFeature: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                  >
                    <option value="">Select most important feature</option>
                    {priorityFeatures.map((feature) => (
                      <option key={feature} value={feature}>{feature}</option>
                    ))}
                  </select>
                </div>

                {/* How did you hear about us */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    How did you hear about EventFlow?
                  </label>
                  <select
                    value={formData.hearAboutUs}
                    onChange={(e) => setFormData(prev => ({ ...prev, hearAboutUs: e.target.value }))}
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200 focus:outline-none"
                  >
                    <option value="">Select an option</option>
                    <option value="social-media">Social Media</option>
                    <option value="search-engine">Search Engine</option>
                    <option value="friend-colleague">Friend/Colleague</option>
                    <option value="event-demo">Event/Demo</option>
                    <option value="newsletter">Newsletter/Blog</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* Submit Button */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 text-slate-600 hover:text-slate-800 transition-colors"
              disabled={isSubmitting}
            >
              Maybe Later
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.email || !formData.name || !formData.organizationType}
              className="flex-1 btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Joining Waitlist...' : 'Join Waitlist & Help Us Build'}
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}