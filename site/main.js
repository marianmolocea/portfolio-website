// Background field: a grid of small crosses that turn toward the pointer and
// ripple when the empty background is clicked or tapped. Purely decorative.
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  const canvas = document.querySelector('.field');
  const ctx = canvas && canvas.getContext('2d');
  if (!ctx) return;

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');
  const coarse = matchMedia('(pointer: coarse)').matches;
  const hint = document.querySelector('.hint');
  const readout = document.querySelector('.readout');
  const rx = document.getElementById('rx');
  const ry = document.getElementById('ry');

  // Colours and strengths for three heat levels: idle ink, warm red, hot red.
  // Red stays at or below 18% opacity so text on top keeps its contrast.
  const STYLES = ['rgba(22,22,22,.11)', 'rgba(224,48,30,.12)', 'rgba(224,48,30,.18)'];
  const RADIUS = 170;
  const RIPPLE_SPEED = 0.55; // px per ms
  const RIPPLE_LIFE = coarse ? 900 : 1600; // ms
  const RIPPLE_WIDTH = 42;
  const HALF_PI = Math.PI / 2;
  const QUARTER_PI = Math.PI / 4;

  let w = 0, h = 0, gap = 32, cols = 0, rows = 0;
  let buffers = [], counts = [0, 0, 0];
  let raf = 0, running = false, blurred = false, resizeTimer = 0, lastNow = 0;
  let tx = -1e4, ty = -1e4, px = -1e4, py = -1e4, presence = 0, inside = false;
  let lastX = '', lastY = '';
  const ripples = [];

  function resize() {
    w = window.innerWidth;
    h = window.innerHeight;
    gap = w < 600 ? 36 : 32;
    // Big grids get a lower pixel ratio so software-drawn canvases keep up.
    const dpr = Math.min(window.devicePixelRatio || 1, (w * h) / (gap * gap) > 1500 ? 1.5 : 2);
    canvas.width = Math.round(w * dpr);
    canvas.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cols = Math.ceil(w / gap) + 1;
    rows = Math.ceil(h / gap) + 1;
    const size = cols * rows * 8; // two segments, four numbers each
    buffers = [new Float32Array(size), new Float32Array(size), new Float32Array(size)];
    if (!running) draw(performance.now());
  }

  function draw(now) {
    const t = now * (coarse ? 0.00025 : 0.0004);
    // Easing scaled by elapsed time, so 60 Hz and 165 Hz screens feel the same.
    const frames = Math.min((now - lastNow) / 16.7, 4);
    lastNow = now;
    const follow = 1 - Math.pow(0.88, frames);
    px += (tx - px) * follow;
    py += (ty - py) * follow;
    presence += ((inside ? 1 : 0) - presence) * (1 - Math.pow(0.95, frames));
    while (ripples.length && now - ripples[0].t > RIPPLE_LIFE) ripples.shift();

    counts[0] = counts[1] = counts[2] = 0;
    const offset = gap / 2;

    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        let x = c * gap + offset - gap / 2 * (r % 2);
        let y = r * gap + offset;
        let a = Math.sin(t + x * 0.012 + y * 0.009) * 0.35;
        let s = 3.5;
        let heat = 0;

        if (presence > 0.01) {
          const dx = px - x, dy = py - y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < RADIUS) {
            let f = 1 - d / RADIUS;
            f = f * f * (3 - 2 * f) * presence;
            const aim = Math.atan2(dy, dx);
            // A cross looks the same every quarter turn, so turn the short way.
            let diff = aim - a;
            diff = ((diff % HALF_PI) + HALF_PI + QUARTER_PI) % HALF_PI - QUARTER_PI;
            a += diff * f;
            s += f * 3;
            x -= Math.cos(aim) * f * 6;
            y -= Math.sin(aim) * f * 6;
            heat = f;
          }
        }

        for (let i = 0; i < ripples.length; i++) {
          const rp = ripples[i];
          const age = now - rp.t;
          const dx = x - rp.x, dy = y - rp.y;
          const d = Math.sqrt(dx * dx + dy * dy);
          const ring = Math.max(0, 1 - Math.abs(d - age * RIPPLE_SPEED) / RIPPLE_WIDTH) * (1 - age / RIPPLE_LIFE);
          if (ring > 0) {
            a += ring * QUARTER_PI;
            s += ring * 2.5;
            if (ring > heat) heat = ring;
          }
        }

        const level = heat > 0.55 ? 2 : heat > 0.2 ? 1 : 0;
        const buf = buffers[level];
        let n = counts[level];
        const cx = Math.cos(a) * s, sy = Math.sin(a) * s;
        buf[n++] = x - cx; buf[n++] = y - sy; buf[n++] = x + cx; buf[n++] = y + sy;
        buf[n++] = x + sy; buf[n++] = y - cx; buf[n++] = x - sy; buf[n++] = y + cx;
        counts[level] = n;
      }
    }

    ctx.clearRect(0, 0, w, h);
    ctx.lineWidth = 1.25;
    ctx.lineCap = 'round';
    for (let level = 0; level < 3; level++) {
      const buf = buffers[level], n = counts[level];
      if (!n) continue;
      ctx.strokeStyle = STYLES[level];
      ctx.beginPath();
      for (let i = 0; i < n; i += 4) {
        ctx.moveTo(buf[i], buf[i + 1]);
        ctx.lineTo(buf[i + 2], buf[i + 3]);
      }
      ctx.stroke();
    }

    if (readout && inside) {
      const vx = Math.max(0, Math.min(1, px / w)).toFixed(2);
      const vy = Math.max(0, Math.min(1, py / h)).toFixed(2);
      if (vx !== lastX) rx.textContent = lastX = vx;
      if (vy !== lastY) ry.textContent = lastY = vy;
    }
  }

  function frame(now) {
    draw(now);
    raf = requestAnimationFrame(frame);
  }

  function update() {
    const shouldRun = !reducedMotion.matches && !document.hidden && !blurred;
    if (shouldRun && !running) {
      running = true;
      raf = requestAnimationFrame(frame);
    } else if (!shouldRun && running) {
      running = false;
      cancelAnimationFrame(raf);
    }
    if (reducedMotion.matches) {
      inside = false;
      presence = 0;
      ripples.length = 0;
      draw(performance.now());
    }
    if (hint) hint.hidden = reducedMotion.matches;
    if (readout) readout.hidden = reducedMotion.matches || coarse;
  }

  window.addEventListener('pointermove', (e) => {
    if (e.pointerType === 'touch') return;
    if (blurred) { blurred = false; update(); } // hovering an unfocused window
    if (!running) return;
    tx = e.clientX;
    ty = e.clientY;
    if (!inside) { px = tx; py = ty; }
    inside = true;
  }, { passive: true });

  document.addEventListener('pointerout', (e) => {
    if (!e.relatedTarget) inside = false;
  });

  // Ripple only from empty background, never from text, links or the photo.
  window.addEventListener('pointerdown', (e) => {
    if (!running || e.target.closest('a, p, h1, h2, h3, li, dt, dd, img, output')) return;
    if (ripples.length >= 4) ripples.shift();
    ripples.push({ x: e.clientX, y: e.clientY, t: performance.now() });
  }, { passive: true });

  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(resize, 100);
  });
  document.addEventListener('visibilitychange', update);
  window.addEventListener('blur', () => { blurred = true; inside = false; update(); });
  window.addEventListener('focus', () => { blurred = false; update(); });
  reducedMotion.addEventListener('change', update);

  if (hint && coarse) hint.textContent = 'Tap the background to poke the simulation.';
  resize();
  update();
})();
