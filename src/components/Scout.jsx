// Scout — WorkFluency AI Companion mascot
// Built entirely with SVG shapes — no external images needed.
// Usage: <Scout size="sm" /> or <Scout size="lg" /> or <Scout size="md" />

export default function Scout({ size = 'sm' }) {
  const dims = { sm: 44, md: 64, lg: 96 }
  const d = dims[size] ?? dims.sm

  // Scale factor relative to the lg (96px) design
  const s = d / 96

  return (
    <svg
      width={d}
      height={d}
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Scout, your AI readiness guide"
      role="img"
      style={{ flexShrink: 0 }}
    >
      {/* Antenna base */}
      <line x1="48" y1="10" x2="48" y2="22" stroke="#2a9d8f" strokeWidth="3" strokeLinecap="round" />

      {/* Antenna glow dot */}
      <circle cx="48" cy="7" r="4" fill="#52b788">
        {size === 'lg' && (
          <animate
            attributeName="r"
            values="3;5;3"
            dur="2s"
            repeatCount="indefinite"
          />
        )}
      </circle>

      {/* Head — rounded square */}
      <rect
        x="14"
        y="22"
        width="68"
        height="62"
        rx="18"
        fill="url(#scoutGrad)"
      />

      {/* Highlight sheen */}
      <ellipse cx="38" cy="34" rx="14" ry="7" fill="white" fillOpacity="0.15" />

      {/* Left eye */}
      <circle cx="34" cy="48" r="6" fill="white" />
      <circle cx="35" cy="49" r="3" fill="#1e3a5f" />
      <circle cx="36.5" cy="47.5" r="1" fill="white" />

      {/* Right eye */}
      <circle cx="62" cy="48" r="6" fill="white" />
      <circle cx="63" cy="49" r="3" fill="#1e3a5f" />
      <circle cx="64.5" cy="47.5" r="1" fill="white" />

      {/* Smile */}
      <path
        d="M36 62 Q48 72 60 62"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
      />

      {/* Gradient def */}
      <defs>
        <linearGradient id="scoutGrad" x1="14" y1="22" x2="82" y2="84" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#2a9d8f" />
          <stop offset="100%" stopColor="#1e3a5f" />
        </linearGradient>
      </defs>
    </svg>
  )
}
