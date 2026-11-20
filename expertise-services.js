// Additional expertise uses the site's existing React JSX runtime and design tokens.
export const expertiseServices = [
  {
    id: 'low-current', title: 'Low-current systems', tag: 'COMMUNICATION, SECURITY & DETECTION',
    text: 'Low-current systems for building communications, security and fire detection, including CCTV, structured networks, television distribution and dedicated fire-alarm equipment.',
    details: ['CCTV surveillance', 'Data networks & TV distribution', 'Fire detection & alarm systems'],
    image: 'expertise-low-current-v2.webp', width: 1536, height: 1024,
    alt: 'Low-current systems with CCTV cameras, a fire alarm panel, a ceiling-mounted smoke detector with conduit and an organized network rack',
    caption: 'CCTV, fire alarm & network systems', generatedIllustration: true
  },
  {
    id: 'lv', title: 'Low-voltage (LV) systems', tag: 'BUILDING POWER DISTRIBUTION',
    text: 'Low-voltage power distribution for buildings and facilities, connecting incoming supplies to distribution boards, lighting circuits and equipment through coordinated wiring, switching and circuit protection.',
    details: ['Main & sub-distribution', 'Lighting & power circuits', 'Earthing & circuit protection'],
    image: 'expertise-lv.webp', width: 1280, height: 960,
    alt: 'Enclosed low-voltage main switchboard and distribution panels in a facility',
    caption: 'LV main and distribution panels', credit: 'Zaereth', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Electrical_Main_and_distribution_panel_for_480_volt.JPG',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  {
    id: 'mv', hideImage: true, title: 'Medium-voltage (MV) systems', tag: 'FEEDERS, SWITCHGEAR & SUBSTATIONS',
    text: 'Medium-voltage infrastructure connecting incoming feeders, switchgear and transformer substations, with equipment installation, cable connections and protection interfaces coordinated around each site.',
    details: ['MV switchgear & feeders', 'Transformer connections', 'Protection & control interfaces'],
    image: '3.webp', width: 1280, height: 960, alt: 'Medium-voltage switchgear lineup with an engineer standing beside the equipment',
    caption: 'Installed MV switchgear', existingPhoto: true
  },
  {
    id: 'mv-underground', title: 'MV Underground Cable Installation', tag: 'UNDERGROUND POWER INFRASTRUCTURE',
    text: 'Medium-voltage underground cable installation, from laying cables along prepared routes to protective covers, warning tape and connection preparation.',
    details: ['Cable laying & route installation', 'Protective covers & warning tape', 'Connection preparation'],
    image: 'mv-underground-warning.webp', width: 720, height: 1280,
    alt: 'Underground electrical cable route protected with red warning tape in a prepared trench',
    caption: 'MV underground cable installation', existingPhoto: true,
    gallery: [
      { image: 'mv-underground-cables.webp', alt: 'Three red power cables laid along an open trench', caption: 'Cable route installation' },
      { image: 'mv-underground-covers.webp', alt: 'Protective covers placed over an underground cable route', caption: 'Cable protection covers' }
    ]
  },
  {
    id: 'h-pole-transformer', title: 'H-Pole Transformer', tag: 'POLE-MOUNTED DISTRIBUTION',
    text: 'Transformer installation on H-pole structures, with support steelwork, electrical connections and associated distribution equipment.',
    details: ['H-pole transformer mounting', 'MV & LV connections', 'Distribution equipment installation'],
    image: 'h-pole-transformer.webp', width: 960, height: 1280,
    alt: 'Distribution transformer mounted between two concrete poles with switchgear and cable connections',
    caption: 'H-pole transformer installation', existingPhoto: true
  },
  {
    id: 'transformer-installation', title: 'Transformer Installation', tag: 'INSTALLATION, CONNECTION & TESTING',
    text: 'Transformer installation and electrical connections, supported by cable-route work and site testing during preparation for service.',
    details: ['Transformer installation & connections', 'Associated cable-route work', 'Electrical testing'],
    image: 'transformer-installation.webp', width: 960, height: 1280,
    alt: 'Transformer installation with power cable terminations and portable electrical test equipment',
    caption: 'Transformer installation & connection work', existingPhoto: true,
    gallery: [
      { image: 'transformer-cable-route.webp', alt: 'Workers laying black power cables along a trench for electrical connections', caption: 'Cable installation for transformer connections' },
      { image: 'transformer-testing.webp', alt: 'Portable insulation-test instrument connected to a transformer', caption: 'Transformer electrical testing' }
    ]
  },
  {
    id: 'bus-duct', title: 'Bus duct systems', tag: 'ENCLOSED BUSBAR TRUNKING',
    text: 'Enclosed bus duct systems distribute power between electrical equipment and building loads, with connected trunking sections, supported routes and tap-off units matched to the installation.',
    details: ['Busway sections & joints', 'Tap-off units & connections', 'Supports & route installation'],
    image: 'expertise-bus-duct-v3.webp', width: 418, height: 227,
    alt: 'Electrical busduct with a tap-off switch enclosure and insulated busbar connection',
    caption: 'Busduct & tap-off switch unit', suppliedImage: true
  },
  {
    id: 'light-poles', title: 'Light poles', tag: 'OUTDOOR LIGHTING INFRASTRUCTURE',
    text: 'Lighting pole installations for roads, public spaces and facilities, coordinating poles, brackets, luminaires, foundations and electrical connections to suit the location and lighting coverage.',
    details: ['Poles, brackets & luminaires', 'Foundations & mounting', 'Cabling & electrical connections'],
    image: 'expertise-light-poles.webp', width: 1280, height: 871,
    alt: 'A twin-arm street-lighting pole with two luminaires viewed against the daytime sky',
    caption: 'Pole, brackets and luminaires', credit: 'Omoeko Media', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:Street_light_pole.jpg',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
  },
  {
    id: 'power-cables', title: 'MV & LV cables', tag: 'POWER CABLE SYSTEMS',
    text: 'Medium- and low-voltage cable works connect power equipment across buildings and infrastructure, with routes, installation, joints and terminations selected for the specified electrical system.',
    details: ['Cable routing & installation', 'Cable joints & terminations', 'Identification & installation checks'],
    image: '2.webp', width: 1280, height: 960, alt: 'Three medium-voltage cable terminations connected inside electrical switchgear',
    caption: 'MV cable termination detail', existingPhoto: true
  },
  {
    id: 'control-panels', title: 'Electrical control panels', tag: 'SWITCHING, PROTECTION & CONTROL',
    text: 'Electrical control panels bring switching, protection and control components into organized assemblies, with internal wiring, terminals and operating interfaces arranged for the equipment they serve.',
    details: ['Equipment & motor controls', 'Panel wiring & terminals', 'Switches, indicators & interfaces'],
    image: 'expertise-control-panels.webp', width: 481, height: 353,
    alt: 'Electrical control cabinet interior showing organized contactors, terminals and power wiring',
    caption: 'Control cabinet components & wiring', suppliedImage: true
  },
  {
    id: 'installation', title: 'Electrical installation', tag: 'FROM MOUNTING TO HANDOVER',
    text: 'Electrical installation brings equipment, cable systems and site connections together, from mounting and containment to wiring, termination and functional checks before handover.',
    details: ['Equipment mounting & containment', 'Wiring & cable termination', 'Inspection & functional checks'],
    image: '5.webp', width: 960, height: 1280, alt: 'Electrical test equipment set up beside installed switchgear for commissioning checks',
    caption: 'Switchgear installation and testing', existingPhoto: true
  }
];

