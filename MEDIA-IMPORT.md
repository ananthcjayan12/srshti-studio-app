# Final WebP portfolio assets

The approved studio media archive is **Srshti_Final_Portfolio_Media_Pack.zip** (25 optimized WebP images). It includes:

| Brand | Local file prefix | Slides | Portfolio role |
|---|---|---:|---|
| Smilecraft Dental Clinic | `smilecraft-tools-`, `smilecraft-whitening-`, `smilecraft-braces-` | 5 each (15) | Client-provided artwork |
| Milano Trips | `milano-story-` | 4 | New creative concept |
| Orbi Structures | `orbi-story-` | 3 | New creative concept |
| Chayam Tattoos | `chayam-story-` | 3 | New creative concept |

All filenames start at `01.webp` and live under `public/images/portfolio/`.

## One-time import into PR #1

The downloadable archive is an attachment to the ChatGPT conversation, not yet stored in GitHub. Download it, then run from your local checkout:

```bash
git fetch origin
git switch feature/real-carousel-portfolio-webp
git pull --ff-only origin feature/real-carousel-portfolio-webp
python3 scripts/import_portfolio_pack.py ~/Downloads/Srshti_Final_Portfolio_Media_Pack.zip
git add public/images/portfolio
git commit -m "assets: add final 25 WebP portfolio slides"
git push origin feature/real-carousel-portfolio-webp
```

If the ZIP is elsewhere, replace its path in the import command. The importer validates all 25 files before writing them and removes three retired, synthetic concept slides. It retains the original image dimensions, Malayalam text, art direction and brand artwork. Do **not** use the old concept generator.

## Website behavior

- The home hero, category-filtered portfolio gallery, detail slide viewer and related work use the manifest in `src/content.js`; slide counts are 5, 5, 5, 4, 3 and 3.
- Native lazy image loading and asynchronous decode reduce network competition; all final carousel sources are local WebP.
- Until the above media import is pushed, missing images fall back to the older local demo illustrations. These are **not** the final carousel images.
- CI will reject a PR that does not contain the complete final media pack.

Before publishing, verify rights, permission and patient consent for identifiable Smilecraft artwork, and replace illustrative pricing, contact details and reel thumbnails with approved production details.
