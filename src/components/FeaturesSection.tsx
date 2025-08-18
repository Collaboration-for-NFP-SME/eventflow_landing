//src/components/FeaturesSection.tsx
import { Users, Heart, Settings, Calendar } from 'lucide-react'

const features = [
  {
    icon: <Users className="w-8 h-8" />,
    title: "Volunteer Management",
    description: "Make volunteer coordination simple and efficient. Enable volunteer sign-ups, onboarding, document uploads, track hours and availability, and recognise contributions with reporting and certificates.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Basic CRM",
    description: "A lightweight CRM built for small teams. Store and manage contact records (clients, donors, volunteers), add notes, track follow-ups, and organise data with tags. Perfect for organisations without a formal CRM system.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Board Management",
    description: "Support good governance with digital tools for boards and committees. Schedule meetings, upload board packs and minutes, track decisions, compliance tasks, and key documents with centralised board operations.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Collaborative Event Planning",
    description: "Streamline planning across teams and external stakeholders. Share timelines and calendars, assign and track tasks for event logistics, upload run sheets, documents, and venue details in one place.",
    color: "from-blue-500 to-indigo-500"
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
            <span className="gradient-text">Core Features</span> Built for Your Success
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            EventFlow supports not-for-profits, small businesses, and community groups across four core areas to help you streamline operations and stay organised.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-white rounded-2xl p-8 border border-slate-200 card-hover"
              style={{animationDelay: `${index * 0.1}s`}}
            >
              <div className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <div className="text-white">{feature.icon}</div>
              </div>
              <h3 className="text-xl font-outfit font-semibold mb-3 text-slate-900">{feature.title}</h3>
              <p className="text-slate-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}