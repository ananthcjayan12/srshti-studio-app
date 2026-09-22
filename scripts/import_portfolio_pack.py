#!/usr/bin/env python3
"""Import the exact 25 optimized WebP slides from Srshti_Final_Portfolio_Media_Pack.zip.

Usage: python3 scripts/import_portfolio_pack.py ~/Downloads/Srshti_Final_Portfolio_Media_Pack.zip
The input ZIP contains public/images/portfolio/*.webp; no third-party packages needed.
"""
from pathlib import Path
import argparse
import sys
import zipfile

ROOT = Path(__file__).resolve().parents[1]
FOLDER = "public/images/portfolio/"
SERIES = {"smilecraft-tools": 5, "smilecraft-braces": 5, "smilecraft-whitening": 5,
          "milano-story": 4, "orbi-story": 3, "chayam-story": 3}
EXPECTED = {f"{name}-{i:02d}.webp" for name, count in SERIES.items()
            for i in range(1, count + 1)}
STALE = ("milano-story-05.webp", "orbi-story-04.webp", "orbi-story-05.webp")


def is_webp(payload: bytes) -> bool:
    return (len(payload) >= 30 and payload[0:4] == b"RIFF"
            and payload[8:12] == b"WEBP")


def import_pack(archive_path: Path) -> int:
    with zipfile.ZipFile(archive_path) as archive:
        paths = {n[len(FOLDER):]: n for n in archive.namelist()
                 if n.startswith(FOLDER) and n.endswith(".webp")
                 and "/" not in n[len(FOLDER):]}
        missing, extra = EXPECTED - paths.keys(), paths.keys() - EXPECTED
        if missing or extra:
            raise ValueError("Portfolio file mismatch. Missing: "
                             + str(sorted(missing)) + "; unexpected: " + str(sorted(extra)))
        payloads = {name: archive.read(paths[name]) for name in sorted(EXPECTED)}
        bad = [name for name, data in payloads.items() if not is_webp(data)]
        if bad:
            raise ValueError("Invalid WebP image(s): " + ", ".join(bad))
    output = ROOT / FOLDER
    output.mkdir(parents=True, exist_ok=True)
    for name, contents in payloads.items():
        (output / name).write_bytes(contents)
    for name in STALE:
        (output / name).unlink(missing_ok=True)
    print(f"Imported {len(payloads)} optimized WebP slides into {output}")
    print("Next: git add public/images/portfolio && git commit -m 'assets: add final approved WebP portfolio' && git push")
    return len(payloads)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("zip", type=Path, help="Path to Srshti_Final_Portfolio_Media_Pack.zip")
    args = parser.parse_args()
    try:
        import_pack(args.zip)
    except (ValueError, FileNotFoundError, zipfile.BadZipFile) as exc:
        print(f"Media import failed: {exc}", file=sys.stderr)
        sys.exit(1)
