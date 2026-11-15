# Palette candidates

Three starting points, each with the five roles from the visual-system skill. Ratios are WCAG contrast
ratios computed from the hex values (checker verified against known pairs: black/white = 21, #777 on white
= 4.48). They are starting values to tune, not final picks. Re-check any value you change.

## 1. Black + mint (dark)

| Role | Value | Contrast vs background |
|---|---|---|
| background | #0E1110 (green-tinted near-black) | — |
| text | #E6ECE9 | 15.9 : 1 |
| muted | #9BA6A1 | 7.6 : 1 |
| accent (mint) | #6EE7B7 | 12.5 : 1 |
| line | #2A302D | 1.4 : 1 (decorative only) |

- Mint vs body text is only about 1.3 : 1, so links in paragraphs must be underlined.
- Dark text on a mint fill is 12.5 : 1, so a mint button or tag with background-coloured text works.
- Feel: terminal, "run" green, technical. Close to the dark developer-tool palettes in the source research.
  Risk: very common on developer sites.

## 2. White + red (light)

| Role | Value | Contrast vs background |
|---|---|---|
| background | #FAFAF7 (warm off-white) | — |
| text | #161616 | 17.3 : 1 |
| muted | #5B5B58 | 6.5 : 1 |
| accent (red) | #C8102E | 5.6 : 1 |
| line | #E2E1DC | 1.25 : 1 (decorative only) |

- The red is deliberately deep. A bright signal red such as #FF3B30 is only 3.4 : 1 on this background and
  fails as link text; keep bright reds for large display marks only, or not at all.
- White text on the red fill is 5.9 : 1, fine for a small label or button.
- Red vs body text is about 3.1 : 1, just enough to tell links apart, but underline anyway.
- Feel: editorial, Swiss poster, confident. Stands out from the sea of dark developer sites. Red can read as
  "error" if overused, so keep it to the accent role strictly.

## 3. Researched alternative: charcoal + amber (dark)

| Role | Value | Contrast vs background |
|---|---|---|
| background | #14130F (warm charcoal) | — |
| text | #ECE7DC | 15.1 : 1 |
| muted | #A39E92 | 7.0 : 1 |
| accent (amber) | #F2A93B | 9.3 : 1 |
| line | #2E2C25 | 1.3 : 1 (decorative only) |

- Why it fits: amber recalls old phosphor terminals and control-room displays, which suits someone who builds
  software that drives simulation models. Warmer and less expected than mint on black.
- Amber vs body text is about 1.6 : 1, so underline links.
- Dark text on amber fill is 9.3 : 1.

## How to compare them

Build the hero and one text section in each palette (swap only the five custom properties) and look at them
at 375px and on a laptop, in daylight and in a dim room. Pick the one where the body text is most
comfortable to read for a minute, then the one with the most personality. Do not mix accents across
palettes.
