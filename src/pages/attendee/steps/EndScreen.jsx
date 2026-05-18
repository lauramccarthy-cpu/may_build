import { useNavigate } from 'react-router-dom'
import { CATEGORIES } from '../../../data/sampleData'
import Badge from '../../../components/Badge'
import Scout from '../../../components/Scout'

const nextSteps = [
  {
    emoji: '📋',
    title: 'Create a simple AI policy',
    desc: 'A one-page document that tells your team what AI tools are OK to use and what data must stay private.',
  },
  {
    emoji: '🔍',
    title: 'Audit one workflow this week',
    desc: 'Pick one regular task and ask: could AI save time here? Start with something low-risk like drafting emails.',
  },
  {
    emoji: '🗣️',
    title: 'Have the conversation with your team',
    desc: "Talk openly about AI. What are they already using? What worries them? You'll be surprised what you learn.",
  },
]

export default function EndScreen({ openingData, closingData }) {
  const navigate = useNavigate()

  // Calculate improvements
  const improvements = CATEGORIES.map(({ key, label }) => ({
    label,
    delta: (closingData?.[key] ?? 0) - (openingData?.[key] ?? 0),
  })).filter((c) => c.delta > 0)

  const topImprovement = improvements.sort((a, b) => b.delta - a.delta)[0]

  return (
    <div className="flex flex-col gap-8 py-4">
      {/* Badge */}
      <div className="flex flex-col items-center gap-4">
        <Badge />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-DEFAULT mb-1">Well done!</h2>
          <p className="text-slate-600 text-sm max-w-sm">
            You've completed today's AI readiness check. You should be proud — awareness is the first step.
          </p>
        </div>
      </div>

      {/* Improvement highlight */}
      {topImprovement && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
          <p className="text-sm text-slate-600 mb-1">Biggest confidence shift</p>
          <p className="text-lg font-bold text-navy-DEFAULT">
            {topImprovement.label}{' '}
            <span className="text-sage-DEFAULT">+{topImprovement.delta}</span>
          </p>
        </div>
      )}

      {/* Scout message */}
      <div className="flex items-start gap-3 bg-sky-50 border border-sky-200 rounded-2xl p-4">
        <Scout size="sm" />
        <div>
          <p className="text-sm font-semibold text-navy-DEFAULT mb-0.5">Scout says</p>
          <p className="text-sm text-slate-700">
            Remember — you don't need to become an AI expert overnight. Small, thoughtful steps will get
            your business ready. You've already taken the most important one by showing up today.
          </p>
        </div>
      </div>

      {/* Next steps */}
      <div>
        <h3 className="text-base font-semibold text-navy-DEFAULT mb-3">Three practical next steps</h3>
        <div className="flex flex-col gap-3">
          {nextSteps.map((step) => (
            <div key={step.title} className="flex gap-3 bg-white border border-slate-100 rounded-2xl p-4 shadow-card">
              <span className="text-2xl shrink-0">{step.emoji}</span>
              <div>
                <p className="font-semibold text-navy-DEFAULT text-sm mb-0.5">{step.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={() => navigate('/')}
        className="w-full py-3 rounded-xl font-semibold border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors text-sm"
      >
        Back to home
      </button>
    </div>
  )
}
