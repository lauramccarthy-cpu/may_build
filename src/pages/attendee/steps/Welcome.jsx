import Scout from '../../../components/Scout'

export default function Welcome({ onNext }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <Scout size="lg" />
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold text-navy-600">Hi, I'm Scout! 👋</h1>
        <p className="text-slate-500 text-sm">Your AI readiness guide for today's workshop.</p>
      </div>

      <div className="flex flex-col gap-2 w-full max-w-xs text-left">
        <div className="flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
          <span className="text-base mt-0.5">📊</span>
          <p className="text-sm text-slate-700">A quick confidence check at the start and end</p>
        </div>
        <div className="flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
          <span className="text-base mt-0.5">🧩</span>
          <p className="text-sm text-slate-700">A real-world scenario to explore together</p>
        </div>
        <div className="flex items-start gap-3 bg-sky-50 border border-sky-100 rounded-xl px-4 py-3">
          <span className="text-base mt-0.5">💬</span>
          <p className="text-sm text-slate-700">Space to ask questions, completely anonymously</p>
        </div>
      </div>

      <p className="text-xs text-slate-400">No right or wrong answers. Takes about 5 minutes.</p>

      <button
        onClick={onNext}
        className="w-full max-w-xs bg-teal-400 text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-teal-500 transition-colors shadow-sm"
      >
        Let's get started
      </button>
    </div>
  )
}
