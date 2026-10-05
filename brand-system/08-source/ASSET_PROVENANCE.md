# Asset provenance and change control

## Website baseline

The four SVGs in `01-logos/` are copied verbatim from `/Users/batuhan/getcertiva.com/logo/` on 5 October 2026. The website references corresponding assets in `/public/`. The logo masters remain unchanged; the website layout and CSS now use Manrope and the brand tokens.

Colors and the original Inter typography were extracted from `src/app/globals.css` and `src/app/layout.tsx`. In response to typography feedback, the brand system now specifies Manrope, loaded by the website from this package. Brand behavior follows the user's adopted business positioning manual, especially its Certiva section: one workflow at a time, human control, traceability, no AI-first hype, no unsupported promises.

## Prior refined asset

A prior work folder contains `logo/certiva-mark-refined.svg` and high-resolution exports. The macOS Finder reports them as **Not downloaded** and reports iCloud syncing disabled due to an error. File reads time out. The present package therefore does not claim to contain that master or to reproduce it. Resolve iCloud sync and review the exact file before promoting it to the canonical logo.

## Change process

1. Identify the current canonical asset and its approval owner.
2. Replace the master only after comparing geometry and legibility at 32, 64, and 256 px.
3. Update website, social, email, document, and profile derivatives together.
4. Re-run contrast and rendering checks; increment the brand-system version.
5. Keep superseded artwork in an archive, not in the active `01-logos/` folder.

## Licensing

The system SVG templates use original vector shapes and no third-party imagery. The Manrope variable font was obtained from the [official Google Fonts repository](https://github.com/google/fonts/tree/main/ofl/manrope); its SIL Open Font License 1.1 is bundled beside the font. The regular and bold TTF files are static instances of that same variable font. The production logo SVGs still refer to Inter and are unchanged. [Inter and its license](https://github.com/google/fonts/tree/main/ofl/inter) are bundled solely to produce faithful high-resolution logo derivatives for the templates and PDF; `08-source/build_logo_derivatives.mjs` rebuilds them. Any future photography, product footage, or screenshot should record source, permission, date, and whether the UI is live or illustrative.
