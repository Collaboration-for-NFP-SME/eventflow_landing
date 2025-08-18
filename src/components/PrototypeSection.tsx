//src/components/PrototypeSection.tsx
import { Target } from 'lucide-react'

export default function PrototypeSection() {
  return (
    <section className="py-16 bg-slate-900 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl p-8 border border-emerald-500/30">
          <Target className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
            Experience EventFlow in Action
          </h2>
          <p className="text-slate-300 mb-6 text-lg">
            Try our interactive prototype and see how EventFlow can transform your organization&apos;s 
            volunteer management, board governance, and event planning workflow.
          </p>
          <button className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-lg">
            Try Interactive Prototype
          </button>
        </div>
      </div>
    </section>
  )
}