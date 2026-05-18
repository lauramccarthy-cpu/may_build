export const CATEGORIES = [
  { key: 'aiOpportunities', label: 'AI Opportunities' },
  { key: 'aiRisks', label: 'AI Risks' },
  { key: 'dataSafety', label: 'Data Safety' },
  { key: 'staffGuidance', label: 'Staff Guidance' },
  { key: 'nextSteps', label: 'Next Steps' },
]

export const BUSINESS_TYPES = [
  'Retail',
  'Professional Services',
  'Healthcare',
  'Hospitality',
  'Construction & Trades',
  'Creative & Media',
  'Education & Training',
  'Finance & Accounting',
  'Technology',
  'Other',
]

export const BUSINESS_SIZES = [
  'Just me (sole trader)',
  '2–9 employees',
  '10–49 employees',
  '50–249 employees',
]

export const attendees = [
  {
    id: 1,
    businessType: 'Retail',
    businessSize: '10–49 employees',
    opening: { aiOpportunities: 2, aiRisks: 2, dataSafety: 2, staffGuidance: 1, nextSteps: 1 },
    closing: { aiOpportunities: 4, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 3 },
    scenarioCorrect: true,
    anonQuestion: 'Are there AI tools that are safe to use with customer data?',
  },
  {
    id: 2,
    businessType: 'Professional Services',
    businessSize: '2–9 employees',
    opening: { aiOpportunities: 3, aiRisks: 2, dataSafety: 2, staffGuidance: 2, nextSteps: 2 },
    closing: { aiOpportunities: 4, aiRisks: 4, dataSafety: 4, staffGuidance: 3, nextSteps: 3 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
  {
    id: 3,
    businessType: 'Hospitality',
    businessSize: '10–49 employees',
    opening: { aiOpportunities: 1, aiRisks: 1, dataSafety: 1, staffGuidance: 1, nextSteps: 1 },
    closing: { aiOpportunities: 3, aiRisks: 3, dataSafety: 2, staffGuidance: 2, nextSteps: 2 },
    scenarioCorrect: false,
    anonQuestion: 'How do I write an AI policy for my team without it sounding scary?',
  },
  {
    id: 4,
    businessType: 'Construction & Trades',
    businessSize: '2–9 employees',
    opening: { aiOpportunities: 2, aiRisks: 3, dataSafety: 2, staffGuidance: 2, nextSteps: 2 },
    closing: { aiOpportunities: 3, aiRisks: 4, dataSafety: 3, staffGuidance: 2, nextSteps: 3 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
  {
    id: 5,
    businessType: 'Healthcare',
    businessSize: '10–49 employees',
    opening: { aiOpportunities: 2, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 2 },
    closing: { aiOpportunities: 4, aiRisks: 5, dataSafety: 5, staffGuidance: 3, nextSteps: 3 },
    scenarioCorrect: true,
    anonQuestion: 'What are the GDPR implications of using AI in a healthcare setting?',
  },
  {
    id: 6,
    businessType: 'Creative & Media',
    businessSize: 'Just me (sole trader)',
    opening: { aiOpportunities: 4, aiRisks: 2, dataSafety: 2, staffGuidance: 2, nextSteps: 3 },
    closing: { aiOpportunities: 5, aiRisks: 4, dataSafety: 3, staffGuidance: 3, nextSteps: 4 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
  {
    id: 7,
    businessType: 'Finance & Accounting',
    businessSize: '2–9 employees',
    opening: { aiOpportunities: 3, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 2 },
    closing: { aiOpportunities: 4, aiRisks: 4, dataSafety: 4, staffGuidance: 3, nextSteps: 3 },
    scenarioCorrect: true,
    anonQuestion: 'Can AI be used for bookkeeping without compromising client confidentiality?',
  },
  {
    id: 8,
    businessType: 'Retail',
    businessSize: '50–249 employees',
    opening: { aiOpportunities: 2, aiRisks: 2, dataSafety: 1, staffGuidance: 1, nextSteps: 1 },
    closing: { aiOpportunities: 3, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 3 },
    scenarioCorrect: false,
    anonQuestion: null,
  },
  {
    id: 9,
    businessType: 'Education & Training',
    businessSize: '10–49 employees',
    opening: { aiOpportunities: 3, aiRisks: 2, dataSafety: 2, staffGuidance: 2, nextSteps: 2 },
    closing: { aiOpportunities: 5, aiRisks: 4, dataSafety: 4, staffGuidance: 3, nextSteps: 4 },
    scenarioCorrect: true,
    anonQuestion: 'How do we handle AI-generated content in student work?',
  },
  {
    id: 10,
    businessType: 'Professional Services',
    businessSize: '10–49 employees',
    opening: { aiOpportunities: 3, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 3 },
    closing: { aiOpportunities: 4, aiRisks: 4, dataSafety: 4, staffGuidance: 3, nextSteps: 4 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
  {
    id: 11,
    businessType: 'Technology',
    businessSize: '2–9 employees',
    opening: { aiOpportunities: 4, aiRisks: 3, dataSafety: 3, staffGuidance: 3, nextSteps: 3 },
    closing: { aiOpportunities: 5, aiRisks: 4, dataSafety: 4, staffGuidance: 4, nextSteps: 5 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
  {
    id: 12,
    businessType: 'Hospitality',
    businessSize: '10–49 employees',
    opening: { aiOpportunities: 1, aiRisks: 2, dataSafety: 1, staffGuidance: 1, nextSteps: 1 },
    closing: { aiOpportunities: 3, aiRisks: 3, dataSafety: 2, staffGuidance: 2, nextSteps: 2 },
    scenarioCorrect: false,
    anonQuestion: 'Could AI replace some of our front-of-house roles?',
  },
  {
    id: 13,
    businessType: 'Construction & Trades',
    businessSize: 'Just me (sole trader)',
    opening: { aiOpportunities: 2, aiRisks: 2, dataSafety: 2, staffGuidance: 2, nextSteps: 1 },
    closing: { aiOpportunities: 3, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 3 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
  {
    id: 14,
    businessType: 'Finance & Accounting',
    businessSize: '10–49 employees',
    opening: { aiOpportunities: 3, aiRisks: 4, dataSafety: 4, staffGuidance: 2, nextSteps: 2 },
    closing: { aiOpportunities: 4, aiRisks: 5, dataSafety: 5, staffGuidance: 3, nextSteps: 3 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
  {
    id: 15,
    businessType: 'Healthcare',
    businessSize: '2–9 employees',
    opening: { aiOpportunities: 2, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 2 },
    closing: { aiOpportunities: 3, aiRisks: 4, dataSafety: 4, staffGuidance: 3, nextSteps: 3 },
    scenarioCorrect: true,
    anonQuestion: 'Is it safe to use AI transcription tools for patient consultations?',
  },
  {
    id: 16,
    businessType: 'Retail',
    businessSize: '2–9 employees',
    opening: { aiOpportunities: 2, aiRisks: 2, dataSafety: 2, staffGuidance: 1, nextSteps: 2 },
    closing: { aiOpportunities: 4, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 3 },
    scenarioCorrect: false,
    anonQuestion: null,
  },
  {
    id: 17,
    businessType: 'Creative & Media',
    businessSize: '2–9 employees',
    opening: { aiOpportunities: 4, aiRisks: 2, dataSafety: 2, staffGuidance: 2, nextSteps: 3 },
    closing: { aiOpportunities: 5, aiRisks: 3, dataSafety: 3, staffGuidance: 2, nextSteps: 4 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
  {
    id: 18,
    businessType: 'Education & Training',
    businessSize: '50–249 employees',
    opening: { aiOpportunities: 3, aiRisks: 2, dataSafety: 2, staffGuidance: 2, nextSteps: 2 },
    closing: { aiOpportunities: 4, aiRisks: 3, dataSafety: 3, staffGuidance: 3, nextSteps: 4 },
    scenarioCorrect: true,
    anonQuestion: null,
  },
]

// Helper: compute averages across all attendees for a phase ('opening' | 'closing')
export function computeAverages(phase) {
  const result = {}
  CATEGORIES.forEach(({ key }) => {
    const sum = attendees.reduce((acc, a) => acc + a[phase][key], 0)
    result[key] = Math.round((sum / attendees.length) * 10) / 10
  })
  return result
}

// Helper: get category with biggest improvement
export function biggestImprovement() {
  const open = computeAverages('opening')
  const close = computeAverages('closing')
  let best = null
  let bestDelta = -Infinity
  CATEGORIES.forEach(({ key, label }) => {
    const delta = close[key] - open[key]
    if (delta > bestDelta) { bestDelta = delta; best = label }
  })
  return best
}

// Helper: get category with biggest remaining gap (lowest closing average)
export function biggestGap() {
  const close = computeAverages('closing')
  let worst = null
  let worstVal = Infinity
  CATEGORIES.forEach(({ key, label }) => {
    if (close[key] < worstVal) { worstVal = close[key]; worst = label }
  })
  return worst
}

export const anonQuestions = attendees
  .filter((a) => a.anonQuestion)
  .map((a) => a.anonQuestion)

export const scenarioCorrectCount = attendees.filter((a) => a.scenarioCorrect).length
