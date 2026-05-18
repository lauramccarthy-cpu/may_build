import { useState } from 'react'
import { BUSINESS_TYPES, BUSINESS_SIZES } from '../../../data/sampleData'
import ScoutCard from '../../../components/ScoutCard'

export default function BusinessProfile({ onNext, onSkip, data, setData }) {
  const [type, setType] = useState(data.businessType ?? '')
  const [size, setSize] = useState(data.businessSize ?? '')

  const handleNext = () => {
    setData({ businessType: type || null, businessSize: size || null })
    onNext()
  }

  const selectClass =
    'w-full border border-slate-200 rounded-xl px-3 py-2.5 text-sm text-slate-700 focus:outline-none focus:ring-2 focus:ring-teal-300 bg-white'

  return (
    <div className="flex flex-col gap-6">
      <ScoutCard message="This is optional — just helps us understand the mix of businesses in the room. We never share individual details." />

      <div>
        <h2 className="text-xl font-bold text-navy-DEFAULT mb-1">Tell us a little about your business</h2>
        <p className="text-sm text-slate-500">Optional — you can skip this if you prefer.</p>
      </div>

      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Business type</label>
          <select className={selectClass} value={type} onChange={(e) => setType(e.target.value)}>
            <option value="">Select a type…</option>
            {BUSINESS_TYPES.map((t) => (
              <option key={t} value={t}>{t}</option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-1.5">Business size</label>
          <select className={selectClass} value={size} onChange={(e) => setSize(e.target.value)}>
            <option value="">Select a size…</option>
            {BUSINESS_SIZES.map((s) => (
              <option key={s} value={s}>{s}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex gap-3 pt-2">
        <button
          onClick={handleNext}
          className="flex-1 bg-teal-DEFAULT text-white px-6 py-3 rounded-xl font-semibold hover:bg-teal-500 transition-colors"
        >
          Continue →
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
