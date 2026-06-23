import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Star } from 'lucide-react'
import { site, hero } from '../data/site'
import { heroImage } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-center overflow-hidden">
      {/* Background image (best portfolio shot), darkened */}
      <div className="absolute inset-0 -z-10">
        {heroImage && (
          <img
            src={heroImage}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />
      </div>

      <div className="container-px py-28">
        <div className="max-w-3xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.tagline}
          </p>

          <h1 className="heading text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/80 sm:text-xl">{hero.subhead}</p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-4 text-base font-semibold text-white shadow-xl shadow-accent/25 transition-all hover:bg-accent-dark"
            >
              Get a Free Quote
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-4 text-base font-semibold text-white backdrop-blur-sm transition-colors hover:bg-white/10"
            >
              <Phone className="h-5 w-5" aria-hidden="true" />
              Call Now
            </a>
          </div>

          <div className="mt-10 flex items-center gap-2 text-sm text-white/70">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </span>
            <span>{hero.trustLine}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
