import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LayoutDashboard, Monitor, FileText, ChevronDown } from 'lucide-react'
import Scout from '../components/Scout'

const tutorLinks = [
  { to: '/tutor', icon: LayoutDashboard, label: 'Tutor Dashboard' },
  { to: '/projector', icon: Monitor, label: 'Projector Mode' },
  { to: '/summary', icon: FileText, label: 'Consultancy Summary' },
]

export default function Landing() {
  const navigate = useNavigate()
  const [tutorOpen, setTutorOpen] = useState(false)

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-100 via-white to-white flex flex-col items-center px-4 pt-12 pb-16">

      {/* Scout + Hero */}
      <div className="flex flex-col items-center text-center mb-10">
        <Scout size="lg" />
        <h1 className="text-3xl sm:text-4xl font-bold text-navy-600 mt-5 mb-2 leading-tight">
          WorkFluency<br />
          <span className="text-teal-400">AI Companion</span>
        </h1>
        <p className="text-slate-500 text-base max-w-xs">
          Your guide for today's AI Readiness workshop
        </p>
      </div>

      {/* Primary CTA — Attendee */}
      <button
        onClick={() => navigate('/attendee')}
        className="w-full max-w-sm bg-teal-400 hover:bg-teal-500 active:scale-95 text-white rounded-2xl px-8 py-5 shadow-lg transition-all duration-150 mb-4"
      >
        <p className="text-xl font-bold mb-0.5">I'm an Attendee</p>
        <p className="text-sm text-teal-100">Tap here to begin your session →</p>
      </button>

      {/* Tutor access — secondary, understated */}
      <div className="w-full max-w-sm">
        <button
          onClick={() => setTutorOpen((v) => !v)}
          className="w-full flex items-center justify-between px-5 py-3 rounded-xl border border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300 bg-white transition-colors text-sm"
        >
          <span>Tutor access</span>
          <ChevronDown
            size={16}
            className={`transition-transform duration-200 ${tutorOpen ? 'rotate-180' : ''}`}
          />
        </button>

        {tutorOpen && (
          <div className="mt-2 flex flex-col gap-2">
            {tutorLinks.map(({ to, icon: Icon, label }) => (
              <button
                key={to}
                onClick={() => navigate(to)}
                className="flex items-center gap-3 px-5 py-3 rounded-xl border border-slate-100 bg-white text-slate-500 hover:text-navy-600 hover:border-slate-200 transition-colors text-sm"
              >
                <Icon size={16} className="text-slate-400" />
                {label}
              </button>
            ))}
          </div>
        )}
      </div>

      <p className="text-xs text-slate-300 mt-10">No sign-in · No data stored · Fully private</p>
    </div>
  )
}
