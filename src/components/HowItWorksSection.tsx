import { 
  UserPlus, 
  Settings, 
  Rocket, 
  ArrowRight, 
  CheckCircle2,
  Smartphone,
  Globe,
  Shield
} from 'lucide-react'

const steps = [
  {
    icon: <UserPlus className="w-8 h-8" />,
    title: "Sign Up & Setup",
    description: "Create your account and tell us about your organization type - individual, business, or nonprofit.",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: <Settings className="w-8 h-8" />,
    title: "Customize Your Workspace",
    description: "Configure your dashboard, add team members, and set up your communication preferences.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Start Managing",
    description: "Begin creating events, managing contacts, coordinating volunteers, and tracking projects.",
    color: "from-cyan-500 to-blue-500"
  }
]

const benefits = [
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    text: "No technical expertise required"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    text: "Works on all devices"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    text: "Secure and reliable"
  },
  {
    icon: <CheckCircle2 className="w-6 h-6 text-emerald-500" />,
    text: "24/7 customer support"
  }
]

const platforms = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: "Web Platform",
    description: "Full-featured desktop experience with advanced analytics and management tools."
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "Digital Business Cards",
    description: "Create and share professional digital contact cards with QR codes and custom branding."
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Document Management",
    description: "Organize and manage volunteer documents, compliance certificates, and meeting minutes securely."
  }
]

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 gradient-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* How It Works */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold mb-4">
            Get Started in <span className="gradient-text">3 Simple Steps</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            EventFlow is designed to be intuitive and easy to use, no matter your technical background.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-white rounded-2xl p-8 text-center border border-slate-200 card-hover h-full">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${step.color} mb-6`}>
                  <div className="text-white">{step.icon}</div>
                </div>
                <h3 className="text-xl font-outfit font-semibold mb-4 text-slate-900">{step.title}</h3>
                <p className="text-slate-600 leading-relaxed">{step.description}</p>
              </div>
              
              {/* Arrow for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-slate-300" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 mb-16">
          <h3 className="text-2xl md:text-3xl font-outfit font-bold text-center mb-8">
            Why Choose EventFlow?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                {benefit.icon}
                <span className="text-slate-700 font-medium">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Platform Features */}
        <div className="text-center mb-12">
          <h3 className="text-2xl md:text-3xl font-outfit font-bold mb-4">
            <span className="gradient-text">Multi-Platform</span> Experience
          </h3>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Access EventFlow wherever you are, however you work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 text-center border border-slate-200 card-hover">
              <div className="inline-flex p-4 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 mb-6">
                <div className="text-white">{platform.icon}</div>
              </div>
              <h4 className="text-xl font-outfit font-semibold mb-3 text-slate-900">{platform.title}</h4>
              <p className="text-slate-600 leading-relaxed">{platform.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}