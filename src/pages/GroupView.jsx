import { CATEGORIES, computeAverages, biggestGap, anonQuestions, scenarioCorrectCount, attendees } from '../data/sampleData'

const closeAvg = computeAverages('closing')
const openAvg = computeAverages('opening')
const gapCategory = biggestGap()
const maxVal = 5

export default function GroupView() {
  return (
    <div className="min-h-[calc(100vh-64px)] bg-navy-600 flex flex-col px-6 sm:px-12 py-8 text-white">

      {/* Header */}
      <div className="mb-8">
        <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-1">
          Live Group Results
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1">
          How confident is the group?
        </h1>
        <p className="text-slate-400 text-xs">{attendees.length} attendees · closing confidence · no individual data shown</p>
      </div>

      <div className="flex-1 flex flex-col lg:flex-row gap-8">

        {/* Left: category bars */}
        <div className="flex-1 flex flex-col gap-4">
          <p className="text-slate-400 text-xs uppercase tracking-widest">Confidence by area (out of 5)</p>
          {CATEGORIES.map(({ key, label }) => {
            const val = closeAvg[key]
            const before = openAvg[key]
            const pct = (val / maxVal) * 100
            const isGap = label === gapCategory
            const delta = val - before

            return (
              <div key={key}>
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-sm font-semibold ${isGap ? 'text-amber-300' : 'text-white'}`}>
                    {label}
                    {isGap && (
                      <span className="ml-2 text-xs bg-amber-400 text-amber-900 px-2 py-0.5 rounded-full font-semibold">
                        Focus area
                      </span>
                    )}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-slate-400">was {before.toFixed(1)}</span>
                    <span className={`text-sm font-bold ${isGap ? 'text-amber-300' : 'text-teal-400'}`}>
                      {val.toFixed(1)}
                    </span>
                    {delta > 0 && (
                      <span className="text-xs text-sage-400">+{delta.toFixed(1)}</span>
                    )}
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-4 overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-700 ${isGap ? 'bg-amber-400' : 'bg-teal-400'}`}
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </div>
            )
          })}
        </div>

        {/* Right: callouts + questions */}
        <div className="lg:w-80 flex flex-col gap-4">

          {/* Focus area */}
          <div className="bg-amber-400/10 border border-amber-400/30 rounded-2xl p-5">
            <p className="text-amber-300 text-xs font-semibold uppercase tracking-widest mb-1">
              Biggest gap remaining
            </p>
            <p className="text-xl font-bold text-amber-300 mb-2">{gapCategory}</p>
            <p className="text-slate-300 text-sm">
              This is where the group feels least confident. A great focus for any follow-up work.
            </p>
          </div>

          {/* Scenario result */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
            <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-2">Scenario challenge</p>
            <p className="text-2xl font-bold text-white mb-0.5">{scenarioCorrectCount} / {attendees.length}</p>
            <p className="text-slate-400 text-sm">identified the correct data safety answer</p>
          </div>

          {/* Anonymous questions preview */}
          {anonQuestions.length > 0 && (
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-3">
                Questions from the group
              </p>
              <div className="flex flex-col gap-2">
                {anonQuestions.slice(0, 3).map((q, i) => (
                  <p key={i} className="text-slate-300 text-xs leading-relaxed border-b border-white/5 pb-2 last:border-0 last:pb-0">
                    "{q}"
                  </p>
                ))}
                {anonQuestions.length > 3 && (
                  <p className="text-slate-500 text-xs">+{anonQuestions.length - 3} more questions</p>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Discussion prompt */}
      <div className="mt-8 bg-white/5 border border-white/10 rounded-2xl p-5">
        <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-2">Group discussion</p>
        <p className="text-white text-base font-semibold">
          "What is one practical step your business could take this week to become more AI-ready?"
        </p>
        <p className="text-slate-400 text-sm mt-1">3 minutes with the person next to you, then share with the room.</p>
      </div>
    </div>
  )
}
