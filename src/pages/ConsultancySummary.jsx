import { useState } from 'react'
import {
  attendees,
  CATEGORIES,
  computeAverages,
  biggestImprovement,
  biggestGap,
  anonQuestions,
  scenarioCorrectCount,
} from '../data/sampleData'
import ScoutCard from '../components/ScoutCard'
import { Copy, Check } from 'lucide-react'

const openAvg = computeAverages('opening')
const closeAvg = computeAverages('closing')
const overallOpen = (Object.values(openAvg).reduce((a, b) => a + b, 0) / 5).toFixed(1)
const overallClose = (Object.values(closeAvg).reduce((a, b) => a + b, 0) / 5).toFixed(1)
const improvement = biggestImprovement()
const gap = biggestGap()

const businessTypes = [...new Set(attendees.map((a) => a.businessType).filter(Boolean))]

const followUpActions = [
  {
    emoji: '📋',
    title: 'Share an AI policy template',
    desc: `Staff guidance was identified as the biggest remaining confidence gap. Providing a simple, plain-English AI policy template would give businesses an immediate, practical tool to use with their teams.`,
  },
  {
    emoji: '🔐',
    title: 'Run a data safety audit exercise',
    desc: `Several anonymous questions touched on GDPR and handling sensitive information. A short follow-up exercise helping businesses identify what data they hold and how it should be treated in AI contexts would be valuable.`,
  },
  {
    emoji: '💡',
    title: 'Provide a curated toolkit of approved AI tools',
    desc: `Attendees are ready to explore AI but are unsure which tools are safe and appropriate for their sector. A sector-specific toolkit with brief guidance notes would accelerate confident adoption.`,
  },
  {
    emoji: '📅',
    title: 'Schedule a follow-up session in 6–8 weeks',
    desc: `Confidence improved meaningfully in ${improvement}, but sustained progress requires accountability. A follow-up workshop or coaching call would help businesses report back and receive targeted support.`,
  },
]

const followUpEmail = `Subject: Your AI Readiness Workshop — Next Steps & Resources

Hi [First name],

Thank you so much for joining today's AI Readiness for SMEs workshop. It was a pleasure working with your group.

The session showed some real, encouraging movement in confidence — particularly around ${improvement}. That's a great foundation to build on.

As discussed, the area where most businesses felt they still had work to do was ${gap}. I've attached a simple resource to help with that, and I'd encourage you to share it with your team.

Here are your three suggested next steps:

1. Set aside 30 minutes this week to draft a one-page AI policy for your team
2. Identify one workflow where AI could save time — try it with a low-risk task first
3. Have an open conversation with your team about what AI tools they're already using

I'm available for a follow-up conversation if you'd like to go deeper on any of these areas. Just reply to this email and we'll find a time.

Warm regards,
[Your name]
WorkFluency Consultancy`

