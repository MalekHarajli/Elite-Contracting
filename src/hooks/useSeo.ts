import { useEffect } from 'react'

/**
 * Sets the document <title> and meta description for the current page.
 * Lightweight, dependency-free per-route SEO for the SPA.
 */
export function useSeo(title: string, description?: string) {
  useEffect(() => {
    document.title = title

    if (description) {
      let tag = document.head.querySelector<HTMLMetaElement>('meta[name="description"]')
      if (!tag) {
        tag = document.createElement('meta')
        tag.setAttribute('name', 'description')
        document.head.appendChild(tag)
      }
      tag.setAttribute('content', description)
    }
  }, [title, description])
}
