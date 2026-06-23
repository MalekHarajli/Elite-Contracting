import Hero from '../components/Hero'
import Stats from '../components/Stats'
import Services from '../components/Services'
import About from '../components/About'
import CtaBand from '../components/CtaBand'
import { useSeo } from '../hooks/useSeo'

export default function Home() {
  useSeo(
    'Home Remodeling Contractor in Metro Detroit | Elite Contracting',
    'Top-rated home remodeling contractor in Dearborn Heights & Metro Detroit. Kitchen and bathroom remodels, basement finishing, additions and full renovations. 5.0★ on Google — free quotes.',
  )

  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <About />
      <CtaBand />
    </>
  )
}
