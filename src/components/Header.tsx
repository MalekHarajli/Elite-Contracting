import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Phone, Menu, X, Instagram } from 'lucide-react'
import { site, nav } from '../data/site'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b bg-white/85 backdrop-blur-md transition-all duration-300 ${
        scrolled ? 'border-ink/10 shadow-sm' : 'border-transparent'
      }`}
    >
      <div
        className={`container-px flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Logo (on a dark chip so a light logo stays readable on white) */}
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <span className="inline-flex items-center justify-center rounded-lg bg-ink p-1.5">
            <img
              src="/logo.png"
              alt={`${site.name} logo`}
              className={`w-auto transition-all duration-300 ${scrolled ? 'h-8' : 'h-9'}`}
            />
          </span>
          <span className="heading hidden text-lg leading-none text-ink sm:block">
            ELITE<span className="text-accent"> CONTRACTING</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-accent ${
                  isActive ? 'text-accent' : 'text-ink/70'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Instagram + Call CTA + mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href={site.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Elite Contracting on Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-ink/15 text-ink transition-colors hover:border-accent hover:text-accent"
          >
            <Instagram className="h-5 w-5" aria-hidden="true" />
          </a>

          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-accent/20 transition-all hover:bg-accent-dark hover:shadow-accent/30"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            <span className="hidden sm:inline">Call {site.phoneDisplay}</span>
            <span className="sm:hidden">Call</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-ink lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav
          className="border-t border-ink/10 bg-white lg:hidden"
          aria-label="Mobile"
        >
          <div className="container-px flex flex-col py-2">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                onClick={() => setMenuOpen(false)}
                className={({ isActive }) =>
                  `border-b border-ink/5 py-3 text-base font-medium transition-colors hover:text-accent ${
                    isActive ? 'text-accent' : 'text-ink/80'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={site.instagram}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="flex items-center gap-2 py-3 text-base font-medium text-ink/80 transition-colors hover:text-accent"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" /> Instagram
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
