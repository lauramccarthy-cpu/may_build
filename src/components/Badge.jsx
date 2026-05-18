// Badge — "AI Readiness Started" achievement badge
import { Star } from 'lucide-react'

export default function Badge({ label = 'AI Readiness Started' }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Outer ring */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-DEFAULT to-navy-DEFAULT opacity-20 animate-ping" style={{ animationDuration: '3s' }} />
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-DEFAULT to-navy-DEFAULT" />
        <div className="absolute inset-2 rounded-full bg-white" />

        {/* Inner content */}
        <div className="relative flex flex-col items-center gap-1 z-10">
          <Star className="text-teal-DEFAULT fill-teal-DEFAULT" size={28} />
          <span className="text-navy-DEFAULT font-bold text-xs text-center leading-tight px-1">
            AI<br />Readiness
          </span>
        </div>

        {/* Star accents */}
        {[0, 60, 120, 180, 240, 300].map((deg) => (
          <span
            key={deg}
            className="absolute w-2 h-2 rounded-full bg-sage-DEFAULT"
            style={{
              top: `${50 - 48 * Math.cos((deg * Math.PI) / 180)}%`,
              left: `${50 + 48 * Math.sin((deg * Math.PI) / 180)}%`,
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>
      <p className="text-center font-semibold text-navy-DEFAULT text-sm">{label}</p>
    </div>
  )
}
