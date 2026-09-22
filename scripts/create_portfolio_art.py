"""Render Milano/Orbi portfolio concepts and optimize private Smilecraft archives to WebP.

Run: python3 -m pip install Pillow && python3 scripts/create_portfolio_art.py
Original client ZIPs are optional local inputs in portfolio-sources/ (never commit them).
"""
import io
from pathlib import Path
import zipfile
from PIL import Image, ImageDraw, ImageFont, ImageOps

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "images" / "portfolio"
OUT.mkdir(parents=True, exist_ok=True)
W, H = 864, 1080

def choose(*paths):
    return next((p for p in paths if Path(p).is_file()), "DejaVuSans.ttf")

SERIF = choose("/usr/share/fonts/truetype/dejavu/DejaVuSerif-Bold.ttf", "/System/Library/Fonts/Supplemental/Georgia Bold.ttf")
SANS = choose("/usr/share/fonts/truetype/lato/Lato-Heavy.ttf", "/System/Library/Fonts/Supplemental/Arial Bold.ttf")
INK, IVORY, GOLD, ORANGE = "#242323", "#fffaf2", "#ecb834", "#e85b36"

def write(draw, pos, string, size, color, serif=False):
    draw.text(pos, string, font=ImageFont.truetype(SERIF if serif else SANS, size), fill=color)

def save(image, stem):
    image.save(OUT / (stem + ".webp"), "WEBP", quality=81, method=6)

def picture_on(canvas, source, xy, radius=28):
    x,y,w,h = xy
    mask = Image.new("L", (w,h))
    ImageDraw.Draw(mask).rounded_rectangle((0,0,w,h),radius=radius,fill=255)
    photo = ImageOps.fit(source,(w,h),method=Image.Resampling.LANCZOS)
    canvas.paste(photo,(x,y),mask)

MILANO = [
    (["The world is","closer than","you think."], "A beautifully planned escape begins here."),
    (["Why choose","a curated","getaway?"], "Less research. More time to discover."),
    (["Moments","you will","remember."], "Slow mornings, open skies and new perspectives."),
    (["Made for","the way","you travel."], "Personal trips. Thoughtful details. Memorable places."),
    (["Ready for","your next","chapter?"], "Milano Trips · Let the journey begin."),
]
ORBI = [
    (["Spaces that","feel like","your story."], "A home designed around the way you live."),
    (["Every great","space begins","with a plan."], "Thoughtful layouts. Natural light. Everyday comfort."),
    (["Designed for","life beyond","the blueprint."], "Beauty and function belong together."),
    (["Built on","the finer","details."], "Materials, proportions and spaces that last."),
    (["Let us build","what comes","next."], "Orbi Structures · Design with purpose."),
]

def concept(brand, image, slides, dark=False):
    background = INK if dark else "#f7f0e4"
    foreground = IVORY if dark else INK
    accent = GOLD if dark else "#ad5b36"
    prefix = "orbi-story" if dark else "milano-story"
    for number, (headline, subtitle) in enumerate(slides,1):
        art = Image.new("RGB", (W,H), background)
        draw = ImageDraw.Draw(art)
        write(draw,(54,35),brand.upper(),24,foreground)
        draw.line((54,77,810,77),fill=foreground,width=2)
        write(draw,(54,99),"ARCHITECTURE / STORY" if dark else "TRAVEL / STORY",18,accent)
        write(draw,(731,99),f"{number:02d}/05",20,foreground)
        if number == 1:
            write(draw,(55,171),"DESIGN • EXPERIENCE • STORY",18,accent)
            for i,line in enumerate(headline): write(draw,(54,227+i*83),line,60,foreground,True)
            picture_on(art,image,(50,541,764,402))
            draw = ImageDraw.Draw(art)
            draw.rounded_rectangle((76,870,788,958),radius=15,fill=background)
            write(draw,(96,895),subtitle,22,foreground)
        elif number % 2 == 0:
            picture_on(art,image,(47,181,770,523))
            draw = ImageDraw.Draw(art)
            draw.rounded_rectangle((65,641,796,716),radius=12,fill=background)
            write(draw,(86,662),f"0{number} / THE STORY",19,accent)
            for i,line in enumerate(headline): write(draw,(53,746+i*70),line,46,foreground,True)
            write(draw,(56,980),subtitle,19,foreground)
        else:
            picture_on(art,image,(377,187,434,756))
            draw = ImageDraw.Draw(art)
            draw.rounded_rectangle((46,238,507,739),radius=21,fill=background)
            write(draw,(61,261),"MADE TO BE REMEMBERED",16,accent)
            for i,line in enumerate(headline): write(draw,(54,334+i*64),line,39,foreground,True)
            write(draw,(57,683),"DISCOVER MORE  →",20,accent)
            write(draw,(54,972),subtitle,19,foreground)
        draw = ImageDraw.Draw(art)
        draw.ellipse((54,1026,70,1042),fill=accent)
        write(draw,(80,1018),"A SRSHTI CREATIVE STUDIO CONCEPT",15,foreground)
        save(art,f"{prefix}-{number:02d}")

def originals():
    sources = {
        "smilecraft-tools":"smilecraft_Cost-of-Ignoring-issue-Using-teeth-as-tools-n.zip",
        "smilecraft-whitening":"smilecraft_is-doing-teeth-whitening-a-good-thing.zip",
        "smilecraft-braces":"smilecraft_Is-there-any-difference-between-Braces-and-Al.zip",
    }
    for prefix,name in sources.items():
        source = ROOT / "portfolio-sources" / name
        if not source.is_file():
            print("Optional source not supplied:",name)
            continue
        with zipfile.ZipFile(source) as archive:
            paths = sorted((p for p in archive.namelist() if p.lower().endswith(".png")), key=lambda p:Path(p).name)
            if len(paths) != 5: raise ValueError(f"{name}: expected 5 PNG slides, found {len(paths)}")
            for number,path in enumerate(paths,1):
                with Image.open(io.BytesIO(archive.read(path))) as im:
                    frame = im.convert("RGB")
                    frame.thumbnail((864,1080),Image.Resampling.LANCZOS)
                    save(frame,f"{prefix}-{number:02d}")

if __name__ == "__main__":
    images = ROOT / "public" / "images"
    concept("Milano Trips", Image.open(images / "travel_02.webp").convert("RGB"), MILANO)
    concept("Orbi Structures", Image.open(images / "architecture_01.webp").convert("RGB"), ORBI, True)
    originals()
