# Project photos

Drop photos for a project into a folder named after its `slug`
(the slug is the last part of the project's URL, and it's set in
`src/data/projects.ts`):

```
src/assets/projects/blood-glucose-breath/01-breadboard.jpg
src/assets/projects/blood-glucose-breath/02-enclosure.jpg
```

They show up in the carousel at the top of that project's page
automatically. Nothing else to edit.

Notes:

- **Order** follows the file name, so prefix with `01-`, `02-`, `03-` to
  arrange them.
- **Formats:** `.jpg`, `.jpeg`, `.png`, `.webp`, `.avif`.
- **Shape:** the frame is portrait (3:4). Phone photos taken vertically fit
  exactly. Anything wider gets centre-cropped to fit.
- **Size:** keep files under roughly 500 KB each so pages stay fast. Photos
  straight off a phone are often 3-5 MB, so resize before committing.
- A folder with no images means that project falls back to its old single
  cover image.
