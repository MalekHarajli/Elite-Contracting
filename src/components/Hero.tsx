import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Star } from 'lucide-react'
import { site, hero } from '../data/site'
import { heroImage } from '../data/portfolio'

export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden bg-ink">
      {/* Decorative background: dot texture + red accent glow (no full-bleed photo) */}
      <div className="dot-grid absolute inset-0 -z-10 opacity-60" aria-hidden="true" />
      <div
        className="absolute -right-32 -top-32 -z-10 h-[520px] w-[520px] rounded-full bg-accent/25 blur-[130px]"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-ink to-transparent"
        aria-hidden="true"
      />

      <div className="container-px grid items-center gap-14 pb-24 pt-36 lg:min-h-[88vh] lg:grid-cols-2 lg:gap-12 lg:pt-40">
        {/* Copy */}
        <div className="max-w-2xl">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-white/80 backdrop-blur-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            {site.tagline}
          </p>

          <h1 className="heading text-5xl leading-[1.05] text-white sm:text-6xl md:text-7xl">
            {hero.headline}
          </h1>

          <p className="mt-6 max-w-xl text-lg text-white/70 sm:text-xl">{hero.subhead}</p>

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

          <div className="mt-10 flex items-center gap-2 text-sm text-white/60">
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-accent text-accent" />
              ))}
            </span>
            <span>{hero.trustLine}</span>
          </div>
        </div>

        {/* Small framed accent image (kept modest so source resolution stays sharp) */}
        {heroImage && (
          <div className="relative hidden lg:block">
            <div
              className="absolute -inset-5 -z-10 rounded-[2rem] bg-accent/20 blur-2xl"
              aria-hidden="true"
            />
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-2xl shadow-black/50">
              <img
                src={heroImage}
                alt="Recent Elite Contracting project"
                loading="eager"
                decoding="async"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 rounded-xl border border-white/10 bg-ink/90 px-5 py-3 backdrop-blur">
              <p className="heading text-2xl text-white">{site.rating}<span className="text-accent">★</span></p>
              <p className="text-xs uppercase tracking-wide text-white/60">Google Rated</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
