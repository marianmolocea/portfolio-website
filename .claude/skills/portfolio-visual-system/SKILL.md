---
name: portfolio-visual-system
description: Colour, typography, spacing and layout rules for the one-page portfolio site. Use when choosing or changing the palette, fonts, type sizes, spacing, section layout or any CSS that affects how the page looks.
---

# Portfolio visual system

The site is a single static page for a fullstack engineer. The look should be calm, sharp and easy to read,
with one small playful element (the terminal input line, covered in the motion skill). Optimise for:
readability first, a clear personality second, decoration last.

A style that fits: Swiss-style minimalism. That means a grid, plenty of empty space, one sans-serif family,
strong contrast, a clear size hierarchy, and a single accent colour. No gradients, no drop shadows unless they
do a job, no ornaments.

Exception chosen by the owner: inside the terminal window the page uses the Dracula theme (Alucard, its light
variant, for the light theme) the way a real zsh prompt would. Coloured prompt segments, command names in
green, arguments in yellow, markdown markers in pink, headings and labels in theme colours, and a thin
pink-purple-cyan gradient underline under each executed command. Body paragraphs stay in the plain text
colour. The window background is 90% opaque, so the wallpaper shows faintly through, with no blur.

## Banned looks

- The blue-to-purple gradient look (hero gradients, gradient text, glowing purple buttons). It reads as a
  template. No gradient fills on text or large areas at all. Two exceptions, chosen by the owner: the
  static Big Sur-style wave wallpaper on the desktop around the terminal window (it shows behind text only
  through the 90% window background), and the thin underline under executed commands.
- Glassmorphism, neon glow on text, soft "aurora" colour blobs.
- More than one accent colour for links, the focus ring and hover states. The Dracula syntax colours inside
  the terminal are not accents; keep them to short labels, never paragraphs.
- Background blur behind the translucent window.

## Colour

### How to pick a palette

1. Start from the three directions under consideration: black + mint, white + red, or a researched
   alternative. Candidate values with checked contrast ratios are in `palettes.md` next to this file.
2. A palette for this site has exactly five roles, defined once as CSS custom properties and used by name
   everywhere else (never raw hex in rules):
   - **background** — the page
   - **text** — body copy and headings
   - **muted** — secondary text (dates, captions, small labels)
   - **accent** — links, focus ring, the one or two things that should catch the eye
   - **line** — hairline borders and dividers
3. Avoid pure #000 on pure #FFF (and the reverse). A near-black and an off-white are easier on the eyes and
   still give huge contrast.
4. On a dark background, pick a slightly desaturated accent. Fully saturated colours vibrate on black.
5. On a light background, a red accent must be dark enough to pass as link text (see targets below). Bright
   pure red usually fails.

### Contrast targets (WCAG 2.2)

| Pair | Minimum | Aim for |
|---|---|---|
| Body text on background | 4.5 : 1 | 7 : 1 or more |
| Muted text on background | 4.5 : 1 | 4.5 : 1 is fine, it is still text |
| Large text (24px+, or 19px+ bold) | 3 : 1 | 4.5 : 1 |
| Accent used as link text | 4.5 : 1 | — |
| Focus ring and icon outlines against background | 3 : 1 | — |

One trap to check every time:
- **Links told apart only by colour.** If a link is not underlined, its colour must differ from the
  surrounding body text by at least 3 : 1. Most accent/text pairs fail this (mint on near-black body text is
  around 1.3 : 1). Simplest rule: underline links in body copy; standalone nav and icon links can rely on
  position and label.

A contrast checker (browser dev tools show the ratio in the colour picker; online WCAG checkers do the same)
answers "does this pair pass?". Use it on every pair in the table, in the final colours, before shipping.

### Using the accent sparingly

Rough proportions: background and neutrals around 90% of what is on screen, text most of the rest, accent
5–10% at most. The accent belongs on: links, the focus ring, one key word or rule in the hero, hover state
of links. It does not belong on: whole section backgrounds, large headings, body paragraphs, every icon.
If you squint at the page and see the accent in more than two or three places at once, remove some.

## Typography

- **One family, self-hosted, at most.** One variable font file covering the weights needed, WOFF2 only,
  subset to Latin. A system font stack is a valid choice and costs nothing; say so if proposing it.
- Families that fit a developer portfolio and come as a single variable file: Inter, DM Sans, Plus Jakarta
  Sans, IBM Plex Sans, Space Grotesk (more character, best for headings-heavy pages). A monospace like
  JetBrains Mono can carry personality, but only if it is the *only* font, used for everything, because a
  second file breaks the budget. Pairing is done with weight and size within one family, not two families.
- Weights: body 400, small labels 500, headings 600–700. No more than three weights.
- Body text 16px minimum on mobile, 17–18px on desktop is pleasant. Never below 14px for anything a person is
  meant to read.
- Line height 1.5–1.7 for body, 1.1–1.25 for large headings.
- **Line length 60–75 characters on desktop, 35–60 on mobile.** Set a max-width in `ch` units on text
  blocks. Full-width paragraphs on a wide screen are the most common readability failure.
- Type scale: pick a ratio and stick to it, for example 14 / 16 / 18 / 24 / 32 / 48. The hero name can be
  bigger; use a fluid size (clamp between a mobile and desktop value) rather than many breakpoints.
- Keep the font's default letter spacing on body text. Slight negative tracking is fine on very large
  headings only.
- Headings go in order h1 → h2 → h3 without skipping. There is one h1: the owner's name.

## Spacing and layout

- Use one spacing scale based on 4 or 8px, for example 4 / 8 / 16 / 24 / 32 / 48 / 64 / 96. Every margin,
  padding and gap comes from it. Define it as custom properties.
- Generous rhythm for a one-pager: 64–96px between sections on desktop, 48–64px on mobile; 16–24px inside a
  section between related blocks.
- One content column with a sensible max width (around 1100–1200px for the outer container, narrower for
  text). Centre it. A two-column grid is fine for a short skills or experience list on wide screens; it
  collapses to one column on mobile.
- Mobile first: design at 375px wide, then add room at 768 and 1024. No horizontal scrolling at any width.
- Use the small/dynamic viewport height units rather than plain viewport height for a full-height hero, so
  mobile browser toolbars do not hide content.
- Hierarchy comes from size, weight, spacing and position. Colour is the last tool, not the first.

## Likely page structure

Hero (name, one-line role, short line about what they build) → About → Experience / what I work on → Skills
→ Footer with GitHub and LinkedIn. No projects section, no contact form, no email address. Keep the nav
minimal or skip it; on a page this short, scrolling is the navigation.

## How to decide when unsure

Ask, in order: is it easier to read? Does it keep the page light? Does it look like a choice rather than a
template? If a change adds colour, a font, or decoration and does not help the first question, leave it out.
