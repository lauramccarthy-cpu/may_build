import Scout from './Scout'

// ScoutCard — Scout mascot + message bubble
// Props:
//   message: string
//   size: 'sm' | 'md' | 'lg'  (Scout size, defaults 'sm')
//   tone: 'default' | 'success' | 'warn'
export default function ScoutCard({ message, size = 'sm', tone = 'default' }) {
  const toneClasses = {
    default: 'bg-sky-50 border-sky-200',
    success: 'bg-emerald-50 border-emerald-200',
    warn: 'bg-amber-50 border-amber-200',
  }

  return (
    <div className={`flex items-start gap-3 rounded-2xl border p-4 ${toneClasses[tone] ?? toneClasses.default}`}>
      <div className="shrink-0 mt-0.5">
        <Scout size={size} />
      </div>
      <div>
        <p className="text-sm font-semibold text-navy-600 mb-0.5">Scout says</p>
        <p className="text-sm text-slate-700 leading-relaxed">{message}</p>
      </div>
    </div>
  )
}
