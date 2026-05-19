import { useState } from 'react'
import { CheckCircle, XCircle } from 'lucide-react'
import ScoutCard from '../../../components/ScoutCard'

const options = [
  { id: 'a', text: 'Whether the email is too long to paste in one go' },
  { id: 'b', text: 'Whether the email contains personal or sensitive information' },
  { id: 'c', text: 'Whether the AI tool can write in their company tone of voice' },
  { id: 'd', text: 'Whether they have permission to use AI tools at work' },
]

const CORRECT = 'b'

export default function ScenarioChallenge({ onNext, setData }) {
  const [selected, setSelected] = useState(null)
  const [revealed, setRevealed] = useState(false)

  const handleSelect = (id) => {
    if (!revealed) {
      setSelected(id)
      setRevealed(true)
      setData({ scenarioCorrect: id === CORRECT })
    }
  }

  const isCorrect = selected === CORRECT

  return (
    <div className="flex flex-col gap-6">
      <div>
        <span className="inline-block bg-navy-600 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
          Scenario Challenge
        </span>
        <h2 className="text-xl font-bold text-navy-600 mb-2 leading-snug">
          What should they check first?
        </h2>
        <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 text-sm text-slate-700 leading-relaxed">
          <strong>Situation:</strong> A staff member wants to paste a customer complaint email into an AI
          tool to help make the reply sound more professional.
          <br /><br />
          What should they check first before doing this?
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {options.map(({ id, text }) => {
          let style = 'border-slate-200 bg-white hover:border-teal-300 hover:bg-sky-50'
          if (revealed && id === CORRECT) style = 'border-sage-400 bg-emerald-50'
          else if (revealed && id === selected && id !== CORRECT) style = 'border-red-300 bg-red-50'
          else if (revealed) style = 'border-slate-100 bg-slate-50 opacity-60'

          return (
            <button
              key={id}
              onClick={() => handleSelect(id)}
              disabled={revealed}
              className={`flex items-start gap-3 text-left w-full border-2 rounded-xl p-4 transition-all text-sm text-slate-700 ${style}`}
            >
              <span className="mt-0.5 shrink-0 font-semibold text-slate-400 w-4">{id.toUpperCase()}.</span>
              <span>{text}</span>
              {revealed && id === CORRECT && <CheckCircle size={16} className="text-sage-400 shrink-0 ml-auto mt-0.5" />}
              {revealed && id === selected && id !== CORRECT && <XCircle size={16} className="text-red-400 shrink-0 ml-auto mt-0.5" />}
            </button>
          )
        })}
      </div>

      {revealed && (
        <ScoutCard
          tone={isCorrect ? 'success' : 'default'}
          message={
            isCorrect
              ? 'Spot on! Personal data like names, contact details and complaint details needs to be protected. Always check before pasting into any AI tool.'
              : 'The key issue here is data safety — the email may contain personal or sensitive information that shouldn\'t be shared with a third-party AI tool without careful thought.'
          }
        />
      )}

      {revealed && (
        <button
          onClick={onNext}
          className="w-full bg-teal-400 text-white py-3 rounded-xl font-semibold hover:bg-teal-500 transition-colors"
        >
          Continue →
        </button>
      )}
    </div>
  )
}
