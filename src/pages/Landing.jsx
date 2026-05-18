import { useNavigate } from 'react-router-dom'
import { Users, LayoutDashboard, Monitor, FileText } from 'lucide-react'
import Scout from '../components/Scout'

const views = [
  {
    to: '/attendee',
    icon: Users,
    title: 'Attendee Companion',
    desc: 'Your step-by-step journey through the workshop — confidence check, scenario challenge and practical next steps.',
    colour: 'from-teal-400 to-teal-DEFAULT',
    bg: 'hover:bg-teal-50',
  },
  {
    to: '/tutor',
    icon: LayoutDashboard,
    title: 'Tutor Dashboard',
    desc: 'See how the group is doing — confidence averages, anonymous questions and smart nudges from Scout.',
    colour: 'from-navy-400 to-navy-DEFAULT',
    bg: 'hover:bg-sky-50',
  },
  {
    to: '/projector',
    icon: Monitor,
    title: 'Projector Mode',
    desc: 'A clean full-screen view for sharing with the room — group data only, no individual details.',
    colour: 'from-slate-500 to-slate-700',
    bg: 'hover:bg-slate-50',
  },
  {
    to: '/summary',
    icon: FileText,
    title: 'Consultancy Summary',
    desc: 'A polished report for the tutor or business owner — confidence movement, key questions and follow-up recommendations.',
    colour: 'from-sage-DEFAULT to-sage-600',
    bg: 'hover:bg-emerald-50',
  },
]

export default function Landing() {
  const navigate = useNavigate()

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-100 via-white to-white">
      {/* Hero */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-12 text-center">
        <div className="flex justify-center mb-6">
          <Scout size="lg" />
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-DEFAULT mb-4 leading-tight">
          WorkFluency<br />
          <span className="text-teal-DEFAULT">AI Companion</span>
        </h1>
        <p className="text-lg text-slate-600 mb-2 max-w-xl mx-auto">
          Your friendly guide to AI confidence at work
        </p>
        <p className="text-sm text-slate-500 max-w-lg mx-auto">
          A tutor-led workshop companion for <strong className="text-navy-DEFAULT">AI Readiness for SMEs</strong>.
          Pick a view below to get started.
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pb-20">
        <div className="grid sm:grid-cols-2 gap-5">
          {views.map(({ to, icon: Icon, title, desc, colour, bg }) => (
            <button
              key={to}
              onClick={() => navigate(to)}
              className={`group text-left bg-white rounded-2xl shadow-card border border-slate-100 p-6 transition-all duration-200 hover:shadow-card-hover ${bg}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${colour} shrink-0`}>
                  <Icon size={22} className="text-white" />
                </div>
                <div>
                  <h2 className="font-semibold text-navy-DEFAULT text-base mb-1 group-hover:text-teal-DEFAULT transition-colors">
                    {title}
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed">{desc}</p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Footer note */}
        <p className="text-center text-xs text-slate-400 mt-10">
          No sign-in required · No data stored · Fully private
        </p>
      </div>
    </div>
  )
}
