/* =============================================================================
 * Portfolio images — AUTO-LOADED. No renaming required.
 * -----------------------------------------------------------------------------
 * Drop ANY images into  src/assets/portfolio/  (jpg, png, jpeg or webp) and they
 * automatically appear in the gallery — in alphabetical filename order. You can
 * add 5, 9, 20… as many as you like. The FIRST image (alphabetically) is also
 * used as the big hero background, so name your best shot something like
 * "1-hero.jpg" if you want to control which one leads.
 *
 * The placeholder "sample-*.png" files are just stand-ins — delete them once
 * you add your own photos.
 * ===========================================================================*/

const modules = import.meta.glob('../assets/portfolio/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', {
  eager: true,
  import: 'default',
}) as Record<string, string>

export const portfolio = Object.keys(modules)
  .sort()
  .map((path, i) => ({
    src: modules[path],
    alt: `Elite Contracting completed project ${i + 1}`,
  }))

/** Best/first image, used as the hero background. */
export const heroImage = portfolio[0]?.src ?? ''
