import {
  ChefHat,
  Bath,
  Layers,
  Home,
  Building2,
  Grid3x3,
  Hammer,
  Wrench,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { services } from '../data/site'
import SectionHeading from './SectionHeading'

const icons: Record<string, LucideIcon> = {
  ChefHat,
  Bath,
  Layers,
  Home,
  Building2,
  Grid3x3,
  Hammer,
  Wrench,
  ShieldCheck,
  Sparkles,
}

export default function Services() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="services" className="bg-white py-28 sm:py-36">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          title="Services"
          subtitle="From a single room to a full custom build, we deliver the same level of craftsmanship at every scale."
        />

        {/* Exactly 10 cards — 2 rows of 5 on desktop, collapsing 5 → 3 → 2 → 1 */}
        <div
          ref={ref}
          className="reveal mt-16 grid auto-rows-fr grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5"
        >
          {services.map((service) => {
            const Icon = icons[service.icon] ?? Sparkles
            return (
              <article
                key={service.title}
                className="group flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lg hover:shadow-ink/5"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="heading text-base text-ink">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink/55">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
