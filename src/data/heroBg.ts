/* =============================================================================
 * Hero background image — AUTO-LOADED, with a hand-picked fallback.
 * -----------------------------------------------------------------------------
 * 1. Drop ONE photo (jpg / png / webp) into  src/assets/hero/  and it becomes
 *    the hero background automatically (this always wins).
 * 2. If that folder is empty, the site uses the hand-picked, license-free
 *    photo below (served from Unsplash's CDN — free for commercial use).
 *
 * To use a different stock photo, just replace FALLBACK_HERO_URL with any
 * direct image URL, or drop a file into src/assets/hero/.
 * ===========================================================================*/

const modules = import.meta.glob('../assets/hero/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const keys = Object.keys(modules).sort()

/** Hand-picked modern luxury home (Unsplash License — free for commercial use). */
const FALLBACK_HERO_URL =
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2400&q=80'

/** Local file in src/assets/hero/ if present, otherwise the picked stock photo. */
export const heroBg = keys.length ? modules[keys[0]] : FALLBACK_HERO_URL
