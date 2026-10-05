"""Build the Certiva print guidelines from the controlled brand-system values."""

from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.lib.pagesizes import A4
from reportlab.lib.colors import HexColor
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "03-guidelines" / "Certiva_Brand_Guidelines.pdf"
ICON = ROOT / "01-logos" / "certiva-icon-512.png"
LOGO_PRIMARY = ROOT / "01-logos" / "certiva-wordmark-primary-640.png"
LOGO_REVERSED = ROOT / "01-logos" / "certiva-wordmark-reversed-640.png"

REGULAR = ROOT / "02-color-and-type" / "fonts" / "Manrope-Regular.ttf"
BOLD = ROOT / "02-color-and-type" / "fonts" / "Manrope-Bold.ttf"
pdfmetrics.registerFont(TTFont("ManropeCertiva", str(REGULAR)))
pdfmetrics.registerFont(TTFont("ManropeCertiva-Bold", str(BOLD)))

W, H = A4
NIGHT = HexColor("#060D08")
SURFACE = HexColor("#0D1710")
FOREST = HexColor("#1A4731")
MID = HexColor("#2D6A4F")
LEAF = HexColor("#40916C")
SIGNAL = HexColor("#52C27A")
PALE = HexColor("#D8F3DC")
MIST = HexColor("#F0FAF4")
INK = HexColor("#111827")
MUTED = HexColor("#52645A")
WHITE = HexColor("#FFFFFF")
LINE = HexColor("#D8E5DC")

c = canvas.Canvas(str(OUTPUT), pagesize=A4, pageCompression=1)
c.setTitle("Certiva Brand Guidelines - Version 1.0")
c.setAuthor("Certiva")
c.setSubject("Certiva visual and verbal identity")


def text(x, y, value, size=11, color=INK, bold=False):
    c.setFillColor(color)
    c.setFont("ManropeCertiva-Bold" if bold else "ManropeCertiva", size)
    c.drawString(x, y, value)


def wrapped(value, x, y, width, size=10.5, leading=15.5, color=INK, bold=False):
    font = "ManropeCertiva-Bold" if bold else "ManropeCertiva"
    c.setFont(font, size)
    c.setFillColor(color)
    lines = []
    for para in value.split("\n"):
        if not para:
            lines.append("")
            continue
        line = ""
        for word in para.split():
            candidate = word if not line else line + " " + word
            if line and pdfmetrics.stringWidth(candidate, font, size) > width:
                lines.append(line)
                line = word
            else:
                line = candidate
        lines.append(line)
    for line in lines:
        c.drawString(x, y, line)
        y -= leading
    return y


def icon(x, y, size):
    c.drawImage(str(ICON), x, y, width=size, height=size, mask="auto")


def wordmark(x, y, height, reversed=False):
    asset = LOGO_REVERSED if reversed else LOGO_PRIMARY
    c.drawImage(str(asset), x, y, width=height * 160 / 44, height=height, mask="auto")


def page_header(number, label, title, subtitle=None):
    c.setFillColor(WHITE)
    c.rect(0, 0, W, H, fill=1, stroke=0)
    icon(50, 763, 27)
    text(87, 773, "CERTIVA / BRAND SYSTEM", 9, FOREST, True)
    text(50, 715, label.upper(), 9, MID, True)
    text(50, 673, title, 28, INK, True)
    if subtitle:
        wrapped(subtitle, 50, 642, 495, size=11, leading=16, color=MUTED)
    c.setStrokeColor(LINE)
    c.setLineWidth(0.8)
    c.line(50, 51, 545, 51)
    text(50, 32, "CERTIVA  /  VERSION 1.0  /  05 OCT 2026", 7.8, MUTED, True)
    text(524, 32, f"{number:02d}", 8.5, FOREST, True)


def card(x, top, width, height, title, body, dark=False):
    c.setFillColor(SURFACE if dark else MIST)
    c.setStrokeColor(HexColor("#294533") if dark else LINE)
    c.roundRect(x, top - height, width, height, 13, fill=1, stroke=1)
    text(x + 18, top - 27, title, 12, WHITE if dark else FOREST, True)
    wrapped(body, x + 18, top - 50, width - 36, size=9.3, leading=13.4,
            color=PALE if dark else INK)


def section(y, heading, body):
    text(50, y, heading, 14, FOREST, True)
    return wrapped(body, 50, y - 23, 495, size=10.5, leading=15.4) - 17


