// Footer year, years of experience, theme toggle and the terminal input line.
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  const years = new Date().getFullYear() - 2020; // started in 2020
  const exp = document.getElementById('exp');
  if (exp) exp.textContent = years;
  const expWords = document.getElementById('exp-words');
  const words = ['six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve'];
  if (expWords) expWords.textContent = words[years - 6] || years;

  // Theme toggle. The head script applies a saved choice before first paint;
  // with no saved choice the page is dark (in CSS).
  const root = document.documentElement;
  const toggle = document.querySelector('.theme');
  const isDark = () => root.dataset.theme !== 'light';
  function syncTheme() {
    if (toggle) toggle.setAttribute('aria-pressed', String(isDark()));
  }
  if (toggle) {
    toggle.hidden = false;
    toggle.addEventListener('click', () => {
      root.dataset.theme = isDark() ? 'light' : 'dark';
      try { localStorage.setItem('theme', root.dataset.theme); } catch (e) { /* storage blocked */ }
      syncTheme();
    });
  }
  syncTheme();

  // Corner handle: drag to resize the window. It stays centred, so both edges
  // move; the line at the top of the window stays put. Double-click resets.
  const grip = document.querySelector('.grip');
  const frame = document.querySelector('.frame');
  if (grip && frame) {
    grip.hidden = false;
    let start = null;
    grip.addEventListener('pointerdown', (e) => {
      e.preventDefault();
      grip.setPointerCapture(e.pointerId);
      grip.classList.add('dragging');
      const box = frame.getBoundingClientRect();
      const css = getComputedStyle(root);
      const anchor = document.elementFromPoint(
        box.left + parseFloat(css.getPropertyValue('--inner')) + 4,
        box.top + parseFloat(css.getPropertyValue('--title-h')) + 8);
      start = {
        x: e.clientX, y: e.clientY, w: box.width, h: box.height, anchor,
        offset: anchor ? anchor.getBoundingClientRect().top - box.top : 0,
      };
    });
    grip.addEventListener('pointermove', (e) => {
      if (!start) return;
      const w = Math.max(700, start.w + 2 * (e.clientX - start.x));
      const h = Math.max(520, start.h + 2 * (e.clientY - start.y));
      // the CSS cap still applies, so the window never outgrows the screen
      root.style.setProperty('--W', `min(${w}px, 100% - 2 * var(--pad))`);
      root.style.setProperty('--H', `min(${h}px, 100svh - 2 * var(--pad))`);
      if (start.anchor) {
        const drift = start.anchor.getBoundingClientRect().top - frame.getBoundingClientRect().top - start.offset;
        window.scrollBy({ top: drift, behavior: 'instant' });
      }
    });
    const stop = () => {
      if (!start) return;
      start = null;
      grip.classList.remove('dragging');
      window.dispatchEvent(new Event('resize')); // re-check the input line
    };
    grip.addEventListener('pointerup', stop);
    grip.addEventListener('pointercancel', stop);
    grip.addEventListener('dblclick', () => {
      root.style.removeProperty('--W');
      root.style.removeProperty('--H');
      window.dispatchEvent(new Event('resize'));
    });
  }

  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)');

  // Terminal input line: types the next section's command, and "enters" it
  // when that section's own prompt line scrolls up out from under it.
  const input = document.querySelector('.input');
  const typed = input && input.querySelector('.typed');
  const prompts = [...document.querySelectorAll('.block > .ps')];
  if (typed && prompts.length) {
    const commands = prompts.map((p) => p.querySelector('.cmd').textContent);
    let entered = -1, typeTimer = 0, ticking = false;

    const showCommand = (text, animate) => {
      clearTimeout(typeTimer);
      if (!animate || reducedMotion.matches || !text) {
        typed.textContent = text;
        input.classList.remove('typing');
        return;
      }
      let n = 0;
      input.classList.add('typing');
      (function step() {
        typed.textContent = text.slice(0, ++n);
        if (n < text.length) typeTimer = setTimeout(step, 30 + Math.random() * 40);
        else input.classList.remove('typing');
      })();
    };

    const check = () => {
      ticking = false;
      const edge = input.getBoundingClientRect().top;
      let n = 0;
      while (n < prompts.length && prompts[n].getBoundingClientRect().top < edge) n++;
      if (n === entered) return;
      showCommand(commands[n] || '', n === entered + 1); // type only when moving forward one step
      entered = n;
    };

    window.addEventListener('scroll', () => {
      if (!ticking) { ticking = true; requestAnimationFrame(check); }
    }, { passive: true });
    window.addEventListener('resize', check);
    check();
  }
})();