export function renderExpertiseServices(runtime, asset) {
  const { jsx, jsxs } = runtime;
  return jsxs('div', {
    className: 'expertise-services-block', id: 'expertise-systems',
    children: [
      jsxs('div', { className: 'expertise-services-heading', children: [
        jsx('span', { className: 'eyebrow', children: 'SPECIALIST SYSTEMS & INSTALLATION' }),
        jsx('p', { children: 'Power, communication and control systems, from equipment supply to installation.' })
      ] }),
      jsx('div', { className: 'capability-grid expertise-services', children: expertiseServices.map((service, index) =>
        jsxs('article', {
          className: `capability capability-service service-${service.id}`, id: `service-${service.id}`,
          children: [
            service.hideImage ? null : jsxs('figure', { className: 'service-photograph', children: [
              jsx('img', { src: asset(service.image), alt: service.alt, width: service.width, height: service.height, loading: 'lazy', decoding: 'async' }),
              jsx('span', { className: 'service-number', 'aria-hidden': true, children: String(index + 9).padStart(2, '0') }),
              jsx('figcaption', { children: service.caption })
            ] }),
            jsxs('div', { className: 'capability-content', children: [
              jsx('span', { className: 'eyebrow', children: service.tag }),
              jsx('h3', { children: service.title }),
              jsx('p', { children: service.text }),
              jsx('ul', { children: service.details.map(detail => jsx('li', { children: detail }, detail)) })
            ] }),
            service.gallery ? jsxs('details', { className: 'service-gallery', style: { padding: '0 24px 24px' }, children: [
              jsx('summary', { style: { cursor: 'pointer', padding: '12px 0', fontWeight: 600 }, children: `View more photographs (${service.gallery.length})` }),
              jsx('div', { style: { display: 'grid', gap: '16px' }, children: service.gallery.map(photo =>
                jsxs('figure', { style: { margin: 0 }, children: [
                  jsx('a', { href: asset(photo.image), target: '_blank', rel: 'noopener noreferrer', children: jsx('img', { src: asset(photo.image), alt: photo.alt, loading: 'lazy', decoding: 'async', style: { width: '100%', height: 'auto', display: 'block', borderRadius: '8px' } }) }),
                  jsx('figcaption', { style: { fontSize: '14px', paddingTop: '8px' }, children: photo.caption })
                ] }, photo.image)
              ) })
            ] }) : null,
            service.hideImage ? null : service.source ? jsxs('div', { className: 'service-photo-credit', children: [
              jsx('span', { children: 'Technical reference photograph' }),
              jsxs('span', { children: [
                jsx('a', { href: service.source, target: '_blank', rel: 'noopener noreferrer', children: service.credit }),
                ' · ',
                jsx('a', { href: service.licenseUrl, target: '_blank', rel: 'noopener noreferrer', children: service.license })
              ] })
            ] }) : jsx('div', { className: 'service-photo-credit', children: jsx('span', { children: service.suppliedImage ? 'Supplied product reference' : service.generatedIllustration ? 'AI-generated illustration' : 'Real photograph / in the field' }) })
          ]
        }, service.id)
      ) }),
      jsx('a', { className: 'service-credit-link', href: './expertise-image-credits.html', target: '_blank', rel: 'noopener noreferrer', children: 'Image credits & licensing ↗' })
    ]
  });
}

