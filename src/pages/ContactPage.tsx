import Contact from '../components/Contact'
import { useSeo } from '../hooks/useSeo'

export default function ContactPage() {
  useSeo(
    'Free Remodeling Quote — Contractor Near You in Metro Detroit | Elite Contracting',
    'Need a home remodeling contractor near you? Contact Elite Contracting in Metro Detroit for a free, same-day quote on kitchens, baths, basements, additions and renovations.',
  )

  return (
    <>
      {/* Spacer so the form clears the fixed header */}
      <div className="h-16" />
      <Contact />
    </>
  )
}
