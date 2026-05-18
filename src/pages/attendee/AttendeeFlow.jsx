import { useState } from 'react'
import Welcome from './steps/Welcome'
import BusinessProfile from './steps/BusinessProfile'
import OpeningPulse from './steps/OpeningPulse'
import ScenarioChallenge from './steps/ScenarioChallenge'
import AnonQuestion from './steps/AnonQuestion'
import ClosingPulse from './steps/ClosingPulse'
import EndScreen from './steps/EndScreen'

const STEPS = [
  'Welcome',
  'About You',
  'Opening Check',
  'Scenario',
  'Question',
  'Closing Check',
  'Done',
]

export default function AttendeeFlow() {
  const [step, setStep] = useState(0)
  const [profile, setProfile] = useState({})
  const [openingRatings, setOpeningRatings] = useState({})
  const [scenarioData, setScenarioData] = useState({})
  const [closingRatings, setClosingRatings] = useState({})

  const next = () => setStep((s) => Math.min(s + 1, STEPS.length - 1))

  // Progress bar (don't show on last step)
  const showProgress = step > 0 && step < STEPS.length - 1

  return (
    <div className="min-h-[calc(100vh-64px)] bg-gradient-to-b from-sky-50 to-white">
      <div className="max-w-lg mx-auto px-4 sm:px-6 py-8">

        {/* Progress indicator */}
        {showProgress && (
          <div className="mb-6">
            <div className="flex justify-between text-xs text-slate-400 mb-1.5">
              <span>{STEPS[step]}</span>
              <span>Step {step} of {STEPS.length - 2}</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-1.5">
              <div
                className="bg-teal-DEFAULT h-1.5 rounded-full transition-all duration-500"
                style={{ width: `${((step - 1) / (STEPS.length - 2)) * 100}%` }}
              />
            </div>
          </div>
        )}

        {/* Step card */}
        <div className="bg-white rounded-2xl shadow-card border border-slate-100 p-6">
          {step === 0 && <Welcome onNext={next} />}
          {step === 1 && (
            <BusinessProfile
              onNext={next}
              onSkip={next}
              data={profile}
              setData={setProfile}
            />
          )}
          {step === 2 && (
            <OpeningPulse
              onNext={next}
              data={openingRatings}
              setData={setOpeningRatings}
            />
          )}
          {step === 3 && (
            <ScenarioChallenge
              onNext={next}
              setData={setScenarioData}
            />
          )}
          {step === 4 && (
            <AnonQuestion
              onNext={next}
              onSkip={next}
            />
          )}
          {step === 5 && (
            <ClosingPulse
              onNext={next}
              data={closingRatings}
              setData={setClosingRatings}
              openingData={openingRatings}
            />
          )}
          {step === 6 && (
            <EndScreen
              openingData={openingRatings}
              closingData={closingRatings}
            />
          )}
        </div>
      </div>
    </div>
  )
}
