import { Phone, Mail, Instagram } from 'lucide-react'
import { site, nav, areas } from '../data/site'

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <div className="container-px py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-2">
            <a href="#home" className="flex items-center gap-3" aria-label={`${site.name} home`}>
              <img src="/logo.png" alt={`${site.name} logo`} className="h-11 w-auto" />
              <span className="heading text-lg text-white">
                ELITE<span className="text-accent"> CONTRACTING</span>
              </span>
            </a>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {site.tagline}. Treating every home like our own across Dearborn Heights and Metro
              Detroit.
            </p>
            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a href={site.phoneHref} className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-accent">
                <Phone className="h-4 w-4" aria-hidden="true" /> {site.phoneDisplay}
              </a>
              <a href={`mailto:${site.email}`} className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-accent">
                <Mail className="h-4 w-4" aria-hidden="true" /> {site.email}
              </a>
              <a
                href={site.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-white/80 transition-colors hover:text-accent"
              >
                <Instagram className="h-4 w-4" aria-hidden="true" /> {site.instagramHandle}
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">Explore</h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm text-white/70 transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-white/45">Areas Served</h3>
            <ul className="mt-4 flex flex-wrap gap-x-3 gap-y-2">
              {areas.map((area) => (
                <li key={area} className="text-sm text-white/70">
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm text-white/50">
            © {site.year} {site.name}. All rights reserved.
          </p>
          <p className="text-sm text-white/50">{site.hours} · Licensed &amp; Insured</p>
        </div>
      </div>
    </footer>
  )
}
