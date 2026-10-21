/**
 * ========================================================
 * FER PIZZ — LÓGICA DEL PANEL ADMINISTRADOR COMPLETO (admin.html)
 * Administra Pizzas, Complementos, Salsas, Textos, Imágenes y Firestore
 * ========================================================
 */

(function () {
  'use strict';

  const CMS = window.FerPizzCMS;
  const SESSION_AUTH_KEY = 'ferpizz_cms_session_auth';
  const DEFAULT_PASS = 'ferpizz2026';

  function escAttr(val) {
    return String(val == null ? '' : val)
      .replace(/&/g, '&amp;')
      .replace(/"/g, '&quot;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  let state = {
    siteConfig: CMS.getSiteConfig(),
    menu: CMS.getMenu(),
    additions: CMS.getAdditions()
  };

  function initAdminApp() {
    setupLoginGate();
    setupSidebarNavigation();
    populateAllForms();
    setupSectionActions();
    setupImageUploadButtons();
    setupDatabaseAndBackupControls();
    checkCloudStatus();
    autoSyncWithCloudOnLoad();
  }

  async function autoSyncWithCloudOnLoad() {
    const cfg = CMS.getFirebaseConfig();
    if (!cfg || !cfg.projectId) return;

    const pullRes = await CMS.fetchFromDatabaseOnce();
    if (pullRes.ok) {
      populateAllForms();
    } else if (pullRes.message && pullRes.message.includes('aún no existe')) {
      // Si el documento ferpizz_cms/site_data está vacío en Firebase nuevo, subir el catálogo oficial de inmediato
      await CMS.publishToDatabase({
        siteConfig: state.siteConfig,
        menu: state.menu,
        additions: state.additions
      });
    }
  }

  // 1. CONTROL DE ACCESO (LOGIN)
  function setupLoginGate() {
    const loginScreen = document.getElementById('adminLoginScreen');
    const passIn = document.getElementById('cmsPasswordInput');
    const loginBtn = document.getElementById('cmsLoginSubmitBtn');
    const errEl = document.getElementById('cmsLoginError');
    const logoutBtn = document.getElementById('btnLogoutCms');

    if (sessionStorage.getItem(SESSION_AUTH_KEY) === 'true') {
      if (loginScreen) loginScreen.classList.add('hidden');
    }

    function attemptLogin() {
      const val = passIn ? passIn.value.trim() : '';
      if (val === DEFAULT_PASS || val === 'admin') {
        sessionStorage.setItem(SESSION_AUTH_KEY, 'true');
        if (loginScreen) loginScreen.classList.add('hidden');
        if (errEl) errEl.textContent = '';
        showToast('✓ Acceso concedido al Panel de Control Fer Pizz');
      } else {
        if (errEl) errEl.textContent = 'Clave incorrecta. Intenta nuevamente.';
      }
    }

    if (loginBtn) loginBtn.addEventListener('click', attemptLogin);
    if (passIn) {
      passIn.addEventListener('keypress', e => {
        if (e.key === 'Enter') attemptLogin();
      });
    }

    if (logoutBtn) {
      logoutBtn.addEventListener('click', () => {
        sessionStorage.removeItem(SESSION_AUTH_KEY);
        if (loginScreen) loginScreen.classList.remove('hidden');
        if (passIn) passIn.value = '';
      });
    }
  }

  // 2. NAVEGACIÓN LATERAL ENTRE LAS 6 SECCIONES
  function setupSidebarNavigation() {
    const navBtns = document.querySelectorAll('.cms-nav-btn');
    const panels = document.querySelectorAll('.cms-section-panel');

    navBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const targetId = this.dataset.section;
        navBtns.forEach(b => b.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));

        this.classList.add('active');
        const targetPanel = document.getElementById(targetId);
        if (targetPanel) targetPanel.classList.add('active');
      });
    });
  }

  // 3. POBLAR TODOS LOS FORMULARIOS CON EL ESTADO ACTUAL
  function populateAllForms() {
    state.siteConfig = CMS.getSiteConfig();
    state.menu = CMS.getMenu();
    state.additions = CMS.getAdditions();

    renderPizzasEditorList();
    renderAdditionsEditorTable();
    populateSiteConfigInputs();
    populateCloudAndCloudinaryInputs();
  }

  // 3A. RENDERIZAR TARJETAS EDITABLES DE PIZZAS
  function renderPizzasEditorList() {
    const container = document.getElementById('cmsPizzaListContainer');
    if (!container) return;
    container.innerHTML = '';

    state.menu.forEach((pizza, idx) => {
      const card = document.createElement('div');
      card.className = 'cms-pizza-edit-card';
      card.dataset.pizzaId = pizza.id;

      const numLabel = pizza.num || String(idx + 1).padStart(2, '0');
      const imgUrl = pizza.image || 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80';

      card.innerHTML = `
        <div class="cms-pizza-photo-col">
          <div class="cms-pizza-photo-frame">
            <img src="${imgUrl}" alt="${pizza.name}" id="pizza-prev-${pizza.id}" onerror="this.onerror=null;this.src='logo.png';">
          </div>
          <button type="button" class="btn-admin-mini btn-cloudinary-upload" data-pizza-id="${pizza.id}" style="width: 100%;">
            Subir Foto
          </button>
          <button type="button" class="btn-admin-mini btn-comp-delete btn-delete-pizza" data-pizza-id="${pizza.id}" style="width: 100%; margin-top: 4px;">
            Eliminar Pizza
          </button>
        </div>

        <div class="cms-pizza-fields-col">
          <div class="cms-grid-4" style="margin-bottom: 10px;">
            <div class="admin-form-group">
              <label class="form-label">N° y Nombre *</label>
              <input type="text" class="newspaper-input p-field-name" data-id="${pizza.id}" value="${escAttr(pizza.name)}" style="font-weight: 700;">
            </div>
            <div class="admin-form-group">
              <label class="form-label">Categoría</label>
              <select class="newspaper-input p-field-category" data-id="${pizza.id}">
                <option value="clasica" ${pizza.category === 'clasica' ? 'selected' : ''}>Clásicas</option>
                <option value="especial" ${pizza.category === 'especial' ? 'selected' : ''}>Especialidad</option>
                <option value="pollo" ${pizza.category === 'pollo' ? 'selected' : ''}>Con Pollo</option>
                <option value="tradicional" ${pizza.category === 'tradicional' ? 'selected' : ''}>Tradicionales</option>
              </select>
            </div>
            <div class="admin-form-group">
              <label class="form-label">Insignia / Etiqueta</label>
              <input type="text" class="newspaper-input p-field-badge" data-id="${pizza.id}" value="${escAttr(pizza.badge || '')}">
            </div>
            <div class="admin-form-group">
              <label class="form-label">Estado en Carta</label>
              <select class="newspaper-input p-field-available" data-id="${pizza.id}">
                <option value="true" ${pizza.available ? 'selected' : ''}>Disponible</option>
                <option value="false" ${!pizza.available ? 'selected' : ''}>Agotada</option>
              </select>
            </div>
          </div>

          <div class="admin-form-group" style="margin-bottom: 10px;">
            <label class="form-label">Descripción de Ingredientes</label>
            <input type="text" class="newspaper-input p-field-desc" data-id="${pizza.id}" value="${escAttr(pizza.desc || '')}">
          </div>

          <div class="cms-grid-4" style="margin-bottom: 10px;">
            <div class="admin-form-group">
              <label class="form-label">Personal (4p)</label>
              <input type="number" class="newspaper-input p-field-personal" data-id="${pizza.id}" value="${pizza.prices.personal}">
            </div>
            <div class="admin-form-group">
              <label class="form-label">Pizzeta (6p)</label>
              <input type="number" class="newspaper-input p-field-pizzeta" data-id="${pizza.id}" value="${pizza.prices.pizzeta}">
            </div>
            <div class="admin-form-group">
              <label class="form-label">Mediana (10p)</label>
              <input type="number" class="newspaper-input p-field-mediana" data-id="${pizza.id}" value="${pizza.prices.mediana}">
            </div>
            <div class="admin-form-group">
              <label class="form-label">Familiar (12p)</label>
              <input type="number" class="newspaper-input p-field-familiar" data-id="${pizza.id}" value="${pizza.prices.familiar}">
            </div>
          </div>

          <div class="admin-form-group" style="margin-bottom: 0;">
            <label class="form-label">Enlace URL de la Fotografía (${numLabel})</label>
            <input type="text" class="newspaper-input p-field-image" data-id="${pizza.id}" value="${escAttr(imgUrl)}">
          </div>
        </div>
      `;

      container.appendChild(card);
    });

    // Actualizar vista previa al editar URL manualmente
    container.querySelectorAll('.p-field-image').forEach(inp => {
      inp.addEventListener('input', function () {
        const id = this.dataset.id;
        const img = document.getElementById(`pizza-prev-${id}`);
        if (img && this.value.trim()) img.src = this.value.trim();
      });
    });

    // Subir foto con Cloudinary para una pizza específica
    container.querySelectorAll('.btn-cloudinary-upload[data-pizza-id]').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.dataset.pizzaId;
        openCloudinaryForCallback(url => {
          const urlInput = container.querySelector(`.p-field-image[data-id="${id}"]`);
          const previewImg = document.getElementById(`pizza-prev-${id}`);
          if (urlInput) urlInput.value = url;
          if (previewImg) previewImg.src = url;
          collectPizzasFromDOM();
          CMS.saveMenuLocal(state.menu);
          showToast('✓ Fotografía cargada. Presiona Publicar para guardar en la nube.');
        });
      });
    });

    // Eliminar pizza
    container.querySelectorAll('.btn-delete-pizza').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.dataset.pizzaId;
        const target = state.menu.find(p => p.id === id);
        if (!target) return;
        if (!confirm(`¿Deseas eliminar la pizza "${target.name}" del catálogo?`)) return;
        collectPizzasFromDOM();
        state.menu = state.menu.filter(p => p.id !== id);
        state.menu.forEach((p, index) => {
          p.num = String(index + 1).padStart(2, '0');
        });
        CMS.saveMenuLocal(state.menu);
        renderPizzasEditorList();
        showToast(`✓ Pizza "${target.name}" eliminada`);
      });
    });
  }

  function collectPizzasFromDOM() {
    const container = document.getElementById('cmsPizzaListContainer');
    if (!container) return;

    state.menu.forEach((pizza, idx) => {
      const nameIn = container.querySelector(`.p-field-name[data-id="${pizza.id}"]`);
      const catIn = container.querySelector(`.p-field-category[data-id="${pizza.id}"]`);
      const badgeIn = container.querySelector(`.p-field-badge[data-id="${pizza.id}"]`);
      const availIn = container.querySelector(`.p-field-available[data-id="${pizza.id}"]`);
      const descIn = container.querySelector(`.p-field-desc[data-id="${pizza.id}"]`);
      const perIn = container.querySelector(`.p-field-personal[data-id="${pizza.id}"]`);
      const pizIn = container.querySelector(`.p-field-pizzeta[data-id="${pizza.id}"]`);
      const medIn = container.querySelector(`.p-field-mediana[data-id="${pizza.id}"]`);
      const famIn = container.querySelector(`.p-field-familiar[data-id="${pizza.id}"]`);
      const imgIn = container.querySelector(`.p-field-image[data-id="${pizza.id}"]`);

      pizza.num = String(idx + 1).padStart(2, '0');
      if (nameIn && nameIn.value.trim()) pizza.name = nameIn.value.trim();
      if (catIn) pizza.category = catIn.value;
      if (badgeIn) pizza.badge = badgeIn.value.trim();
      if (availIn) pizza.available = availIn.value === 'true';
      if (descIn) pizza.desc = descIn.value.trim();
      if (perIn) pizza.prices.personal = parseInt(perIn.value, 10) || 0;
      if (pizIn) pizza.prices.pizzeta = parseInt(pizIn.value, 10) || 0;
      if (medIn) pizza.prices.mediana = parseInt(medIn.value, 10) || 0;
      if (famIn) pizza.prices.familiar = parseInt(famIn.value, 10) || 0;
      if (imgIn && imgIn.value.trim()) pizza.image = imgIn.value.trim();
    });
  }

  // 3B. RENDERIZAR TABLA DE ADICIONALES Y COMPLEMENTOS
  function renderAdditionsEditorTable() {
    const tbody = document.getElementById('cmsAdditionsTbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    state.additions.forEach(add => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>
          <input type="text" class="admin-table-input a-field-name" data-id="${add.id}" value="${escAttr(add.name)}" style="width: 150px; text-align: left; font-weight: 700;">
        </td>
        <td>
          <input type="text" class="admin-table-input a-field-desc" data-id="${add.id}" value="${escAttr(add.desc || '')}" style="width: 190px; text-align: left;">
        </td>
        <td><input type="number" class="admin-table-input a-field-personal" data-id="${add.id}" value="${add.prices.personal}"></td>
        <td><input type="number" class="admin-table-input a-field-pizzeta" data-id="${add.id}" value="${add.prices.pizzeta}"></td>
        <td><input type="number" class="admin-table-input a-field-mediana" data-id="${add.id}" value="${add.prices.mediana}"></td>
        <td><input type="number" class="admin-table-input a-field-familiar" data-id="${add.id}" value="${add.prices.familiar}"></td>
        <td style="text-align: center;">
          <button type="button" class="btn-admin-mini btn-comp-delete btn-delete-addition" data-id="${add.id}">Quitar</button>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.btn-delete-addition').forEach(btn => {
      btn.addEventListener('click', function () {
        const id = this.dataset.id;
        const target = state.additions.find(a => a.id === id);
        if (!target) return;
        if (!confirm(`¿Quitar el complemento "${target.name}"?`)) return;
        collectAdditionsFromDOM();
        state.additions = state.additions.filter(a => a.id !== id);
        CMS.saveAdditionsLocal(state.additions);
        renderAdditionsEditorTable();
        showToast(`✓ Complemento "${target.name}" eliminado`);
      });
    });
  }

  function collectAdditionsFromDOM() {
    const tbody = document.getElementById('cmsAdditionsTbody');
    if (!tbody) return;

    state.additions.forEach(add => {
      const nameIn = tbody.querySelector(`.a-field-name[data-id="${add.id}"]`);
      const descIn = tbody.querySelector(`.a-field-desc[data-id="${add.id}"]`);
      const perIn = tbody.querySelector(`.a-field-personal[data-id="${add.id}"]`);
      const pizIn = tbody.querySelector(`.a-field-pizzeta[data-id="${add.id}"]`);
      const medIn = tbody.querySelector(`.a-field-mediana[data-id="${add.id}"]`);
      const famIn = tbody.querySelector(`.a-field-familiar[data-id="${add.id}"]`);

      if (nameIn && nameIn.value.trim()) add.name = nameIn.value.trim();
      if (descIn) add.desc = descIn.value.trim();
      if (perIn) add.prices.personal = parseInt(perIn.value, 10) || 0;
      if (pizIn) add.prices.pizzeta = parseInt(pizIn.value, 10) || 0;
      if (medIn) add.prices.mediana = parseInt(medIn.value, 10) || 0;
      if (famIn) add.prices.familiar = parseInt(famIn.value, 10) || 0;
    });
  }

  // 3C. POBLAR Y RECOLECTAR TODOS LOS CAMPOS DE TEXTO E IMAGEN DE LA PÁGINA
  const SITE_FIELD_MAP = {
    cfgSauceName: 'sauceName',
    cfgSaucePrice: 'saucePrice',
    cfgSauceTitle: 'sauceTitle',
    cfgSauceDesc: 'sauceDesc',
    cfgOvenBadge: 'ovenBadge',
    cfgCityTag: 'cityTag',
    cfgSlogan: 'slogan',
    cfgBrandTagline: 'brandTagline',
    cfgMarqueeText: 'marqueeText',
    cfgLogoUrl: 'logoUrl',
    cfgHeroKicker: 'heroKicker',
    cfgHeroTitle: 'heroTitle',
    cfgHeroBody: 'heroBody',
    cfgHeroImageUrl: 'heroImageUrl',
    cfgHeroImageCaption: 'heroImageCaption',
    cfgPortionsTitle: 'portionsTitle',
    cfgPortionsSub: 'portionsSub',
    cfgDescPersonal: 'descPersonal',
    cfgDescPizzeta: 'descPizzeta',
    cfgDescMediana: 'descMediana',
    cfgDescFamiliar: 'descFamiliar',
    cfgCooksGreeting: 'cooksGreeting',
    cfgCooksSign: 'cooksSign',
    cfgCooksQuote: 'cooksQuote',
    cfgCooksImageUrl: 'cooksImageUrl',
    cfgCooksImageCaption: 'cooksImageCaption',
    cfgFlyerImageUrl: 'flyerImageUrl',
    cfgFlyerCaption: 'flyerCaption',
    cfgWhatsappPhone: 'whatsappPhone',
    cfgDisplayPhone: 'displayPhone',
    cfgInstagramHandle: 'instagramHandle',
    cfgInstagramUrl: 'instagramUrl',
    cfgCoverageCity: 'coverageCity',
    cfgCoverageDesc: 'coverageDesc',
    cfgStoreStatusMode: 'storeStatusMode',
    cfgClosedMessage: 'closedMessage'
  };

  const SCHEDULE_DAY_ORDER = [
    { key: '1', name: 'Lunes' },
    { key: '2', name: 'Martes' },
    { key: '3', name: 'Miércoles' },
    { key: '4', name: 'Jueves' },
    { key: '5', name: 'Viernes' },
    { key: '6', name: 'Sábado' },
    { key: '0', name: 'Domingo' }
  ];

  function populateSiteConfigInputs() {
    const cfg = state.siteConfig;
    Object.keys(SITE_FIELD_MAP).forEach(inputId => {
      const prop = SITE_FIELD_MAP[inputId];
      const el = document.getElementById(inputId);
      if (el && cfg[prop] !== undefined) {
        el.value = cfg[prop];
      }
    });

    // Actualizar miniaturas de imágenes de sección
    setPreviewSrc('previewLogoImg', cfg.logoUrl);
    setPreviewSrc('previewHeroImg', cfg.heroImageUrl);
    setPreviewSrc('previewCooksImg', cfg.cooksImageUrl);
    setPreviewSrc('previewFlyerImg', cfg.flyerImageUrl);

    renderWeeklyScheduleEditor();
    updateLiveStoreStatusPreview();

    const modeSelect = document.getElementById('cfgStoreStatusMode');
    if (modeSelect && !modeSelect.dataset.boundChange) {
      modeSelect.dataset.boundChange = 'true';
      modeSelect.addEventListener('change', () => {
        collectSiteConfigFromDOM();
        updateLiveStoreStatusPreview();
      });
    }
  }

  function renderWeeklyScheduleEditor() {
    const tbody = document.getElementById('cmsWeeklyScheduleTbody');
    if (!tbody) return;
    tbody.innerHTML = '';

    const schedule = state.siteConfig.weeklySchedule || CMS.DEFAULT_SITE_CONFIG.weeklySchedule;
    const todayKey = String(new Date().getDay());

    SCHEDULE_DAY_ORDER.forEach(dayObj => {
      const rule = schedule[dayObj.key] || { name: dayObj.name, enabled: true, open: '16:30', close: '23:00' };
      const isToday = dayObj.key === todayKey;

      const tr = document.createElement('tr');
      if (isToday) {
        tr.style.backgroundColor = 'rgba(252, 217, 104, 0.25)';
      }

      tr.innerHTML = `
        <td style="font-weight: 800; color: var(--ink-wine);">
          ${dayObj.name} ${isToday ? '<span style="font-size: 0.65rem; background: var(--ink-wine); color: var(--mustard-warm); padding: 2px 6px; margin-left: 6px; letter-spacing: 0.06em;">HOY</span>' : ''}
        </td>
        <td>
          <select class="admin-table-input sched-day-enabled" data-day="${dayObj.key}" style="width: 100%; font-weight: 700; text-align: left;">
            <option value="true" ${rule.enabled ? 'selected' : ''}>Abierto</option>
            <option value="false" ${!rule.enabled ? 'selected' : ''}>Cerrado (No atiende)</option>
          </select>
        </td>
        <td>
          <input type="time" class="admin-table-input sched-day-open" data-day="${dayObj.key}" value="${rule.open || '16:30'}" style="width: 100%;" ${!rule.enabled ? 'disabled' : ''}>
        </td>
        <td>
          <input type="time" class="admin-table-input sched-day-close" data-day="${dayObj.key}" value="${rule.close || '23:00'}" style="width: 100%;" ${!rule.enabled ? 'disabled' : ''}>
        </td>
      `;
      tbody.appendChild(tr);
    });

    tbody.querySelectorAll('.sched-day-enabled, .sched-day-open, .sched-day-close').forEach(el => {
      el.addEventListener('change', () => {
        const dayKey = el.dataset.day;
        if (el.classList.contains('sched-day-enabled')) {
          const isEnabled = el.value === 'true';
          const openIn = tbody.querySelector(`.sched-day-open[data-day="${dayKey}"]`);
          const closeIn = tbody.querySelector(`.sched-day-close[data-day="${dayKey}"]`);
          if (openIn) openIn.disabled = !isEnabled;
          if (closeIn) closeIn.disabled = !isEnabled;
        }
        collectSiteConfigFromDOM();
        updateLiveStoreStatusPreview();
      });
    });
  }

  function updateLiveStoreStatusPreview() {
    const badgeEl = document.getElementById('cmsLiveStoreStatusBadge');
    if (!badgeEl || typeof CMS.evaluateStoreStatus !== 'function') return;

    const status = CMS.evaluateStoreStatus(state.siteConfig);
    if (status.isOpen) {
      badgeEl.textContent = `ESTADO ACTUAL: ABIERTO (${status.badgeText}) • ${status.todayText}`;
      badgeEl.style.backgroundColor = '#1E5E3A';
      badgeEl.style.color = '#FFFFFF';
      badgeEl.style.borderColor = '#1E5E3A';
    } else {
      badgeEl.textContent = `ESTADO ACTUAL: CERRADO (NO ESTAMOS ATENDIENDO) • ${status.todayText}`;
      badgeEl.style.backgroundColor = '#BD2026';
      badgeEl.style.color = '#FCD968';
      badgeEl.style.borderColor = '#4A1417';
    }
  }

  function setPreviewSrc(imgId, url) {
    const img = document.getElementById(imgId);
    if (img && url) img.src = url;
  }

  function collectSiteConfigFromDOM() {
    Object.keys(SITE_FIELD_MAP).forEach(inputId => {
      const prop = SITE_FIELD_MAP[inputId];
      const el = document.getElementById(inputId);
      if (el) {
        if (prop === 'saucePrice') {
          state.siteConfig[prop] = parseInt(el.value, 10) || 2000;
        } else {
          state.siteConfig[prop] = el.value.trim();
        }
      }
    });

    const tbody = document.getElementById('cmsWeeklyScheduleTbody');
    if (tbody) {
      const updatedSchedule = {};
      SCHEDULE_DAY_ORDER.forEach(dayObj => {
        const enabledEl = tbody.querySelector(`.sched-day-enabled[data-day="${dayObj.key}"]`);
        const openEl = tbody.querySelector(`.sched-day-open[data-day="${dayObj.key}"]`);
        const closeEl = tbody.querySelector(`.sched-day-close[data-day="${dayObj.key}"]`);

        updatedSchedule[dayObj.key] = {
          name: dayObj.name,
          enabled: enabledEl ? enabledEl.value === 'true' : true,
          open: openEl && openEl.value ? openEl.value : '16:30',
          close: closeEl && closeEl.value ? closeEl.value : '23:00'
        };
      });
      state.siteConfig.weeklySchedule = updatedSchedule;
    }
  }

  // 4. ACCIONES DE GUARDADO, CREACIÓN Y PUBLICACIÓN
  function setupSectionActions() {
    // Publicar todo
    const publishBtns = [
      document.getElementById('btnPublishAllTop'),
      document.getElementById('btnSavePizzasSection'),
      document.getElementById('btnSaveAdditionsSection'),
      document.getElementById('btnSaveHeroSection'),
      document.getElementById('btnSaveChefSection'),
      document.getElementById('btnSaveContactSection')
    ];

    publishBtns.forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => publishAllChanges());
      }
    });

    // Crear nueva pizza
    const btnAddPizza = document.getElementById('btnAddNewPizzaFlavor');
    if (btnAddPizza) {
      btnAddPizza.addEventListener('click', () => {
        collectPizzasFromDOM();
        const nameIn = document.getElementById('newPizzaName');
        const catIn = document.getElementById('newPizzaCategory');
        const badgeIn = document.getElementById('newPizzaBadge');
        const descIn = document.getElementById('newPizzaDesc');
        const perIn = document.getElementById('newPizzaPersonal');
        const pizIn = document.getElementById('newPizzaPizzeta');
        const medIn = document.getElementById('newPizzaMediana');
        const famIn = document.getElementById('newPizzaFamiliar');

        const name = nameIn ? nameIn.value.trim() : '';
        if (!name) {
          alert('Ingresa el nombre del nuevo sabor de pizza.');
          if (nameIn) nameIn.focus();
          return;
        }

        const id = 'pizza_' + name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now().toString().slice(-4);
        const newPizza = {
          id: id,
          num: String(state.menu.length + 1).padStart(2, '0'),
          name: name,
          category: catIn ? catIn.value : 'tradicional',
          badge: badgeIn ? badgeIn.value.trim() : 'TRADICIONAL',
          desc: descIn ? descIn.value.trim() : 'Preparada al horno con queso mozzarella fresco y salsa artesanal.',
          image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=700&q=80',
          available: true,
          featured: false,
          prices: {
            personal: parseInt(perIn?.value, 10) || 14000,
            pizzeta: parseInt(pizIn?.value, 10) || 25000,
            mediana: parseInt(medIn?.value, 10) || 36000,
            familiar: parseInt(famIn?.value, 10) || 48000
          }
        };

        state.menu.push(newPizza);
        CMS.saveMenuLocal(state.menu);
        if (nameIn) nameIn.value = '';
        if (descIn) descIn.value = '';
        renderPizzasEditorList();
        showToast(`✓ Pizza "${name}" agregada al catálogo`);
      });
    }

    // Crear nuevo complemento
    const btnAddAddition = document.getElementById('btnCmsCreateAddition');
    if (btnAddAddition) {
      btnAddAddition.addEventListener('click', () => {
        collectAdditionsFromDOM();
        const nameIn = document.getElementById('cmsNewCompName');
        const descIn = document.getElementById('cmsNewCompDesc');
        const perIn = document.getElementById('cmsNewCompPersonal');
        const pizIn = document.getElementById('cmsNewCompPizzeta');
        const medIn = document.getElementById('cmsNewCompMediana');
        const famIn = document.getElementById('cmsNewCompFamiliar');

        const name = nameIn ? nameIn.value.trim() : '';
        if (!name) {
          alert('Ingresa el nombre del adicional.');
          if (nameIn) nameIn.focus();
          return;
        }

        const id = 'add_' + name.toLowerCase().replace(/[^a-z0-9]/g, '_') + '_' + Date.now().toString().slice(-4);
        state.additions.push({
          id: id,
          name: name,
          desc: descIn ? descIn.value.trim() : '',
          prices: {
            personal: parseInt(perIn?.value, 10) || 3000,
            pizzeta: parseInt(pizIn?.value, 10) || 3500,
            mediana: parseInt(medIn?.value, 10) || 5000,
            familiar: parseInt(famIn?.value, 10) || 6500
          }
        });

        CMS.saveAdditionsLocal(state.additions);
        if (nameIn) nameIn.value = '';
        if (descIn) descIn.value = '';
        renderAdditionsEditorTable();
        showToast(`✓ Complemento "${name}" creado`);
      });
    }

    // Restaurar Pizzas de Fábrica
    const btnResetPizzas = document.getElementById('btnResetPizzasFactory');
    if (btnResetPizzas) {
      btnResetPizzas.addEventListener('click', () => {
        if (!confirm('¿Restaurar las 8 pizzas y sus precios originales de fábrica?')) return;
        state.menu = JSON.parse(JSON.stringify(CMS.DEFAULT_MENU));
        CMS.saveMenuLocal(state.menu);
        renderPizzasEditorList();
        showToast('✓ Carta de pizzas restaurada de fábrica');
      });
    }

    // Restaurar Adicionales de Fábrica
    const btnResetAdds = document.getElementById('btnResetAdditionsFactory');
    if (btnResetAdds) {
      btnResetAdds.addEventListener('click', () => {
        if (!confirm('¿Restaurar los 6 complementos originales de fábrica?')) return;
        state.additions = JSON.parse(JSON.stringify(CMS.DEFAULT_ADDITIONS));
        CMS.saveAdditionsLocal(state.additions);
        renderAdditionsEditorTable();
        showToast('✓ Complementos restaurados de fábrica');
      });
    }
  }

  async function publishAllChanges() {
    collectPizzasFromDOM();
    collectAdditionsFromDOM();
    collectSiteConfigFromDOM();

    const topBtn = document.getElementById('btnPublishAllTop');
    const origText = topBtn ? topBtn.textContent : '';
    if (topBtn) topBtn.textContent = 'PUBLICANDO...';

    const res = await CMS.publishToDatabase({
      siteConfig: state.siteConfig,
      menu: state.menu,
      additions: state.additions
    });

    if (topBtn) topBtn.textContent = origText;

    if (res.mode === 'cloud' && res.ok) {
      showToast('✓ Publicado en vivo en Firebase Firestore y LocalStorage');
    } else if (res.ok) {
      showToast('✓ Cambios publicados y aplicados en el sitio');
    } else {
      showToast(res.message);
    }
    checkCloudStatus();
  }

  // 5. WIDGET DE CLOUDINARY PARA FOTOS GENERALES
  function setupImageUploadButtons() {
    // Sincronizar vistas previas al escribir URLs
    const mapPreview = [
      { input: 'cfgLogoUrl', preview: 'previewLogoImg' },
      { input: 'cfgHeroImageUrl', preview: 'previewHeroImg' },
      { input: 'cfgCooksImageUrl', preview: 'previewCooksImg' },
      { input: 'cfgFlyerImageUrl', preview: 'previewFlyerImg' }
    ];

    mapPreview.forEach(pair => {
      const inp = document.getElementById(pair.input);
      if (inp) {
        inp.addEventListener('input', () => setPreviewSrc(pair.preview, inp.value.trim()));
      }
    });

    document.querySelectorAll('.btn-cloudinary-upload[data-target-input]').forEach(btn => {
      btn.addEventListener('click', function () {
        const inputId = this.dataset.targetInput;
        const previewId = this.dataset.targetPreview;
        openCloudinaryForCallback(url => {
          const inp = document.getElementById(inputId);
          if (inp) inp.value = url;
          setPreviewSrc(previewId, url);
          collectSiteConfigFromDOM();
          CMS.saveSiteConfigLocal(state.siteConfig);
          showToast('✓ Imagen actualizada con éxito');
        });
      });
    });
  }

  function openCloudinaryForCallback(onSuccess) {
    const cfg = CMS.getCloudinaryConfig();
    if (!cfg.cloudName || !cfg.uploadPreset) {
      const go = confirm('Para subir imágenes desde tu dispositivo necesitas guardar tu Cloud Name y Upload Preset en la sección "6. Base de Datos y Fotos CDN".\n\n¿Deseas ir a esa sección ahora?');
      if (go) {
        const navBtn = document.querySelector('.cms-nav-btn[data-section="sec-database"]');
        if (navBtn) navBtn.click();
      }
      return;
    }

    if (typeof window.cloudinary === 'undefined') {
      alert('El widget de Cloudinary no se ha cargado. Verifica tu conexión a internet.');
      return;
    }

    const widget = window.cloudinary.createUploadWidget({
      cloudName: cfg.cloudName,
      uploadPreset: cfg.uploadPreset,
      sources: ['local', 'url', 'camera'],
      multiple: false,
      folder: 'ferpizz_cms',
      clientAllowedFormats: ['png', 'jpg', 'jpeg', 'webp'],
      maxImageFileSize: 10000000,
      theme: 'minimal'
    }, (error, result) => {
      if (!error && result && result.event === 'success') {
        if (typeof onSuccess === 'function') {
          onSuccess(result.info.secure_url);
        }
      }
    });

    widget.open();
  }

  // 6. CONFIGURACIÓN DE FIREBASE FIRESTORE, CLOUDINARY Y BACKUP JSON
  function populateCloudAndCloudinaryInputs() {
    const cloudCfg = CMS.getCloudinaryConfig();
    const cName = document.getElementById('cmsCloudinaryName');
    const cPreset = document.getElementById('cmsCloudinaryPreset');
    if (cName) cName.value = cloudCfg.cloudName || '';
    if (cPreset) cPreset.value = cloudCfg.uploadPreset || '';

    const fbCfg = CMS.getFirebaseConfig();
    const fbInput = document.getElementById('cmsFirebaseJsonInput');
    if (fbInput && fbCfg) {
      fbInput.value = JSON.stringify(fbCfg, null, 2);
    }
  }

  function setupDatabaseAndBackupControls() {
    const fbInput = document.getElementById('cmsFirebaseJsonInput');
    const fbFeedback = document.getElementById('cmsFirebaseFeedbackBox');
    const btnSaveFb = document.getElementById('btnSaveAndSyncFirebase');
    const btnPullFb = document.getElementById('btnPullFromFirebase');
    const btnClearFb = document.getElementById('btnClearFirebaseConfig');

    if (btnSaveFb) {
      btnSaveFb.addEventListener('click', async () => {
        const rawText = fbInput ? fbInput.value.trim() : '';
        if (!rawText) {
          alert('Pega primero el bloque JSON de firebaseConfig.');
          return;
        }

        let parsed = null;
        try {
          // Permitir pegar JSON puro o un bloque JS de firebaseConfig con claves sin comillas
          const braceMatch = rawText.match(/\{[\s\S]*\}/);
          const candidate = braceMatch ? braceMatch[0] : rawText;
          try {
            parsed = JSON.parse(candidate);
          } catch (_) {
            const normalized = candidate
              .replace(/\/\/.*$/gm, '')
              .replace(/,\s*([}\]])/g, '$1')
              .replace(/([{,]\s*)([a-zA-Z0-9_]+)\s*:/g, '$1"$2":')
              .replace(/:\s*'([^']*)'/g, ': "$1"');
            parsed = JSON.parse(normalized);
          }
        } catch (err) {
          alert('El formato del JSON no es válido. Asegúrate de copiar el bloque { ... } de firebaseConfig.');
          return;
        }

        if (!parsed.projectId || !parsed.apiKey) {
          alert('El objeto debe incluir al menos "apiKey" y "projectId".');
          return;
        }

        CMS.saveFirebaseConfig(parsed);
        if (fbFeedback) fbFeedback.textContent = 'Conectando y subiendo datos a Firestore...';

        collectPizzasFromDOM();
        collectAdditionsFromDOM();
        collectSiteConfigFromDOM();

        const res = await CMS.publishToDatabase({
          siteConfig: state.siteConfig,
          menu: state.menu,
          additions: state.additions
        });

        if (fbFeedback) fbFeedback.textContent = res.message;
        showToast(res.message);
        checkCloudStatus();
      });
    }

    if (btnPullFb) {
      btnPullFb.addEventListener('click', async () => {
        if (fbFeedback) fbFeedback.textContent = 'Descargando datos desde Firestore...';
        const res = await CMS.fetchFromDatabaseOnce();
        if (res.ok) {
          populateAllForms();
          if (fbFeedback) fbFeedback.textContent = '✓ Datos descargados y sincronizados desde Firestore.';
          showToast('✓ Sitio sincronizado desde la nube');
        } else {
          if (fbFeedback) fbFeedback.textContent = res.message;
          showToast(res.message);
        }
      });
    }

    if (btnClearFb) {
      btnClearFb.addEventListener('click', () => {
        if (!confirm('¿Desvincular la configuración local de Firebase Firestore?')) return;
        CMS.saveFirebaseConfig(null);
        if (fbInput) fbInput.value = '';
        if (fbFeedback) fbFeedback.textContent = 'Firebase desvinculado. Operando en modo LocalStorage.';
        checkCloudStatus();
        showToast('✓ Firebase desvinculado');
      });
    }

    // Cloudinary
    const btnSaveCloud = document.getElementById('btnSaveCmsCloudinary');
    const btnTestCloud = document.getElementById('btnTestCmsCloudinary');

    if (btnSaveCloud) {
      btnSaveCloud.addEventListener('click', () => {
        const cName = document.getElementById('cmsCloudinaryName')?.value || '';
        const cPreset = document.getElementById('cmsCloudinaryPreset')?.value || '';
        CMS.saveCloudinaryConfig(cName, cPreset);
        showToast('✓ Credenciales de Cloudinary guardadas');
      });
    }

    if (btnTestCloud) {
      btnTestCloud.addEventListener('click', () => {
        const cName = document.getElementById('cmsCloudinaryName')?.value || '';
        const cPreset = document.getElementById('cmsCloudinaryPreset')?.value || '';
        CMS.saveCloudinaryConfig(cName, cPreset);
        openCloudinaryForCallback(url => {
          alert('¡Subida de prueba exitosa!\nURL de la imagen en Cloudinary:\n' + url);
        });
      });
    }

    // Exportar JSON
    const btnExport = document.getElementById('btnExportBackupJson');
    if (btnExport) {
      btnExport.addEventListener('click', () => {
        collectPizzasFromDOM();
        collectAdditionsFromDOM();
        collectSiteConfigFromDOM();

        const backup = {
          exportedAt: new Date().toISOString(),
          siteConfig: state.siteConfig,
          menu: state.menu,
          additions: state.additions
        };

        const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ferpizz-respaldo-${new Date().toISOString().slice(0, 10)}.json`;
        a.click();
        URL.revokeObjectURL(url);
        showToast('✓ Copia de seguridad descargada');
      });
    }

    // Importar JSON
    const inputImport = document.getElementById('inputImportBackupJson');
    if (inputImport) {
      inputImport.addEventListener('change', function (e) {
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = async function (evt) {
          try {
            const parsed = JSON.parse(evt.target.result);
            if (parsed.siteConfig) CMS.saveSiteConfigLocal(parsed.siteConfig);
            if (Array.isArray(parsed.menu)) CMS.saveMenuLocal(parsed.menu);
            if (Array.isArray(parsed.additions)) CMS.saveAdditionsLocal(parsed.additions);
            populateAllForms();
            await publishAllChanges();
            showToast('✓ Copia de seguridad restaurada y publicada');
          } catch (err) {
            alert('El archivo seleccionado no es un respaldo JSON válido.');
          }
        };
        reader.readAsText(file);
      });
    }

    // Restaurar todo el sitio de fábrica
    const btnResetAll = document.getElementById('btnResetEntireSiteFactory');
    if (btnResetAll) {
      btnResetAll.addEventListener('click', async () => {
        if (!confirm('¿Estás seguro de restaurar TODOS los textos, imágenes, pizzas y complementos a los valores originales de fábrica?')) return;
        CMS.saveSiteConfigLocal(CMS.DEFAULT_SITE_CONFIG);
        CMS.saveMenuLocal(CMS.DEFAULT_MENU);
        CMS.saveAdditionsLocal(CMS.DEFAULT_ADDITIONS);
        populateAllForms();
        await publishAllChanges();
        showToast('✓ Sitio completo restaurado a valores de fábrica');
      });
    }
  }

  function checkCloudStatus() {
    const badge = document.getElementById('cmsDbStatusBadge');
    if (!badge) return;
    const cfg = CMS.getFirebaseConfig();
    if (cfg && cfg.projectId) {
      badge.textContent = `Firestore Activo: ${cfg.projectId}`;
      badge.classList.add('connected');
    } else {
      badge.textContent = 'Modo: LocalStorage (Listo para conectar BD)';
      badge.classList.remove('connected');
    }
  }

  function showToast(message) {
    const toast = document.getElementById('editorialToast');
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.__cmsToastTimer);
    window.__cmsToastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, 3400);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAdminApp);
  } else {
    initAdminApp();
  }

})();

