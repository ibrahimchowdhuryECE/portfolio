/* =====================================================================
   Photos for the carousel on a project's detail page.

   To add photos to a project: drop image files into
     src/assets/projects/<project-slug>/
   and they appear automatically. No code change needed.

   Order follows the file name, so prefix them to control it:
     01-breadboard.jpg, 02-enclosure.jpg, ...

   A project folder with no images falls back to the old single cover slot.
   ===================================================================== */

// Vite scans these at build time and hands back the final asset URLs.
const files = import.meta.glob('../assets/projects/*/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

export function getProjectPhotos(slug: string): string[] {
  return Object.keys(files)
    .filter((path) => path.includes(`/projects/${slug}/`))
    .sort()
    .map((path) => files[path]);
}
