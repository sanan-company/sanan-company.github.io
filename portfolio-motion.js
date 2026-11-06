/* Small, optional enhancements. Existing content and application behavior stay intact. */
(() => {
  'use strict';

  const root = document.documentElement;
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let mounted = false;

  function mount() {
    const main = document.querySelector('main');
    if (mounted) return true;
    if (!main || !main.querySelector('section')) return false;
    mounted = true;

    const progress = document.createElement('div');
    progress.className = 'pf-progress';
    progress.setAttribute('aria-hidden', 'true');

    const topButton = document.createElement('button');
    topButton.type = 'button';
    topButton.className = 'pf-top';
    topButton.setAttribute('aria-label', 'Back to top');
    topButton.setAttribute('title', 'Back to top');
    topButton.tabIndex = -1;
    topButton.setAttribute('aria-hidden', 'true');
    const arrow = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    arrow.setAttribute('viewBox', '0 0 24 24');
    arrow.setAttribute('width', '20');
    arrow.setAttribute('height', '20');
    arrow.setAttribute('fill', 'none');
    arrow.setAttribute('stroke', 'currentColor');
    arrow.setAttribute('stroke-width', '1.8');
    arrow.setAttribute('stroke-linecap', 'round');
    arrow.setAttribute('stroke-linejoin', 'round');
    arrow.setAttribute('aria-hidden', 'true');
    arrow.setAttribute('focusable', 'false');
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', 'M12 19V5m-6 6 6-6 6 6');
    arrow.append(path);
    topButton.append(arrow);
    document.body.append(progress, topButton);

    let scheduled = false;
    function updateProgress() {
      scheduled = false;
      const distance = Math.max(0, root.scrollHeight - window.innerHeight);
      const amount = distance ? Math.min(1, Math.max(0, window.scrollY / distance)) : 0;
      progress.style.transform = `scaleX(${amount})`;
      const visible = window.scrollY > Math.max(600, window.innerHeight * 0.75);
      topButton.classList.toggle('is-visible', visible);
      topButton.tabIndex = visible ? 0 : -1;
      if (visible) topButton.removeAttribute('aria-hidden');
      else topButton.setAttribute('aria-hidden', 'true');
    }
    function scheduleProgress() {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(updateProgress);
    }
    window.addEventListener('scroll', scheduleProgress, { passive: true });
    window.addEventListener('resize', scheduleProgress, { passive: true });
    main.addEventListener('load', scheduleProgress, true);
    if ('ResizeObserver' in window) new ResizeObserver(scheduleProgress).observe(main);
    topButton.addEventListener('click', () => {
      // Move keyboard focus to the existing home link without moving the viewport first.
      const home = document.querySelector('header .brand');
      if (home) home.focus({ preventScroll: true });
      window.scrollTo({ top: 0, behavior: reducedMotion.matches ? 'instant' : 'smooth' });
    });
    updateProgress();

    const candidates = Array.from(main.querySelectorAll(
      '.section-heading, .about-grid > h2, .capability, .tiu-feature, '
      + '.project-story, .solar-film, .record-card, .contract-feature, .insight-card'
    ));
    let revealObserver;
    function showAll() {
      root.classList.remove('pf-motion-ready');
      candidates.forEach((element) => element.classList.add('is-visible'));
      if (revealObserver) revealObserver.disconnect();
    }
    if (!reducedMotion.matches && 'IntersectionObserver' in window) {
      try {
        revealObserver = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('is-visible');
            revealObserver.unobserve(entry.target);
          });
        }, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });
        candidates.forEach((element) => {
          element.classList.add('pf-enter');
          const bounds = element.getBoundingClientRect();
          if (bounds.top < window.innerHeight && bounds.bottom > 0) {
            element.classList.add('is-visible');
          } else {
            revealObserver.observe(element);
          }
        });
        root.classList.add('pf-motion-ready');
      } catch (_) {
        showAll();
      }
    }
    // A visitor changing the system preference should see all content immediately.
    const onMotionChange = () => { if (reducedMotion.matches) showAll(); };
    if (reducedMotion.addEventListener) reducedMotion.addEventListener('change', onMotionChange);
    else if (reducedMotion.addListener) reducedMotion.addListener(onMotionChange);
    return true;
  }

  if (!mount()) {
    const mountObserver = new MutationObserver(() => {
      if (mount()) mountObserver.disconnect();
    });
    mountObserver.observe(root, { childList: true, subtree: true });
  }
})();