# 1 - Cover
c.setFillColor(NIGHT)
c.rect(0, 0, W, H, fill=1, stroke=0)
wordmark(54, 726, 49, reversed=True)
c.setFillColor(SIGNAL)
c.roundRect(54, 577, 78, 4, 2, fill=1, stroke=0)
text(54, 521, "Brand", 50, WHITE, True)
text(54, 465, "system", 50, SIGNAL, True)
wrapped("Certification work, connected from application to decision.", 56, 418, 455,
        size=18, leading=26, color=PALE)
c.setFillColor(SURFACE)
c.setStrokeColor(HexColor("#294533"))
c.roundRect(54, 212, 487, 130, 16, fill=1, stroke=1)
text(78, 313, "BUILT FOR CERTIFICATION-BODY OPERATIONS", 9.6, SIGNAL, True)
wrapped("A calm, product-led identity that explains one real workflow at a time, keeps expert judgment visible, and uses evidence before claims.",
        78, 280, 438, size=11, leading=17, color=WHITE)
text(54, 115, "Guidelines and production assets  /  v1.0", 11, WHITE)
text(54, 91, "5 October 2026  /  getcertiva.com", 9, HexColor("#9EB6A4"))
c.showPage()

# 2 - Foundation
page_header(2, "01 / Foundation", "What the brand must convey",
            "Software built with certification-body operating detail, without taking professional judgment away from the people responsible for it.")
card(50, 596, 236, 140, "OPERATIONAL", "Show the case moving between real roles and records. Explain the handoff that changes, not a feature count.")
card(309, 596, 236, 140, "CALM", "Use clarity, space and measured language. Do not borrow urgency, fear or startup hype.")
card(50, 438, 236, 140, "HUMAN-CONTROLLED", "AI may assist where implemented. CB staff review, approve and own certification decisions.")
card(309, 438, 236, 140, "EVIDENCE-FIRST", "Use current UI and verifiable behavior. No invented metrics, customers or guarantees.")
section(264, "Positioning line", "Certification work, connected from application to decision. This is campaign language, not part of the logo. Apply it only where the shown workflow supports it.")
section(176, "Reader outcome", "A CB operator should feel that Certiva understands their handoffs, shows the relevant improvement, and respects existing procedures and accreditation responsibility.")
c.showPage()

# 3 - Identity and color
page_header(3, "02 / Visual identity", "A quiet green system",
            "Night and White carry the layout. Green directs attention; it should never overwhelm the information.")
swatches = [
    ("Night", "#060D08", NIGHT, WHITE), ("Surface", "#0D1710", SURFACE, WHITE),
    ("Forest", "#1A4731", FOREST, WHITE), ("Mid", "#2D6A4F", MID, WHITE),
    ("Leaf", "#40916C", LEAF, WHITE), ("Signal", "#52C27A", SIGNAL, NIGHT),
    ("Pale", "#D8F3DC", PALE, FOREST), ("Mist", "#F0FAF4", MIST, FOREST),
    ("Ink", "#111827", INK, WHITE),
]
for i, (name, code, bg, fg) in enumerate(swatches):
    col, row = i % 3, i // 3
    x, top = 50 + col * 169, 584 - row * 135
    c.setFillColor(bg)
    c.setStrokeColor(LINE if name in {"Pale", "Mist"} else bg)
    c.roundRect(x, top - 113, 151, 113, 12, fill=1, stroke=1)
    text(x + 12, top - 75, name, 12, fg, True)
    text(x + 12, top - 94, code, 9, fg)
text(50, 156, "ACCESSIBLE PAIRINGS", 10, FOREST, True)
wrapped("Forest on White 10.56:1  /  Mid on White 6.39:1  /  Signal on Night 8.75:1. Never set small text in Signal on White (2.24:1).",
        50, 135, 495, size=9.8, leading=15)
c.showPage()

# 4 - Logo, typography and grid
page_header(4, "03 / Logo and type", "Exact artwork. Clear hierarchy.",
            "Use the supplied production SVGs without redrawing. Keep the previous refined mark separate until its original master can be recovered.")
