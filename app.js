/**
 * ========================================================
 * FER PIZZ — MOTOR INTERACTIVO Y EDITORIAL (CARTAGENA)
 * Precios Oficiales del Menú, Toques Mostaza & Animaciones Espectaculares
 * ========================================================
 */

(function () {
  'use strict';

  // 1. CATÁLOGO OFICIAL CON PRECIOS EXACTOS DEL MENÚ DE FER PIZZ (CARTAGENA)
  const DEFAULT_MENU = [
    {
      id: 'jamon-queso',
      num: '01',
      name: 'Jamón y Queso',
      category: 'clasica',
      badge: '✦ CLÁSICA',
      desc: 'Base de salsa pomodoro artesanal, generosa mozzarella hilada de primera calidad, jamón selecto ahumado y orégano de campo.',
      image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
      available: true,
      prices: {
        personal: 12000,
        pizzeta: 23000,
        mediana: 34000,
        familiar: 47000
      }
    },
    {
      id: 'jamon-queso-pollo',
      num: '02',
      name: 'Jamón, Queso y Pollo',
      category: 'pollo',
      badge: 'CON POLLO',
      desc: 'Nuestra combinación favorita: pechuga desmechada sazonada con hierbas mediterráneas, jamón artesanal y queso mozzarella fundido.',
      image: 'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=700&q=80',
      available: true,
      prices: {
        personal: 14000,
        pizzeta: 25000,
        mediana: 36000,
        familiar: 49000
      }
    },
    {
      id: 'hawaiana',
      num: '03',
      name: 'Hawaiana',
      category: 'tradicional',
      badge: 'TRADICIONAL',
      desc: 'La reina caribeña: piña dulce caramelizada al fuego de leña, cubos de jamón ahumado y mozzarella dorada al punto perfecto.',
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80',
      available: true,
      prices: {
        personal: 13000,
        pizzeta: 25000,
        mediana: 36000,
        familiar: 48000
      }
    },
    {
      id: 'pollo',
      num: '04',
      name: 'Pollo',
      category: 'pollo',
      badge: 'CON POLLO',
      desc: 'Pechuga de pollo marinada con ajo y romero, cubierta con reducción de tomate fresco y doble capa de queso mozzarella.',
      image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=700&q=80',
      available: true,
      prices: {
        personal: 15000,
        pizzeta: 26000,
        mediana: 37000,
        familiar: 50000
      }
    },
    {
      id: 'pollo-champinones',
      num: '05',
      name: 'Pollo Champiñones',
      category: 'pollo',
      badge: 'CON POLLO',
      desc: 'Champiñones frescos salteados en mantequilla clarificada, trozos tiernos de pechuga marinada y abundante mozzarella fundida.',
      image: 'https://images.unsplash.com/photo-1604382355076-af4b0eb60143?auto=format&fit=crop&w=700&q=80',
      available: true,
      prices: {
        personal: 16000,
        pizzeta: 27000,
        mediana: 38000,
        familiar: 51000
      }
    },
    {
      id: 'peperoni',
      num: '06',
      name: 'Peperoni',
      category: 'tradicional',
      badge: 'TRADICIONAL',
      desc: 'Abundantes rodajas de pepperoni curado con notas de pimentón español y pimienta, gratinadas sobre salsa pomodoro casera.',
      image: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=700&q=80',
      available: true,
      prices: {
        personal: 15000,
        pizzeta: 26000,
        mediana: 37000,
        familiar: 49000
      }
    },
    {
      id: 'enchulada',
      num: '07',
      name: 'Enchulada',
      category: 'especial',
      badge: '✦ ESPECIALIDAD',
      desc: 'La joya indiscutible de Fer Pizz: tocineta crujiente, maíz tierno dulce, pollo especiado, jamón selecto y la salsa especial de la casa.',
      image: 'https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?auto=format&fit=crop&w=700&q=80',
      available: true,
      featured: true,
      prices: {
        personal: 17000,
        pizzeta: 29000,
        mediana: 40000,
        familiar: 52000
      }
    },
    {
      id: 'verduras',
      num: '08',
      name: 'Verduras',
      category: 'tradicional',
      badge: 'VEGETARIANA',
      desc: 'Pimientos asados a fuego vivo, champiñones, maíz dulce, cebolla blanca caramelizada, aceitunas negras y albahaca fresca en hoja.',
      image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=80',
      available: true,
      prices: {
        personal: 12000,
        pizzeta: 23000,
        mediana: 34000,
        familiar: 47000
      }
    }
  ];

  // DEFINICIÓN DE FORMATOS Y PORCIONES DEL VOLANTE
  const SIZES = {
    personal: { label: 'Personal', portions: '4 porciones' },
    pizzeta: { label: 'Pizzeta', portions: '6 porciones' },
    mediana: { label: 'Mediana', portions: '10 porciones' },
    familiar: { label: 'Familiar', portions: '12 porciones' }
  };

  // PRECIOS EXACTOS DE ADICIONALES SEGÚN TAMAÑO (DEL MENÚ OFICIAL)
  const DEFAULT_ADDITIONS = [
    {
      id: 'maiz',
      name: 'Maíz Tierno',
      desc: 'Granos de maíz dulce salteados',
      prices: {
        personal: 3000,
        pizzeta: 3000,
        mediana: 5000,
        familiar: 6000
      }
    },
    {
      id: 'verdura',
      name: 'Verdura Fresca',
      desc: 'Pimentón y cebolla blanca en julianas',
      prices: {
        personal: 2000,
        pizzeta: 2000,
        mediana: 4000,
        familiar: 5000
      }
    },
    {
      id: 'oregano',
      name: 'Orégano Extra',
      desc: 'Orégano aromático de campo molido',
      prices: {
        personal: 1000,
        pizzeta: 1000,
        mediana: 2000,
        familiar: 3000
      }
    },
    {
      id: 'queso',
      name: 'Extra Queso Mozzarella',
      desc: 'Doble capa de mozzarella hilada fundida',
      prices: {
        personal: 3500,
        pizzeta: 4500,
        mediana: 6000,
        familiar: 7500
      }
    },
    {
      id: 'tocineta',
      name: 'Tocineta Crujiente',
      desc: 'Tiras de tocineta ahumada bien doraditas',
      prices: {
        personal: 3500,
        pizzeta: 4500,
        mediana: 6000,
        familiar: 7500
      }
    },
    {
      id: 'champinones',
      name: 'Champiñones Salteados',
      desc: 'Láminas de champiñones frescos salteados',
      prices: {
        personal: 3000,
        pizzeta: 3500,
        mediana: 5000,
        familiar: 6500
      }
    }
  ];

  // CONFIGURACIÓN DE SALSA ADICIONAL (CARTAGENA)
  let SAUCE_PRICE = 2000;
  let SAUCE_NAME = 'Salsa Adicional (Tarrito)';

  // CONSTANTES DEL NEGOCIO
  let WHATSAPP_PHONE = '573162446724';
  const STORAGE_KEY_SITE_CONFIG = 'ferpizz_site_config_v1';
  const STORAGE_KEY_MENU = 'ferpizz_menu_v5';
  const STORAGE_KEY_ADDITIONS = 'ferpizz_additions_v1';
  const STORAGE_KEY_CART = 'ferpizz_cart_v4';
  const STORAGE_KEY_CLOUDINARY = 'ferpizz_cloudinary_cfg';

  // ESTADO GLOBAL
  let activeMenu = [];
  let activeAdditions = [];
  let cart = [];
  let activeFilter = 'all';
  let leafletMap = null;
  let mapMarker = null;
  let currentCoordinates = { lat: 10.4236, lng: -75.5378 };
  let stampClickCount = 0;
  let stampClickTimer = null;

  // ESTADO DEL MODAL DE TOPPINGS & PERSONALIZACIÓN
  let modalCustomState = {
    pizzaId: null,
    pizza: null,
    sizeKey: 'mediana',
    selectedAdditions: [],
    extraSauceCount: 0,
    quantity: 1
  };

  // FORMATO DE MONEDA
  function formatCOP(amount) {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(amount);
  }

  // INICIALIZACIÓN
  function initApp() {
    setupCommunicationGuards();
    loadSiteConfigAndHydrate();
    loadMenuData();
    loadAdditionsData();
    loadCartData();
    renderCurrentDate();
    renderMenuGrid();
    renderPublicAdditionsTable();
    setupDirectSauceButton();
    setupToppingsModal();
    setupCartDrawer();
    setupLeafletMap();
    setupSecretCMS();
    setupCategoryFilters();
    setupPortionsGuideSync();
    setupScrollAnimations();
    setupMobileStickyBar();
    setupRealtimeSyncListeners();
  }

  // CARGAR CONFIGURACIÓN DE SITIO Y ACTUALIZAR TEXTOS/IMÁGENES DEL DOM
  function loadSiteConfigAndHydrate() {
    try {
      const cfg = window.FerPizzCMS
        ? window.FerPizzCMS.getSiteConfig()
        : JSON.parse(localStorage.getItem(STORAGE_KEY_SITE_CONFIG) || 'null');
      if (cfg) applySiteConfigToDOM(cfg);
    } catch (e) {}
  }

  function applySiteConfigToDOM(cfg) {
    if (!cfg) return;

    if (cfg.saucePrice) SAUCE_PRICE = parseInt(cfg.saucePrice, 10) || 2000;
    if (cfg.sauceName) SAUCE_NAME = cfg.sauceName;
    if (cfg.whatsappPhone) WHATSAPP_PHONE = String(cfg.whatsappPhone).replace(/[^0-9]/g, '') || '573162446724';

    // 1. Barra Superior y Header
    const ovenBadge = document.querySelector('.badge-oven');
    if (ovenBadge && cfg.ovenBadge) ovenBadge.textContent = cfg.ovenBadge;

    const cityTag = document.querySelector('.topbar-text');
    if (cityTag && cfg.cityTag) cityTag.textContent = cfg.cityTag;

    const topSlogan = document.querySelector('.topbar-slogan');
    if (topSlogan && cfg.slogan) topSlogan.textContent = cfg.slogan;

    const tagline = document.querySelector('.brand-tagline');
    if (tagline && cfg.brandTagline) tagline.textContent = cfg.brandTagline;

    if (cfg.logoUrl) {
      document.querySelectorAll('.official-logo-img, .footer-logo-img, .stamp-inner-content img').forEach(img => {
        img.src = cfg.logoUrl;
      });
    }

    // 2. Marquesina
    if (cfg.marqueeText) {
      const parts = cfg.marqueeText.split('✦').map(s => s.trim()).filter(Boolean);
      const html = parts.map(p => `${p} <span class="m-diamond">✦</span> `).join('');
      document.querySelectorAll('#marqueeTrack .marquee-content').forEach(mc => {
        mc.innerHTML = html;
      });
    }

    // 3. Portada (Hero)
    const heroKicker = document.querySelector('.hero-kicker-badge');
    if (heroKicker && cfg.heroKicker) {
      heroKicker.innerHTML = `<span class="kicker-star">★</span> ${cfg.heroKicker}`;
    }

    const heroTitle = document.querySelector('.hero-headline-title');
    if (heroTitle && cfg.heroTitle) heroTitle.textContent = cfg.heroTitle;

    const heroBody = document.querySelector('.hero-body-text');
    if (heroBody && cfg.heroBody) {
      const text = cfg.heroBody.trim();
      if (text.length > 0) {
        const firstChar = text.charAt(0);
        const restText = text.slice(1);
        heroBody.innerHTML = `<span class="letterhighlight">${firstChar}</span>${restText}`;
      }
    }

    const heroImg = document.querySelector('.editorial-main-img');
    if (heroImg && cfg.heroImageUrl) heroImg.src = cfg.heroImageUrl;

    const heroCaption = document.querySelector('.photo-caption-bar .caption-text');
    if (heroCaption && cfg.heroImageCaption) heroCaption.textContent = cfg.heroImageCaption;

    // 4. Guía de Tamaños y Porciones
    const portHeadline = document.querySelector('.portions-guide-section .section-headline');
    if (portHeadline && cfg.portionsTitle) portHeadline.textContent = cfg.portionsTitle;

    const portSub = document.querySelector('.portions-guide-section .section-sub');
    if (portSub && cfg.portionsSub) portSub.textContent = cfg.portionsSub;

    const descMap = {
      personal: cfg.descPersonal,
      pizzeta: cfg.descPizzeta,
      mediana: cfg.descMediana,
      familiar: cfg.descFamiliar
    };
    Object.keys(descMap).forEach(sKey => {
      if (descMap[sKey]) {
        const el = document.querySelector(`.portion-card[data-size="${sKey}"] .portion-desc`);
        if (el) el.textContent = descMap[sKey];
      }
    });

    // 5. Tarjeta de Salsa Adicional
    const sauceTitleEl = document.querySelector('.sauce-addon-title');
    if (sauceTitleEl && cfg.sauceTitle) sauceTitleEl.textContent = cfg.sauceTitle;

    const sauceDescEl = document.querySelector('.sauce-addon-desc');
    if (sauceDescEl && cfg.sauceDesc) sauceDescEl.textContent = cfg.sauceDesc;

    const saucePriceEl = document.querySelector('.sauce-addon-price');
    if (saucePriceEl) saucePriceEl.textContent = `${formatCOP(SAUCE_PRICE)} COP`;

    const modalSaucePriceEl = document.querySelector('.sauce-modal-single-price');
    if (modalSaucePriceEl) modalSaucePriceEl.textContent = `+${formatCOP(SAUCE_PRICE)} COP c/u`;

    // 6. Nota de la Cocina (Chef)
    const cooksTitle = document.querySelector('.cooks-greeting-title');
    if (cooksTitle && cfg.cooksGreeting) cooksTitle.textContent = cfg.cooksGreeting;

    const cooksQuote = document.querySelector('.cooks-quote');
    if (cooksQuote && cfg.cooksQuote) {
      const cleanQuote = cfg.cooksQuote.replace(/^[«"“]|[»"”]$/g, '');
      cooksQuote.textContent = `«${cleanQuote}»`;
    }

    const cooksSign = document.querySelector('.cooks-sign-block .sign-name');
    if (cooksSign && cfg.cooksSign) cooksSign.textContent = cfg.cooksSign;

    const cooksMotto = document.querySelector('.cooks-sign-block .sign-motto');
    if (cooksMotto && cfg.slogan) cooksMotto.textContent = cfg.slogan;

    const cooksImg = document.querySelector('.dough-action-img');
    if (cooksImg && cfg.cooksImageUrl) cooksImg.src = cfg.cooksImageUrl;

    const cooksCap = document.querySelector('.photo-overlay-tag span');
    if (cooksCap && cfg.cooksImageCaption) cooksCap.textContent = cfg.cooksImageCaption;

    // 7. Contacto, Horarios, Redes y Volante
    document.querySelectorAll('a[href*="wa.me"], a[data-contact-href*="wa.me"]').forEach(a => {
      if (a.classList.contains('btn-editorial-outline')) {
        a.dataset.contactHref = `https://wa.me/${WHATSAPP_PHONE}?text=Hola%20Fer%20Pizz%2C%20quisiera%20hacer%20un%20pedido%20directo`;
      } else {
        a.dataset.contactHref = `https://wa.me/${WHATSAPP_PHONE}`;
      }
    });

    const topPhoneLink = document.querySelector('.topbar-right a.topbar-contact-link:first-child');
    if (topPhoneLink && cfg.displayPhone) topPhoneLink.textContent = cfg.displayPhone;

    const bigPhoneLink = document.querySelector('.phone-big-link');
    if (bigPhoneLink && cfg.displayPhone) bigPhoneLink.textContent = cfg.displayPhone;

    const footerWa = document.getElementById('footerWaLink');
    if (footerWa && cfg.displayPhone) footerWa.textContent = `WhatsApp: ${cfg.displayPhone}`;

    document.querySelectorAll('a[href*="instagram.com"], a[data-contact-href*="instagram.com"]').forEach(a => {
      if (cfg.instagramUrl) a.dataset.contactHref = cfg.instagramUrl;
    });

    const topIg = document.querySelector('.topbar-right a.topbar-contact-link:last-child');
    if (topIg && cfg.instagramHandle) topIg.textContent = cfg.instagramHandle;

    const bodyIg = document.querySelector('.insta-follow-btn span');
    if (bodyIg && cfg.instagramHandle) bodyIg.textContent = cfg.instagramHandle;

    const footerIg = document.getElementById('footerIgLink');
    if (footerIg && cfg.instagramHandle) footerIg.textContent = `Instagram: ${cfg.instagramHandle}`;

    const infoBlocks = document.querySelectorAll('.contact-card-box .info-block-row .info-text');
    if (infoBlocks[0]) {
      if (window.FerPizzCMS && typeof window.FerPizzCMS.formatWeeklyScheduleHTML === 'function') {
        infoBlocks[0].innerHTML = window.FerPizzCMS.formatWeeklyScheduleHTML(cfg);
      } else if (cfg.hoursLine1 || cfg.hoursLine2) {
        infoBlocks[0].innerHTML = `${cfg.hoursLine1 || ''}<br>${cfg.hoursLine2 || ''}`;
      }
    }
    if (infoBlocks[1] && (cfg.coverageCity || cfg.coverageDesc)) {
      infoBlocks[1].innerHTML = `${cfg.coverageCity || ''}<br><span>${cfg.coverageDesc || ''}</span>`;
    }

    const flyerImg = document.querySelector('.original-flyer-img');
    if (flyerImg && cfg.flyerImageUrl) flyerImg.src = cfg.flyerImageUrl;

    const flyerSlogan = document.querySelector('.flyer-slogan');
    if (flyerSlogan && cfg.slogan) flyerSlogan.textContent = cfg.slogan;

    const flyerCapP = document.querySelector('.flyer-caption p');
    if (flyerCapP && cfg.flyerCaption) flyerCapP.textContent = cfg.flyerCaption;

    const footerMotto = document.querySelector('.footer-motto-quote');
    if (footerMotto && cfg.slogan) footerMotto.textContent = cfg.slogan;

    // 8. Evaluar horario por día y hora ("No estamos atendiendo")
    updatePublicStoreScheduleState(cfg);
  }

  const COMMUNICATION_LINK_SELECTOR = 'a[data-contact-href], a[href*="wa.me"], a[href*="whatsapp.com"], a[href*="instagram.com"], a[href^="tel:"], a[href^="mailto:"]';

  function updateCommunicationLinks(status) {
    document.querySelectorAll(COMMUNICATION_LINK_SELECTOR).forEach(link => {
      if (!link.dataset.contactHref) link.dataset.contactHref = link.getAttribute('href');
      if (status.isOpen) {
        link.setAttribute('href', link.dataset.contactHref);
        link.removeAttribute('aria-disabled');
        link.removeAttribute('tabindex');
        link.classList.remove('communication-closed');
      } else {
        link.removeAttribute('href');
        link.setAttribute('aria-disabled', 'true');
        link.setAttribute('tabindex', '-1');
        link.classList.add('communication-closed');
      }
    });
  }

  function setupCommunicationGuards() {
    function guardCommunication(event) {
      const link = event.target.closest(COMMUNICATION_LINK_SELECTOR);
      if (!link) return;
      const status = window.FerPizzCMS?.evaluateStoreStatus();
      if (!status || !status.isOpen) {
        event.preventDefault();
        event.stopImmediatePropagation();
        updateCommunicationLinks(status || { isOpen: false });
        if (event.type === 'click') showToast(status?.closedMessage || 'No estamos atendiendo en este momento.');
      }
    }
    ['click', 'auxclick', 'contextmenu'].forEach(type => {
      document.addEventListener(type, guardCommunication, true);
    });
    document.addEventListener('visibilitychange', () => updatePublicStoreScheduleState());
    window.addEventListener('focus', () => updatePublicStoreScheduleState());
  }

  function updatePublicStoreScheduleState(customCfg) {
    if (!window.FerPizzCMS || typeof window.FerPizzCMS.evaluateStoreStatus !== 'function') return;

    const status = window.FerPizzCMS.evaluateStoreStatus(customCfg);
    updateCommunicationLinks(status);
    const ovenBadge = document.querySelector('.badge-oven');
    const banner = document.getElementById('storeClosedBanner');
    const msgEl = document.getElementById('storeClosedMessageText');
    const hoursEl = document.getElementById('storeClosedTodayHours');
    const waSubmitBtn = document.getElementById('sendWhatsAppOrderBtn');
    const waBtnText = waSubmitBtn ? waSubmitBtn.querySelector('.btn-wa-text') : null;

    if (ovenBadge) {
      ovenBadge.textContent = status.badgeText;
      if (status.isOpen) {
        ovenBadge.classList.remove('is-closed');
      } else {
        ovenBadge.classList.add('is-closed');
      }
    }

    if (banner) {
      if (status.isOpen) {
        banner.classList.add('hidden');
      } else {
        banner.classList.remove('hidden');
        if (msgEl) msgEl.textContent = status.closedMessage;
        if (hoursEl) hoursEl.textContent = status.todayText || '';
      }
    }

    const infoBlocks = document.querySelectorAll('.contact-card-box .info-block-row .info-text');
    if (infoBlocks[0] && window.FerPizzCMS && typeof window.FerPizzCMS.formatWeeklyScheduleHTML === 'function') {
      infoBlocks[0].innerHTML = window.FerPizzCMS.formatWeeklyScheduleHTML(customCfg);
    }

    if (waSubmitBtn && waBtnText) {
      if (status.isOpen) {
        waSubmitBtn.disabled = false;
        waSubmitBtn.style.opacity = '1';
        waSubmitBtn.style.cursor = 'pointer';
        waBtnText.textContent = 'ENVIAR PEDIDO A WHATSAPP';
      } else {
        waSubmitBtn.disabled = true;
        waSubmitBtn.style.opacity = '0.6';
        waSubmitBtn.style.cursor = 'not-allowed';
        waBtnText.textContent = 'NO ESTAMOS ATENDIENDO AHORA';
      }
    }

    // Actualizar botones de las tarjetas de pizza y botón de salsa adicional
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
      const span = btn.querySelector('span');
      if (status.isOpen) {
        btn.disabled = false;
        btn.classList.remove('btn-store-closed');
        if (span) span.textContent = '+ PERSONALIZAR Y PEDIR';
      } else {
        btn.disabled = true;
        btn.classList.add('btn-store-closed');
        if (span) span.textContent = 'NO ESTAMOS ATENDIENDO';
      }
    });

    const directSauceBtn = document.getElementById('btnDirectAddSauce');
    if (directSauceBtn) {
      const span = directSauceBtn.querySelector('span');
      if (status.isOpen) {
        directSauceBtn.disabled = false;
        directSauceBtn.classList.remove('btn-store-closed');
        if (span) span.textContent = '+ AÑADIR SALSA ADICIONAL AL PEDIDO';
      } else {
        directSauceBtn.disabled = true;
        directSauceBtn.classList.add('btn-store-closed');
        if (span) span.textContent = 'NO ESTAMOS ATENDIENDO';
      }
    }
  }

  // ESCUCHAR CAMBIOS EN TIEMPO REAL (FIRESTORE Y PESTAÑAS LOCALES)
  function setupRealtimeSyncListeners() {
    if (window.FerPizzCMS && typeof window.FerPizzCMS.subscribeToCloudChanges === 'function') {
      window.FerPizzCMS.subscribeToCloudChanges(cloudState => {
        if (cloudState.siteConfig) applySiteConfigToDOM(cloudState.siteConfig);
        if (Array.isArray(cloudState.menu) && cloudState.menu.length > 0) {
          activeMenu = cloudState.menu;
          renderMenuGrid();
        }
        if (Array.isArray(cloudState.additions)) {
          activeAdditions = cloudState.additions;
          renderPublicAdditionsTable();
        }
      });
    }

    if (typeof window.addEventListener === 'function') {
      window.addEventListener('storage', () => {
        loadSiteConfigAndHydrate();
        loadMenuData();
        loadAdditionsData();
        renderMenuGrid();
        renderPublicAdditionsTable();
      });
    }

    // Actualizar también las pestañas que permanecen abiertas al cambiar el horario.
    setInterval(() => {
      updatePublicStoreScheduleState();
    }, 1000);
  }

  // CARGAR DATOS DE ADICIONALES / COMPLEMENTOS
  function loadAdditionsData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_ADDITIONS);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed)) {
          activeAdditions = parsed;
          return;
        }
      }
      activeAdditions = JSON.parse(JSON.stringify(DEFAULT_ADDITIONS));
      localStorage.setItem(STORAGE_KEY_ADDITIONS, JSON.stringify(activeAdditions));
    } catch (e) {
      activeAdditions = JSON.parse(JSON.stringify(DEFAULT_ADDITIONS));
    }
  }

  // RENDER DE LA TABLA PÚBLICA DE ADICIONALES (HOMEPAGE)
  function renderPublicAdditionsTable() {
    const tbody = document.getElementById('publicAdditionsTbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    activeAdditions.forEach(add => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td><strong>${add.name}</strong> ${add.desc ? `<small>(${add.desc})</small>` : ''}</td>
        <td>${formatCOP(add.prices.personal)}</td>
        <td>${formatCOP(add.prices.pizzeta)}</td>
        <td>${formatCOP(add.prices.mediana)}</td>
        <td>${formatCOP(add.prices.familiar)}</td>
      `;
      tbody.appendChild(tr);
    });

    // Fila oficial destacada de salsa adicional (tarrito)
    const sauceTr = document.createElement('tr');
    sauceTr.className = 'table-sauces-highlight-row';
    sauceTr.innerHTML = `
      <td><strong>${SAUCE_NAME}</strong></td>
      <td>${formatCOP(SAUCE_PRICE)}</td>
      <td>${formatCOP(SAUCE_PRICE)}</td>
      <td>${formatCOP(SAUCE_PRICE)}</td>
      <td>${formatCOP(SAUCE_PRICE)}</td>
    `;
    tbody.appendChild(sauceTr);
  }

  // CARGAR DATOS DEL MENÚ (SOPORTA PIZZAS NUEVAS Y EDITADAS)
  function loadMenuData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MENU);
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          activeMenu = parsed.map((p, idx) => {
            const defMatch = DEFAULT_MENU.find(d => d.id === p.id);
            return {
              ...p,
              num: p.num || String(idx + 1).padStart(2, '0'),
              image: p.image || (defMatch ? defMatch.image : 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80')
            };
          });
          return;
        }
      }
      activeMenu = JSON.parse(JSON.stringify(DEFAULT_MENU));
      localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(activeMenu));
    } catch (e) {
      activeMenu = JSON.parse(JSON.stringify(DEFAULT_MENU));
    }
  }

  // CARGAR CARRITO
  function loadCartData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CART);
      cart = stored ? JSON.parse(stored) : [];
    } catch (e) {
      cart = [];
    }
    updateCartBadges();
  }

  function saveCartData() {
    try {
      localStorage.setItem(STORAGE_KEY_CART, JSON.stringify(cart));
    } catch (e) {}
    updateCartBadges();
  }

  function renderCurrentDate() {
    const el = document.getElementById('currentDateDisplay');
    if (!el) return;
    const now = new Date();
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    el.textContent = now.toLocaleDateString('es-ES', options).toUpperCase();
  }

  // 2. RENDER DE LA CARTA DE PIZZAS (DISEÑO EDITORIAL LIMPIO)
  function renderMenuGrid() {
    const container = document.getElementById('pizzaMenuContainer');
    if (!container) return;

    const allTabBtn = document.querySelector('.filter-tab[data-filter="all"]');
    if (allTabBtn) {
      allTabBtn.textContent = `Todas (${activeMenu.length})`;
    }

    container.innerHTML = '';

    const filteredPizzas = activeFilter === 'all'
      ? activeMenu
      : activeMenu.filter(p => p.category === activeFilter);

    const storeStatus = (window.FerPizzCMS && typeof window.FerPizzCMS.evaluateStoreStatus === 'function')
      ? window.FerPizzCMS.evaluateStoreStatus()
      : { isOpen: true };

    filteredPizzas.forEach((pizza, index) => {
      const card = document.createElement('article');
      card.className = `pizza-editorial-card reveal-on-scroll ${pizza.featured ? 'card-featured' : ''}`;
      card.id = `pizza-card-${pizza.id}`;
      card.dataset.pizzaId = pizza.id;

      // Tamaño predeterminado: Mediana
      const defaultSize = 'mediana';
      const initialPrice = pizza.prices[defaultSize] || pizza.prices.familiar || 0;

      card.innerHTML = `
        <!-- FOTOGRAFÍA ARTESANAL DE LA PIZZA -->
        <div class="pizza-card-media">
          <img 
            src="${pizza.image || 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80'}" 
            alt="Pizza artesanal ${pizza.name} en Fer Pizz Cartagena" 
            class="pizza-card-img" 
            loading="lazy"
            onerror="this.onerror=null; this.src='https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80';"
          />
          <div class="pizza-card-stamp">FER PIZZ</div>
        </div>

        <div class="card-top-row">
          <div class="pizza-title-wrap">
            <span class="pizza-number">${pizza.num || `0${index + 1}`}</span>
            <h3 class="pizza-name">${pizza.name}</h3>
            ${pizza.badge ? `<span class="special-badge">${pizza.badge}</span>` : ''}
          </div>
          <div class="pizza-price-display" id="price-display-${pizza.id}">
            ${formatCOP(initialPrice)}
          </div>
        </div>

        <p class="pizza-description">${pizza.desc}</p>

        <!-- SELECTOR DE FORMATO -->
        <div class="size-selector-wrap">
          <div class="size-selector-label">
            <span>FORMATO / TAMAÑO:</span>
            <span class="size-indicator-text" id="size-text-${pizza.id}">Mediana (10 porciones)</span>
          </div>
          <div class="size-pill-group" role="radiogroup" aria-label="Seleccionar tamaño de pizza">
            ${Object.keys(SIZES).map(sKey => `
              <button 
                type="button" 
                class="size-pill-btn ${sKey === defaultSize ? 'active' : ''}" 
                data-pizza-id="${pizza.id}" 
                data-size="${sKey}"
                ${!pizza.available ? 'disabled' : ''}
              >
                ${SIZES[sKey].label}
                <span class="size-portions-hint">${SIZES[sKey].portions}</span>
              </button>
            `).join('')}
          </div>
        </div>

        <!-- ACCIÓN DE PEDIDO -->
        <div class="card-bottom-action">
          ${pizza.available ? `
            <button 
              type="button" 
              class="btn-add-to-cart ${!storeStatus.isOpen ? 'btn-store-closed' : ''}" 
              data-pizza-id="${pizza.id}"
              ${!storeStatus.isOpen ? 'disabled' : ''}
            >
              <span>${storeStatus.isOpen ? '+ PERSONALIZAR Y PEDIR' : 'NO ESTAMOS ATENDIENDO'}</span>
            </button>
          ` : `
            <span class="out-of-stock-tag">TEMPORALMENTE AGOTADA</span>
          `}
        </div>
      `;

      container.appendChild(card);
    });

    setupCardInteractivity();
    triggerScrollObserver();
  }

  // INTERACTIVIDAD EN LAS TARJETAS DE PIZZA
  function setupCardInteractivity() {
    // Cambio de tamaño en la tarjeta
    document.querySelectorAll('.size-pill-btn').forEach(btn => {
      btn.addEventListener('click', function (e) {
        if (e) {
          e.preventDefault();
          e.stopPropagation();
        }
        const pizzaId = this.dataset.pizzaId;
        const sizeKey = this.dataset.size;
        const card = document.getElementById(`pizza-card-${pizzaId}`);
        const pizza = activeMenu.find(p => p.id === pizzaId);
        if (!card || !pizza) return;

        // Botón activo
        card.querySelectorAll('.size-pill-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');

        // Indicador de texto
        const sizeIndicator = card.querySelector(`#size-text-${pizzaId}`);
        if (sizeIndicator) {
          sizeIndicator.textContent = `${SIZES[sizeKey].label} (${SIZES[sizeKey].portions})`;
        }

        // Actualizar precio de la tarjeta
        const priceDisplay = card.querySelector(`#price-display-${pizzaId}`);
        if (priceDisplay) {
          priceDisplay.textContent = formatCOP(pizza.prices[sizeKey] || 0);
        }
      });
    });

    // Botones de personalizar y pedir (abren el modal desplegable de toppings)
    document.querySelectorAll('.btn-add-to-cart').forEach(btn => {
      btn.addEventListener('click', function () {
        const pizzaId = this.dataset.pizzaId;
        const card = document.getElementById(`pizza-card-${pizzaId}`);
        const activeSizeBtn = card ? card.querySelector('.size-pill-btn.active') : null;
        const sizeKey = activeSizeBtn ? activeSizeBtn.dataset.size : 'mediana';
        openToppingsModal(pizzaId, sizeKey);
      });
    });
  }

  // ========================================================
  // 2B. MODAL DESPLEGABLE / DRAWER DE TOPPINGS & PERSONALIZACIÓN
  // ========================================================
  function setupToppingsModal() {
    const backdrop = document.getElementById('toppingsModalBackdrop');
    const closeBtn = document.getElementById('closeToppingsModalBtn');
    const minusBtn = document.getElementById('modalQtyMinusBtn');
    const plusBtn = document.getElementById('modalQtyPlusBtn');
    const confirmBtn = document.getElementById('btnConfirmCustomPizza');

    if (closeBtn) closeBtn.addEventListener('click', closeToppingsModal);
    if (backdrop) {
      backdrop.addEventListener('click', e => {
        if (e.target === backdrop) closeToppingsModal();
      });
    }

    if (minusBtn) {
      minusBtn.addEventListener('click', () => {
        if (modalCustomState.quantity > 1) {
          modalCustomState.quantity--;
          const qtyEl = document.getElementById('modalQtyCount');
          if (qtyEl) qtyEl.textContent = modalCustomState.quantity;
          updateModalTotalDisplay();
        }
      });
    }

    if (plusBtn) {
      plusBtn.addEventListener('click', () => {
        if (modalCustomState.quantity < 20) {
          modalCustomState.quantity++;
          const qtyEl = document.getElementById('modalQtyCount');
          if (qtyEl) qtyEl.textContent = modalCustomState.quantity;
          updateModalTotalDisplay();
        }
      });
    }

    // Controles de cantidad para salsa adicional dentro del modal
    const sauceMinusBtn = document.getElementById('modalSauceMinusBtn');
    const saucePlusBtn = document.getElementById('modalSaucePlusBtn');

    if (sauceMinusBtn) {
      sauceMinusBtn.addEventListener('click', () => {
        if (modalCustomState.extraSauceCount > 0) {
          modalCustomState.extraSauceCount--;
          const el = document.getElementById('modalSauceQtyCount');
          if (el) el.textContent = modalCustomState.extraSauceCount;
          updateModalTotalDisplay();
        }
      });
    }

    if (saucePlusBtn) {
      saucePlusBtn.addEventListener('click', () => {
        if (modalCustomState.extraSauceCount < 20) {
          modalCustomState.extraSauceCount++;
          const el = document.getElementById('modalSauceQtyCount');
          if (el) el.textContent = modalCustomState.extraSauceCount;
          updateModalTotalDisplay();
        }
      });
    }

    if (confirmBtn) {
      confirmBtn.addEventListener('click', handleConfirmCustomPizza);
    }

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && backdrop && backdrop.classList.contains('open')) {
        closeToppingsModal();
      }
    });
  }

  function openToppingsModal(pizzaId, sizeKey = 'mediana') {
    if (window.FerPizzCMS && typeof window.FerPizzCMS.evaluateStoreStatus === 'function') {
      const storeStatus = window.FerPizzCMS.evaluateStoreStatus();
      if (!storeStatus.isOpen) {
        showToast(`No estamos atendiendo ahora. ${storeStatus.todayText}`);
        return;
      }
    }

    const pizza = activeMenu.find(p => p.id === pizzaId);
    if (!pizza) return;

    modalCustomState = {
      pizzaId: pizza.id,
      pizza: pizza,
      sizeKey: sizeKey,
      selectedAdditions: [],
      extraSauceCount: 0,
      quantity: 1
    };

    // Actualizar datos del modal
    const titleEl = document.getElementById('toppingsModalTitle');
    const subEl = document.getElementById('toppingsModalSub');
    const basePillEl = document.getElementById('toppingsBasePill');
    const qtyEl = document.getElementById('modalQtyCount');
    const sauceQtyEl = document.getElementById('modalSauceQtyCount');
    const notesInput = document.getElementById('modalItemNotes');

    if (titleEl) titleEl.textContent = `PIZZA ${pizza.name.toUpperCase()}`;
    if (subEl) subEl.textContent = `Formato: ${SIZES[sizeKey].label} (${SIZES[sizeKey].portions})`;

    const basePrice = pizza.prices[sizeKey] || 0;
    if (basePillEl) basePillEl.textContent = `Precio base: ${formatCOP(basePrice)}`;
    if (qtyEl) qtyEl.textContent = '1';
    if (sauceQtyEl) sauceQtyEl.textContent = '0';
    if (notesInput) notesInput.value = '';

    // Renderizar selector de tamaños dentro del modal
    renderModalSizePills(sizeKey);

    // Renderizar lista de toppings disponibles con precios según tamaño
    renderToppingsModalCards(sizeKey);

    updateModalTotalDisplay();

    // Abrir modal con animación
    const backdrop = document.getElementById('toppingsModalBackdrop');
    if (backdrop) {
      backdrop.classList.add('open');
      backdrop.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeToppingsModal() {
    const backdrop = document.getElementById('toppingsModalBackdrop');
    if (!backdrop) return;
    backdrop.classList.remove('open');
    backdrop.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  function renderModalSizePills(activeSizeKey) {
    const container = document.getElementById('modalSizePillsRow');
    if (!container) return;
    container.innerHTML = '';

    Object.keys(SIZES).forEach(sKey => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `modal-size-btn ${sKey === activeSizeKey ? 'active' : ''}`;
      btn.textContent = `${SIZES[sKey].label}`;
      btn.title = SIZES[sKey].portions;

      btn.addEventListener('click', (e) => {
        if (e) e.preventDefault();
        changeModalSize(sKey);
      });

      container.appendChild(btn);
    });
  }

  function changeModalSize(newSizeKey) {
    if (!modalCustomState.pizza) return;
    modalCustomState.sizeKey = newSizeKey;

    // Actualizar botones de tamaño activos
    const container = document.getElementById('modalSizePillsRow');
    if (container) {
      container.querySelectorAll('.modal-size-btn').forEach(btn => {
        btn.classList.toggle('active', btn.textContent === SIZES[newSizeKey].label);
      });
    }

    // Actualizar subtítulo y precio base
    const subEl = document.getElementById('toppingsModalSub');
    const basePillEl = document.getElementById('toppingsBasePill');
    const basePrice = modalCustomState.pizza.prices[newSizeKey] || 0;

    if (subEl) subEl.textContent = `Formato: ${SIZES[newSizeKey].label} (${SIZES[newSizeKey].portions})`;
    if (basePillEl) basePillEl.textContent = `Precio base: ${formatCOP(basePrice)}`;

    // Guardar ids de toppings seleccionados
    const prevSelectedIds = modalCustomState.selectedAdditions.map(a => a.id);

    // Re-renderizar lista de toppings con los nuevos precios
    renderToppingsModalCards(newSizeKey);

    // Re-marcar los toppings que ya estaban seleccionados
    const cardsList = document.getElementById('toppingsCardsList');
    if (cardsList) {
      prevSelectedIds.forEach(id => {
        const card = cardsList.querySelector(`.topping-option-item[data-add-id="${id}"]`);
        if (card) {
          const chk = card.querySelector('.topping-checkbox');
          if (chk) chk.checked = true;
          card.classList.add('selected');
        }
      });
    }

    syncSelectedAdditions();
    updateModalTotalDisplay();
  }

  function renderToppingsModalCards(sizeKey) {
    const container = document.getElementById('toppingsCardsList');
    if (!container) return;
    container.innerHTML = '';

    activeAdditions.forEach(add => {
      const price = add.prices[sizeKey] || add.prices.mediana;
      const card = document.createElement('div');
      card.className = 'topping-option-item';
      card.dataset.addId = add.id;

      card.innerHTML = `
        <div class="topping-left-col">
          <input 
            type="checkbox" 
            class="topping-checkbox" 
            id="chk-top-${add.id}" 
            value="${add.id}"
            data-name="${add.name}" 
            data-price="${price}"
          >
          <div class="topping-details">
            <span class="topping-name">${add.name}</span>
            <span class="topping-desc">${add.desc || ''}</span>
          </div>
        </div>
        <span class="topping-price-tag">+${formatCOP(price)}</span>
      `;

      card.addEventListener('click', (e) => {
        const chk = card.querySelector('.topping-checkbox');
        if (e.target !== chk) {
          chk.checked = !chk.checked;
        }
        if (chk.checked) {
          card.classList.add('selected');
        } else {
          card.classList.remove('selected');
        }
        syncSelectedAdditions();
        updateModalTotalDisplay();
      });

      container.appendChild(card);
    });
  }

  function syncSelectedAdditions() {
    const container = document.getElementById('toppingsCardsList');
    if (!container) return;

    modalCustomState.selectedAdditions = [];
    container.querySelectorAll('.topping-checkbox:checked').forEach(chk => {
      modalCustomState.selectedAdditions.push({
        id: chk.value,
        name: chk.dataset.name,
        price: parseInt(chk.dataset.price, 10) || 0
      });
    });
  }

  // RENDERIZADO DE SALSAS EN EL MODAL DE TOPPINGS
  function updateModalTotalDisplay() {
    if (!modalCustomState.pizza) return;
    const basePrice = modalCustomState.pizza.prices[modalCustomState.sizeKey] || 0;
    const additionsSum = modalCustomState.selectedAdditions.reduce((acc, a) => acc + a.price, 0);
    const saucesSum = (modalCustomState.extraSauceCount || 0) * SAUCE_PRICE;
    const unitPrice = basePrice + additionsSum + saucesSum;
    const total = unitPrice * modalCustomState.quantity;

    const displayEl = document.getElementById('modalTotalSumDisplay');
    if (displayEl) {
      displayEl.textContent = formatCOP(total);
    }
  }

  function handleConfirmCustomPizza() {
    if (window.FerPizzCMS && typeof window.FerPizzCMS.evaluateStoreStatus === 'function') {
      const storeStatus = window.FerPizzCMS.evaluateStoreStatus();
      if (!storeStatus.isOpen) {
        closeToppingsModal();
        showToast(`No estamos atendiendo ahora. ${storeStatus.todayText}`);
        return;
      }
    }

    if (!modalCustomState.pizza) return;

    const pizza = modalCustomState.pizza;
    const sizeKey = modalCustomState.sizeKey;
    const basePrice = pizza.prices[sizeKey] || 0;
    const additionsSum = modalCustomState.selectedAdditions.reduce((acc, a) => acc + a.price, 0);
    const saucesSum = (modalCustomState.extraSauceCount || 0) * SAUCE_PRICE;
    const unitPrice = basePrice + additionsSum + saucesSum;
    const notes = document.getElementById('modalItemNotes')?.value.trim() || '';

    const cartItem = {
      cartItemId: 'item_' + Date.now() + '_' + Math.random().toString(36).substr(2, 4),
      pizzaId: pizza.id,
      name: pizza.name,
      sizeKey: sizeKey,
      sizeLabel: SIZES[sizeKey].label,
      sizePortions: SIZES[sizeKey].portions,
      basePrice: basePrice,
      additions: [...modalCustomState.selectedAdditions],
      extraSauceCount: modalCustomState.extraSauceCount || 0,
      saucePriceTotal: saucesSum,
      notes: notes,
      unitPrice: unitPrice,
      quantity: modalCustomState.quantity
    };

    cart.push(cartItem);
    saveCartData();
    renderReceiptItems();
    closeToppingsModal();

    showToast(`✓ Se agregó ${modalCustomState.quantity}x «${pizza.name}» (${SIZES[sizeKey].label}) al carrito`);
  }

  // ACCIÓN DE SALSA ADICIONAL DIRECTA EN LA CARTA
  function setupDirectSauceButton() {
    const btn = document.getElementById('btnDirectAddSauce');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        addDirectSauceToCart();
      });
    }
  }

  function addDirectSauceToCart() {
    if (window.FerPizzCMS && typeof window.FerPizzCMS.evaluateStoreStatus === 'function') {
      const storeStatus = window.FerPizzCMS.evaluateStoreStatus();
      if (!storeStatus.isOpen) {
        showToast(`No estamos atendiendo ahora. ${storeStatus.todayText}`);
        return;
      }
    }

    const existing = cart.find(item => item.isStandaloneSauce);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        cartItemId: 'sauce_' + Date.now(),
        isStandaloneSauce: true,
        name: SAUCE_NAME,
        unitPrice: SAUCE_PRICE,
        quantity: 1
      });
    }

    saveCartData();
    renderReceiptItems();
    showToast('✓ Se añadió 1x Salsa Adicional al carrito');
  }

  // ACTUALIZAR BADGES Y BARRA MÓVIL
  function updateCartBadges() {
    const totalCount = cart.reduce((acc, item) => acc + item.quantity, 0);
    const subtotal = cart.reduce((acc, item) => acc + (item.unitPrice * item.quantity), 0);

    const badge = document.getElementById('cartCountBadge');
    if (badge) {
      badge.textContent = `(${totalCount})`;
      if (typeof gsap !== 'undefined') {
        gsap.fromTo(badge, 
          { scale: 1.55, rotation: -12 }, 
          { scale: 1, rotation: 0, duration: 0.5, ease: 'elastic.out(1.2, 0.4)' }
        );
      } else if (badge.style) {
        badge.style.transform = 'scale(1.25)';
        setTimeout(() => { if (badge.style) badge.style.transform = 'scale(1)'; }, 250);
      }
    }

    const mobileTotal = document.getElementById('mobileStickyTotal');
    if (mobileTotal) {
      mobileTotal.textContent = formatCOP(subtotal);
    }
  }

  // 3. RECIBO DE CHECKOUT
  function renderReceiptItems() {
    const container = document.getElementById('receiptItemsList');
    const subtotalEl = document.getElementById('receiptSubtotalDisplay');
    const totalEl = document.getElementById('receiptTotalDisplay');
    if (!container) return;

    if (cart.length === 0) {
      container.innerHTML = `
        <div class="receipt-empty-state">
          <span class="empty-icon">✦</span>
          <p>Tu carrito está vacío.</p>
          <a href="#menu-section" class="btn-mustard-solid" style="padding: 10px 18px; margin-top: 12px;" id="emptyCartBackBtn">Ver La Carta</a>
        </div>
      `;
      if (subtotalEl) subtotalEl.textContent = formatCOP(0);
      if (totalEl) totalEl.textContent = formatCOP(0);

      const backBtn = document.getElementById('emptyCartBackBtn');
      if (backBtn) backBtn.addEventListener('click', closeCartDrawer);
      return;
    }

    let subtotal = 0;
    container.innerHTML = '';

    cart.forEach(item => {
      const itemSubtotal = item.unitPrice * item.quantity;
      subtotal += itemSubtotal;

      const row = document.createElement('div');
      row.className = 'receipt-item-row';
      if (item.isStandaloneSauce) {
        row.innerHTML = `
          <div class="receipt-item-info">
            <div class="receipt-item-name">${item.quantity}x ${item.name}</div>
            <div class="receipt-item-meta">Tarrito de salsa adicional</div>
          </div>
          <div class="receipt-item-actions">
            <span class="receipt-item-price">${formatCOP(itemSubtotal)}</span>
            <button type="button" class="receipt-item-remove-btn" data-item-id="${item.cartItemId}">
              Quitar
            </button>
          </div>
        `;
      } else {
        row.innerHTML = `
          <div class="receipt-item-info">
            <div class="receipt-item-name">${item.quantity}x Pizza ${item.name}</div>
            <div class="receipt-item-meta">Formato: ${item.sizeLabel} (${item.sizePortions})</div>
            ${item.additions && item.additions.length > 0 ? `
              <div class="receipt-item-additions">+ Adic: ${item.additions.map(a => a.name).join(', ')}</div>
            ` : ''}
            ${item.extraSauceCount && item.extraSauceCount > 0 ? `
              <div class="receipt-item-sauces">+ Salsa Adicional: ${item.extraSauceCount}x (${formatCOP(item.extraSauceCount * SAUCE_PRICE)})</div>
            ` : ''}
            ${item.notes ? `
              <div class="receipt-item-notes" style="font-size:0.75rem; color:var(--ink-muted); margin-top:3px;">Nota: ${item.notes}</div>
            ` : ''}
          </div>
          <div class="receipt-item-actions">
            <span class="receipt-item-price">${formatCOP(itemSubtotal)}</span>
            <button type="button" class="receipt-item-remove-btn" data-item-id="${item.cartItemId}">
              Quitar
            </button>
          </div>
        `;
      }
      container.appendChild(row);
    });

    if (subtotalEl) subtotalEl.textContent = formatCOP(subtotal);
    if (totalEl) totalEl.textContent = formatCOP(subtotal);

    container.querySelectorAll('.receipt-item-remove-btn').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.dataset.itemId;
        cart = cart.filter(item => item.cartItemId !== id);
        saveCartData();
        renderReceiptItems();
      });
    });
  }

  // 4. DRAWER DE CHECKOUT
  function setupCartDrawer() {
    const triggerBtn = document.getElementById('cartTriggerBtn');
    const backdrop = document.getElementById('checkoutBackdrop');
    const closeBtn = document.getElementById('closeCartBtn');

    if (triggerBtn) triggerBtn.addEventListener('click', openCartDrawer);
    if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
    if (backdrop) {
      backdrop.addEventListener('click', e => {
        if (e.target === backdrop) closeCartDrawer();
      });
    }

    const form = document.getElementById('orderCheckoutForm');
    if (form) form.addEventListener('submit', handleSendWhatsAppOrder);
  }

  function openCartDrawer() {
    const backdrop = document.getElementById('checkoutBackdrop');
    if (!backdrop) return;
    renderReceiptItems();
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';

    if (typeof gsap !== 'undefined') {
      gsap.fromTo('.checkout-receipt-drawer',
        { x: '100%' },
        { x: '0%', duration: 0.45, ease: 'power3.out' }
      );
      gsap.fromTo('.receipt-item-row',
        { opacity: 0, x: 25 },
        { opacity: 1, x: 0, stagger: 0.05, duration: 0.35, ease: 'power2.out', delay: 0.15 }
      );
    }

    setTimeout(() => {
      if (leafletMap) leafletMap.invalidateSize();
    }, 300);
  }

  function closeCartDrawer() {
    const backdrop = document.getElementById('checkoutBackdrop');
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }

  // 5. MAPA LEAFLET CON FILTRO SEPIA
  function setupLeafletMap() {
    const mapElement = document.getElementById('leafletMap');
    if (!mapElement || typeof L === 'undefined') return;

    const cartagenaCenter = [10.4236, -75.5378];

    try {
      leafletMap = L.map('leafletMap', {
        center: cartagenaCenter,
        zoom: 14,
        zoomControl: true,
        attributionControl: false
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19
      }).addTo(leafletMap);

      const customPin = L.divIcon({
        className: 'custom-leaflet-pin',
        html: `
          <div style="
            background-color: #BD2026;
            color: #FCD968;
            width: 32px;
            height: 32px;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid #4A1417;
            box-shadow: 2px 3px 6px rgba(0,0,0,0.35);
          ">
            <span style="transform: rotate(45deg); font-size: 15px; font-weight: 900; color: #4A1417;">✦</span>
          </div>
        `,
        iconSize: [32, 32],
        iconAnchor: [16, 32]
      });

      mapMarker = L.marker(cartagenaCenter, {
        draggable: true,
        icon: customPin
      }).addTo(leafletMap);

      mapMarker.bindPopup('<b>Entrega Fer Pizz Cartagena</b><br>Arrastra este alfiler a tu puerta.').openPopup();

      mapMarker.on('dragend', function () {
        const pos = mapMarker.getLatLng();
        updateCoordinates(pos.lat, pos.lng);
      });

      leafletMap.on('click', function (e) {
        mapMarker.setLatLng(e.latlng);
        updateCoordinates(e.latlng.lat, e.latlng.lng);
      });

      const btnGeo = document.getElementById('btnGeolocate');
      if (btnGeo) btnGeo.addEventListener('click', getCurrentUserLocation);
    } catch (err) {
      console.error('Error al iniciar Leaflet:', err);
    }
  }

  function updateCoordinates(lat, lng) {
    currentCoordinates = { lat, lng };
    const coordsDisplay = document.getElementById('coordsText');
    if (coordsDisplay) {
      coordsDisplay.textContent = `${lat.toFixed(5)}° N, ${lng.toFixed(5)}° W (Cartagena)`;
    }
  }

  function getCurrentUserLocation() {
    if (!navigator.geolocation) {
      showToast('Geolocalización no soportada en tu navegador.');
      return;
    }
    showToast('Detectando coordenadas satelitales...');

    navigator.geolocation.getCurrentPosition(
      pos => {
        const { latitude, longitude } = pos.coords;
        if (leafletMap && mapMarker) {
          const latLng = new L.LatLng(latitude, longitude);
          leafletMap.setView(latLng, 16);
          mapMarker.setLatLng(latLng);
          updateCoordinates(latitude, longitude);
          showToast('✓ Ubicación fijada en el mapa');
        }
      },
      () => {
        showToast('No se obtuvo GPS. Puedes arrastrar el alfiler manualmente.');
      },
      { timeout: 10000, enableHighAccuracy: true }
    );
  }

  // 6. ENVÍO OFICIAL A WHATSAPP
  function handleSendWhatsAppOrder(e) {
    if (e) e.preventDefault();

    if (window.FerPizzCMS && typeof window.FerPizzCMS.evaluateStoreStatus === 'function') {
      const storeStatus = window.FerPizzCMS.evaluateStoreStatus();
      if (!storeStatus.isOpen) {
        showToast(`No estamos atendiendo ahora (${storeStatus.todayText}).`);
        return;
      }
    }

    if (cart.length === 0) {
      showToast('Tu carrito está vacío. Añade al menos una pizza.');
      return;
    }

    const name = document.getElementById('clientNameInput')?.value.trim();
    const phone = document.getElementById('clientPhoneInput')?.value.trim();
    const address = document.getElementById('clientAddressInput')?.value.trim();
    const notes = document.getElementById('clientNotesInput')?.value.trim();

    if (!name || !phone || !address) {
      showToast('Por favor completa nombre, teléfono y dirección.');
      return;
    }

    let subtotal = 0;
    let itemsText = '';

    cart.forEach(item => {
      const itemSubtotal = item.unitPrice * item.quantity;
      subtotal += itemSubtotal;

      if (item.isStandaloneSauce) {
        itemsText += `• *${item.quantity}x ${item.name}*\n`;
        itemsText += `  └ Tarrito de salsa adicional\n`;
        itemsText += `  └ Subtotal: ${formatCOP(itemSubtotal)}\n`;
      } else {
        itemsText += `• *${item.quantity}x Pizza ${item.name}*\n`;
        itemsText += `  └ Formato: ${item.sizeLabel} (${item.sizePortions})\n`;
        if (item.additions && item.additions.length > 0) {
          itemsText += `  └ Adicionales: ${item.additions.map(a => a.name).join(', ')}\n`;
        }
        if (item.extraSauceCount && item.extraSauceCount > 0) {
          itemsText += `  └ Salsa Adicional: ${item.extraSauceCount} tarrito(s) (${formatCOP(item.extraSauceCount * SAUCE_PRICE)})\n`;
        }
        if (item.notes) {
          itemsText += `  └ Nota de cocina: ${item.notes}\n`;
        }
        itemsText += `  └ Subtotal: ${formatCOP(itemSubtotal)}\n`;
      }
    });

    const googleMapsUrl = `https://maps.google.com/?q=${currentCoordinates.lat.toFixed(5)},${currentCoordinates.lng.toFixed(5)}`;

    const message = 
`*NUEVO PEDIDO — FER PIZZ CARTAGENA*
──────────────────────────────
✦ *Cliente:* ${name}
✦ *Teléfono:* ${phone}
✦ *Dirección:* ${address}
✦ *Ubicación GPS:* ${googleMapsUrl}
${notes ? `✦ *Notas:* ${notes}\n` : ''}──────────────────────────────
*DETALLE DE TU PEDIDO:*
${itemsText}──────────────────────────────
*TOTAL ESTIMADO:* ${formatCOP(subtotal)} COP
──────────────────────────────
“UNA IDEA QUE NACIÓ PARA SERVIR”
Horno encendido. Gracias por preferirnos.`;

    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    showToast('✓ Abriendo WhatsApp oficial de Fer Pizz...');

    // Registrar pedido automáticamente en las estadísticas (LocalStorage + Firebase Firestore)
    if (window.FerPizzCMS && typeof window.FerPizzCMS.recordOrder === 'function') {
      const orderItems = cart.map(item => ({
        pizzaId: item.pizzaId || (item.isStandaloneSauce ? 'standalone_sauce' : 'custom'),
        name: item.name,
        sizeKey: item.sizeKey || 'unico',
        sizeLabel: item.sizeLabel || 'Tarrito',
        quantity: item.quantity,
        unitPrice: item.unitPrice,
        subtotal: item.unitPrice * item.quantity,
        isStandaloneSauce: !!item.isStandaloneSauce,
        additionsCount: Array.isArray(item.additions) ? item.additions.length : 0,
        extraSauceCount: item.extraSauceCount || 0
      }));

      window.FerPizzCMS.recordOrder({
        customerName: name,
        customerPhone: phone,
        customerAddress: address,
        total: subtotal,
        items: orderItems,
        source: 'web_whatsapp'
      });
    }
  }

  // 7. FILTROS DE CATEGORÍA CON TRANSICIÓN GSAP
  function setupCategoryFilters() {
    const tabs = document.querySelectorAll('.filter-tab');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
        activeFilter = this.dataset.filter;
        renderMenuGrid();

        if (typeof gsap !== 'undefined') {
          gsap.fromTo('#pizzaMenuContainer .pizza-editorial-card', 
            { opacity: 0, y: 24, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, stagger: 0.05, duration: 0.45, ease: 'power2.out' }
          );
          if (typeof ScrollTrigger !== 'undefined') {
            ScrollTrigger.refresh();
          }
        }
      });
    });
  }

  // 8. SINCRONIZACIÓN CON LA GUÍA DE PORCIONES (SIN SCROLL AUTOMÁTICO)
  function setupPortionsGuideSync() {
    const portionCards = document.querySelectorAll('.portion-card');
    portionCards.forEach(card => {
      card.addEventListener('click', function (e) {
        if (e) e.preventDefault();
        const targetSize = this.dataset.size;
        portionCards.forEach(c => c.classList.remove('active-featured'));
        this.classList.add('active-featured');

        // Seleccionar automáticamente ese tamaño en todas las tarjetas visibles sin desplazar la pantalla
        document.querySelectorAll(`.size-pill-btn[data-size="${targetSize}"]`).forEach(btn => {
          btn.click();
        });
        showToast(`✓ Formato seleccionado: ${SIZES[targetSize].label} (${SIZES[targetSize].portions})`);
      });
    });
  }

  // 9. ANIMACIONES ESPECTACULARES DE ENTRADA CON GSAP
  // 9. ANIMACIONES ESPECTACULARES DE ENTRADA CON GSAP & SCROLLTRIGGER
  function setupScrollAnimations() {
    if (typeof gsap === 'undefined') {
      triggerScrollObserver();
      return;
    }

    // A. Animación de entrada inicial del Hero
    document.body.classList.add('gsap-active');
    if (typeof ScrollTrigger !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger);
    }

    initHeroEntranceGSAP();

    // B. Orquestación al hacer scroll (garantiza 100% visibilidad de todo el contenido, sin elementos ocultos)
    initScrollObserverGSAP();
    initScrollTriggersGSAP();
  }

  // TIMELINE MAESTRO DE ENTRADA (HERO Y CABECERA)
  function initHeroEntranceGSAP() {
    if (typeof gsap === 'undefined') return;

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // 1. Barra superior vino
    tl.fromTo('.unified-editorial-topbar', 
      { y: -30, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, clearProps: 'transform,opacity' }
    );

    // 2. Logotipo central circular con rebote elegante
    tl.fromTo('.logo-circle-ring', 
      { scale: 0.7, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.8)', clearProps: 'transform,opacity' }, 
      '-=0.2'
    );

    // 3. Subtítulo del logo y botones píldora
    tl.fromTo('.brand-tagline', 
      { y: 10, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.4, clearProps: 'transform,opacity' }, 
      '-=0.3'
    );

    tl.fromTo('.pill-btn-nav, .pill-btn-subtle, .pill-btn-cart', 
      { y: -10, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.06, duration: 0.4, ease: 'power2.out', clearProps: 'transform,opacity' }, 
      '-=0.3'
    );

    // 4. Marquesina infinita mostaza
    tl.fromTo('.marquee-mustard-wrapper', 
      { scaleY: 0.7, opacity: 0 }, 
      { scaleY: 1, opacity: 1, duration: 0.5, transformOrigin: 'top center', clearProps: 'transform,opacity' }, 
      '-=0.2'
    );

    // 5. Kicker y Titular del Hero
    tl.fromTo('.hero-kicker-badge', 
      { x: -25, opacity: 0 }, 
      { x: 0, opacity: 1, duration: 0.45, clearProps: 'transform,opacity' }, 
      '-=0.2'
    );

    tl.fromTo('.hero-headline-title', 
      { y: 25, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out', clearProps: 'transform,opacity' }, 
      '-=0.2'
    );

    // 6. Línea divisoria ornamental
    tl.fromTo('.hero-rule-ornate .rule-line', 
      { scaleX: 0, opacity: 0 }, 
      { scaleX: 1, opacity: 1, duration: 0.5, transformOrigin: 'left center', clearProps: 'transform,opacity' }, 
      '-=0.3'
    );

    tl.fromTo('.rule-symbol', 
      { scale: 0, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.35, ease: 'back.out(2)', clearProps: 'transform,opacity' }, 
      '-=0.3'
    );

    // 7. Manifiesto editorial
    tl.fromTo('.hero-body-text', 
      { y: 15, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.5, clearProps: 'transform,opacity' }, 
      '-=0.2'
    );

    // 8. Botones de acción del hero
    tl.fromTo('.hero-action-row > *', 
      { y: 15, opacity: 0 }, 
      { y: 0, opacity: 1, stagger: 0.08, duration: 0.5, ease: 'back.out(1.6)', clearProps: 'transform,opacity' }, 
      '-=0.2'
    );

    // 9. Fotografía vertical enmarcada
    tl.fromTo('.framed-photo-card', 
      { y: 35, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity' }, 
      '-=0.4'
    );

    // 10. Sello de garantía editorial
    tl.fromTo('.clean-seal-badge', 
      { scale: 0.8, opacity: 0 }, 
      { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.8)', clearProps: 'transform,opacity' }, 
      '-=0.3'
    );
  }

  // ORQUESTACIÓN AL HACER SCROLL (INTERSECTION OBSERVER + GSAP FROMTO CON CLEARPROPS)
  function initScrollObserverGSAP() {
    if (!('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          obs.unobserve(el);

          // A. Si es la grilla de porciones:
          if (el.classList.contains('portions-interactive-grid')) {
            gsap.fromTo(el.querySelectorAll('.portion-card'),
              { opacity: 0, y: 35 },
              { opacity: 1, y: 0, stagger: 0.1, duration: 0.65, ease: 'power2.out', clearProps: 'transform,opacity' }
            );
            gsap.fromTo(el.querySelectorAll('.pizza-cut-svg'),
              { rotation: -60 },
              { rotation: 0, duration: 0.8, ease: 'back.out(1.5)', stagger: 0.08, clearProps: 'transform' }
            );
            return;
          }

          // B. Si es el contenedor del menú de pizzas:
          if (el.id === 'pizzaMenuContainer') {
            gsap.fromTo(el.querySelectorAll('.pizza-editorial-card'),
              { opacity: 0, y: 35 },
              { opacity: 1, y: 0, stagger: 0.08, duration: 0.65, ease: 'power2.out', clearProps: 'transform,opacity' }
            );
            return;
          }

          // C. Si es la tarjeta del chef:
          if (el.classList.contains('cooks-fluid-card')) {
            const redPanel = el.querySelector('.cooks-red-panel');
            const photoPanel = el.querySelector('.cooks-photo-panel');
            if (redPanel) {
              gsap.fromTo(redPanel,
                { opacity: 0, x: -40 },
                { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', clearProps: 'transform,opacity' }
              );
            }
            if (photoPanel) {
              gsap.fromTo(photoPanel,
                { opacity: 0, x: 40 },
                { opacity: 1, x: 0, duration: 0.75, ease: 'power3.out', clearProps: 'transform,opacity' }
              );
            }
            return;
          }

          // D. Si son las tarjetas de contacto / historia:
          if (el.classList.contains('contact-split-grid')) {
            gsap.fromTo(el.children,
              { opacity: 0, y: 35 },
              { opacity: 1, y: 0, stagger: 0.15, duration: 0.7, ease: 'power3.out', clearProps: 'transform,opacity' }
            );
            return;
          }

          // E. Animación genérica para títulos o secciones:
          gsap.fromTo(el,
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', clearProps: 'transform,opacity' }
          );
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 50px 0px'
    });

    const targets = document.querySelectorAll(
      '.portions-interactive-grid, #pizzaMenuContainer, .additions-official-panel, .sauce-addon-card, .cooks-fluid-card, .contact-split-grid, .official-brand-footer, .reveal-on-scroll'
    );
    targets.forEach(t => observer.observe(t));
  }

  function initScrollTriggersGSAP() {
    // Unificado con initScrollObserverGSAP
  }

  // FALLBACK INTERSECTION OBSERVER (POR SI ACASO NO CARGA GSAP)
  function triggerScrollObserver() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal-on-scroll').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    }, {
      threshold: 0.05,
      rootMargin: '0px 0px 60px 0px'
    });

    const targets = document.querySelectorAll(
      '.portions-interactive-grid, #pizzaMenuContainer, .additions-official-panel, .sauce-addon-card, .cooks-fluid-card, .contact-split-grid, .official-brand-footer'
    );
    targets.forEach(t => observer.observe(t));
    document.querySelectorAll('.reveal-on-scroll:not(.revealed)').forEach(el => {
      observer.observe(el);
    });
  }

  // 10. BARRA MÓVIL STICKY
  function setupMobileStickyBar() {
    const mobileBtn = document.getElementById('mobileCartOpenBtn');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', openCartDrawer);
    }
  }

  // 11. CMS SECRETO
  function setupSecretCMS() {
    const stampTrigger = document.getElementById('secretStampTrigger');
    const adminBackdrop = document.getElementById('adminBackdrop');
    const closeAdminBtn = document.getElementById('closeAdminBtn');
    const loginBtn = document.getElementById('adminLoginBtn');
    const passwordInput = document.getElementById('adminPasswordInput');

    if (stampTrigger) {
      stampTrigger.addEventListener('click', function () {
        stampClickCount++;
        clearTimeout(stampClickTimer);

        if (stampClickCount >= 5) {
          stampClickCount = 0;
          window.location.href = 'admin.html';
        } else {
          stampClickTimer = setTimeout(() => stampClickCount = 0, 2000);
        }
      });
    }

    if (window.location.hash === '#admin') {
      window.location.href = 'admin.html';
    }
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#admin') {
        window.location.href = 'admin.html';
      }
    });

    if (closeAdminBtn) closeAdminBtn.addEventListener('click', closeAdminModal);
    if (adminBackdrop) {
      adminBackdrop.addEventListener('click', e => {
        if (e.target === adminBackdrop) closeAdminModal();
      });
    }

    if (loginBtn && passwordInput) {
      loginBtn.addEventListener('click', verifyAdminPassword);
      passwordInput.addEventListener('keypress', e => {
        if (e.key === 'Enter') verifyAdminPassword();
      });
    }

    setupAdminTabs();

    const btnSavePrices = document.getElementById('btnSaveAdminChanges');
    if (btnSavePrices) btnSavePrices.addEventListener('click', saveAdminMenuChanges);

    const btnReset = document.getElementById('btnResetDefaults');
    if (btnReset) btnReset.addEventListener('click', resetMenuToDefaults);

    const btnSaveAnnounce = document.getElementById('btnSaveAnnounceChanges');
    if (btnSaveAnnounce) btnSaveAnnounce.addEventListener('click', saveAnnounceChanges);

    // Adicionales y Complementos
    const btnCreateComp = document.getElementById('btnCreateNewComp');
    if (btnCreateComp) btnCreateComp.addEventListener('click', createComplement);

    const btnSaveToppings = document.getElementById('btnSaveToppingsChanges');
    if (btnSaveToppings) btnSaveToppings.addEventListener('click', saveAdminToppingsChanges);

    const btnResetToppings = document.getElementById('btnResetToppingsDefaults');
    if (btnResetToppings) btnResetToppings.addEventListener('click', resetToppingsToDefaults);

  }

  function openAdminModal() {
    const backdrop = document.getElementById('adminBackdrop');
    if (!backdrop) return;
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }

  function closeAdminModal() {
    const backdrop = document.getElementById('adminBackdrop');
    if (!backdrop) return;
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
    if (window.location.hash === '#admin') history.replaceState(null, null, ' ');
  }

  async function verifyAdminPassword() {
    const input = document.getElementById('adminPasswordInput');
    const errorEl = document.getElementById('authErrorMsg');
    const authView = document.getElementById('adminAuthView');
    const dashView = document.getElementById('adminDashboardView');

    if (!input) return;
    const entered = input.value.trim();

    try {
      if (await window.FerPizzCMS.verifyAdminPassword(entered)) {
        authView.classList.add('hidden');
        dashView.classList.remove('hidden');
        if (errorEl) errorEl.textContent = '';
        populateAdminPizzaTable();
        populateAdminToppingsTable();
      } else {
        if (errorEl) errorEl.textContent = 'Clave incorrecta. Por favor intenta de nuevo.';
      }
    } catch (err) {
      if (errorEl) errorEl.textContent = err.message || 'No se pudo verificar el acceso. Intenta nuevamente.';
    }
  }

  function setupAdminTabs() {
    const tabBtns = document.querySelectorAll('.admin-tab-btn');
    tabBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetTab = this.dataset.tab;
        tabBtns.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.admin-tab-content').forEach(c => c.classList.remove('active'));

        this.classList.add('active');
        const content = document.getElementById(targetTab);
        if (content) content.classList.add('active');
      });
    });
  }

  function populateAdminPizzaTable() {
    const tbody = document.getElementById('adminPizzaTbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    activeMenu.forEach(pizza => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td style="text-align: center;">
          <img src="${pizza.image || 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80'}" alt="${pizza.name}" class="admin-table-thumb" id="admin-thumb-${pizza.id}">
        </td>
        <td>
          <strong>${pizza.name}</strong><br>
          <small style="color: var(--ink-muted);">${pizza.badge || ''}</small>
        </td>
        <td>
          <select class="admin-table-input" data-id="${pizza.id}" data-field="available" style="width: 105px;">
            <option value="true" ${pizza.available ? 'selected' : ''}>Disponible</option>
            <option value="false" ${!pizza.available ? 'selected' : ''}>Agotado</option>
          </select>
        </td>
        <td><input type="number" class="admin-table-input" data-id="${pizza.id}" data-field="personal" value="${pizza.prices.personal}"></td>
        <td><input type="number" class="admin-table-input" data-id="${pizza.id}" data-field="pizzeta" value="${pizza.prices.pizzeta}"></td>
        <td><input type="number" class="admin-table-input" data-id="${pizza.id}" data-field="mediana" value="${pizza.prices.mediana}"></td>
        <td><input type="number" class="admin-table-input" data-id="${pizza.id}" data-field="familiar" value="${pizza.prices.familiar}"></td>
        <td>
          <div class="admin-row-btn-group">
            <button type="button" class="btn-admin-mini btn-cloudinary-upload" data-id="${pizza.id}">Subir Foto</button>
            <button type="button" class="btn-admin-mini btn-url-edit" data-id="${pizza.id}">Pegar URL</button>
          </div>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-cloudinary-upload').forEach(btn => {
      btn.addEventListener('click', function () {
        const pId = this.dataset.id;
        handleCloudinaryUploadForPizza(pId);
      });
    });

    tbody.querySelectorAll('.btn-url-edit').forEach(btn => {
      btn.addEventListener('click', function () {
        const pId = this.dataset.id;
        handleUrlPromptForPizza(pId);
      });
    });
  }

  // GESTIÓN DE CONFIGURACIÓN Y SUBIDAS DE CLOUDINARY
  function getCloudinaryConfig() {
    if (window.FerPizzCMS && typeof window.FerPizzCMS.getCloudinaryConfig === 'function') {
      return window.FerPizzCMS.getCloudinaryConfig();
    }
    try {
      const stored = localStorage.getItem(STORAGE_KEY_CLOUDINARY);
      if (stored) return JSON.parse(stored);
    } catch (e) {}
    return { cloudName: 'kqlledef', uploadPreset: 'ferpizz_fotos' };
  }


  function updatePizzaImage(pizzaId, imageUrl) {
    const pizza = activeMenu.find(p => p.id === pizzaId);
    if (!pizza) return;
    pizza.image = imageUrl;
    localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(activeMenu));

    const thumb = document.getElementById(`admin-thumb-${pizzaId}`);
    if (thumb) thumb.src = imageUrl;

    renderMenuGrid();
    showToast(`✓ Foto de "${pizza.name}" actualizada`);
  }

  function handleCloudinaryUploadForPizza(pizzaId) {
    const cfg = getCloudinaryConfig();
    const pizza = activeMenu.find(p => p.id === pizzaId);
    if (!pizza) return;

    if (!cfg.cloudName || !cfg.uploadPreset) {
      showToast('La subida de imágenes no está disponible. Contacta al encargado técnico o usa Pegar URL.');
      return;
    }

    if (typeof window.cloudinary === 'undefined') {
      alert('El servicio de Cloudinary no ha terminado de cargar o no hay conexión a internet.');
      return;
    }

    const widget = window.cloudinary.createUploadWidget({
      cloudName: cfg.cloudName,
      uploadPreset: cfg.uploadPreset,
      sources: ['local', 'url', 'camera'],
      multiple: false,
      folder: 'ferpizz_catalogo',
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],
      maxImageFileSize: 10000000,
      theme: 'minimal'
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        const secureUrl = result.info.secure_url;
        updatePizzaImage(pizzaId, secureUrl);
      }
    });

    widget.open();
  }

  function handleUrlPromptForPizza(pizzaId) {
    const pizza = activeMenu.find(p => p.id === pizzaId);
    if (!pizza) return;

    const currentUrl = pizza.image || '';
    const newUrl = prompt(`Ingresa el enlace directo (URL) de la imagen para "${pizza.name}":`, currentUrl);
    if (newUrl !== null) {
      const trimmed = newUrl.trim();
      if (trimmed) {
        updatePizzaImage(pizzaId, trimmed);
      }
    }
  }

  // GESTIÓN DE COMPLEMENTOS Y ADICIONALES EN EL CMS
  function populateAdminToppingsTable() {
    const tbody = document.getElementById('adminToppingsTbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    activeAdditions.forEach(add => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <input type="text" class="admin-table-input" data-id="${add.id}" data-field="name" value="${add.name}" style="width: 140px; text-align: left; font-weight: 700;">
        </td>
        <td>
          <input type="text" class="admin-table-input" data-id="${add.id}" data-field="desc" value="${add.desc || ''}" style="width: 170px; text-align: left;">
        </td>
        <td><input type="number" class="admin-table-input" data-id="${add.id}" data-field="personal" value="${add.prices.personal}"></td>
        <td><input type="number" class="admin-table-input" data-id="${add.id}" data-field="pizzeta" value="${add.prices.pizzeta}"></td>
        <td><input type="number" class="admin-table-input" data-id="${add.id}" data-field="mediana" value="${add.prices.mediana}"></td>
        <td><input type="number" class="admin-table-input" data-id="${add.id}" data-field="familiar" value="${add.prices.familiar}"></td>
        <td style="text-align: center;">
          <button type="button" class="btn-admin-mini btn-comp-delete" data-id="${add.id}" title="Eliminar adicional">Quitar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-comp-delete').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.dataset.id;
        deleteComplement(id);
      });
    });
  }

  function createComplement() {
    const nameIn = document.getElementById('newCompName');
    const descIn = document.getElementById('newCompDesc');
    const pPersonalIn = document.getElementById('newCompPersonal');
    const pPizzetaIn = document.getElementById('newCompPizzeta');
    const pMedianaIn = document.getElementById('newCompMediana');
    const pFamiliarIn = document.getElementById('newCompFamiliar');

    const name = nameIn ? nameIn.value.trim() : '';
    if (!name) {
      alert('Ingresa el nombre del ingrediente o adicional.');
      if (nameIn) nameIn.focus();
      return;
    }

    const desc = descIn ? descIn.value.trim() : '';
    const personal = parseInt(pPersonalIn?.value, 10) || 2000;
    const pizzeta = parseInt(pPizzetaIn?.value, 10) || 3000;
    const mediana = parseInt(pMedianaIn?.value, 10) || 4000;
    const familiar = parseInt(pFamiliarIn?.value, 10) || 5000;

    const id = 'add_' + name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now().toString().slice(-4);

    activeAdditions.push({
      id: id,
      name: name,
      desc: desc,
      prices: { personal, pizzeta, mediana, familiar }
    });

    localStorage.setItem(STORAGE_KEY_ADDITIONS, JSON.stringify(activeAdditions));

    if (nameIn) nameIn.value = '';
    if (descIn) descIn.value = '';

    populateAdminToppingsTable();
    renderPublicAdditionsTable();
    showToast(`✓ Adicional "${name}" añadido`);
  }

  function deleteComplement(id) {
    const comp = activeAdditions.find(a => a.id === id);
    if (!comp) return;

    if (!confirm(`¿Deseas eliminar el adicional "${comp.name}" de la carta y del personalizador?`)) return;

    activeAdditions = activeAdditions.filter(a => a.id !== id);
    localStorage.setItem(STORAGE_KEY_ADDITIONS, JSON.stringify(activeAdditions));

    populateAdminToppingsTable();
    renderPublicAdditionsTable();
    showToast(`✓ Adicional "${comp.name}" eliminado`);
  }

  function saveAdminToppingsChanges() {
    const tbody = document.getElementById('adminToppingsTbody');
    if (!tbody) return;

    activeAdditions.forEach(add => {
      const nameIn = tbody.querySelector(`input[data-id="${add.id}"][data-field="name"]`);
      const descIn = tbody.querySelector(`input[data-id="${add.id}"][data-field="desc"]`);
      const pPersonal = tbody.querySelector(`input[data-id="${add.id}"][data-field="personal"]`);
      const pPizzeta = tbody.querySelector(`input[data-id="${add.id}"][data-field="pizzeta"]`);
      const pMediana = tbody.querySelector(`input[data-id="${add.id}"][data-field="mediana"]`);
      const pFamiliar = tbody.querySelector(`input[data-id="${add.id}"][data-field="familiar"]`);

      if (nameIn && nameIn.value.trim()) add.name = nameIn.value.trim();
      if (descIn) add.desc = descIn.value.trim();
      if (pPersonal) add.prices.personal = parseInt(pPersonal.value, 10) || add.prices.personal;
      if (pPizzeta) add.prices.pizzeta = parseInt(pPizzeta.value, 10) || add.prices.pizzeta;
      if (pMediana) add.prices.mediana = parseInt(pMediana.value, 10) || add.prices.mediana;
      if (pFamiliar) add.prices.familiar = parseInt(pFamiliar.value, 10) || add.prices.familiar;
    });

    localStorage.setItem(STORAGE_KEY_ADDITIONS, JSON.stringify(activeAdditions));
    renderPublicAdditionsTable();
    showToast('✓ Cambios en adicionales guardados con éxito');
  }

  function resetToppingsToDefaults() {
    if (!confirm('¿Restaurar los adicionales a los 6 ingredientes oficiales de fábrica?')) return;
    activeAdditions = JSON.parse(JSON.stringify(DEFAULT_ADDITIONS));
    localStorage.setItem(STORAGE_KEY_ADDITIONS, JSON.stringify(activeAdditions));
    populateAdminToppingsTable();
    renderPublicAdditionsTable();
    showToast('✓ Adicionales restaurados de fábrica');
  }

  function saveAdminMenuChanges() {
    const tbody = document.getElementById('adminPizzaTbody');
    if (!tbody) return;

    activeMenu.forEach(pizza => {
      const avail = tbody.querySelector(`select[data-id="${pizza.id}"][data-field="available"]`);
      const pPersonal = tbody.querySelector(`input[data-id="${pizza.id}"][data-field="personal"]`);
      const pPizzeta = tbody.querySelector(`input[data-id="${pizza.id}"][data-field="pizzeta"]`);
      const pMediana = tbody.querySelector(`input[data-id="${pizza.id}"][data-field="mediana"]`);
      const pFamiliar = tbody.querySelector(`input[data-id="${pizza.id}"][data-field="familiar"]`);

      if (avail) pizza.available = avail.value === 'true';
      if (pPersonal) pizza.prices.personal = parseInt(pPersonal.value, 10) || pizza.prices.personal;
      if (pPizzeta) pizza.prices.pizzeta = parseInt(pPizzeta.value, 10) || pizza.prices.pizzeta;
      if (pMediana) pizza.prices.mediana = parseInt(pMediana.value, 10) || pizza.prices.mediana;
      if (pFamiliar) pizza.prices.familiar = parseInt(pFamiliar.value, 10) || pizza.prices.familiar;
    });

    localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(activeMenu));
    renderMenuGrid();
    showToast('✓ Carta y precios actualizados en Fer Pizz');
  }

  function resetMenuToDefaults() {
    if (!confirm('¿Restaurar los 8 sabores y precios a los valores oficiales del volante?')) return;
    activeMenu = JSON.parse(JSON.stringify(DEFAULT_MENU));
    localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(activeMenu));
    populateAdminPizzaTable();
    renderMenuGrid();
    showToast('✓ Carta restaurada con precios oficiales del volante');
  }

  function saveAnnounceChanges() {
    const greetingIn = document.getElementById('adminCooksGreeting')?.value;
    const msgIn = document.getElementById('adminCooksMessage')?.value;

    const greetingEl = document.querySelector('.cooks-greeting-title');
    const quoteEl = document.querySelector('.cooks-quote');

    if (greetingIn && greetingEl) greetingEl.textContent = greetingIn;
    if (msgIn && quoteEl) quoteEl.textContent = `«${msgIn}»`;

    showToast('✓ Anuncios actualizados');
  }

  function showToast(message) {
    const toast = document.getElementById('editorialToast');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('show');

    clearTimeout(window.__toastTimer);
    window.__toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3200);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
  } else {
    initApp();
  }

})();
