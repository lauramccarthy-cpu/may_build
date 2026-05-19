import {
  attendees,
  CATEGORIES,
  computeAverages,
  biggestImprovement,
  biggestGap,
  anonQuestions,
  scenarioCorrectCount,
} from '../data/sampleData'
import CategoryBarChart from '../components/CategoryBarChart'
import ScoutCard from '../components/ScoutCard'
import { TrendingUp, AlertCircle, Users, CheckCircle } from 'lucide-react'

const openAvg = computeAverages('opening')
const closeAvg = computeAverages('closing')
const overallOpen = (Object.values(openAvg).reduce((a, b) => a + b, 0) / 5).toFixed(1)
const overallClose = (Object.values(closeAvg).reduce((a, b) => a + b, 0) / 5).toFixed(1)
const improvement = biggestImprovement()
const gap = biggestGap()

const nudgeMessages = {
  'AI Opportunities': 'The group still seems least confident about AI Opportunities. Consider sharing 2–3 concrete examples from their industries.',
  'AI Risks': 'AI Risks is still a worry area. A quick "myth vs. reality" exercise could help the group feel more grounded.',
  'Data Safety': 'Data Safety is the biggest remaining gap. Consider spending 5 extra minutes walking through a simple data-check framework.',
  'Staff Guidance': 'The group still seems least confident about Staff Guidance. Consider spending 5 extra minutes on practical staff rules and a simple AI policy template.',
  'Next Steps': 'Next Steps confidence is still low. Try ending with a group exercise where each person commits to one small action this week.',
}

export default function TutorDashboard() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-navy-600 mb-1">Tutor Dashboard</h1>
        <p className="text-sm text-slate-500">Session overview · 18 attendees · Sample data</p>
      </div>

      {/* Scout nudge */}
      <div className="mb-6">
        <ScoutCard
          size="sm"
          tone="warn"
          message={nudgeMessages[gap] ?? `Focus on ${gap} — it's where the group needs the most support.`}
        />
      </div>

      {/* Summary stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
        <StatCard
          icon={<Users size={18} className="text-navy-600" />}
          label="Attendees"
          value="18"
          bg="bg-sky-50"
        />
        <StatCard
          icon={<TrendingUp size={18} className="text-teal-400" />}
          label="Avg confidence"
          value={`${overallOpen} → ${overallClose}`}
          bg="bg-teal-50"
          sub="out of 5"
        />
        <StatCard
          icon={<TrendingUp size={18} className="text-sage-400" />}
          label="Biggest improvement"
          value={improvement}
          bg="bg-emerald-50"
        />
        <StatCard
          icon={<AlertCircle size={18} className="text-amber-500" />}
          label="Biggest gap remaining"
          value={gap}
          bg="bg-amber-50"
        />
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mb-8">
        {/* Category chart */}
        <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-5">
          <h2 className="font-semibold text-navy-600 mb-4">Confidence by category</h2>
          <CategoryBarChart
            opening={openAvg}
            closing={closeAvg}
            categories={CATEGORIES}
            showBefore={true}
          />
        </div>

        {/* Scenario stats */}
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-5">
            <h2 className="font-semibold text-navy-600 mb-3">Scenario challenge</h2>
            <div className="flex items-center gap-4">
              <div className="relative w-20 h-20">
                <svg viewBox="0 0 36 36" className="w-20 h-20 -rotate-90">
                  <circle cx="18" cy="18" r="15.9" fill="none" stroke="#e2e8f0" strokeWidth="3" />
                  <circle
                    cx="18" cy="18" r="15.9" fill="none"
                    stroke="#2a9d8f" strokeWidth="3"
                    strokeDasharray={`${(scenarioCorrectCount / attendees.length) * 100} 100`}
                    strokeLinecap="round"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-sm font-bold text-navy-600">
                  {scenarioCorrectCount}/18
                </span>
              </div>
              <div>
                <p className="font-semibold text-navy-600 text-lg">{scenarioCorrectCount} correct</p>
                <p className="text-xs text-slate-500">
                  {attendees.length - scenarioCorrectCount} attendees selected a different answer
                </p>
                <p className="text-xs text-slate-400 mt-1 flex items-center gap-1">
                  <CheckCircle size={12} className="text-teal-400" />
                  Correct: check for personal/sensitive data
                </p>
              </div>
            </div>
          </div>

          {/* Category averages table */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-card p-5">
            <h2 className="font-semibold text-navy-600 mb-3">Category averages</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-xs text-slate-400 border-b border-slate-100">
                  <th className="text-left pb-2 font-medium">Category</th>
                  <th className="text-center pb-2 font-medium">Before</th>
                  <th className="text-center pb-2 font-medium">After</th>
                  <th className="text-center pb-2 font-medium">Change</th>
                </tr>
              </thead>
              <tbody>
                {CATEGORIES.map(({ key, label }) => {
                  const delta = closeAvg[key] - openAvg[key]
                  return (
                    <tr key={key} className="border-b border-slate-50 last:border-0">
                      <td className="py-2 text-slate-700">{label}</td>
                      <td className="py-2 text-center text-slate-500">{openAvg[key]}</td>
                      <td className="py-2 text-center font-medium text-navy-600">{closeAvg[key]}</td>
                      <td className="py-2 text-center">
                        <span className={`text-xs font-semibold ${delta > 0 ? 'text-sage-400' : 'text-slate-400'}`}>
                          {delta > 0 ? '+' : ''}{delta.toFixed(1)}
                        </span>
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Anonymous questions */}
      <div>
        <h2 className="font-semibold text-navy-600 mb-3">Anonymous questions from the group</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          {anonQuestions.map((q, i) => (
            <div key={i} className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-sm text-slate-700">
              <span className="text-sky-400 mr-1.5">Q:</span>
              {q}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value, sub, bg }) {
  return (
    <div className={`${bg} rounded-2xl p-4 flex flex-col gap-1 shadow-card border border-white`}>
      <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-1">
        {icon}
        <span>{label}</span>
      </div>
      <p className="font-bold text-navy-600 text-base leading-tight">{value}</p>
      {sub && <p className="text-xs text-slate-400">{sub}</p>}
    </div>
  )
}
