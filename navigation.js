/* Keep the current reading location visible as visitors scroll. */
(() => {
  'use strict';

  function mountNavigation() {
    const header = document.querySelector('header');
    const main = document.querySelector('main');
    const location = document.querySelector('.theme-control-heading');
    if (!header || !main || !location || !document.getElementById('project-archive')) return false;

    const labels = {
      about: ['Company', 'about'],
      expertise: ['Expertise', 'expertise'],
      projects: ['Featured projects', 'projects'],
      solar: ['Solar', 'solar'],
      'project-archive': ['Project archive', 'projects'],
      'field-gallery': ['Street lighting', 'projects'],
      ongoing: ['Ongoing projects', 'projects'],
      insights: ['Insights', 'insights'],
      contact: ['Contact', 'contact']
    };
    const sections = Array.from(main.children).filter((element) => element.tagName === 'SECTION');
    const links = Array.from(header.querySelectorAll('nav a, .header-cta, .brand'));
    const caption = document.createElement('span');
    caption.className = 'section-location-caption';
    caption.textContent = 'YOU’RE VIEWING';
    const name = document.createElement('strong');
    name.className = 'section-location-name';
    location.classList.add('section-location');
    location.setAttribute('aria-label', 'Current section');
    location.replaceChildren(caption, name);

    let activeSection = null;
    let scheduled = false;

    function updateLocation() {
      scheduled = false;
      const marker = header.getBoundingClientRect().bottom + Math.min(100, window.innerHeight * 0.15);
      let current = sections[0];
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= marker) current = section;
        else break;
      }
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
        current = sections[sections.length - 1];
      }
      if (!current || current === activeSection) return;
      activeSection = current;
      const key = current.id || (current.classList.contains('hero') ? 'home' : 'commitment');
      const [label, destination] = labels[key] || (key === 'home' ? ['Home', ''] : ['Our commitment', 'insights']);
      name.textContent = label;
      header.dataset.currentSection = key;
      links.forEach((link) => {
        if (link.getAttribute('href') === `#${destination}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    }

    function scheduleUpdate() {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(updateLocation);
    }

    function updateHeaderOffset() {
      document.documentElement.style.setProperty('--section-scroll-offset', `${header.offsetHeight + 20}px`);
      scheduleUpdate();
    }

    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', updateHeaderOffset);
    window.addEventListener('hashchange', scheduleUpdate);
    main.addEventListener('load', scheduleUpdate, true);
    if ('ResizeObserver' in window) {
      const resizeObserver = new ResizeObserver(updateHeaderOffset);
      resizeObserver.observe(header);
      resizeObserver.observe(main);
    }
    if (document.fonts) document.fonts.ready.then(scheduleUpdate);
    updateHeaderOffset();
    updateLocation();
    return true;
  }

  if (!mountNavigation()) {
    const observer = new MutationObserver(() => {
      if (mountNavigation()) observer.disconnect();
    });
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
})();
