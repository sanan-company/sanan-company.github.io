/* Appearance preference is kept separate from the original website content. */
(() => {
  'use strict';

  const storageKey = 'sanan-color-theme';
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const validTheme = (value) => value === 'light' || value === 'dark';
  let preference = null;
  let controls = [];

  try {
    const saved = localStorage.getItem(storageKey);
    if (validTheme(saved)) preference = saved;
  } catch {
    // The switch also works when browser storage is unavailable.
  }

  function applyTheme() {
    const theme = preference || (systemTheme.matches ? 'dark' : 'light');
    document.documentElement.dataset.theme = theme;
    const browserColor = document.querySelector('meta[name="theme-color"]');
    if (browserColor) browserColor.content = theme === 'dark' ? '#111d19' : '#f6f7f2';
    controls.forEach((control) => {
      control.setAttribute('aria-pressed', String(control.dataset.themeChoice === theme));
    });
  }

  // Run before the stylesheets paint to avoid a flash of the wrong theme.
  applyTheme();

  function mountControl() {
    const header = document.querySelector('header');
    if (!header) return false;

    const group = document.createElement('div');
    group.className = 'theme-control';
    const heading = document.createElement('span');
    heading.className = 'theme-control-heading';
    heading.textContent = 'Appearance';
    const choices = document.createElement('div');
    choices.className = 'theme-choices';
    choices.setAttribute('role', 'group');
    choices.setAttribute('aria-label', 'Website appearance');
    const icons = {
      light: '<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M2 12h2m16 0h2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>',
      dark: '<svg aria-hidden="true" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M20.9 13A9 9 0 0 1 11 3.1 9 9 0 1 0 20.9 13Z"/></svg>'
    };
    controls = ['light', 'dark'].map((theme) => {
      const control = document.createElement('button');
      control.className = 'theme-choice';
      control.type = 'button';
      control.dataset.themeChoice = theme;
      control.setAttribute('aria-label', `${theme === 'light' ? 'Light' : 'Dark'} mode`);
      control.innerHTML = icons[theme] + `<span>${theme === 'light' ? 'Light' : 'Dark'}</span>`;
      control.addEventListener('click', () => {
        preference = theme;
        try { localStorage.setItem(storageKey, preference); } catch { /* Optional persistence. */ }
        applyTheme();
      });
      choices.append(control);
      return control;
    });
    group.append(heading, choices);
    header.append(group);
    applyTheme();
    return true;
  }

  if (!mountControl()) {
    const observer = new MutationObserver(() => {
      if (mountControl()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }

  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme();
  });
  window.addEventListener('storage', (event) => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = validTheme(event.newValue) ? event.newValue : null;
    applyTheme();
  });
})();
