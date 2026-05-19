import { useState } from 'react'
import { ChevronLeft } from 'lucide-react'
import Welcome from './steps/Welcome'
import BusinessProfile from './steps/BusinessProfile'
import OpeningPulse from './steps/OpeningPulse'
import WaitForTutor from './steps/WaitForTutor'
import ScenarioChallenge from './steps/ScenarioChallenge'
import AnonQuestion from './steps/AnonQuestion'
import ClosingPulse from './steps/ClosingPulse'
import EndScreen from './steps/EndScreen'

// Step index reference:
// 0 Welcome  1 BusinessProfile  2 OpeningPulse  3 WaitForTutor
// 4 Scenario  5 AnonQuestion  6 ClosingPulse  7 EndScreen

const TOTAL_PROGRESS_STEPS = 5 // steps that count toward progress bar (1-6, excl welcome+end)

const STEP_LABELS = [
  'Welcome', 'About You', 'Opening Check', 'Wait',
  'Scenario', 'Question', 'Closing Check', 'Done',
]

export default function AttendeeFlow() {
  const [step, setStep] = useState(0)
  const [profile, setProfile] = useState({})
  const [openingRatings, setOpeningRatings] = useState({})
  const [scenarioData, setScenarioData] = useState({})
  const [closingRatings, setClosingRatings] = useState({})

  const next = () => setStep((s) => Math.min(s + 1, 7))
  const back = () => setStep((s) => Math.max(s - 1, 0))

  const showProgress = step >= 1 && step <= 6
  const showBack = step >= 1 && step <= 6
  // progress bar: steps 1-6 map to 1-5 out of 5
  const progressPct = showProgress ? ((step - 1) / TOTAL_STEPS_FOR_BAR) * 100 : 0

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-6">

        {/* Back button */}
        {showBack && (
          <button
            onClick={back}
            className="flex items-center gap-1 text-slate-400 hover:text-slate-600 text-sm mb-4 transition-colors"
          >
            <ChevronLeft size={16} />
            Back
          </button>
        )}

        {/* Progress bar */}
        {showProgress && (
          <div className="mb-5">
            <div className="flex justify-between text-xs text-slate-400 mb-1.5">
              <span>{STEP_LABELS[step]}</span>
              <span>Step {step} of 6</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div
                className="bg-teal-400 h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / 5) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step card */}
        <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-6">
          {step === 0 && <Welcome onNext={next} />}
          {step === 1 && (
            <BusinessProfile onNext={next} onSkip={next} data={profile} setData={setProfile} />
          )}
          {step === 2 && (
            <OpeningPulse onNext={next} data={openingRatings} setData={setOpeningRatings} />
          )}
          {step === 3 && <WaitForTutor onNext={next} />}
          {step === 4 && (
            <ScenarioChallenge onNext={next} setData={setScenarioData} />
          )}
          {step === 5 && (
            <AnonQuestion onNext={next} onSkip={next} />
          )}
          {step === 6 && (
            <ClosingPulse onNext={next} data={closingRatings} setData={setClosingRatings} openingData={openingRatings} />
          )}
          {step === 7 && (
            <EndScreen openingData={openingRatings} closingData={closingRatings} />
          )}
        </div>
      </div>
    </div>
  )
}

const TOTAL_STEPS_FOR_BAR = 5
