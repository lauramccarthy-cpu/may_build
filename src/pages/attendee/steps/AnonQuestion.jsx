import { useState } from 'react'
import { Send, X } from 'lucide-react'

export default function AnonQuestion({ onNext }) {
  const [question, setQuestion] = useState('')
  const [submitted, setSubmitted] = useState([])

  const handleSubmit = () => {
    if (!question.trim()) return
    setSubmitted((prev) => [...prev, question.trim()])
    setQuestion('')
  }

  return (
    <div className="flex flex-col gap-5">
      <div>
        <h2 className="text-xl font-bold text-navy-600 mb-1">Got a question?</h2>
        <p className="text-sm text-slate-500">
          Ask anything, completely anonymous. Your tutor will review these questions later in the session.
        </p>
      </div>

      {/* Submitted questions */}
      {submitted.length > 0 && (
        <div className="flex flex-col gap-2">
          {submitted.map((q, i) => (
            <div key={i} className="flex items-start gap-2 bg-teal-50 border border-teal-100 rounded-xl px-3 py-2.5 text-sm text-slate-700">
              <span className="text-teal-400 shrink-0 mt-0.5">
                <Send size={13} />
              </span>
              <span className="flex-1">{q}</span>
            </div>
          ))}
          <p className="text-xs text-teal-500 text-center">
            {submitted.length === 1 ? '1 question submitted' : `${submitted.length} questions submitted`}
          </p>
        </div>
      )}

      {/* Input */}
      <div className="flex flex-col gap-2">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="e.g. Is it safe to use ChatGPT for writing emails?"
          rows={3}
          className="w-full border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-300 resize-none"
        />
        <button
          onClick={handleSubmit}
          disabled={!question.trim()}
          className={[
            'w-full py-2.5 rounded-xl font-semibold text-sm transition-colors',
            question.trim()
              ? 'bg-teal-400 text-white hover:bg-teal-500'
              : 'bg-slate-100 text-slate-400 cursor-not-allowed',
          ].join(' ')}
        >
          Submit anonymously
        </button>
      </div>

      {/* Done / Skip */}
      <div className="border-t border-slate-100 pt-4 flex flex-col gap-2">
        <button
          onClick={onNext}
          className="w-full py-3 rounded-xl font-semibold border-2 border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-colors text-sm"
        >
          {submitted.length > 0 ? 'Done, move on' : 'Skip, no questions right now'}
        </button>
      </div>
    </div>
  )
}
