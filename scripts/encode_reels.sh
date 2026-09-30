#!/usr/bin/env bash
# Prepare reel masters for web delivery (Cloudflare R2).
#
#   scripts/encode_reels.sh [input_dir] [output_dir]    (defaults: reels reels/web)
#
# For each MP4 master:
#   - heavy files (>2.5 Mbps or taller than 1280px) are re-encoded to 720x1280
#     H.264 + AAC, the same target Instagram/YouTube Shorts serve on mobile;
#   - already-light files are copied losslessly (re-encoding would only lose quality);
#   - every output gets +faststart so playback starts before the download finishes;
#   - byte-identical duplicates are skipped;
#   - a WebP poster is written next to each video.
set -euo pipefail

IN=${1:-reels}
OUT=${2:-reels/web}
MAX_BITRATE=2500000
mkdir -p "$OUT"

slug(){ echo "$1" | tr '[:upper:]' '[:lower:]' | sed -E 's/\.[^.]+$//; s/[^a-z0-9]+/-/g; s/^-+|-+$//g'; }
seen=""

for src in "$IN"/*.mp4 "$IN"/*.mov "$IN"/*.MP4 "$IN"/*.MOV; do
  [ -f "$src" ] || continue
  hash=$(md5 -q "$src" 2>/dev/null || md5sum "$src" | cut -d' ' -f1)
  case " $seen " in *" $hash "*) echo "skip  $(basename "$src") (duplicate)"; continue;; esac
  seen="$seen $hash"

  name=$(slug "$(basename "$src")")
  dst="$OUT/$name.mp4"
  bitrate=$(ffprobe -v error -show_entries format=bit_rate -of default=nw=1:nk=1 "$src")
  height=$(ffprobe -v error -select_streams v:0 -show_entries stream=height -of default=nw=1:nk=1 "$src")

  if [ "${bitrate%.*}" -gt "$MAX_BITRATE" ] || [ "$height" -gt 1280 ]; then
    echo "encode $(basename "$src") -> $name.mp4"
    ffmpeg -hide_banner -loglevel error -y -i "$src" \
      -vf "scale=720:1280:force_original_aspect_ratio=decrease:force_divisible_by=2,fps=30" \
      -c:v libx264 -preset slow -crf 23 -profile:v high -pix_fmt yuv420p \
      -maxrate 2500k -bufsize 5000k -g 60 \
      -c:a aac -b:a 128k -ac 2 \
      -movflags +faststart "$dst"
  else
    echo "copy  $(basename "$src") -> $name.mp4"
    ffmpeg -hide_banner -loglevel error -y -i "$src" -c copy -map 0 -movflags +faststart "$dst"
  fi

  ffmpeg -hide_banner -loglevel error -y -ss 1 -i "$dst" -frames:v 1 \
    -vf "scale=720:-2" -c:v libwebp -quality 80 "$OUT/$name.webp"
done

echo
ls -lh "$OUT"
