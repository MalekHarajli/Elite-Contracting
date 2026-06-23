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
    <section id="services" className="bg-ink py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="What We Do"
          title="Services"
          subtitle="From a single room to a full custom build, we deliver the same level of craftsmanship at every scale."
        />

        <div
          ref={ref}
          className="reveal mt-16 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = icons[service.icon] ?? Sparkles
            return (
              <article
                key={service.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/50 hover:bg-white/[0.06]"
              >
                <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-white">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="heading text-xl text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/70">{service.description}</p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
