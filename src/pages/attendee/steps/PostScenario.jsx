import Scout from '../../../components/Scout'

export default function PostScenario({ onNext }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <Scout size="lg" />

      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-navy-600">Nice work!</h2>
        <p className="text-slate-500 text-sm">That scenario is one your team could face any day.</p>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-xs text-left">
        <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
          <p className="text-sm font-semibold text-navy-600 mb-0.5">Got a question?</p>
          <p className="text-sm text-slate-600">
            You can ask your tutor anything at any point during the session.
          </p>
        </div>
        <div className="bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
          <p className="text-sm font-semibold text-navy-600 mb-0.5">Prefer to ask anonymously?</p>
          <p className="text-sm text-slate-600">
            On the next page you can submit questions without your name attached.
          </p>
        </div>
      </div>

      <button
        onClick={onNext}
        className="w-full max-w-xs bg-teal-400 text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-teal-500 transition-colors shadow-sm"
      >
        Continue
      </button>
    </div>
  )
}
