import { useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import Scout from './Scout'

const tutorLinks = [
  { to: '/tutor', label: 'Tutor Dashboard' },
  { to: '/group-view', label: 'Group View' },
  { to: '/summary', label: 'Tutor Summary' },
]

export default function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [tutorOpen, setTutorOpen] = useState(false)
  const location = useLocation()

  const isTutorActive = tutorLinks.some((l) => location.pathname === l.to)

  const linkClass = ({ isActive }) =>
    [
      'text-sm font-medium transition-colors px-1 pb-0.5',
      isActive
        ? 'text-teal-400 border-b-2 border-teal-400'
        : 'text-slate-600 hover:text-navy-600',
    ].join(' ')

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2 shrink-0" onClick={() => setMobileOpen(false)}>
            <Scout size="sm" />
            <span className="font-semibold text-navy-600 text-base leading-tight">
              WorkFluency<br />
              <span className="text-teal-400 text-xs font-normal">AI Companion</span>
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" end className={linkClass}>Home</NavLink>
            <NavLink to="/attendee" className={linkClass}>Attendee</NavLink>

            {/* Desktop Tutor dropdown */}
            <div className="relative">
              <button
                onClick={() => setTutorOpen((v) => !v)}
                className={[
                  'flex items-center gap-1 text-sm font-medium transition-colors px-1 pb-0.5',
                  isTutorActive
                    ? 'text-teal-400 border-b-2 border-teal-400'
                    : 'text-slate-600 hover:text-navy-600',
                ].join(' ')}
              >
                Tutor
                <ChevronDown size={14} className={`transition-transform ${tutorOpen ? 'rotate-180' : ''}`} />
              </button>

              {tutorOpen && (
                <>
                  {/* Backdrop */}
                  <div className="fixed inset-0 z-10" onClick={() => setTutorOpen(false)} />
                  <div className="absolute right-0 top-8 z-20 bg-white border border-slate-100 rounded-xl shadow-card-hover py-1 w-44">
                    {tutorLinks.map((l) => (
                      <NavLink
                        key={l.to}
                        to={l.to}
                        className={({ isActive }) =>
                          `block px-4 py-2.5 text-sm transition-colors ${
                            isActive ? 'text-teal-400 bg-sky-50' : 'text-slate-600 hover:bg-slate-50 hover:text-navy-600'
                          }`
                        }
                        onClick={() => setTutorOpen(false)}
                      >
                        {l.label}
                      </NavLink>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-1">
          <NavLink to="/" end className={linkClass} onClick={() => setMobileOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/attendee" className={linkClass} onClick={() => setMobileOpen(false)}>
            Attendee
          </NavLink>

          {/* Mobile Tutor section */}
          <button
            onClick={() => setTutorOpen((v) => !v)}
            className={[
              'flex items-center gap-1 text-sm font-medium transition-colors px-1 py-1 text-left w-full',
              isTutorActive ? 'text-teal-400' : 'text-slate-600',
            ].join(' ')}
          >
            Tutor
            <ChevronDown size={14} className={`transition-transform ${tutorOpen ? 'rotate-180' : ''}`} />
          </button>

          {tutorOpen && (
            <div className="ml-4 flex flex-col gap-1 border-l-2 border-slate-100 pl-3">
              {tutorLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  className={({ isActive }) =>
                    `text-sm py-1.5 transition-colors ${
                      isActive ? 'text-teal-400 font-medium' : 'text-slate-500 hover:text-navy-600'
                    }`
                  }
                  onClick={() => { setMobileOpen(false); setTutorOpen(false) }}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      )}
    </nav>
  )
}
