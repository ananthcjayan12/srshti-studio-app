# Srshti Creative Studio — Responsive React Demo

An eight-screen Vite/React portfolio website based on the approved dark charcoal, warm ivory, saffron-gold and burnt-orange design mockups. It has large editorial serif headings and responsive layouts for desktop, iPad and iPhone.

## Start

Requires Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Open the local URL shown by Vite (normally http://localhost:5173). To build for production:

```bash
npm run build
npm run preview
```

Static hosting works with the output `dist/`. Hash-based URLs such as `/#/carousels` do not require server-side rewrite rules. To deploy under a non-root subpath, update Vite's `base` configuration or host at domain root.

## Screens included

1. Home: hero, portfolio collage, example metrics and brands, featured work.
2. Services: service grid and process.
3. Carousels: filterable sample portfolio.
4. Carousel detail: slide-by-slide viewer, thumbnails, creative brief.
5. Reels: filterable sample reel portfolio.
6. Reel detail: cover artwork and creative breakdown (video placeholder).
7. Pricing: illustrative plan cards and optional add-ons.
8. Contact: validated enquiry form that opens the visitor's email app.

## Important — demo content, not published business facts

All 25 local WebP images in `public/images/` are *illustrative sample artwork* assembled from the AI-generated mockups approved in this conversation. They are not real client projects and not real patient photos. The example view counts, outcomes, brand-name associations, testimonials and pricing shown in the mockups are **not verified**. This website deliberately labels demonstration metrics and prices; remove or replace them before publishing. The illustrations are editable sample placeholders, not finished client assets.

Edit `src/content.js` to replace client/project references, prices, metrics and contact email. The contact email is currently `hello@example.com`, not a real studio inbox. The form creates a `mailto:` draft **only**; there is no backend and it does not directly send emails. Replace this with your preferred form service or backend before launch.

To show actual reel videos, add `.mp4` assets to `public/videos/`, update `src/content.js` to add their URLs, and swap the current reel-detail cover with a native `<video controls playsInline>` element. The sample package intentionally does not pretend still images are working video files.

## Brand and type

The header uses a transparent raster crop of the supplied Srshti logo reference for visual fidelity. For production sharpness at very large sizes, replace it with the original high-resolution transparent logo or vector SVG. Fonts are loaded through Google Fonts at runtime: **Fraunces** for editorial headlines and **DM Sans** for interface copy, with system fallbacks when offline. No font binaries are packaged.

## Customization

- Colors, typography, spacing and responsive behavior: `src/style.css`.
- Page layouts and functional components: `src/main.jsx`.
- Data: `src/content.js`.
- Sample imagery: `public/images/*.webp` (replace by filename or update content references).

No API keys or external UI kits required. No images are fetched from third-party image hosts.

## Design references / regenerating demo artwork

The `design-references/` folder includes all 8 approved UI mockups plus the two AI-generated reference inputs used to create the sample thumbnails and the supplied logo image. If you have Pillow and NumPy installed, regenerate the local samples with `python scripts/generate_demo_art.py` and the cropped logo with `python scripts/extract_logo.py`. Neither script is needed to run the React website.


## New portfolio (WebP)

The carousel gallery now features three five-slide Smilecraft series supplied by the studio, plus original five-slide Milano Trips and Orbi Structures **design concepts**. A separate optimized media pack contains all 25 slide files; the 10 Milano/Orbi concept assets are already in this branch. See [MEDIA-IMPORT.md](MEDIA-IMPORT.md) for the local import of the 15 client-supplied Smilecraft slides. Until those are added, the image component displays legacy local WebP fallback previews instead of broken images. Sample reel covers and prices are still demonstrations, not validated finished client work or confirmed rates.
