import Portfolio from '../components/Portfolio'
import Reviews from '../components/Reviews'
import Areas from '../components/Areas'
import { useSeo } from '../hooks/useSeo'

export default function PortfolioPage() {
  useSeo(
    'Remodeling Portfolio — Kitchens, Baths & Renovations | Elite Contracting',
    'See recent home remodeling and renovation projects by Elite Contracting across Metro Detroit — kitchens, bathrooms, basements and full home makeovers.',
  )

  return (
    <>
      {/* Spacer so the gallery clears the fixed header */}
      <div className="h-16" />
      <Portfolio />
      <Reviews />
      <Areas />
    </>
  )
}
