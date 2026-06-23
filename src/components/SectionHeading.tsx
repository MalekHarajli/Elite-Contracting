import type { ReactNode } from 'react'

type Props = {
  eyebrow?: string
  title: ReactNode
  subtitle?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, subtitle, align = 'center' }: Props) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl text-left'}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="heading text-4xl text-white sm:text-5xl">{title}</h2>
      {subtitle && <p className="mt-4 text-lg text-white/70">{subtitle}</p>}
    </div>
  )
}