export default function ConsultancySummary() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(followUpEmail).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-10">

      {/* Header */}
      <div className="mb-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-teal-400 mb-1">
          Consultancy Report
        </p>
        <h1 className="text-2xl sm:text-3xl font-bold text-navy-600 mb-2">
          AI Readiness for SMEs — Session Summary
        </h1>
        <p className="text-sm text-slate-500">Generated {new Date().toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
      </div>

      {/* Scout sign-off */}
      <div className="mb-8">
        <ScoutCard
          size="sm"
          tone="success"
          message={`This group made real progress today. Overall confidence moved from ${overallOpen} to ${overallClose} out of 5 — and that's just the beginning. Here's everything you need to keep the momentum going.`}
        />
      </div>

      {/* 1. Session Overview */}
      <Section title="1. Session Overview">
        <div className="grid sm:grid-cols-3 gap-4 mb-4">
          <InfoTile label="Attendees" value="18" />
          <InfoTile label="Avg opening confidence" value={`${overallOpen} / 5`} />
          <InfoTile label="Avg closing confidence" value={`${overallClose} / 5`} />
        </div>
        <p className="text-sm text-slate-600">
          The session brought together businesses from {businessTypes.slice(0, -1).join(', ')} and {businessTypes.slice(-1)}.
          {' '}The group ranged from sole traders to organisations with 50+ employees, reflecting a broad mix of AI readiness starting points.
        </p>
        <p className="text-sm text-slate-600 mt-2">
          {scenarioCorrectCount} out of 18 attendees correctly identified the key data safety consideration in the scenario challenge — a strong indicator that the core data protection message landed well.
        </p>
      </Section>

      {/* 2. Confidence Movement */}
      <Section title="2. Confidence Movement">
        <p className="text-sm text-slate-600 mb-4">
          Across all five categories, attendees showed meaningful improvement. The area of greatest growth was{' '}
          <strong className="text-navy-600">{improvement}</strong>, while{' '}
          <strong className="text-navy-600">{gap}</strong> remains the area with the most opportunity for further development.
        </p>
        <div className="bg-white border border-slate-100 rounded-2xl shadow-card overflow-hidden">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-sky-50 text-xs text-slate-500 border-b border-slate-100">
                <th className="text-left px-4 py-3 font-medium">Category</th>
                <th className="text-center px-4 py-3 font-medium">Before</th>
                <th className="text-center px-4 py-3 font-medium">After</th>
                <th className="text-center px-4 py-3 font-medium">Movement</th>
              </tr>
            </thead>
            <tbody>
              {CATEGORIES.map(({ key, label }) => {
                const delta = closeAvg[key] - openAvg[key]
                const isGap = label === gap
                const isBest = label === improvement
                return (
                  <tr key={key} className={`border-b border-slate-50 last:border-0 ${isGap ? 'bg-amber-50' : isBest ? 'bg-emerald-50' : ''}`}>
                    <td className="px-4 py-3 font-medium text-slate-700">
                      {label}
                      {isBest && <span className="ml-2 text-xs text-sage-400">↑ Top mover</span>}
                      {isGap && <span className="ml-2 text-xs text-amber-500">↓ Focus area</span>}
                    </td>
                    <td className="px-4 py-3 text-center text-slate-500">{openAvg[key]}</td>
                    <td className="px-4 py-3 text-center font-semibold text-navy-600">{closeAvg[key]}</td>
                    <td className="px-4 py-3 text-center">
                      <span className={`text-sm font-bold ${delta > 0 ? 'text-sage-400' : 'text-slate-400'}`}>
                        {delta > 0 ? '+' : ''}{delta.toFixed(1)}
                      </span>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </Section>

      {/* 3. Key Questions Raised */}
      <Section title="3. Key Questions Raised">
        <p className="text-sm text-slate-600 mb-4">
          The following questions were submitted anonymously during the session. They reflect the genuine concerns and curiosities of your group — and provide a useful agenda for follow-up conversations.
        </p>
        <div className="flex flex-col gap-3">
          {anonQuestions.map((q, i) => (
            <div key={i} className="flex gap-3 bg-sky-50 border border-sky-100 rounded-xl p-3.5 text-sm text-slate-700">
              <span className="text-sky-400 font-bold shrink-0">Q{i + 1}.</span>
              <span>{q}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. Recommended Follow-up Actions */}
      <Section title="4. Recommended Follow-up Actions">
        <p className="text-sm text-slate-600 mb-4">
          Based on the session data and questions raised, we recommend the following actions to maintain momentum and build on today's progress.
        </p>
        <div className="flex flex-col gap-4">
          {followUpActions.map((action) => (
            <div key={action.title} className="flex gap-4 bg-white border border-slate-100 rounded-2xl p-4 shadow-card">
              <span className="text-2xl shrink-0">{action.emoji}</span>
              <div>
                <p className="font-semibold text-navy-600 text-sm mb-1">{action.title}</p>
                <p className="text-xs text-slate-600 leading-relaxed">{action.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. Suggested Follow-up Email */}
      <Section title="5. Suggested Follow-up Email">
        <p className="text-sm text-slate-600 mb-4">
          Use this template as a starting point for your post-session email. Personalise the bracketed placeholders before sending.
        </p>
        <div className="relative bg-slate-50 border border-slate-200 rounded-2xl p-5">
          <button
            onClick={copyEmail}
            className="absolute top-4 right-4 flex items-center gap-1.5 text-xs text-slate-500 hover:text-navy-600 bg-white border border-slate-200 rounded-lg px-2.5 py-1.5 transition-colors"
          >
            {copied ? <Check size={13} className="text-teal-400" /> : <Copy size={13} />}
            {copied ? 'Copied!' : 'Copy'}
          </button>
          <pre className="text-xs text-slate-700 leading-relaxed whitespace-pre-wrap font-sans pr-20">
            {followUpEmail}
          </pre>
        </div>
      </Section>

      {/* Footer */}
      <div className="mt-10 pt-6 border-t border-slate-100 text-center">
        <p className="text-xs text-slate-400">
          WorkFluency AI Companion · Confidential session report · For tutor and organiser use only
        </p>
      </div>
    </div>
  )
}

function Section({ title, children }) {
  return (
    <div className="mb-8">
      <h2 className="text-base font-bold text-navy-600 mb-3 pb-2 border-b border-slate-100">{title}</h2>
      {children}
    </div>
  )
}

function InfoTile({ label, value }) {
  return (
    <div className="bg-sky-50 border border-sky-100 rounded-xl p-3 text-center">
      <p className="text-xs text-slate-500 mb-0.5">{label}</p>
      <p className="font-bold text-navy-600 text-lg">{value}</p>
    </div>
  )
}
