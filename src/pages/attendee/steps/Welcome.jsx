import Scout from '../../../components/Scout'

export default function Welcome({ onNext }) {
  return (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <Scout size="lg" />
      <div>
        <h1 className="text-2xl font-bold text-navy-600 mb-2">Hi, I'm Scout! 👋</h1>
        <p className="text-slate-600 max-w-md">
          I'm your AI readiness guide for today's workshop. We'll take a quick check of how confident you
          feel about AI right now — and again at the end so you can see how far you've come.
        </p>
      </div>
      <div className="bg-sky-50 border border-sky-200 rounded-2xl p-4 max-w-sm text-left text-sm text-slate-700 space-y-2">
        <p>✅ Your answers are <strong>completely anonymous</strong></p>
        <p>✅ There are no right or wrong answers</p>
        <p>✅ This takes about <strong>5 minutes</strong></p>
      </div>
      <button
        onClick={onNext}
        className="bg-teal-400 text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-teal-500 transition-colors shadow-sm"
      >
        Let's get started →
      </button>
    </div>
  )
}
