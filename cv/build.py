"""Render cv/cv.html to public/cv/Asad_Faiyyaz_Khan_CV.pdf with WeasyPrint (tagged PDF)."""
from pathlib import Path

from weasyprint import HTML

ROOT = Path(__file__).resolve().parent.parent
SRC = ROOT / "cv" / "cv.html"
OUT = ROOT / "public" / "cv" / "Asad_Faiyyaz_Khan_CV.pdf"

OUT.parent.mkdir(parents=True, exist_ok=True)
HTML(filename=str(SRC), base_url=str(SRC.parent)).write_pdf(
    str(OUT),
    pdf_tags=True,
    pdf_identifier=b"asad-faiyyaz-khan-cv",
    uncompressed_pdf=False,
)
print(f"wrote {OUT.relative_to(ROOT)}")
