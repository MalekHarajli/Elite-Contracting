import { Star, Quote, ExternalLink } from 'lucide-react'
import { useReveal } from '../hooks/useReveal'
import { reviews, site } from '../data/site'
import SectionHeading from './SectionHeading'

export default function Reviews() {
  const ref = useReveal<HTMLDivElement>()

  return (
    <section id="reviews" className="border-t border-white/10 bg-black py-24 sm:py-32">
      <div className="container-px">
        <SectionHeading
          eyebrow="Reviews"
          title="Trusted by Detroit homeowners"
          subtitle={`${site.rating} ★ on Google across ${site.reviewCount} reviews.`}
        />

        <div ref={ref} className="reveal mt-16 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((review) => (
            <figure
              key={review.name}
              className="mb-5 break-inside-avoid rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <Quote className="h-7 w-7 text-accent/60" aria-hidden="true" />
              <div className="mt-3 flex" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" aria-hidden="true" />
                ))}
              </div>
              <blockquote className="mt-3 text-[15px] leading-relaxed text-white/80">
                “{review.text}”
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-white">
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
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Read all on Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
