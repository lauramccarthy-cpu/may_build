import { useState } from 'react'
import { CATEGORIES } from '../../../data/sampleData'
import ConfidenceRating from '../../../components/ConfidenceRating'
import ScoutCard from '../../../components/ScoutCard'

export default function OpeningPulse({ onNext, data, setData }) {
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
        <h2 className="text-xl font-bold text-navy-DEFAULT mb-1">How confident do you feel right now?</h2>
        <p className="text-sm text-slate-500">Rate each area from 1 (not at all) to 5 (very confident).</p>
      </div>

      <ScoutCard message="Don't overthink it — go with your gut. There are no wrong answers here." />

      <div className="bg-white rounded-2xl border border-slate-100 shadow-card px-4 py-2">
        {CATEGORIES.map(({ key, label }) => (
          <ConfidenceRating
            key={key}
            label={label}
            value={ratings[key] ?? null}
            onChange={(val) => handleChange(key, val)}
          />
        ))}
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
        Continue →
      </button>
    </div>
  )
}
