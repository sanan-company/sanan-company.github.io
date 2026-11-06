// Additional expertise uses the site's existing React JSX runtime and design tokens.
export const expertiseServices = [
  {
    id: 'low-current', title: 'Low-current systems', tag: 'COMMUNICATION, SECURITY & DETECTION',
    text: 'Low-current systems for building communications, security and fire detection, including CCTV, structured networks, television distribution and dedicated fire-alarm equipment.',
    details: ['CCTV surveillance', 'Data networks & TV distribution', 'Fire detection & alarm systems'],
    image: 'expertise-low-current.webp', width: 960, height: 720,
    alt: 'Ethernet switches, patch panels and organized network patch cables in a rack',
    caption: 'Structured network cabling', credit: 'Dsimic', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:19-inch_rackmount_Ethernet_switches_and_patch_panels.jpg',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
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
    id: 'mv', title: 'Medium-voltage (MV) systems', tag: 'FEEDERS, SWITCHGEAR & SUBSTATIONS',
    text: 'Medium-voltage infrastructure connecting incoming feeders, switchgear and transformer substations, with equipment installation, cable connections and protection interfaces coordinated around each site.',
    details: ['MV switchgear & feeders', 'Transformer connections', 'Protection & control interfaces'],
    image: '3.webp', width: 1280, height: 960, alt: 'Medium-voltage switchgear lineup with an engineer standing beside the equipment',
    caption: 'Installed MV switchgear', existingPhoto: true
  },
  {
    id: 'bus-duct', title: 'Bus duct systems', tag: 'ENCLOSED BUSBAR TRUNKING',
    text: 'Enclosed bus duct systems distribute power between electrical equipment and building loads, with connected trunking sections, supported routes and tap-off units matched to the installation.',
    details: ['Busway sections & joints', 'Tap-off units & connections', 'Supports & route installation'],
    image: 'expertise-bus-duct.webp', width: 1280, height: 852,
    alt: 'Physical bus duct section showing insulated phase and neutral conductors within its metal housing',
    caption: 'Bus duct construction detail', credit: 'Izma94', license: 'CC BY-SA 4.0',
    source: 'https://commons.wikimedia.org/wiki/File:%D0%A8%D0%B8%D0%BD%D0%BE%D0%BF%D1%80%D0%BE%D0%B2%D0%BE%D0%B4.jpg',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/4.0/'
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
    image: 'expertise-control-panels.webp', width: 1280, height: 960,
    alt: 'Industrial control-panel interior with motor control components, wiring ducts and terminals',
    caption: 'Industrial control-panel components', credit: 'Bridgeland Copyright', license: 'CC BY-SA 3.0',
    source: 'https://commons.wikimedia.org/wiki/File:Typical_contents_of_a_control_panel_for_automated_equipment.jpg',
    licenseUrl: 'https://creativecommons.org/licenses/by-sa/3.0/'
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
            jsxs('figure', { className: 'service-photograph', children: [
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
            service.source ? jsxs('div', { className: 'service-photo-credit', children: [
              jsx('span', { children: 'Technical reference photograph' }),
              jsxs('span', { children: [
                jsx('a', { href: service.source, target: '_blank', rel: 'noopener noreferrer', children: service.credit }),
                ' · ',
                jsx('a', { href: service.licenseUrl, target: '_blank', rel: 'noopener noreferrer', children: service.license })
              ] })
            ] }) : jsx('div', { className: 'service-photo-credit', children: jsx('span', { children: 'Real photograph / in the field' }) })
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
