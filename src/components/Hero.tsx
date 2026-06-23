import { Link } from 'react-router-dom'
import { Phone, ArrowRight, Star } from 'lucide-react'
import { site, hero } from '../data/site'
import { heroBg } from '../data/heroBg'

export default function Hero() {
  return (
    <section id="home" className="relative isolate flex min-h-[92vh] items-center overflow-hidden bg-ink">
      {/* Background: a real photo (if added to src/assets/hero/) darkened for text,
          otherwise a sharp design background — never a stretched low-res photo. */}
      {heroBg ? (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <img src={heroBg} alt="" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/40" />
        </div>
      ) : (
        <div className="absolute inset-0 -z-10" aria-hidden="true">
          <div className="dot-grid absolute inset-0 opacity-60" />
          <div className="absolute -right-32 -top-32 h-[560px] w-[560px] rounded-full bg-accent/25 blur-[130px]" />
          <div className="absolute -bottom-40 left-1/4 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[120px]" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-ink to-transparent" />
        </div>
      )}

      <div className="container-px w-full py-32 pt-40">
        <div className="max-w-3xl">
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
      </div>
    </section>
  )
}
