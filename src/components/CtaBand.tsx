import { Link } from 'react-router-dom'
import { ArrowRight, Images, Phone } from 'lucide-react'
import { site } from '../data/site'

/** Closing call-to-action on the Home page, linking to the other pages. */
export default function CtaBand() {
  return (
    <section className="border-t border-white/10 bg-black py-24 sm:py-28">
      <div className="container-px text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          Ready When You Are
        </p>
        <h2 className="heading mx-auto max-w-2xl text-4xl text-white sm:text-5xl">
          Let’s build something you’ll be proud of.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-lg text-white/70">
          Browse our recent work, then reach out for a free, no-pressure quote.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white shadow-xl shadow-accent/25 transition-all hover:bg-accent-dark"
          >
            Get a Free Quote
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Images className="h-5 w-5" aria-hidden="true" />
            View Portfolio
          </Link>
          <a
            href={site.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white transition-colors hover:bg-white/10"
          >
            <Phone className="h-5 w-5" aria-hidden="true" />
            Call Now
          </a>
        </div>
      </div>
    </section>
  )
}
