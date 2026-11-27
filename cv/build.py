"""Render cv/cv.html to public/cv/Asad_Faiyyaz_Khan_CV.pdf with WeasyPrint (tagged PDF),
then render page previews (public/cv/preview-N.webp) for the CV page on the site."""
import subprocess
import tempfile
from pathlib import Path

from PIL import Image
from weasyprint import HTML

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "cv" / "cv.html"
OUT = ROOT / "public" / "cv" / "Asad_Faiyyaz_Khan_CV.pdf"

OUT.parent.mkdir(parents=True, exist_ok=True)
HTML(filename=str(SRC), base_url=str(SRC.parent)).write_pdf(
    str(OUT), pdf_tags=True, pdf_identifier=b"asad-faiyyaz-khan-cv"
)
print(f"wrote {OUT.relative_to(ROOT)}")

with tempfile.TemporaryDirectory() as tmp:
    subprocess.run(["pdftoppm", "-r", "144", "-png", str(OUT), f"{tmp}/p"], check=True)
    for png in sorted(Path(tmp).glob("p-*.png")):
        n = int(png.stem.split("-")[1])
        dest = OUT.parent / f"preview-{n}.webp"
        Image.open(png).convert("RGB").save(dest, "WEBP", quality=82, method=6)
        print(f"wrote {dest.relative_to(ROOT)} {Image.open(dest).size}")
