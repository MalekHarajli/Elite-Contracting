import { MapPin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { areas } from '../data/site'
import SectionHeading from './SectionHeading'

export default function Areas() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="areas" className="bg-ink py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Service Area"
          title="Areas We Serve"
          subtitle="Proudly serving Dearborn Heights and Metro Detroit."
        />

        <div ref={ref} className="reveal mt-14 flex flex-wrap justify-center gap-3">
          {areas.map((area) => (
            <span
              key={area}
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/[0.04] px-5 py-2.5 text-sm font-medium text-white/85 transition-colors hover:border-accent/50 hover:text-white"
            >
              <MapPin className="h-4 w-4 text-accent" aria-hidden="true" />
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
