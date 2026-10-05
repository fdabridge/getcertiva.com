# Certiva Brand System

Version 1.0 · 5 October 2026

This package is the working source of truth for Certiva's visual identity and marketing production. The website now consumes its Manrope variable font and uses the same core palette. Certiva is a separate brand from FDABridge.

## Core expression

- Name: **Certiva** (capitalized in prose); `certiva` appears only in the supplied wordmark artwork.
- Positioning: purpose-built software for the operational work of certification bodies.
- Voice: clear, calm, technically credible, peer-to-peer. Explain one workflow and its outcome at a time.
- Visual signature: deep near-black green, a restrained green signal, generous space, Manrope typography, and a product-first editorial layout.
- Primary address: `www.getcertiva.com`.

## Package map

| Folder | Purpose |
| --- | --- |
| `01-logos/` | Current production logo artwork and usage rules |
| `02-color-and-type/` | Palette and typography specification |
| `03-guidelines/` | Complete editable guidelines and print-ready PDF |
| `04-document-system/` | Letterhead, proposal cover, document standards |
| `05-social/` | LinkedIn and Instagram SVG templates and social rules |
| `06-web-ui/` | Design tokens for web/UI reuse |
| `07-email/` | Simple reusable signature and preview |
| `08-source/` | Asset provenance, change control, and source status |

Machine-readable values are in `brand-profile.json`. The visual guidelines PDF is in `03-guidelines/`.
Native-size previews in `05-social/` let you review the type and layout quickly; they are illustrative templates, not posts queued for publication.

## Release rules

1. Keep the logo geometry unchanged; use supplied files rather than redrawing it from a screenshot.
2. Maintain sufficient contrast. `#52C27A` is an accent on dark backgrounds, not body text on white.
3. Use product footage/screenshots only when they reflect a real, current interface and contain no confidential client data.
4. Avoid quantified time savings, compliance guarantees, or AI capability claims unless supported by current product behavior and evidence.
5. Do not present Certiva as a certification body or accreditation body; it is software for certification bodies.
6. Do not use FDA Bridge colors, slogan, bridge motif, signature, stamp, or templates in Certiva material.

## Source-status note

The current website logo files are packaged here as the production baseline. A separate, previously approved `certiva-mark-refined.svg` exists in an older iCloud-synced work folder, but it was not locally downloadable while this version was built. It has **not** been recreated or silently substituted. See `08-source/ASSET_PROVENANCE.md` before changing the mark.
