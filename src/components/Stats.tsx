import { useReveal } from '../hooks/useReveal'
import { stats } from '../data/site'

export default function Stats() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section className="bg-paper">
      <div
        ref={ref}
        className="reveal container-px grid grid-cols-2 divide-x divide-y divide-ink/10 border-y border-ink/10 sm:divide-y-0 md:grid-cols-4"
      >
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center px-4 py-10 text-center">
            <div className="heading text-3xl text-accent sm:text-4xl">{stat.value}</div>
            <div className="mt-1.5 text-sm font-medium uppercase tracking-wide text-ink/55">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
