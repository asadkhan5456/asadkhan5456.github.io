"""Render the CVs with WeasyPrint (tagged PDFs) and page previews for the site.

cv/cv.html    -> public/cv/Asad_Faiyyaz_Khan_CV.pdf          + public/cv/preview-en-N.webp
cv/cv-de.html -> public/cv/Asad_Faiyyaz_Khan_Lebenslauf.pdf  + public/cv/preview-de-N.webp
"""
import subprocess
import tempfile
from pathlib import Path

from PIL import Image
from weasyprint import HTML

ROOT = Path(__file__).resolve().parent.parent
OUT_DIR = ROOT / "public" / "cv"
CVS = [
    ("en", ROOT / "cv" / "cv.html", OUT_DIR / "Asad_Faiyyaz_Khan_CV.pdf"),
    ("de", ROOT / "cv" / "cv-de.html", OUT_DIR / "Asad_Faiyyaz_Khan_Lebenslauf.pdf"),
]

OUT_DIR.mkdir(parents=True, exist_ok=True)
for old in OUT_DIR.glob("preview-*.webp"):
    old.unlink()

for lang, src, out in CVS:
    HTML(filename=str(src), base_url=str(src.parent)).write_pdf(
        str(out), pdf_tags=True, pdf_identifier=f"asad-faiyyaz-khan-cv-{lang}".encode()
    )
    print(f"wrote {out.relative_to(ROOT)}")
    with tempfile.TemporaryDirectory() as tmp:
        subprocess.run(["pdftoppm", "-r", "144", "-png", str(out), f"{tmp}/p"], check=True)
        for png in sorted(Path(tmp).glob("p-*.png")):
            n = int(png.stem.split("-")[1])
            dest = OUT_DIR / f"preview-{lang}-{n}.webp"
            Image.open(png).convert("RGB").save(dest, "WEBP", quality=82, method=6)
            print(f"wrote {dest.relative_to(ROOT)}")
