import Portfolio from '../components/Portfolio'
import Areas from '../components/Areas'

export default function PortfolioPage() {
  return (
    <>
      {/* Spacer so the gallery clears the fixed header */}
      <div className="h-16" />
      <Portfolio />
      <Areas />
    </>
  )
}
