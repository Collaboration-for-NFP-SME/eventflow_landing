import { MessageSquare, Calendar, Users, BarChart3 } from 'lucide-react'

const features = [
  {
    icon: <MessageSquare className="w-8 h-8" />,
    title: "Smart Communication Hub",
    description: "Streamline all your communications with templates, scheduling, and analytics.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    title: "Event Management",
    description: "Create, promote, and manage events with built-in RSVP and attendance tracking.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Volunteer Coordination",
    description: "Organize volunteers, track hours, and match skills to opportunities seamlessly.",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: "Project Tracking",
    description: "Keep clients informed with live project updates and milestone tracking.",
    color: "from-blue-500 to-indigo-500"
  }
]

export default function FeaturesSection() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
            Everything You Need in <span className="gradient-text">One Platform</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From communication management to event coordination, we&apos;ve got all your organizational needs covered.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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