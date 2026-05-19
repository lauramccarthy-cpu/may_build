import Scout from '../../../components/Scout'

const variants = {
  'before-scenario': {
    title: 'Great work!',
    subtitle: 'You have completed the opening confidence check.',
    body: 'Your tutor will let you know when to move on to the next part.',
    buttonLabel: 'Tutor says go, continue',
  },
  'before-closing': {
    title: 'Questions submitted!',
    subtitle: 'Your tutor has received any questions from the group.',
    body: 'Wait here until your tutor asks you to complete the final confidence check.',
    buttonLabel: 'Tutor says go, continue',
  },
}

export default function WaitForTutor({ onNext, variant = 'before-scenario' }) {
  const v = variants[variant] ?? variants['before-scenario']

  return (
    <div className="flex flex-col items-center text-center gap-6 py-8">
      <Scout size="lg" />

      <div className="flex flex-col gap-1">
        <h2 className="text-2xl font-bold text-navy-600">{v.title}</h2>
        <p className="text-slate-500 text-sm">{v.subtitle}</p>
      </div>

      <div className="bg-amber-50 border border-amber-200 rounded-2xl px-6 py-5 w-full max-w-xs">
        <p className="text-2xl mb-2">⏳</p>
        <p className="font-semibold text-slate-700 text-sm mb-1">Please wait here for now.</p>
        <p className="text-slate-500 text-sm">{v.body}</p>
      </div>

      <button
        onClick={onNext}
        className="w-full max-w-xs bg-teal-400 text-white px-8 py-3 rounded-xl font-semibold text-base hover:bg-teal-500 transition-colors shadow-sm"
      >
        {v.buttonLabel}
      </button>

      <p className="text-xs text-slate-300">Only tap this when your tutor gives the signal.</p>
    </div>
  )
}