c.setFillColor(MIST)
c.roundRect(50, 476, 237, 137, 14, fill=1, stroke=0)
wordmark(75, 523, 42)
text(73, 497, "PRIMARY / ON LIGHT", 8.5, MID, True)
c.setFillColor(NIGHT)
c.roundRect(308, 476, 237, 137, 14, fill=1, stroke=0)
wordmark(333, 523, 42, reversed=True)
text(331, 497, "REVERSED / ON DARK", 8.5, SIGNAL, True)
section(439, "Logo rule", "Clear area: at least one quarter of the 44 px icon width. Minimum lockup width: 120 px digital. One logo per composition. Never stretch, recolor, glow or fuse a tagline into it.")
text(50, 326, "TYPOGRAPHY", 10, FOREST, True)
text(50, 282, "A direct headline", 27, INK, True)
text(50, 254, "A useful explanation follows in Manrope.", 12, MUTED)
text(50, 219, "EYEBROW / RECORD LABEL", 9, MID, True)
section(183, "Layout", "Use an 8 px spacing base, left-aligned editorial hierarchy and generous margins. Pair one explanation with one real product proof frame. Keep body text out of gradients and busy footage.")
c.showPage()

# 5 - Product proof
page_header(5, "04 / Product proof", "Show the work, not a promise",
            "A credible feature asset follows one task from trigger to controlled human outcome.")
steps = [
    ("01", "Trigger", "What starts the task? Example: an application has been approved."),
    ("02", "Workflow", "What actually moves? Known case fields flow into the prepared audit set."),
    ("03", "Proof", "Show a current UI crop or a clearly labelled conceptual diagram."),
    ("04", "Human control", "The planner reviews the files, downloads the pack and owns the decision."),
]
for i, (num, title, body) in enumerate(steps):
    top = 599 - i * 99
    c.setFillColor(SURFACE)
    c.roundRect(50, top - 81, 495, 81, 12, fill=1, stroke=0)
    text(68, top - 28, num, 13, SIGNAL, True)
    text(113, top - 28, title, 13, WHITE, True)
    wrapped(body, 113, top - 49, 410, size=9.6, leading=14, color=PALE)
section(171, "Publishing control", "Capture only real, current, permission-cleared UI. Remove customer names, documents, email addresses, signatures and other sensitive details. A template placeholder must be replaced before publication.")
c.showPage()

# 6 - Applications
page_header(6, "05 / Applications", "One system, several surfaces",
            "The identity remains consistent while each format respects its own constraints.")
card(50, 597, 236, 163, "SOCIAL", "LinkedIn 1200 x 627. Instagram portrait 1080 x 1350, square 1080 x 1080 and story 1080 x 1920. One headline, one proof frame, one logo.")
card(309, 597, 236, 163, "DOCUMENTS", "A4 with 20 mm outer margin. Include recipient, actual scope, date/version, legal seller and a specific next step. Never place signatures or seals in a reusable master.")
card(50, 416, 236, 163, "WEB / UI", "Use the token files as references. Forest is the accessible action color on light; Signal works on Night. Visible keyboard focus and text-plus-color status are required.")
card(309, 416, 236, 163, "EMAIL", "Keep the signature compact: sender, title, Certiva, reply address and website. Test any image logo across clients before relying on it.")
section(219, "Platform-safe story", "Keep important content within x=72..1008 and y=220..1640 on a 1080 x 1920 story. Add the platform link sticker at publishing time rather than relying on tiny static URL text.")
c.showPage()

# 7 - Voice and release gate
page_header(7, "06 / Voice and release", "Specific. Respectful. Verifiable.",
            "Certiva speaks with certification bodies as peers. It explains the relevant workflow and keeps expert responsibility visible.")
card(50, 591, 495, 101, "SAY", "The approved application feeds a prepared audit set. Your planner reviews and downloads the documents.")
card(50, 475, 495, 101, "DO NOT SAY", "Revolutionary AI guarantees every audit is compliant and creates every document instantly.", dark=True)
text(50, 336, "PRE-RELEASE QUALITY GATE", 12, FOREST, True)
checks = [
    "Current, undistorted logo; correct Certiva name and domain.",
    "Real UI or an explicitly labelled conceptual diagram.",
    "Claims supported by current product behavior and evidence.",
    "One workflow, one outcome, one next action.",
    "Readable at native size, safe margins and sufficient contrast.",
    "No confidential customer data, signatures or accreditation implication.",
]
y = 303
for line in checks:
    c.setFillColor(SIGNAL)
    c.circle(56, y + 3, 3, fill=1, stroke=0)
    y = wrapped(line, 70, y, 468, size=10, leading=15) - 13
text(50, 92, "SOURCE STATUS", 9, MID, True)
wrapped("This v1.0 package uses current website artwork. The previously approved refined mark awaits source recovery from iCloud and must not be approximated.",
        50, 76, 495, size=8.4, leading=11.5, color=MUTED)
c.showPage()

c.save()
print(OUTPUT)
