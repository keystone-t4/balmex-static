(function () {
  'use strict';

  var COMMON = {
    veracruzAddress: 'Calle Río Támesis 236, Unidad Habitacional Valente Díaz, Veracruz, Ver., Mexico',
    contactHeadOfficeAddress: 'Calle Bosques de Versalles 63, Colinas del Bosque 2a Sección, 76905 Santiago de Querétaro, Qro., Mexico'
  };

  var I18N = {
    en: {
      meta: { title: 'BDM Balmex — Fertilizer trade and storage' },
      ui: { skip: 'Skip to content', menu: 'Menu', top: 'Back to top' },
      nav: { about: 'About', services: 'Services', facility: 'Facility', why: 'Why work with us', contact: 'Contact', quote: 'Get a quote' },
      hero: {
        eyebrow: 'Fertilizer trade & storage · Mexico',
        title: 'Fertilizers sourced, stored and delivered in Mexico',
        description: "BDM Balmex trades sulphur, MOP and NPK fertilizers and rents out covered warehouse space in Veracruz, close to Mexico's main Gulf port, for fertilizers or any other goods.",
        primaryCta: 'Request a quote',
        secondaryCta: 'See our facility',
        facts: [
          { title: 'Sulphur · MOP · NPK', description: 'Core product range' },
          { title: 'Covered storage in Veracruz', description: "Open to any company's goods" },
          { title: 'Offices in Querétaro', description: 'Head office' }
        ]
      },
      about: {
        eyebrow: 'About us',
        title: 'A Mexican partner for fertilizer supply',
        p1: 'BDM Balmex is a Mexican company specializing in the trade and storage of fertilizers. We supply sulphur, muriate of potash (MOP) and NPK compound fertilizers to distributors, blenders and agricultural producers.',
        p2: 'We built our covered warehouses in Veracruz for our own fertilizers, to the standard we needed. Now we share that space with other companies. They can store fertilizers or other goods with us, whether or not they buy our products.',
        p3: 'Our head office is in Querétaro, and we work with partners in Mexico and abroad.'
      },
      services: {
        eyebrow: 'Services',
        title: 'Two services, one supply chain',
        description: 'We sell fertilizers and rent out covered warehouse space. Each service stands on its own: you can store your goods with us without buying from us, or combine both.',
        trade: {
          title: 'Fertilizer trade',
          description: 'We source and supply mineral fertilizers in bulk and bagged form, with reliable quality and agreed delivery terms.',
          products: [
            { name: 'Sulphur', description: 'For fertilizer production and as a soil amendment for sulphur-deficient soils.' },
            { name: 'MOP', description: 'Muriate of potash: a high-potassium fertilizer for direct application and blending.' },
            { name: 'NPK', description: 'Compound fertilizers with nitrogen, phosphorus and potassium, in a range of formulas.' }
          ],
          cta: 'Ask about availability'
        },
        storage: {
          title: 'Covered storage',
          badge: 'Available as a stand-alone service · Any goods',
          description: 'We built these warehouses for our own fertilizers, to the standard we wanted for our own product. Now we offer the same space to other companies. Store fertilizers or any other goods that need dry, covered storage, protected from rain and sun and ready for dispatch by truck.',
          features: [
            'Large warehouses for bulk volumes, plus smaller units for separate lots',
            'Loading and unloading with forklifts and loaders',
            'Short-term and long-term storage, with no purchase from us required',
            'Gated site with a security post'
          ],
          cta: 'Book storage space'
        }
      },
      facility: {
        eyebrow: 'Our facility',
        title: 'Warehouse complex in Veracruz',
        description: "A dedicated logistics site in Veracruz, on Mexico's Gulf coast, built for receiving, storing and dispatching fertilizers.",
        phaseNote: 'Part of the complex is already running, and more buildings are being added in phases. Storage space is available now, and we can plan larger volumes with partners in advance.',
        features: [
          { title: 'Main warehouses', description: 'Large-span covered buildings for bulk storage' },
          { title: 'Secondary warehouses', description: 'Smaller units for separate products and lots' },
          { title: 'Truck access', description: 'Separate vehicle and pedestrian entrances, internal roads and truck parking' },
          { title: 'On-site office and security', description: 'Administrative area and a controlled entrance with a guard post' }
        ]
      },
      alt: {
        aerial: 'Aerial view of the site among green fields',
        facade: 'Warehouse facade',
        interior: 'Bagged product stored inside the warehouse',
        night: 'Entrance with the BDM Balmex sign at night',
        hero: 'BDM Balmex warehouse entrance in Veracruz',
        about: 'Aerial view of the Balmex warehouse complex',
        storage: 'Inside a covered Balmex warehouse'
      },
      why: {
        title: 'Why work with us',
        items: [
          { title: 'Trade and storage in one place', description: 'Buy and store with one partner, or use only our warehouses. Either way, there are fewer handovers and fewer delays.' },
          { title: 'Close to the port', description: 'Our Veracruz location shortens the route from vessel to warehouse to customer.' },
          { title: 'Goods kept dry', description: 'Covered warehouses protect fertilizers and other goods from moisture and weather.' },
          { title: 'Flexible terms', description: 'Volumes, storage periods and delivery conditions are agreed to fit each partner.' }
        ]
      },
      contact: {
        eyebrow: 'Contact',
        title: "Let's talk about your next shipment",
        description: 'Tell us what you need to buy or store, the volume and the storage period. Call or write to us, and we will come back with an offer.',
        callCta: 'Call us',
        emailCta: 'Write to us',
        headOfficeLabel: 'Head office',
        warehousesLabel: 'Warehouses',
        phoneLabel: 'Phone',
        emailLabel: 'Email'
      },
      footer: {
        tagline: 'Fertilizer trade and covered storage in Mexico',
        copyright: '© 2026 BDM Balmex. All rights reserved.'
      }
    },
    es: {
      meta: { title: 'BDM Balmex — Comercialización y almacenamiento de fertilizantes' },
      ui: { skip: 'Saltar al contenido', menu: 'Menú', top: 'Volver arriba' },
      nav: { about: 'Nosotros', services: 'Servicios', facility: 'Instalaciones', why: 'Por qué elegirnos', contact: 'Contacto', quote: 'Solicitar cotización' },
      hero: {
        eyebrow: 'Comercialización de fertilizantes y almacenamiento · México',
        title: 'Suministro, almacenamiento y entrega de fertilizantes en México',
        description: 'BDM Balmex comercializa azufre, cloruro de potasio (MOP) y fertilizantes NPK, y ofrece en renta espacios de almacenamiento techado en Veracruz, cerca del principal puerto del Golfo de México, para fertilizantes u otras mercancías.',
        primaryCta: 'Solicitar cotización',
        secondaryCta: 'Conocer las instalaciones',
        facts: [
          { title: 'Azufre · MOP · NPK', description: 'Productos principales' },
          { title: 'Almacenamiento techado en Veracruz', description: 'Disponible para mercancías de otras empresas' },
          { title: 'Oficinas en Querétaro', description: 'Oficinas centrales' }
        ]
      },
      about: {
        eyebrow: 'Nosotros',
        title: 'Un socio mexicano para el suministro de fertilizantes',
        p1: 'BDM Balmex es una empresa mexicana especializada en la comercialización y el almacenamiento de fertilizantes. Suministramos azufre, cloruro de potasio (MOP) y fertilizantes compuestos NPK a distribuidores, empresas mezcladoras y productores agrícolas.',
        p2: 'Construimos nuestras bodegas techadas en Veracruz para nuestros propios fertilizantes, con los estándares que necesitábamos. Hoy compartimos ese espacio con otras empresas, que pueden almacenar fertilizantes u otras mercancías con nosotros, independientemente de si compran nuestros productos.',
        p3: 'Nuestras oficinas centrales están en Querétaro y trabajamos con socios en México y en el extranjero.'
      },
      services: {
        eyebrow: 'Servicios',
        title: 'Dos servicios, una cadena de suministro',
        description: 'Comercializamos fertilizantes y rentamos espacios de almacenamiento techado. Cada servicio se ofrece de forma independiente: puede almacenar sus mercancías con nosotros sin comprar nuestros productos, o combinar ambos servicios.',
        trade: {
          title: 'Comercialización de fertilizantes',
          description: 'Adquirimos y suministramos fertilizantes minerales a granel y en sacos, con calidad confiable y condiciones de entrega acordadas.',
          products: [
            { name: 'Azufre', description: 'Para la producción de fertilizantes y como enmienda para suelos con deficiencia de azufre.' },
            { name: 'MOP', description: 'Cloruro de potasio: fertilizante con alto contenido de potasio para aplicación directa y elaboración de mezclas.' },
            { name: 'NPK', description: 'Fertilizantes compuestos con nitrógeno, fósforo y potasio, disponibles en distintas formulaciones.' }
          ],
          cta: 'Consultar disponibilidad'
        },
        storage: {
          title: 'Almacenamiento techado',
          badge: 'Servicio independiente · Fertilizantes y otras mercancías',
          description: 'Construimos estas bodegas para nuestros propios fertilizantes, siguiendo los estándares que exigimos para nuestros productos. Hoy ofrecemos el mismo espacio a otras empresas. Almacene fertilizantes u otras mercancías que requieran resguardo seco y techado, protegidas de la lluvia y el sol, y listas para su despacho por camión.',
          features: [
            'Bodegas de gran tamaño para volúmenes a granel y unidades más pequeñas para lotes separados',
            'Carga y descarga con montacargas y cargadores',
            'Almacenamiento de corto y largo plazo, sin obligación de comprar nuestros productos',
            'Instalaciones con acceso controlado y caseta de vigilancia'
          ],
          cta: 'Consultar espacio de almacenamiento'
        }
      },
      facility: {
        eyebrow: 'Nuestras instalaciones',
        title: 'Complejo de bodegas en Veracruz',
        description: 'Un complejo logístico especializado en Veracruz, en la costa del Golfo de México, construido para recibir, almacenar y despachar fertilizantes.',
        phaseNote: 'Una parte del complejo ya está en operación y se están incorporando nuevos edificios por etapas. Actualmente hay espacio de almacenamiento disponible y podemos planificar mayores volúmenes con nuestros socios con anticipación.',
        features: [
          { title: 'Bodegas principales', description: 'Edificios techados de gran claro para almacenamiento a granel' },
          { title: 'Bodegas secundarias', description: 'Unidades más pequeñas para distintos productos y lotes separados' },
          { title: 'Acceso para camiones', description: 'Entradas separadas para vehículos y peatones, vialidades internas y estacionamiento para camiones' },
          { title: 'Oficinas y seguridad en sitio', description: 'Área administrativa y acceso controlado con caseta de vigilancia' }
        ]
      },
      alt: {
        aerial: 'Vista aérea del complejo rodeado de áreas verdes',
        facade: 'Fachada de una bodega',
        interior: 'Producto en sacos almacenado dentro de una bodega',
        night: 'Acceso al complejo con el letrero de BDM Balmex por la noche',
        hero: 'Acceso a las bodegas de BDM Balmex en Veracruz',
        about: 'Vista aérea del complejo de bodegas de Balmex',
        storage: 'Interior de una bodega techada de Balmex'
      },
      why: {
        title: 'Por qué trabajar con nosotros',
        items: [
          { title: 'Comercialización y almacenamiento en un mismo lugar', description: 'Compre y almacene con un mismo socio o utilice solo nuestras bodegas. En ambos casos, se reducen los traspasos y las demoras.' },
          { title: 'Cerca del puerto', description: 'Nuestra ubicación en Veracruz acorta el trayecto del buque a la bodega y de la bodega al cliente.' },
          { title: 'Mercancías protegidas de la humedad', description: 'Las bodegas techadas protegen los fertilizantes y otras mercancías de la humedad y de las condiciones climáticas.' },
          { title: 'Condiciones flexibles', description: 'Los volúmenes, períodos de almacenamiento y condiciones de entrega se acuerdan según las necesidades de cada socio.' }
        ]
      },
      contact: {
        eyebrow: 'Contacto',
        title: 'Hablemos de su próximo envío',
        description: 'Cuéntenos qué necesita comprar o almacenar, el volumen y el período de almacenamiento. Llámenos o escríbanos y le enviaremos una propuesta.',
        callCta: 'Llámenos',
        emailCta: 'Escríbanos',
        headOfficeLabel: 'Oficinas centrales',
        warehousesLabel: 'Bodegas',
        phoneLabel: 'Teléfono',
        emailLabel: 'Correo electrónico'
      },
      footer: {
        tagline: 'Comercialización de fertilizantes y almacenamiento techado en México',
        copyright: '© 2026 BDM Balmex. Todos los derechos reservados.'
      }
    }
  };

  function getValue(lang, path) {
    var root = path.indexOf('c.') === 0 ? COMMON : I18N[lang];
    var key = path.indexOf('c.') === 0 ? path.slice(2) : path;
    var parts = key.split('.');
    var val = root;
    for (var i = 0; i < parts.length; i++) {
      if (val == null) return null;
      val = val[parts[i]];
    }
    return val;
  }

  function renderHeroTitle(lang) {
    var h1 = document.getElementById('hero-title');
    if (!h1) return;
    var title = I18N[lang].hero.title;
    h1.setAttribute('aria-label', title);
    var words = title.split(' ');
    h1.innerHTML = '';
    words.forEach(function (word, i) {
      var outer = document.createElement('span');
      outer.className = 'hero__word';
      var inner = document.createElement('span');
      inner.className = 'hero__word-inner hero__word-inner--settled';
      if (i === words.length - 1) inner.classList.add('hero__word-inner--accent');
      inner.textContent = word;
      outer.appendChild(inner);
      h1.appendChild(outer);
    });
  }

  var heroTitleRendered = false;

  function applyLang(lang) {
    document.documentElement.lang = lang === 'es' ? 'es-MX' : 'en';
    document.title = I18N[lang].meta.title;

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var val = getValue(lang, el.getAttribute('data-i18n'));
      if (typeof val === 'string') el.textContent = val;
    });
    document.querySelectorAll('[data-i18n-alt]').forEach(function (el) {
      var val = getValue(lang, el.getAttribute('data-i18n-alt'));
      if (typeof val === 'string') el.setAttribute('alt', val);
    });

    if (heroTitleRendered || lang !== 'en') renderHeroTitle(lang);
    heroTitleRendered = true;

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      var active = btn.getAttribute('data-lang-btn') === lang;
      btn.classList.toggle('header__lang-btn--active', active);
      btn.setAttribute('aria-pressed', String(active));
    });
  }

  function setLang(lang) {
    applyLang(lang);
    try {
      localStorage.setItem('balmex-lang', lang);
      var u = new URL(location.href);
      u.searchParams.set('lang', lang);
      history.replaceState(null, '', u);
    } catch (e) { /* storage unavailable */ }
  }

  function initLang() {
    var lang = 'en';
    try {
      var fromUrl = new URLSearchParams(location.search).get('lang');
      var stored = localStorage.getItem('balmex-lang');
      if (fromUrl === 'es' || fromUrl === 'en') lang = fromUrl;
      else if (stored === 'es' || stored === 'en') lang = stored;
    } catch (e) { /* storage unavailable */ }

    applyLang(lang);

    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(btn.getAttribute('data-lang-btn'));
        closeMenu();
      });
    });
  }

  var header = document.getElementById('site-header');
  var menuBtn = document.getElementById('menu-btn');
  var menuOpen = false;

  var HEADER_SOLID_OFFSET = 150;
  var HEADER_SOLID_OFFSET_MOBILE = 60;

  function updateHeaderSolid() {
    var offset = window.innerWidth <= 640 ? HEADER_SOLID_OFFSET_MOBILE : HEADER_SOLID_OFFSET;
    var solid = window.scrollY > offset || menuOpen;
    header.classList.toggle('header--solid', solid);
  }

  function closeMenu() {
    menuOpen = false;
    menuBtn.setAttribute('aria-expanded', 'false');
    header.classList.remove('header--menu-open');
    updateHeaderSolid();
  }

  function initHeader() {
    window.addEventListener('scroll', updateHeaderSolid, { passive: true });
    window.addEventListener('resize', updateHeaderSolid, { passive: true });
    updateHeaderSolid();

    menuBtn.addEventListener('click', function () {
      menuOpen = !menuOpen;
      menuBtn.setAttribute('aria-expanded', String(menuOpen));
      header.classList.toggle('header--menu-open', menuOpen);
      updateHeaderSolid();
    });

    document.querySelectorAll('.header__mobile-nav a').forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
  }

  function initReveal() {
    if (!('IntersectionObserver' in window) || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    var els = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.remove('reveal--hidden');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });

    els.forEach(function (el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight) return;
      el.classList.add('reveal--hidden');
      io.observe(el);
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    initLang();
    initHeader();
    initReveal();
  });
})();
