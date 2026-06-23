import { MapPin } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { areas } from '../data/site'
import SectionHeading from './SectionHeading'

export default function Areas() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="areas" className="bg-paper py-28 sm:py-36">
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
              className="inline-flex items-center gap-2 rounded-full border border-ink/12 bg-white px-5 py-2.5 text-sm font-medium text-ink/80 shadow-sm transition-colors hover:border-accent/50 hover:text-ink"
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
