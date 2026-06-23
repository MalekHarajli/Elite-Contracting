import { useState } from 'react'
import { Maximize2 } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { portfolio } from '../data/portfolio'
import SectionHeading from './SectionHeading'
import Lightbox from './Lightbox'

export default function Portfolio() {
  const ref = useReveal<HTMLDivElement>()
  const [active, setActive] = useState<number | null>(null)

  return (
    <section id="portfolio" className="bg-paper py-28 sm:py-36">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Work"
          title="Portfolio"
          subtitle="A selection of recent projects across Metro Detroit. Click any image to view it full-size."
        />

        {/* Uniform thumbnail grid (3–4 across) — keeps low-res source looking crisp */}
        <div
          ref={ref}
          className="reveal mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4"
        >
          {portfolio.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-ink/10 bg-ink/5 shadow-sm"
              aria-label={`Enlarge ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Subtle permanent gradient for polish + hover icon */}
              <span className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <Maximize2 className="h-7 w-7 text-white" aria-hidden="true" />
              </span>
            </button>
          ))}
        </div>
      </div>

      {active !== null && (
        <Lightbox index={active} onClose={() => setActive(null)} onNavigate={setActive} />
      )}
    </section>
  )
}
