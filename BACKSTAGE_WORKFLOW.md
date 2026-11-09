# Backstage publishing workflow

Live URL: https://joepearson.music/backstage
Repository: `joepearson-music/site`
Production branch: `main`
Stack: Create React App, TypeScript, React Router 6, Netlify.

## Purpose and privacy

Backstage is a **publicly reachable, unlisted preview page**, not a password-protected or secret workspace. Anyone with the URL can view it. Never publish secrets, private documents, or sensitive personal details simply because the page is unlinked.

The page is deliberately absent from the homepage/header/footer navigation and sitemap. Its React route sets `<meta name="robots" content="noindex, nofollow">`. Netlify additionally sends `X-Robots-Tag: noindex, nofollow` for `/backstage` and its slash variant. These are indexing requests, not access controls or guaranteed removal from search engines. Do **not** block it in `robots.txt` in a way that prevents crawlers from observing the noindex directive.

## Files and structure

- `src/App.tsx`: isolated `/backstage` React Router route; **do not add it to `menuItems`**.
- `src/backstage/Backstage.tsx` and `Backstage.css`: responsive page and route-specific noindex meta.
- `src/backstage/types.ts`: reusable, typed content schema.
- `src/backstage/entries.ts`: single registry of independent `BackstageEntry` records; empty initially.
- `src/backstage/BackstageEntryView.tsx`: reusable renderer for all standard block types.
- `src/backstage/customComponents.tsx`: registry of reusable custom React components.
- `src/backstage/components/`: recommended location for newly authored custom components.
- `public/backstage-media/<entry-id>/`: recommended media and document directory for each entry.
- `netlify.toml`: existing build settings plus noindex response headers.
- `public/_redirects`: existing SPA fallback (`/* /index.html 200`) already allows direct navigation and refreshes.

## Publishing a new entry from ChatGPT

1. Read this document, current `src/backstage/entries.ts`, `types.ts`, and relevant component files from the connected GitHub repository before modifying anything. Inspect the live branch to avoid conflicting edits.
2. Inspect the actual user-supplied material. Decide on blocks (paragraph, heading, list, image, audio, video, document, link, or custom), preserving titles, descriptions, credits, and original files as appropriate.
3. Describe meaningful imagery with *accurate, specific alt text* based only on visible evidence. Do not invent identities, locations, dates, or visual details. Decorative imagery can have an empty alt attribute. If artwork includes text necessary for understanding, include it in the description or adjacent text.
4. Check whether metadata (such as GPS EXIF), private details, third-party rights, or oversized files need attention before public publication. Ask only when essential or risk is significant.
5. Choose a permanent, unique, URL-safe entry `id` (e.g. `2026-11-08-session-photo`) and an ISO `date`. Put files under `public/backstage-media/<entry-id>/` and reference as `/backstage-media/<entry-id>/filename.ext`. Encode spaces in filenames or, preferably, use short hyphenated names. Do not modify or delete other entries or their media.
6. Add a new object to the exported `backstageEntries` array. Standard entries use typed blocks, which can be mixed freely. The page automatically sorts by date (newest first); older entries remain intact. For a bespoke section, create a self-contained TSX component under `src/backstage/components/`, register its stable ID in `customComponents.tsx`, and reference it using a `custom` block.
7. Publish by committing source and media to `main` using the connected GitHub tools. Make only the requested, isolated changes. Never automatically modify `src/pages/Home.tsx`, other public pages, or navigation.
8. Verify the new commit on `main`; check `npm run build` and tests where a runtime or CI is available. If Netlify deployment/HTTP access is available, verify `https://joepearson.music/backstage`, direct refresh, media loading, and `X-Robots-Tag`. If those checks are unavailable or fail, **report the exact limitation; never claim live deployment was verified without evidence**.
9. Respond with the direct URL, entry title, files changed, commit reference, and clear publication/deployment status.

### Example entry shape (documentation only; do not publish demo content)

```ts
{
  id: "2026-11-08-example",
  title: "Title supplied by the user",
  date: "2026-11-08",
  blocks: [
    { type: "paragraph", content: [{ text: "Description" }, { text: " emphasized", italic: true }] },
    { type: "image", src: "/backstage-media/2026-11-08-example/photo.jpg", alt: "Visible features of the supplied image.", caption: "Optional caption" },
    { type: "audio", src: "/backstage-media/2026-11-08-example/recording.mp3", title: "Audio player label" },
    { type: "document", src: "/backstage-media/2026-11-08-example/score.pdf", label: "Score (PDF)", download: true }
  ]
}
```

## Media handling, including phone uploads

GitHub's source connector accepts UTF-8 text content and can create raw Git blobs from base64-encoded binary data when the file bytes are actually accessible to the current conversation. If an uploaded phone file is available through a compatible file tool, read its bytes, create a base64 Git blob, and add it to the repository tree at the chosen path. Use a single atomic commit where practical. The GitHub connector is not a general-purpose upload URL and cannot be assumed to access every ChatGPT attachment. Never pretend an inaccessible attachment was uploaded.

Optimize large images for web when practical without destroying originals unintentionally; favor WebP/JPEG/PNG as appropriate. Prefer MP3/M4A/WAV for audio as supported by browsers, MP4 (H.264) for broadly compatible video, PDF for downloadable scores/documents. Keep original filenames or sensible normalized filenames. GitHub rejects files larger than 100 MB, and connector payload limits can be smaller; if media exceeds available limits, explain and use an explicitly approved external hosting strategy rather than silently omitting it. Audio/video use native controls and deferred loading.

Files in `public/backstage-media` are public even though they are not indexed via the route-specific response header. Noindex on `/backstage` does not necessarily apply to a directly requested media URL.

## Preservation and promotion rules

- **Additive by default**: do not replace the entire collection, remove older entries, or delete media unless the user explicitly requests it.
- An edit request should target the specific entry `id` and retain others.
- Never automatically promote an entry to the homepage, About, music pages, or other public routes.
- When the user says “Move this backstage entry to the homepage,” find the requested entry, reuse its data/media and, when needed, its custom component, and change only the requested public page. Keep the backstage entry unless removal is explicitly requested.
- Keep code and media paths stable whenever possible so a promoted component requires minimal edits.
- Never invent artwork, recordings, factual claims, or biographical material to fill an empty page.

## Verification checklist

- [ ] React route reachable at `/backstage` (including direct refresh via `public/_redirects`).
- [ ] No link to backstage in homepage navigation/footer/sitemap.
- [ ] Netlify noindex response headers and SPA robots meta in place.
- [ ] The page works on mobile; media has appropriate controls, alt text, and captions.
- [ ] Existing entries and public-facing pages unchanged except for an explicitly requested promotion.
- [ ] GitHub commit verified and build/deployment status truthfully reported.
