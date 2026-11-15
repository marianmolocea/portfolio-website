---
name: portfolio-interaction-motion
description: What motion is allowed on the portfolio site, how to build the cursor-reactive canvas background within a strict performance budget, non-bouncy hover and focus states, reduced-motion and touch handling, and the list of banned effects. Use when adding or changing any animation, transition, hover style, or the background canvas.
---

# Portfolio interaction and motion

The site should feel alive and a little playful, but the reading always wins. There is exactly one "show
off" element: a canvas background that reacts gently to the mouse. Everything else is quiet. Optimise for:
apart from the background's slow idle drift, nothing moves unless the visitor caused it; nothing moving
competes with text, and the page stays smooth on
a mid-range phone.

## Banned (do not build, do not suggest)

- Fade-in, slide-in or any reveal-on-scroll effect. Content is simply there when the page loads.
- Bouncy, springy or scale-up hover effects on cards, sections or images. No "lift" with a growing shadow.
- The blue–purple gradient look, including animated gradients and colour blobs.
- Parallax on text, scroll-jacking, pinned scroll sections, split-letter headline animations.
- Magnetic buttons, custom cursors that replace the system cursor, cursor trails.
- Typing effects on the hero text, looping decorative animations, page-load intro sequences.
- Any animation that delays the visitor from reading or clicking.

If a request seems to need one of these, say which rule it hits and offer the nearest allowed option.

## Allowed motion

| What | How | Timing |
|---|---|---|
| Link and button hover | Colour change, underline thickness or offset change | 120–200ms, ease-out |
| Focus | Instant, clearly visible outline (no transition needed) | 0–100ms |
| Press feedback | Slight colour or opacity change; no movement | under 100ms |
| Background canvas | Slow drift plus gentle response to pointer | continuous, see budget |
| Anchor jump | Smooth scrolling, turned off under reduced motion | browser default |

Rules behind the table: animate only colour, opacity and transform (never width, height, top, left or
margin, which force layout). Hover must never shift layout or move neighbouring content. Every hover effect
also needs a matching focus style, because keyboard users never hover. No state change should be fully
instant either: a short colour transition reads as responsive, a 0ms jump can feel broken.

## The cursor-reactive background

### Concept

A full-viewport canvas fixed behind the content, drawn in the text or accent colour at low opacity. Ideas
that fit an engineer who builds software that controls simulation models:
- a grid of dots or short line segments that lean or brighten near the pointer, like a vector field;
- a slow particle field (a few dozen to ~150 points) whose particles drift and are gently pushed by the
  pointer, optionally with faint lines between near neighbours;
- a contour or flow-field look that shifts as the pointer moves.
Pick one. Keep it abstract. The pointer should *disturb* the system a little, not drag things around.

### Rules for "gentle"

- Effect radius roughly 100–200px around the pointer; strength falls off smoothly with distance.
- Ease the tracked pointer position toward the real one each frame (move a fraction of the gap) so motion
  feels damped, never twitchy.
- When the pointer leaves or stops, the system settles back to its idle drift over a second or two.
- Opacity behind text: shapes at roughly 0.1–0.3 of full strength. Body text contrast must still pass when
  measured over the brightest point the canvas can reach. If in doubt, dim the canvas behind the text column
  or make the effect stronger only in the page margins.
- The canvas ignores pointer events (clicks and text selection go straight through it) and is hidden from
  assistive technology; it carries no information.

### Performance budget

| Item | Budget |
|---|---|
| Script for the background | about 5 KB or less, uncompressed, no library |
| Work per frame | well under 16ms on a mid-range phone; aim for 2–4ms |
| Device pixel ratio | cap at 2 (or 1.5 for particle counts near the top end) |
| Particle / point count | scale with viewport area; fewer on small screens |
| Frame loop | one requestAnimationFrame loop, never timers |

How to stay inside it:
- Drive everything from a single requestAnimationFrame loop. Do the drawing there, not in the pointer
  handler; the handler only records the latest position.
- Mark the pointer listener as passive and keep it cheap.
- Stop the loop when the tab is hidden (the page visibility change event) and restart when it is visible.
- Pause, or drop to a much lower frame rate, when the canvas is off screen or the window is not focused.
- Resize the canvas on window resize, debounced, and cap the device pixel ratio when sizing the backing
  store. A 3x phone screen at full resolution quadruples the pixels for no visible gain.
- Avoid per-frame object creation, shadows and blur filters on the canvas, and reading layout from the DOM
  inside the loop.
- Start the background after the main content has rendered (defer the script); the page must be fully
  readable and usable if the script never runs.

The browser's performance panel answers "how long does each frame take and is anything janky?". Check it
with CPU throttling on before calling the background done.

### Reduced motion

When the visitor's system asks for reduced motion (prefers-reduced-motion: reduce):
- Draw one static frame of the background (or a plain background) and do not start the loop.
- Ignore pointer movement.
- Turn off smooth scrolling and shorten all transitions to near zero.
- Listen for the preference changing while the page is open and follow it.

### Touch devices

Touch screens have no hover and no resting pointer. Detect a coarse pointer or no-hover device and:
- run the idle drift only, slower and with fewer points;
- optionally react to a tap or drag with a small, short ripple that settles within about a second, but
  never block scrolling or call anything that prevents default touch behaviour;
- respect reduced motion exactly as on desktop.
Battery matters on phones: when in doubt, do less.

## Hover and focus states

- Links: accent colour, underlined in body text. On hover, change the underline (thicker or closer) or the
  colour; do not move the text.
- Icon links (GitHub, LinkedIn): colour shift on hover and focus, an accessible name, a target at least 44
  by 44px on touch.
- Focus: a visible outline in the accent colour, at least 2px, with a small offset, at 3:1 contrast or
  better against the background. Show it for keyboard focus (focus-visible); never remove outlines without a
  replacement.
- Add a pointer cursor only to things that are actually clickable.

## How to decide when unsure

Ask: did the visitor cause this motion (the background's idle drift is the one exception)? Could someone reading a paragraph ignore it? Does it still work with
motion turned off and with no mouse? If any answer is no, cut it or tone it down.
