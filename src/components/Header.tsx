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
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-white/10 bg-ink/90 backdrop-blur-md'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div
        className={`container-px flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'h-16' : 'h-20'
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3" aria-label={`${site.name} home`}>
          <img
            src="/logo.png"
            alt={`${site.name} logo`}
            className={`w-auto transition-all duration-300 ${scrolled ? 'h-9' : 'h-11'}`}
          />
          <span className="heading hidden text-lg leading-none text-white sm:block">
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
                `text-sm font-medium transition-colors hover:text-white ${
                  isActive ? 'text-accent' : 'text-white/80'
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:text-accent"
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
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-white lg:hidden"
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
          className="border-t border-white/10 bg-ink/95 backdrop-blur-md lg:hidden"
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
                  `border-b border-white/5 py-3 text-base font-medium transition-colors hover:text-white ${
                    isActive ? 'text-accent' : 'text-white/80'
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
              className="flex items-center gap-2 py-3 text-base font-medium text-white/80 transition-colors hover:text-white"
            >
              <Instagram className="h-5 w-5" aria-hidden="true" /> Instagram
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
