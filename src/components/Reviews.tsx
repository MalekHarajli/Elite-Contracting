import { Star, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { reviews, site } from '../data/site'
import SectionHeading from './SectionHeading'

export default function Reviews() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="reviews" className="bg-white py-28 sm:py-36">
      <div className="container-px">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by Detroit homeowners"
          subtitle={`${site.rating} ★ on Google across ${site.reviewCount} reviews.`}
        />

        {/* 7 reviews → 4 on the top row, 3 on the bottom (desktop) */}
        <div
          ref={ref}
          className="reveal mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="flex h-full flex-col rounded-2xl border border-ink/10 bg-paper p-6"
            >
              <div className="flex" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-4 line-clamp-5 flex-1 text-[15px] leading-relaxed text-ink/70">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-ink">
                {review.name}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href={site.googleReviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-white px-6 py-3 text-sm font-semibold text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Read all on Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
