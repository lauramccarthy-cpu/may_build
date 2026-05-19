import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Copy, Check } from 'lucide-react'
import { CATEGORIES } from '../../../data/sampleData'
import Badge from '../../../components/Badge'
import Scout from '../../../components/Scout'

const nextSteps = [
  {
    number: '01',
    colour: 'bg-teal-400',
    title: 'Create a simple AI policy',
    desc: 'A one-page document that tells your team what AI tools are OK to use and what data must stay private.',
  },
  {
    number: '02',
    colour: 'bg-navy-600',
    title: 'Audit one workflow this week',
    desc: 'Pick one regular task and ask: could AI save time here? Start with something low-risk like drafting emails.',
  },
  {
    number: '03',
    colour: 'bg-sage-400',
    title: 'Talk to your team',
    desc: 'Have an open conversation about AI. What are they already using? What worries them? You will be surprised what you learn.',
  },
]

const adviceText = `Your AI Readiness next steps:

01. Create a simple AI policy
A one-page document that tells your team what AI tools are OK to use and what data must stay private.

02. Audit one workflow this week
Pick one regular task and ask: could AI save time here? Start with something low-risk like drafting emails.

03. Talk to your team
Have an open conversation about AI. What are they already using? What worries them? You will be surprised what you learn.`

export default function EndScreen({ openingData, closingData }) {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const improvements = CATEGORIES.map(({ key, label }) => ({
    label,
    delta: (closingData?.[key] ?? 0) - (openingData?.[key] ?? 0),
  })).filter((c) => c.delta > 0)

  const topImprovement = [...improvements].sort((a, b) => b.delta - a.delta)[0]

  const copyAdvice = () => {
    navigator.clipboard.writeText(adviceText).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    })
  }

  return (
    <div className="flex flex-col gap-7 py-4">
      {/* Badge */}
      <div className="flex flex-col items-center gap-3">
        <Badge />
        <div className="text-center">
          <h2 className="text-2xl font-bold text-navy-600 mb-1">Well done!</h2>
          <p className="text-slate-500 text-sm max-w-xs mx-auto">
            You have completed today's AI readiness check. Awareness is the first step.
          </p>
        </div>
      </div>

      {/* Improvement highlight */}
      {topImprovement && (
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-center">
          <p className="text-xs text-slate-500 mb-1">Your biggest confidence shift today</p>
          <p className="text-lg font-bold text-navy-600">
            {topImprovement.label}{' '}
            <span className="text-sage-400">+{topImprovement.delta}</span>
          </p>
        </div>
      )}

      {/* Scout message */}
      <div className="flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-2xl p-4">
        <Scout size="sm" />
        <div>
          <p className="text-sm font-semibold text-navy-600 mb-0.5">Scout says</p>
          <p className="text-sm text-slate-600 leading-relaxed">
            You do not need to become an AI expert overnight. Small, thoughtful steps will get
            your business ready. You have already taken the most important one by showing up today.
          </p>
        </div>
      </div>

      {/* Next steps */}
      <div>
        <h3 className="text-base font-semibold text-navy-600 mb-3">Three practical next steps</h3>
        <div className="flex flex-col gap-3">
          {nextSteps.map((step) => (
            <div key={step.number} className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-4 shadow-card">
              <div className={`${step.colour} text-white text-xs font-bold w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5`}>
                {step.number}
              </div>
              <div>
                <p className="font-semibold text-navy-600 text-sm mb-0.5">{step.title}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Copy advice */}
      <div className="flex flex-col gap-2">
        <button
          onClick={copyAdvice}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold bg-navy-600 text-white hover:bg-navy-700 transition-colors text-sm"
        >
          {copied ? <Check size={15} /> : <Copy size={15} />}
          {copied ? 'Copied!' : 'Copy my next steps'}
        </button>
        <p className="text-xs text-slate-400 text-center">
          Paste into your notes app to keep these handy after the session.
        </p>
      </div>

      <button
        onClick={() => navigate('/')}
        className="w-full py-3 rounded-xl font-medium border border-slate-200 text-slate-500 hover:bg-slate-50 transition-colors text-sm"
      >
        Back to home
      </button>
    </div>
  )
}
