from copy import deepcopy

from docx import Document
from docx.shared import Inches, Pt


SOURCE = "Tim_Florence_FINAL_READY.docx"
OUTPUT = "Tim_Florence_15_Halaman_FINAL_V3.docx"


def compact_paragraph(paragraph):
    if paragraph.style.name != "Normal":
        return
    fmt = paragraph.paragraph_format
    if fmt.line_spacing is not None:
        fmt.line_spacing = 1.0
    if fmt.space_after is not None:
        fmt.space_after = Pt(min(fmt.space_after.pt, 2.5))
    for run in paragraph.runs:
        if run.font.size is not None:
            if run.font.size.pt >= 10.5:
                run.font.size = Pt(10)
            elif run.font.size.pt >= 9:
                run.font.size = Pt(9)


def replace_paragraph_text(paragraph, replacements):
    text = paragraph.text
    updated = text
    for old, new in replacements:
        updated = updated.replace(old, new)
    if updated != text:
        paragraph.text = updated


document = Document(SOURCE)

# Recover approximately two pages while keeping the A4 article layout and all content.
for section in document.sections:
    section.top_margin = Inches(0.74)
    section.bottom_margin = Inches(0.46)

for paragraph in document.paragraphs:
    replace_paragraph_text(
        paragraph,
        [
            ("57,8%", "58,6%"),
            ("103", "10^3"),
            ("106", "10^6"),
            ("Hasil pengujian", "Evaluasi prototipe"),
            ("Pengujian model", "Evaluasi model"),
            (
                "memodelkan jaringan jalan Google Maps API sebagai graf berbobot",
                "memodelkan jaringan jalan sebagai graf internal berbobot",
            ),
            (
                "memodifikasi bobot jaringan jalan pada Google Maps API",
                "memperbarui bobot graf jaringan jalan internal",
            ),
            (
                "Cij(hi) = (Lij / [v0 · (1 - (hi / hcrit)2)]) + P(Zi)\t(2)",
                "Cij(hi) = [60 Lij / (v0 (1 - (hi / hcrit)^2))] + P(Zi), 0 <= hi < hcrit (2)",
            ),
        ],
    )
    compact_paragraph(paragraph)

for table in document.tables:
    for row in table.rows:
        for cell in row.cells:
            for paragraph in cell.paragraphs:
                compact_paragraph(paragraph)

# Reduce only oversized figures; their aspect ratios and captions remain unchanged.
for shape in document.inline_shapes:
    if shape.height.inches > 7:
        ratio = shape.width / shape.height
        shape.height = Inches(6.45)
        shape.width = int(shape.height * ratio)
    elif shape.height.inches > 4.5:
        ratio = shape.width / shape.height
        shape.height = Inches(4.05)
        shape.width = int(shape.height * ratio)

document.save(OUTPUT)