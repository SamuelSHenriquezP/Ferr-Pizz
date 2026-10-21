/**
 * ========================================================
 * FER PIZZ — MOTOR CENTRAL DE DATOS Y BASE DE DATOS (CMS)
 * Sincronización LocalStorage + Firebase Firestore (Tiempo Real)
 * ========================================================
 */

(function (window) {
  'use strict';

  // ============================================================================
  // 1. CONFIGURACIÓN DE FIREBASE Y CLOUDINARY EN PRODUCCIÓN (FERPIZZ)
  // ============================================================================
  const PRODUCTION_FIREBASE_CONFIG = {
    apiKey: "AIzaSyDIIY2tRUCDXFcLjXen5Yzp0x_gT8BTjmg",
    authDomain: "ferpizz.firebaseapp.com",
    projectId: "ferpizz",
    storageBucket: "ferpizz.firebasestorage.app",
    messagingSenderId: "498145958564",
    appId: "1:498145958564:web:e3be641d4f9ef19d672431",
    measurementId: "G-4FTGCZ2SQ2"
  };

  const PRODUCTION_CLOUDINARY_CONFIG = {
    cloudName: "kqlledef",
    apiKey: "814189471854661",
    uploadPreset: "ferpizz_fotos"
  };

  // CLAVES DE ALMACENAMIENTO LOCAL
  const KEYS = {
    SITE_CONFIG: 'ferpizz_site_config_v1',
    MENU: 'ferpizz_menu_v5',
    ADDITIONS: 'ferpizz_additions_v1',
    CLOUDINARY: 'ferpizz_cloudinary_cfg',
    FIREBASE: 'ferpizz_firebase_cfg',
    ADMIN_PASS: 'ferpizz_admin_pass_v1'
  };

  // ============================================================================
  // 2. VALORES OFICIALES POR DEFECTO DE TODA LA PÁGINA (TEXTOS E IMÁGENES)
  // ============================================================================
  const DEFAULT_SITE_CONFIG = {
    // Barra Superior y Encabezado
    ovenBadge: 'HORNO ENCENDIDO',
    cityTag: 'CARTAGENA DE INDIAS',
    slogan: '“UNA IDEA QUE NACIÓ PARA SERVIR”',
    brandTagline: 'Pizzeria Artigianale — Cartagena de Indias',
    logoUrl: 'logo.png',

    // Marquesina Superior (Separada por ✦)
    marqueeText: 'FER PIZZ ✦ “UNA IDEA QUE NACIÓ PARA SERVIR” ✦ CARTAGENA DE INDIAS ✦ RECETA TRADICIONAL DE LA CASA ✦ PEDIDOS AL (316) 244-6724 ✦ @FERPIZZ.CTG ✦ DEL HORNO A TU MESA',

    // Portada Principal (Hero)
    heroKicker: 'GACETA CULINARIA OFICIAL • AÑO 2026',
    heroTitle: 'EL ARTE DE LA PIZZA HECHA CON TIEMPO, PACIENCIA Y CORAZÓN.',
    heroBody: 'En Fer Pizz preparamos cada pizza con dedicación y esmero artesanal. Seleccionamos ingredientes frescos de primera calidad, generosa mozzarella hilada y horneamos a fuego vivo para conseguir ese borde crujiente y dorado que tanto le gusta a Cartagena.',
    heroImageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1200&auto=format&fit=crop',
    heroImageCaption: 'Receta Tradicional • Hornos de Fuego Vivo • Cartagena',

    // Sección de Tamaños y Porciones
    portionsTitle: 'ESCOGE EL TAMAÑO PERFECTO',
    portionsSub: 'Diagramas de corte tradicionales de nuestra cocina en Cartagena',
    descPersonal: 'Ideal para disfrutar de forma individual con el auténtico sabor tradicional.',
    descPizzeta: 'Perfecta para compartir entre dos o cuando el antojo es mayor.',
    descMediana: 'El formato predilecto de la casa para 3 o 4 comensales.',
    descFamiliar: 'Para reuniones familiares y amigos. Abundante y generosa.',

    // Sección de Salsa Adicional
    sauceName: 'Salsa Adicional (Tarrito)',
    saucePrice: 2000,
    sauceTitle: '¿Deseas Salsa Adicional?',
    sauceDesc: 'Añade tarritos de salsa de la casa para acompañar tu pizza por solo $2.000 COP cada uno.',

    // Nota de la Cocina (Chef)
    cooksGreeting: '¡Hola Amigos!',
    cooksQuote: 'Pizzas recién horneadas con el auténtico sabor tradicional de Cartagena, abundante queso mozzarella e ingredientes frescos seleccionados cada día. Vengan con hambre, váyanse felices.',
    cooksSign: '— Fer Pizz',
    cooksImageUrl: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1000&auto=format&fit=crop',
    cooksImageCaption: 'Receta tradicional • Horneada al punto en Cartagena',

    // Contacto, Horarios, Redes e Historia
    whatsappPhone: '573162446724',
    displayPhone: '(316) 244-6724',
    instagramHandle: '@Ferpizz.ctg',
    instagramUrl: 'https://instagram.com/Ferpizz.ctg',
    hoursLine1: 'Lunes a Jueves: 4:30 PM — 11:00 PM',
    hoursLine2: 'Viernes a Domingo & Festivos: 4:00 PM — 11:45 PM',
    coverageCity: 'Cartagena de Indias, Colombia.',
    coverageDesc: 'Despachos térmicos directos para que tu pizza llegue caliente y con el queso bien derretido.',
    flyerImageUrl: 'menu_original.png',
    flyerCaption: 'La receta que conquistó a Cartagena, ahora disponible con pedido digital interactivo.',

    // Control de Horario por Día y Hora
    storeStatusMode: 'auto', // 'auto' | 'force_open' | 'force_closed'
    closedMessage: 'No estamos atendiendo en este momento. Revisa nuestros horarios de atención para programar tu pedido.',
    weeklySchedule: {
      1: { name: 'Lunes', enabled: true, open: '16:30', close: '23:00' },
      2: { name: 'Martes', enabled: true, open: '16:30', close: '23:00' },
      3: { name: 'Miércoles', enabled: true, open: '16:30', close: '23:00' },
      4: { name: 'Jueves', enabled: true, open: '16:30', close: '23:00' },
      5: { name: 'Viernes', enabled: true, open: '16:00', close: '23:45' },
      6: { name: 'Sábado', enabled: true, open: '16:00', close: '23:45' },
      0: { name: 'Domingo', enabled: true, open: '16:00', close: '23:45' }
    }
  };

  // 3. CATÁLOGO OFICIAL DE PIZZAS POR DEFECTO
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
      featured: false,
      prices: { personal: 12000, pizzeta: 23000, mediana: 34000, familiar: 47000 }
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
      featured: false,
      prices: { personal: 14000, pizzeta: 25000, mediana: 36000, familiar: 49000 }
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
      featured: false,
      prices: { personal: 13000, pizzeta: 25000, mediana: 36000, familiar: 48000 }
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
      featured: false,
      prices: { personal: 15000, pizzeta: 26000, mediana: 37000, familiar: 50000 }
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
      featured: false,
      prices: { personal: 16000, pizzeta: 27000, mediana: 38000, familiar: 51000 }
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
      featured: false,
      prices: { personal: 15000, pizzeta: 26000, mediana: 37000, familiar: 49000 }
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
      prices: { personal: 17000, pizzeta: 29000, mediana: 40000, familiar: 52000 }
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
      featured: false,
      prices: { personal: 12000, pizzeta: 23000, mediana: 34000, familiar: 47000 }
    }
  ];

  // 4. COMPLEMENTOS Y ADICIONALES POR DEFECTO
  const DEFAULT_ADDITIONS = [
    {
      id: 'maiz',
      name: 'Maíz Tierno',
      desc: 'Granos de maíz dulce salteados',
      prices: { personal: 3000, pizzeta: 3000, mediana: 5000, familiar: 6000 }
    },
    {
      id: 'verdura',
      name: 'Verdura Fresca',
      desc: 'Pimentón y cebolla blanca en julianas',
      prices: { personal: 2000, pizzeta: 2000, mediana: 4000, familiar: 5000 }
    },
    {
      id: 'oregano',
      name: 'Orégano Extra',
      desc: 'Orégano aromático de campo molido',
      prices: { personal: 1000, pizzeta: 1000, mediana: 2000, familiar: 3000 }
    },
    {
      id: 'queso',
      name: 'Extra Queso Mozzarella',
      desc: 'Doble capa de mozzarella hilada fundida',
      prices: { personal: 3500, pizzeta: 4500, mediana: 6000, familiar: 7500 }
    },
    {
      id: 'tocineta',
      name: 'Tocineta Crujiente',
      desc: 'Tiras de tocineta ahumada bien doraditas',
      prices: { personal: 3500, pizzeta: 4500, mediana: 6000, familiar: 7500 }
    },
    {
      id: 'champinones',
      name: 'Champiñones Salteados',
      desc: 'Láminas de champiñones frescos salteados',
      prices: { personal: 3000, pizzeta: 3500, mediana: 5000, familiar: 6500 }
    }
  ];

  // ============================================================================
  // 5. MÉTODOS DE LECTURA Y ESCRITURA LOCAL + FIREBASE FIRESTORE
  // ============================================================================
  let firestoreDb = null;
  let firestoreUnsubscribe = null;

  function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
  }

  function getSiteConfig() {
    try {
      const raw = localStorage.getItem(KEYS.SITE_CONFIG);
      if (raw) {
        const parsed = JSON.parse(raw);
        return { ...clone(DEFAULT_SITE_CONFIG), ...parsed };
      }
    } catch (e) {}
    return clone(DEFAULT_SITE_CONFIG);
  }

  function saveSiteConfigLocal(cfg) {
    const merged = { ...clone(DEFAULT_SITE_CONFIG), ...cfg };
    try {
      localStorage.setItem(KEYS.SITE_CONFIG, JSON.stringify(merged));
    } catch (e) {}
    return merged;
  }

  function getMenu() {
    try {
      const raw = localStorage.getItem(KEYS.MENU);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {}
    return clone(DEFAULT_MENU);
  }

  function saveMenuLocal(menuArr) {
    try {
      localStorage.setItem(KEYS.MENU, JSON.stringify(menuArr));
    } catch (e) {}
    return menuArr;
  }

  function getAdditions() {
    try {
      const raw = localStorage.getItem(KEYS.ADDITIONS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) {
          return parsed;
        }
      }
    } catch (e) {}
    return clone(DEFAULT_ADDITIONS);
  }

  function saveAdditionsLocal(addArr) {
    try {
      localStorage.setItem(KEYS.ADDITIONS, JSON.stringify(addArr));
    } catch (e) {}
    return addArr;
  }

  function getCloudinaryConfig() {
    try {
      const raw = localStorage.getItem(KEYS.CLOUDINARY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && (parsed.cloudName || parsed.uploadPreset)) {
          return {
            cloudName: parsed.cloudName || PRODUCTION_CLOUDINARY_CONFIG.cloudName,
            uploadPreset: parsed.uploadPreset || PRODUCTION_CLOUDINARY_CONFIG.uploadPreset,
            apiKey: PRODUCTION_CLOUDINARY_CONFIG.apiKey
          };
        }
      }
    } catch (e) {}
    return { ...PRODUCTION_CLOUDINARY_CONFIG };
  }

  function saveCloudinaryConfig(cloudName, uploadPreset) {
    const cfg = {
      cloudName: (cloudName || '').trim(),
      uploadPreset: (uploadPreset || '').trim()
    };
    try {
      localStorage.setItem(KEYS.CLOUDINARY, JSON.stringify(cfg));
    } catch (e) {}
    return cfg;
  }

  function getFirebaseConfig() {
    if (PRODUCTION_FIREBASE_CONFIG && PRODUCTION_FIREBASE_CONFIG.projectId) {
      return PRODUCTION_FIREBASE_CONFIG;
    }
    try {
      const raw = localStorage.getItem(KEYS.FIREBASE);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (parsed && parsed.projectId) return parsed;
      }
    } catch (e) {}
    return null;
  }

  function saveFirebaseConfig(configObj) {
    try {
      if (!configObj) {
        localStorage.removeItem(KEYS.FIREBASE);
      } else {
        localStorage.setItem(KEYS.FIREBASE, JSON.stringify(configObj));
      }
    } catch (e) {}
  }

  // CARGA DINÁMICA DEL SDK DE FIREBASE (SOLO SI SE CONFIGURA LA BD)
  function loadScript(src) {
    return new Promise((resolve, reject) => {
      if (document.querySelector(`script[src="${src}"]`)) {
        resolve();
        return;
      }
      const s = document.createElement('script');
      s.src = src;
      s.onload = resolve;
      s.onerror = reject;
      document.head.appendChild(s);
    });
  }

  async function initFirestoreConnection(customConfig) {
    const cfg = customConfig || getFirebaseConfig();
    if (!cfg || !cfg.projectId || !cfg.apiKey) {
      return { ok: false, reason: 'Sin configuración de Firebase.' };
    }

    try {
      if (typeof window.firebase === 'undefined') {
        await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js');
        await loadScript('https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore-compat.js');
      }

      if (!window.firebase.apps.length) {
        window.firebase.initializeApp(cfg);
      }
      firestoreDb = window.firebase.firestore();
      return { ok: true, db: firestoreDb, projectId: cfg.projectId };
    } catch (err) {
      return { ok: false, reason: err.message || 'Error al inicializar Firebase.' };
    }
  }

  // PUBLICAR TODO EL ESTADO DE LA PÁGINA A FIRESTORE Y LOCALSTORAGE
  async function publishToDatabase(payload) {
    const siteConfig = payload.siteConfig || getSiteConfig();
    const menu = payload.menu || getMenu();
    const additions = payload.additions || getAdditions();

    // 1. Guardar siempre en localStorage
    saveSiteConfigLocal(siteConfig);
    saveMenuLocal(menu);
    saveAdditionsLocal(additions);

    // 2. Si hay conexión a Firebase Firestore, subir a la nube
    const cfg = getFirebaseConfig();
    if (!cfg) {
      return { ok: true, mode: 'local', message: 'Guardado en almacenamiento local (Sin BD en la nube vinculada).' };
    }

    const conn = await initFirestoreConnection(cfg);
    if (!conn.ok) {
      return { ok: false, mode: 'local', message: 'Guardado localmente. Error de red con Firestore: ' + conn.reason };
    }

    try {
      await conn.db.collection('ferpizz_cms').doc('site_data').set({
        siteConfig: siteConfig,
        menu: menu,
        additions: additions,
        updatedAt: new Date().toISOString()
      });
      return { ok: true, mode: 'cloud', message: 'Publicado en vivo en Firebase Firestore (' + cfg.projectId + ').' };
    } catch (err) {
      return { ok: false, mode: 'local', message: 'Guardado local. Error al escribir en Firestore: ' + (err.message || err) };
    }
  }

  // DESCARGAR O ESCUCHAR CAMBIOS EN TIEMPO REAL DESDE FIRESTORE
  async function subscribeToCloudChanges(onUpdateCallback) {
    const cfg = getFirebaseConfig();
    if (!cfg) return { connected: false };

    const conn = await initFirestoreConnection(cfg);
    if (!conn.ok) return { connected: false, error: conn.reason };

    try {
      if (firestoreUnsubscribe) firestoreUnsubscribe();

      firestoreUnsubscribe = conn.db
        .collection('ferpizz_cms')
        .doc('site_data')
        .onSnapshot(docSnap => {
          if (docSnap.exists) {
            const data = docSnap.data();
            if (data.siteConfig) saveSiteConfigLocal(data.siteConfig);
            if (Array.isArray(data.menu) && data.menu.length > 0) saveMenuLocal(data.menu);
            if (Array.isArray(data.additions)) saveAdditionsLocal(data.additions);

            if (typeof onUpdateCallback === 'function') {
              onUpdateCallback({
                siteConfig: getSiteConfig(),
                menu: getMenu(),
                additions: getAdditions(),
                updatedAt: data.updatedAt
              });
            }
          }
        }, err => {
          console.warn('Aviso de lectura Firestore:', err);
        });

      return { connected: true, projectId: cfg.projectId };
    } catch (err) {
      return { connected: false, error: err.message };
    }
  }

  // DESCARGA MANUAL ÚNICA DESDE LA NUBE
  async function fetchFromDatabaseOnce() {
    const cfg = getFirebaseConfig();
    if (!cfg) return { ok: false, message: 'No hay configuración de Firebase guardada.' };

    const conn = await initFirestoreConnection(cfg);
    if (!conn.ok) return { ok: false, message: conn.reason };

    try {
      const docSnap = await conn.db.collection('ferpizz_cms').doc('site_data').get();
      if (!docSnap.exists) {
        return { ok: false, message: 'El documento ferpizz_cms/site_data aún no existe en la nube. Usa "Publicar Todo" para inicializarlo.' };
      }
      const data = docSnap.data();
      if (data.siteConfig) saveSiteConfigLocal(data.siteConfig);
      if (Array.isArray(data.menu) && data.menu.length > 0) saveMenuLocal(data.menu);
      if (Array.isArray(data.additions)) saveAdditionsLocal(data.additions);

      return {
        ok: true,
        data: {
          siteConfig: getSiteConfig(),
          menu: getMenu(),
          additions: getAdditions(),
          updatedAt: data.updatedAt
        }
      };
    } catch (err) {
      return { ok: false, message: err.message || 'Error al consultar Firestore.' };
    }
  }

  // FORMATEAR HORA 24H ("16:30") A 12H ("4:30 PM")
  function formatTime12h(timeStr) {
    if (!timeStr || typeof timeStr !== 'string') return '';
    const parts = timeStr.split(':');
    if (parts.length < 2) return timeStr;
    let h = parseInt(parts[0], 10);
    const m = parts[1];
    if (isNaN(h)) return timeStr;
    const suffix = h >= 12 ? 'PM' : 'AM';
    h = h % 12;
    if (h === 0) h = 12;
    return `${h}:${m} ${suffix}`;
  }

  function parseMinutes(timeStr) {
    if (!timeStr || typeof timeStr !== 'string') return 0;
    const parts = timeStr.split(':');
    const h = parseInt(parts[0], 10) || 0;
    const m = parseInt(parts[1], 10) || 0;
    return h * 60 + m;
  }

  // EVALUAR SI LA PIZZERÍA ESTÁ ABIERTA O CERRADA SEGÚN DÍA Y HORA
  function evaluateStoreStatus(customCfg) {
    const cfg = customCfg || getSiteConfig();
    const mode = cfg.storeStatusMode || 'auto';
    const closedMsg = cfg.closedMessage || 'No estamos atendiendo en este momento. Consulta nuestros horarios de atención.';
    const schedule = cfg.weeklySchedule || DEFAULT_SITE_CONFIG.weeklySchedule;

    const now = new Date();
    const dayIdx = now.getDay(); // 0 = Domingo, 1 = Lunes, ..., 6 = Sábado
    const curMinutes = now.getHours() * 60 + now.getMinutes();
    const todayRule = schedule[dayIdx] || DEFAULT_SITE_CONFIG.weeklySchedule[dayIdx];

    if (mode === 'force_open') {
      return {
        isOpen: true,
        mode: 'force_open',
        badgeText: cfg.ovenBadge || 'HORNO ENCENDIDO',
        closedMessage: closedMsg,
        todayRule: todayRule,
        todayText: todayRule && todayRule.enabled
          ? `Horario de hoy (${todayRule.name}): ${formatTime12h(todayRule.open)} — ${formatTime12h(todayRule.close)}`
          : `Atención habilitada manualmente`
      };
    }

    if (mode === 'force_closed') {
      return {
        isOpen: false,
        mode: 'force_closed',
        badgeText: 'NO ESTAMOS ATENDIENDO',
        closedMessage: closedMsg,
        todayRule: todayRule,
        todayText: todayRule && todayRule.enabled
          ? `Horario habitual (${todayRule.name}): ${formatTime12h(todayRule.open)} — ${formatTime12h(todayRule.close)}`
          : `Cerrado por hoy (${todayRule ? todayRule.name : ''})`
      };
    }

    // Modo automático por día y hora
    if (!todayRule || !todayRule.enabled) {
      return {
        isOpen: false,
        mode: 'auto',
        badgeText: 'NO ESTAMOS ATENDIENDO',
        closedMessage: closedMsg,
        todayRule: todayRule,
        todayText: `Hoy (${todayRule ? todayRule.name : 'hoy'}) no tenemos servicio programado.`
      };
    }

    const openMin = parseMinutes(todayRule.open);
    const closeMin = parseMinutes(todayRule.close);
    let isNowOpen = false;

    if (closeMin >= openMin) {
      isNowOpen = curMinutes >= openMin && curMinutes <= closeMin;
    } else {
      // Cierre después de medianoche
      isNowOpen = curMinutes >= openMin || curMinutes <= closeMin;
    }

    return {
      isOpen: isNowOpen,
      mode: 'auto',
      badgeText: isNowOpen ? (cfg.ovenBadge || 'HORNO ENCENDIDO') : 'NO ESTAMOS ATENDIENDO',
      closedMessage: closedMsg,
      todayRule: todayRule,
      todayText: `Horario de hoy (${todayRule.name}): ${formatTime12h(todayRule.open)} — ${formatTime12h(todayRule.close)}`
    };
  }

  // EXPONER API GLOBAL
  window.FerPizzCMS = {
    KEYS,
    DEFAULT_SITE_CONFIG,
    DEFAULT_MENU,
    DEFAULT_ADDITIONS,
    getSiteConfig,
    saveSiteConfigLocal,
    getMenu,
    saveMenuLocal,
    getAdditions,
    saveAdditionsLocal,
    getCloudinaryConfig,
    saveCloudinaryConfig,
    getFirebaseConfig,
    saveFirebaseConfig,
    initFirestoreConnection,
    publishToDatabase,
    subscribeToCloudChanges,
    fetchFromDatabaseOnce,
    formatTime12h,
    evaluateStoreStatus
  };

})(window);

