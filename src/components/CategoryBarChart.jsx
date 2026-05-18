// CategoryBarChart — horizontal before/after bars for all 5 categories
// Props:
//   opening: { [key]: number }
//   closing: { [key]: number }
//   categories: [{ key, label }]
//   showBefore: boolean (default true)
//   projector: boolean — bigger text, white labels for projector mode

export default function CategoryBarChart({
  opening,
  closing,
  categories,
  showBefore = true,
  projector = false,
}) {
  const maxVal = 5

  const labelClass = projector
    ? 'text-white font-semibold text-sm w-36 shrink-0'
    : 'text-slate-700 text-sm w-36 shrink-0'

  return (
    <div className="flex flex-col gap-4">
      {showBefore && (
        <div className="flex items-center gap-3 mb-1">
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="inline-block w-3 h-3 rounded-sm bg-navy-DEFAULT opacity-60" />
            Before
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <span className="inline-block w-3 h-3 rounded-sm bg-teal-DEFAULT" />
            After
          </span>
        </div>
      )}

      {categories.map(({ key, label }) => {
        const openVal = opening?.[key] ?? 0
        const closeVal = closing?.[key] ?? 0
        const delta = closeVal - openVal
        const pctOpen = (openVal / maxVal) * 100
        const pctClose = (closeVal / maxVal) * 100

        return (
          <div key={key} className="flex flex-col gap-1">
            <div className="flex items-center justify-between">
              <span className={labelClass}>{label}</span>
              {delta > 0 && !projector && (
                <span className="text-xs text-sage-DEFAULT font-medium">+{delta.toFixed(1)}</span>
              )}
              {projector && (
                <span className="text-white text-sm font-bold">{closeVal.toFixed(1)}/5</span>
              )}
            </div>

            {/* Bars */}
            <div className="flex flex-col gap-1 w-full">
              {showBefore && !projector && (
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-slate-100 rounded-full h-2.5 overflow-hidden">
                    <div
                      className="h-full rounded-full bg-navy-DEFAULT opacity-50 transition-all duration-700"
                      style={{ width: `${pctOpen}%` }}
                    />
                  </div>
                  <span className="text-xs text-slate-400 w-6 text-right">{openVal}</span>
                </div>
              )}
              <div className="flex items-center gap-2">
                <div className={`flex-1 rounded-full overflow-hidden ${projector ? 'h-5' : 'h-3'} ${projector ? 'bg-white/10' : 'bg-slate-100'}`}>
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${projector ? 'bg-teal-DEFAULT' : 'bg-teal-400'}`}
                    style={{ width: `${pctClose}%` }}
                  />
                </div>
                {!projector && (
                  <span className="text-xs text-slate-500 w-6 text-right">{closeVal}</span>
                )}
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
