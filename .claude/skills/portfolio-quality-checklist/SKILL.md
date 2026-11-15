---
name: portfolio-quality-checklist
description: Accessibility, performance, SEO/meta and mobile standards for the static portfolio page, with a pass/fail pre-ship checklist. Use before calling any change done, before deploying to Netlify, or when asked whether the site is ready, fast enough or accessible.
---

# Portfolio quality checklist

A single static page (plain HTML, CSS, vanilla JS, no build step, hosted on Netlify). Optimise for: anyone
can read and use it, it loads almost instantly on a phone, and it looks right when the link is shared.
Every item below is meant to pass or fail, not to be "mostly fine".

## Accessibility

- **Contrast:** body and muted text at least 4.5:1 against the background, large text at least 3:1, focus
  ring and icon outlines at least 3:1. Measure text that sits over the canvas at the canvas's brightest.
- **Focus visible:** every link and button shows a clear focus outline when reached by keyboard. Nothing
  sticky covers the focused item.
- **Keyboard:** the whole page works with Tab, Shift+Tab and Enter. Tab order follows the visual order. No
  traps. A "skip to content" link is cheap and welcome if there is a nav.
- **Landmarks:** one header, one main, one footer; nav only if there is a nav. Each section has a heading.
  One h1 (the owner's name), then h2 per section, no skipped levels.
- **Language:** the html element declares the page language.
- **Images:** a meaningful image (a portrait) has short descriptive alt text; decorative images and the
  background canvas are hidden from assistive technology (empty alt, or marked hidden).
- **Icon links:** GitHub and LinkedIn icons have an accessible name ("GitHub", "LinkedIn"); the SVG itself
  is hidden from screen readers. External links do not need to open new tabs; if they do, say so.
- **Zoom:** the viewport meta allows zoom. At 200% zoom nothing overlaps or gets cut off.
- **Motion:** with reduced motion turned on, the background is static and transitions are near zero.
- **Colour is never the only signal:** links in body text are underlined.

Tools available: the accessibility panel in browser dev tools answers "what does a screen reader see here?";
automated checkers (axe, the Lighthouse accessibility audit) answer "are there obvious mechanical
failures?". Automated checks catch maybe a third of issues, so also tab through the page by hand.

## Performance

Target: Lighthouse performance 95 or higher on mobile, and the page feels instant on a mid-range phone.

| Budget | Limit (compressed, over the wire) |
|---|---|
| HTML + CSS + JS combined | about 30 KB |
| Font | one WOFF2 file, ideally under 40 KB (variable, Latin subset) |
| Images | total under 60 KB; a portrait, if any, under 40 KB |
| Whole page | under 150 KB |
| Requests | under 10, all to the site's own domain |
| Third-party requests | zero (no analytics, no font CDN, no icon CDN, no embeds) |

How to stay there:
- **CSS:** one small stylesheet, or inline it in the head if it is under ~10 KB; either way it is the only
  render-blocking resource.
- **JS:** one deferred script. The page must be fully readable with JavaScript off.
- **Font:** self-host, preload the one file, use font-display swap, and set a fallback stack with similar
  proportions so the swap does not shift the layout. Or use the system font stack and skip all of this.
- **Images:** AVIF or WebP with width and height attributes (prevents layout shift). Size them for the
  largest size actually shown, with a 2x version at most. Icons as inline SVG, not an icon font or PNG.
- **Layout stability:** Cumulative Layout Shift under 0.1; aim for 0. Reserve space for everything.
- **Caching on Netlify:** long cache lifetimes for the font and images (rename the file when it changes),
  short or revalidating cache for the HTML. Netlify serves compressed files on its own.

Tools available: Lighthouse (in browser dev tools or PageSpeed Insights) answers "what is the performance
score and what is slowing it?"; the network panel with cache disabled answers "how many bytes and requests
does a first visit cost, and do any go to another domain?". Run Lighthouse in a private window so browser
extensions do not skew it, and run it more than once.

## SEO and sharing basics

- Title: owner's name plus role, under ~60 characters. Example shape: "Name — Fullstack Software Engineer".
- Meta description: one plain sentence, 120–160 characters, saying what they do.
- Canonical link to the live URL.
- Open Graph: title, description, URL, type "website", and an image (1200 by 630, self-hosted, under
  ~100 KB, readable text, no email address on it). Add the matching Twitter card meta.
- Favicon: a small SVG plus a PNG fallback; an apple-touch icon is optional.
- Optional structured data: a Person entry with name, job title, and the GitHub and LinkedIn profile links.
  No email, no phone.
- A robots file is optional; do not block the page.

Tools available: social-share preview tools and the LinkedIn post inspector answer "what does the link card
look like when shared?".

## Mobile at 375px

- No horizontal scroll at 320, 375, 768 and 1024px.
- Body text at least 16px; line length stays readable.
- Tap targets at least 44 by 44px with space between them (GitHub and LinkedIn icons especially).
- Hero fits the first screen without hiding the hint that there is more below; uses dynamic viewport height
  so mobile toolbars do not cut it off.
- Background runs in its touch mode (drift only, fewer points) and does not block scrolling.
- Check landscape on a phone, too.

Tools available: device emulation in dev tools answers "how does it lay out at this width?"; a real phone
answers "does it feel smooth and is it readable in daylight?".

## Pre-ship checklist (each line passes or fails)

Content and owner rules
- [ ] No email address anywhere: not in text, links, meta, structured data, or the OG image.
- [ ] No contact form. No projects section.
- [ ] Only external links are GitHub and LinkedIn, and both URLs are correct.
- [ ] No scroll-reveal effects, no bouncy or scale-up hovers, no blue–purple gradient.
- [ ] Copy passes the copywriting skill's checklist.

Accessibility
- [ ] Every text pair passes its contrast target, including over the canvas.
- [ ] Full keyboard pass: every interactive element reachable, focus always visible.
- [ ] One h1, ordered headings, header/main/footer landmarks, page language set.
- [ ] Reduced motion on: background static, no smooth scroll.
- [ ] Automated accessibility check: zero errors.

Performance
- [ ] Lighthouse mobile performance 95+ (and accessibility, best practices, SEO each 95+).
- [ ] First-visit transfer under 150 KB; zero third-party requests.
- [ ] At most one font file; CLS under 0.1.
- [ ] Background loop stops when the tab is hidden; frame time stays low with CPU throttling.
- [ ] Page fully readable with JavaScript disabled.

Meta and mobile
- [ ] Title, description, canonical, OG and Twitter tags present; share preview looks right.
- [ ] Favicon shows.
- [ ] No horizontal scroll at 320/375/768/1024px; tap targets 44px+.
- [ ] HTML validates with no errors; console shows no errors or warnings.

If any line fails, the change is not done. Report failures plainly with the number measured.