// Direct links can arrive before React has mounted these new cards.
// Restore only an initial link to this addition, without interrupting user input.
function restoreInitialExpertiseLink() {
  const initialHash = window.location.hash;
  const targetId = initialHash.slice(1);
  const knownIds = ['expertise-systems', ...expertiseServices.map(service => `service-${service.id}`)];
  if (!knownIds.includes(targetId)) return;

  let interrupted = false;
  const inputEvents = ['wheel', 'touchstart', 'pointerdown', 'keydown'];
  const interrupt = () => { interrupted = true; };
  const cleanUp = () => inputEvents.forEach(type => window.removeEventListener(type, interrupt, true));
  inputEvents.forEach(type => window.addEventListener(type, interrupt, { passive: true, capture: true }));

  const observer = new MutationObserver(alignWhenReady);
  function alignWhenReady() {
    const target = document.getElementById(targetId);
    if (!target) return false;
    observer.disconnect();
    requestAnimationFrame(async () => {
      if (document.fonts) await document.fonts.ready;
      if (!interrupted && window.location.hash === initialHash) {
        const headerHeight = document.querySelector('header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top: Math.max(0, top), behavior: 'instant' });
      }
      cleanUp();
    });
    return true;
  }
  if (!alignWhenReady()) observer.observe(document.documentElement, { childList: true, subtree: true });
}

restoreInitialExpertiseLink();
