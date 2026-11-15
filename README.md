# marianmolocea.com

Personal site of Marian Molocea. Plain HTML, CSS and JavaScript with no build step.

- `site/` is the published site (Netlify publishes this folder, see `netlify.toml`).
- `content/copy.md` holds the site copy.
- `design/palettes.html` is the palette study the colours came from.
- `.claude/skills/` holds the design, motion, quality and copywriting guidance used to build it.

Run it locally with any static server pointed at `site/`, for example:

    python -m http.server 8080 --directory site
