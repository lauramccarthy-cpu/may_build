import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import Scout from './Scout'

const links = [
  { to: '/', label: 'Home' },
  { to: '/attendee', label: 'Attendee' },
  { to: '/tutor', label: 'Tutor' },
  { to: '/projector', label: 'Projector' },
  { to: '/summary', label: 'Summary' },
]

export default function NavBar() {
  const [open, setOpen] = useState(false)

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
          <NavLink to="/" className="flex items-center gap-2 shrink-0">
            <Scout size="sm" />
            <span className="font-semibold text-navy-600 text-base leading-tight">
              WorkFluency<br />
              <span className="text-teal-400 text-xs font-normal">AI Companion</span>
            </span>
          </NavLink>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-6">
            {links.map((l) => (
              <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
                {l.label}
              </NavLink>
            ))}
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-slate-500 hover:bg-slate-100 transition"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle navigation"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-slate-100 px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === '/'}
              className={linkClass}
              onClick={() => setOpen(false)}
            >
              {l.label}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  )
}
