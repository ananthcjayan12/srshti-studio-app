# Portfolio image import (WebP)

This branch replaces generic carousel data and UI with a five-slide portfolio model. The optimized artwork goes in `public/images/portfolio/`.

## Original Smilecraft artwork

Use the three source ZIP archives supplied by the studio (they contain five original PNG slides each). Put them in `portfolio-sources/` using the exact ZIP names below, then run:

```bash
python3 -m pip install Pillow
python3 scripts/create_portfolio_art.py
```

- `smilecraft_Cost-of-Ignoring-issue-Using-teeth-as-tools-n.zip`
- `smilecraft_is-doing-teeth-whitening-a-good-thing.zip`
- `smilecraft_Is-there-any-difference-between-Braces-and-Al.zip`

Original PNGs and project JSON remain private to the local workspace; do not commit the ZIP archives. Exported images go to `public/images/portfolio/smilecraft-{tools,whitening,braces}-01..05.webp`. Obtain client approval and patient consent before publishing identifiable photos.

## Milano Trips and Orbi Structures

The same script creates two **original five-slide portfolio concepts** from local photo artwork already in this repository:
`milano-story-01..05.webp` and `orbi-story-01..05.webp`. These concepts are not approved or published campaigns and do not claim real campaign performance.

## Fast image delivery and deployment

All carousel images are static WebP at 864 × 1080 (4:5) with no external image URLs. The React gallery uses native lazy loading, async decoding, and touch gestures; the detail viewer shows all five slides. Commit the generated files before publishing. If a file is absent, the app intentionally falls back to an existing local WebP so unfinished PRs do not display broken images.

The earlier reel thumbnails remain **demo covers**; upload approved video files separately before describing them as finished client work.
