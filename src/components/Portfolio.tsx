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
    <section id="portfolio" className="border-t border-white/10 bg-black py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Our Work"
          title="Portfolio"
          subtitle="A selection of recent projects across Metro Detroit. Click any image to view it full-size."
        />

        <div
          ref={ref}
          className="reveal mt-16 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 [grid-auto-rows:1fr]"
        >
          {portfolio.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setActive(i)}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-white/10 bg-white/5"
              aria-label={`Enlarge ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <span className="absolute inset-0 flex items-center justify-center bg-ink/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
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
