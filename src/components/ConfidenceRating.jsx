// ConfidenceRating — a row of 1–5 rating buttons for a single category
// Props:
//   label: string — category name
//   value: number | null — current rating
//   onChange: (value: number) => void
//   disabled: boolean

const labels = ['', 'Not at all', 'Slightly', 'Somewhat', 'Quite', 'Very']
const colours = ['', 'bg-red-100 text-red-700 border-red-300', 'bg-orange-100 text-orange-700 border-orange-300', 'bg-yellow-100 text-yellow-700 border-yellow-300', 'bg-teal-50 text-teal-600 border-teal-300', 'bg-sage-50 text-sage-600 border-sage-300']
const activeColours = ['', 'bg-red-500 text-white border-red-500', 'bg-orange-400 text-white border-orange-400', 'bg-yellow-400 text-white border-yellow-400', 'bg-teal-400 text-white border-teal-400', 'bg-sage-400 text-white border-sage-400']

export default function ConfidenceRating({ label, value, onChange, disabled = false }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 py-3 border-b border-slate-100 last:border-0">
      <div className="sm:w-40 shrink-0">
        <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
      <div className="flex gap-2 flex-wrap">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            disabled={disabled}
            onClick={() => !disabled && onChange(n)}
            aria-label={`${label}: ${n} — ${labels[n]}`}
            className={[
              'w-10 h-10 rounded-xl border-2 text-sm font-semibold transition-all',
              value === n ? activeColours[n] : colours[n],
              !disabled ? 'cursor-pointer hover:scale-110' : 'cursor-default opacity-70',
            ].join(' ')}
          >
            {n}
          </button>
        ))}
      </div>
      {value && (
        <span className="text-xs text-slate-500 sm:ml-2">{labels[value]} confident</span>
      )}
    </div>
  )
}
