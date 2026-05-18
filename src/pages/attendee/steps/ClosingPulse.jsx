import { useState } from 'react'
import { CATEGORIES } from '../../../data/sampleData'
import ConfidenceRating from '../../../components/ConfidenceRating'
import ScoutCard from '../../../components/ScoutCard'

export default function ClosingPulse({ onNext, data, setData, openingData }) {
  const [ratings, setRatings] = useState(data ?? {})

  const allRated = CATEGORIES.every(({ key }) => ratings[key])

  const handleChange = (key, val) => setRatings((prev) => ({ ...prev, [key]: val }))

  const handleNext = () => {
    setData(ratings)
    onNext()
  }

  return (
    <div className="flex flex-col gap-6">
      <div>
        <h2 className="text-xl font-bold text-navy-DEFAULT mb-1">How do you feel now?</h2>
        <p className="text-sm text-slate-500">Rate the same five areas again — let's see how you've moved.</p>
      </div>

      <ScoutCard message="Even a small shift in one area is a real win. Be honest — this is just for you." />

      <div className="bg-white rounded-2xl border border-slate-100 shadow-card px-4 py-2">
        {CATEGORIES.map(({ key, label }) => {
          const before = openingData?.[key]
          return (
            <div key={key} className="relative">
              {before && (
                <span className="absolute right-0 top-3.5 text-xs text-slate-300 font-medium">
                  Was: {before}
                </span>
              )}
              <ConfidenceRating
                label={label}
                value={ratings[key] ?? null}
                onChange={(val) => handleChange(key, val)}
              />
            </div>
          )
        })}
      </div>

      {!allRated && (
        <p className="text-xs text-slate-400 text-center">Rate all five areas to continue</p>
      )}

      <button
        onClick={handleNext}
        disabled={!allRated}
        className={[
          'w-full py-3 rounded-xl font-semibold transition-colors',
          allRated
            ? 'bg-teal-DEFAULT text-white hover:bg-teal-500'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed',
        ].join(' ')}
      >
        See my results →
      </button>
    </div>
  )
}
