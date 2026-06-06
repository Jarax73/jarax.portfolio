#!/usr/bin/env python3
"""Generate favicon PNGs with a clear « J » letter."""

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

SIZES = [32, 152, 192, 384, 512]
OUT = Path(__file__).resolve().parent.parent / "public"
FONT_PATH = "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"

BG = (20, 20, 22)
FG = (250, 250, 250)
ACCENT = (99, 102, 241)


def draw_icon(size: int) -> Image.Image:
    img = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(img)
    radius = int(size * 0.25)
    draw.rounded_rectangle([0, 0, size - 1, size - 1], radius=radius, fill=BG)

    font_size = max(10, int(size * 0.56))
    font = ImageFont.truetype(FONT_PATH, font_size)
    bbox = draw.textbbox((0, 0), "J", font=font)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    x = (size - tw) / 2 - bbox[0] + size * 0.01
    y = (size - th) / 2 - bbox[1] + size * 0.06
    draw.text((x, y), "J", fill=FG, font=font)

    dot_r = size * 0.078
    cx, cy = size * 0.75, size * 0.25
    draw.ellipse([cx - dot_r, cy - dot_r, cx + dot_r, cy + dot_r], fill=ACCENT)

    return img


def main():
    for size in SIZES:
        path = OUT / f"favicon_{size}x{size}.png"
        draw_icon(size).save(path, "PNG")
        print(f"Wrote {path}")

    ico_sizes = [16, 32, 48]
    ico_images = [draw_icon(s) for s in ico_sizes]
    ico_path = OUT / "favicon.ico"
    ico_images[0].save(
        ico_path,
        format="ICO",
        sizes=[(s, s) for s in ico_sizes],
        append_images=ico_images[1:],
    )
    print(f"Wrote {ico_path}")


if __name__ == "__main__":
    main()
