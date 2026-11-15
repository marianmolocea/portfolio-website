---
name: portfolio-interaction-motion
description: What motion is allowed on the portfolio site, how the terminal input line may move, non-bouncy hover and focus states, reduced-motion and touch handling, and the list of banned effects. Use when adding or changing any animation, transition or hover style.
---

# Portfolio interaction and motion

The site should feel alive and a little playful, but the reading always wins. The page is laid out as a
terminal window on a desktop, and there is exactly one "show off" element: the terminal's input line.
Everything else is quiet. Optimise for: apart from the input line, nothing moves unless the visitor caused
it; nothing moving competes with text, and the page stays smooth on a mid-range phone.

## Banned (do not build, do not suggest)

- Fade-in, slide-in or any reveal-on-scroll effect. Content is simply there when the page loads.
- Bouncy, springy or scale-up hover effects on cards, sections or images. No "lift" with a growing shadow.
- The blue–purple gradient look, including animated gradients and colour blobs. (The static desktop
  wallpaper around the terminal window is the one allowed gradient; it never moves.)
- Parallax on text, scroll-jacking, pinned scroll sections, split-letter headline animations.
- Magnetic buttons, custom cursors that replace the system cursor, cursor trails.
- Typing effects on the hero text, looping decorative animations, page-load intro sequences. (The input
  line below is the one exception.)
- Any animation that delays the visitor from reading or clicking.

If a request seems to need one of these, say which rule it hits and offer the nearest allowed option.

## The terminal input line

The bottom line of the terminal window types the command for the next section. When that section scrolls
up past it, the command moves into the section's own prompt line, as if Enter had been pressed. Its caret
may blink while it waits. Limits:
- Only the input line moves. Every section's output is on the page from the start; nothing is hidden
  until scrolled to, and nothing is pinned or scroll-jacked. The page scrolls normally.
- Typing is quick (well under a second per command) and never blocks reading or clicking.
- Under reduced motion the command appears at once and the caret does not blink.
- Without JavaScript the page reads the same; the input line just shows an empty prompt.
- The scroll handler only reads positions and is throttled to one check per animation frame.

## Allowed motion

| What | How | Timing |
|---|---|---|
| Link and button hover | Colour change, underline thickness or offset change | 120–200ms, ease-out |
| Focus | Instant, clearly visible outline (no transition needed) | 0–100ms |
| Press feedback | Slight colour or opacity change; no movement | under 100ms |
| Terminal input line | Types the next command, blinking caret while idle | under a second per command |
| Anchor jump | Smooth scrolling, turned off under reduced motion | browser default |

Rules behind the table: animate only colour, opacity and transform (never width, height, top, left or
margin, which force layout). Hover must never shift layout or move neighbouring content. Every hover effect
also needs a matching focus style, because keyboard users never hover. No state change should be fully
instant either: a short colour transition reads as responsive, a 0ms jump can feel broken.

## Reduced motion

When the visitor's system asks for reduced motion (prefers-reduced-motion: reduce):
- The input line shows each command at once, with no typing and no caret blink.
- Turn off smooth scrolling and shorten all transitions to near zero.

## Touch devices

Touch screens have no hover. Hover styles must never be the only way to see a state, and nothing may block
scrolling or prevent default touch behaviour. Battery matters on phones: when in doubt, do less.

## Hover and focus states

- Links: accent colour, underlined in body text. On hover, change the underline (thicker or closer) or the
  colour; do not move the text.
- Icon links (GitHub, LinkedIn): colour shift on hover and focus, an accessible name, a target at least 44
  by 44px on touch.
- Focus: a visible outline in the accent colour, at least 2px, with a small offset, at 3:1 contrast or
  better against the background. Show it for keyboard focus (focus-visible); never remove outlines without a
  replacement. Focused items must land inside the window, never behind the title bar or input line.
- Add a pointer cursor only to things that are actually clickable.

## How to decide when unsure

Ask: did the visitor cause this motion (the input line is the one exception)? Could someone reading a
paragraph ignore it? Does it still work with motion turned off and with no mouse? If any answer is no, cut
it or tone it down.
