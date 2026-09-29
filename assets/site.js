(() => {
  const root = document.documentElement;
  let saved;
  try { saved = localStorage.getItem('arda-theme'); } catch (_) {}
  const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.dataset.theme = saved === 'dark' || saved === 'light' ? saved : (systemDark ? 'dark' : 'light');
  document.addEventListener('DOMContentLoaded', () => {
    const toggle = document.querySelector('.theme-toggle');
    const sync = () => {
      const dark = root.dataset.theme === 'dark';
      toggle.textContent = dark ? '☀' : '☾';
      toggle.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
      toggle.title = toggle.getAttribute('aria-label');
    };
    sync();
    toggle.addEventListener('click', () => {
      root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('arda-theme', root.dataset.theme); } catch (_) {}
      sync();
    });
  });
})();
