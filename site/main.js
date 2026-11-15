// Footer year, theme toggle and the terminal input line.
(() => {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

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
