import { Link } from 'react-router-dom'
import { Check } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { about, site } from '../data/site'

export default function About() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-ink py-24 sm:py-32">
      <div
        ref={ref}
        className="reveal container-px grid items-center gap-12 lg:grid-cols-2 lg:gap-20"
      >
        <div>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Why Elite
          </p>
          <h2 className="heading text-4xl text-white sm:text-5xl">
            We build like it’s our own home.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-white/75">{about.blurb}</p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3.5 text-base font-semibold text-white transition-colors hover:bg-accent-dark"
          >
            Start Your Project
          </Link>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2">
          {about.values.map((value) => (
            <li
              key={value}
              className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-5"
            >
              <span className="mt-0.5 inline-flex h-6 w-6 flex-none items-center justify-center rounded-full bg-accent text-white">
                <Check className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="font-medium text-white/90">{value}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="container-px mt-12 text-center text-sm uppercase tracking-widest text-white/40">
        {site.hours} · Licensed &amp; Insured · {site.serviceArea}
      </p>
    </section>
  )
}
