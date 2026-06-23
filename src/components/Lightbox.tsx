import { useCallback, useEffect, useRef } from 'react'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'
import { portfolio } from '../data/portfolio'

type Props = {
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export default function Lightbox({ index, onClose, onNavigate }: Props) {
  const total = portfolio.length
  const touchStartX = useRef<number | null>(null)

  const prev = useCallback(
    () => onNavigate((index - 1 + total) % total),
    [index, total, onNavigate],
  )
  const next = useCallback(() => onNavigate((index + 1) % total), [index, total, onNavigate])

  // Keyboard nav + lock body scroll
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      else if (e.key === 'ArrowLeft') prev()
      else if (e.key === 'ArrowRight') next()
    }
    window.addEventListener('keydown', onKey)
    const prevOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', onKey)
      document.body.style.overflow = prevOverflow
    }
  }, [onClose, prev, next])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const delta = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(delta) > 50) (delta > 0 ? prev : next)()
    touchStartX.current = null
  }

  const image = portfolio[index]

  return (
    <div
      className="fixed inset-0 z-[70] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-label="Project image viewer"
      onClick={onClose}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
        aria-label="Close"
      >
        <X className="h-6 w-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          prev()
        }}
        className="absolute left-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
        aria-label="Previous image"
      >
        <ChevronLeft className="h-7 w-7" />
      </button>

      <figure className="max-h-[85vh] max-w-5xl" onClick={(e) => e.stopPropagation()}>
        <img
          src={image.src}
          alt={image.alt}
          className="max-h-[85vh] w-auto rounded-lg object-contain shadow-2xl"
        />
        <figcaption className="mt-3 text-center text-sm text-white/60">
          {index + 1} / {total}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          next()
        }}
        className="absolute right-3 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
        aria-label="Next image"
      >
        <ChevronRight className="h-7 w-7" />
      </button>
    </div>
  )
}
