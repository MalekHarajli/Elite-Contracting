import Portfolio from '../components/Portfolio'
import Reviews from '../components/Reviews'
import Areas from '../components/Areas'

export default function PortfolioPage() {
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
