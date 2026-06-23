/* =============================================================================
 * Optional hero background image — AUTO-LOADED.
 * -----------------------------------------------------------------------------
 * Drop ONE high-resolution photo (jpg / png / webp) into  src/assets/hero/
 * and it automatically becomes the darkened hero background on the home page.
 * If the folder is empty, the hero falls back to a clean design background.
 * Tip: use a wide (landscape) image, ideally 2000px+ across, for a crisp look.
 * ===========================================================================*/

const modules = import.meta.glob('../assets/hero/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

const keys = Object.keys(modules).sort()

/** First image found in src/assets/hero/, or '' if none has been added yet. */
export const heroBg = keys.length ? modules[keys[0]] : ''
