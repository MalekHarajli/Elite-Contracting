import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center'
  /** 'light' = dark text for light backgrounds, 'dark' = white text for dark backgrounds */
  tone?: 'light' | 'dark'
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
}: Props) {
  const titleColor = tone === 'dark' ? 'text-white' : 'text-ink'
  const subtitleColor = tone === 'dark' ? 'text-white/70' : 'text-ink/60'

  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className={`heading text-4xl sm:text-5xl ${titleColor}`}>{title}</h2>
      {subtitle && <p className={`mt-4 text-lg ${subtitleColor}`}>{subtitle}</p>}
    </div>
  )
}
