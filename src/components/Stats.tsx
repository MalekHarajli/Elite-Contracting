import { useReveal } from '../hooks/useReveal'
import { stats } from '../data/site'

export default function Stats() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="border-y border-white/10 bg-ink">
      <div ref={ref} className="reveal container-px grid grid-cols-2 gap-px py-2 md:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center px-4 py-8 text-center">
            <div className="heading text-3xl text-accent sm:text-4xl">{stat.value}</div>
            <div className="mt-1 text-sm font-medium uppercase tracking-wide text-white/70">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
