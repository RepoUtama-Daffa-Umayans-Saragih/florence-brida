import fitz


SOURCE = "Tim_Florence_FINAL_READY.pdf"
OUTPUT = "Tim_Florence_REVISED.pdf"


def replace_text(page, old, new, fontsize=None):
    rectangles = page.search_for(old)
    for rectangle in rectangles:
        size = fontsize or max(6, rectangle.height * 0.78)
        page.add_redact_annot(rectangle, fill=(1, 1, 1))
        page.apply_redactions()
        page.insert_text(
            (rectangle.x0, rectangle.y1 - 1),
            new,
            fontname="tiro",
            fontsize=size,
            color=(0, 0, 0),
        )


document = fitz.open(SOURCE)

# Correct the routing benchmark calculated from Table 3: 1 - 60.5 / 146 = 58.6%.
for page in document:
    replace_text(page, "57,8%", "58,6%")
    replace_text(page, "57.8%", "58.6%")

# Make the prototype/evaluation wording technically cautious without changing results.
replace_text(document[0], "Hasil pengujian", "Evaluasi prototipe")
replace_text(document[0], "Evaluation results", "Prototype evaluation")
replace_text(document[11], "Pengujian kinerja", "Evaluasi kinerja")
replace_text(document[12], "Pengujian model", "Evaluasi model")

# Google Maps is used for map context; dynamic edge weights are computed in FLORENCE's graph.
replace_text(document[8], "Peta interaktif dan penghitungan jaringan jalan memanfaatkan Google Maps API", "Peta interaktif memanfaatkan Google Maps API; graf jalan dihitung secara internal")
replace_text(document[10], "memodelkan jaringan jalan Google Maps API sebagai graf berbobot", "memodelkan jaringan jalan sebagai graf internal berbobot")
replace_text(document[12], "memodifikasi bobot jaringan jalan pada Google Maps API", "memperbarui bobot graf jaringan jalan internal")

# Lij/v0 is in hours while Cij is defined in minutes; include the conversion factor.
formula_rectangle = fitz.Rect(121.1, 651.5, 542.2, 667.5)
document[12].add_redact_annot(formula_rectangle, fill=(1, 1, 1))
document[12].apply_redactions()
document[12].insert_textbox(
    fitz.Rect(118, 650, 545, 668),
    "Cij(hi) = [60 Lij / (v0 (1 - (hi / hcrit)^2))] + P(Zi), 0 <= hi < hcrit    (2)",
    fontname="tiro",
    fontsize=8.2,
    color=(0, 0, 0),
    align=1,
)

# Replace the full penalty paragraph because the source PDF stores superscripts as separate objects.
penalty_rectangle = fitz.Rect(82, 672, 545, 780)
document[12].add_redact_annot(penalty_rectangle, fill=(1, 1, 1))
document[12].apply_redactions()
document[12].insert_textbox(
    fitz.Rect(85, 674, 542, 780),
    "di mana Cij(hi) mengacu pada bobot biaya waktu tempuh dinamis pada ruas jalan dari simpul i ke simpul j (menit), Lij adalah panjang segmen jalan (km), v0 merupakan kecepatan arus bebas normal pada ruas tersebut (km/jam), hi adalah ketinggian genangan aktual pada ruas jalan (cm), hcrit merupakan batas kedalaman kritis kendaraan mogok yang ditetapkan sebesar 30 cm, dan P(Zi) adalah fungsi penalti zona yang bernilai 0 untuk Zona Hijau, 10^3 untuk Zona Kuning bagi pengendara sepeda motor, serta 10^6 (blokir total) untuk Zona Merah bagi seluruh jenis kendaraan. Mengacu pada (2), kenaikan nilai hi mendekati hcrit akan meningkatkan biaya tempuh secara kuadratik dan memaksa algoritma pencarian jalur mengalihkan rute melewati simpul jalan yang aman.",
    fontname="tiro",
    fontsize=7.7,
    color=(0, 0, 0),
)

document.save(OUTPUT, garbage=4, deflate=True)
document.close()