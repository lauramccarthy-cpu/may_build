import { CATEGORIES, computeAverages, biggestGap } from '../data/sampleData'

const closeAvg = computeAverages('closing')
const gapCategory = biggestGap()
const maxVal = 5

export default function ProjectorMode() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-navy-600 flex flex-col px-8 sm:px-16 py-10 text-white">

      {/* Header */}
      <div className="mb-8">
        <p className="text-teal-300 text-sm font-medium uppercase tracking-widest mb-1">
          Group Results · AI Readiness for SMEs
        </p>
        <h1 className="text-3xl sm:text-4xl font-bold text-white">
          How confident is the group?
        </h1>
        <p className="text-slate-400 text-sm mt-1">18 attendees · Closing confidence pulse · No individual data shown</p>
      </div>

      <div className="flex-1 grid lg:grid-cols-2 gap-8 items-start">

        {/* Category bars */}
        <div className="flex flex-col gap-5">
          {CATEGORIES.map(({ key, label }) => {
            const val = closeAvg[key]
            const pct = (val / maxVal) * 100
            const isGap = label === gapCategory

            return (
              <div key={key}>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-base font-semibold ${isGap ? 'text-amber-300' : 'text-white'}`}>
                    {label}
                    {isGap && (
                      <span className="ml-2 text-xs bg-amber-400 text-amber-900 px-2 py-0.5 rounded-full font-semibold">
                        Focus area
                      </span>
                    )}
                  </span>
                  <span className={`text-lg font-bold ${isGap ? 'text-amber-300' : 'text-teal-300'}`}>
                    {val.toFixed(1)}/5
                  </span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-5 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${isGap ? 'bg-amber-400' : 'bg-teal-400'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-6">

          {/* Biggest gap callout */}
          <div className="bg-amber-400/10 border-2 border-amber-400/40 rounded-2xl p-6">
            <p className="text-amber-300 text-xs font-semibold uppercase tracking-widest mb-1">
              Biggest confidence gap
            </p>
            <p className="text-2xl font-bold text-amber-300 mb-2">{gapCategory}</p>
            <p className="text-slate-300 text-sm">
              This is the area where the group feels least confident after today's session. It's a great signal for where to focus next.
            </p>
          </div>

          {/* Discussion prompt */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
            <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-3">
              💬 Group discussion prompt
            </p>
            <p className="text-white text-lg font-semibold leading-relaxed">
              "As a group — what's one practical step your business could take this week to become more AI-ready?"
            </p>
            <p className="text-slate-400 text-sm mt-3">Take 3 minutes to discuss with the person next to you, then share with the room.</p>
          </div>

          {/* Scale key */}
          <div className="flex gap-3 flex-wrap">
            {[1, 2, 3, 4, 5].map((n) => (
              <div key={n} className="flex items-center gap-1.5 text-xs text-slate-400">
                <span className="font-bold text-white">{n}</span>
                <span>= {['Not at all', 'Slightly', 'Somewhat', 'Quite', 'Very'][n - 1]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
