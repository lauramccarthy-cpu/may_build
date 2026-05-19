import { useState } from 'react'
import ScoutCard from '../../../components/ScoutCard'

export default function AnonQuestion({ onNext, onSkip }) {
  const [question, setQuestion] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = () => {
    setSubmitted(true)
    setTimeout(onNext, 1500)
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-6 py-8 text-center">
        <div className="text-4xl">✉️</div>
        <div>
          <h2 className="text-xl font-bold text-navy-600 mb-2">Question submitted!</h2>
          <p className="text-slate-600 text-sm">Your question is completely anonymous. The tutor will address it during the session.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-navy-600 mb-1">Got a question?</h2>
        <p className="text-sm text-slate-500">Ask anything — completely anonymous. The tutor will see questions as a group, with no names attached.</p>
      </div>

      <ScoutCard message="No question is too basic. If you're thinking it, someone else in the room probably is too!" />

      <div>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. Is it safe to use ChatGPT for writing emails?"
          rows={4}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none"
        />
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          disabled={!question.trim()}
          className={[
            'flex-1 py-3 rounded-xl font-semibold transition-colors',
            question.trim()
              ? 'bg-teal-400 text-white hover:bg-teal-500'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed',
          ].join(' ')}
        >
          Submit anonymously
        </button>
        <button
          onClick={onSkip}
          className="px-6 py-3 rounded-xl font-medium text-slate-500 hover:bg-slate-100 transition-colors text-sm"
        >
          Skip
        </button>
      </div>
    </div>
  )
}
