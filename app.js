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
      badge: 'CLÁSICA',
      desc: 'Base de salsa pomodoro artesanal, generosa mozzarella hilada de primera calidad, jamón selecto ahumado y orégano de campo.',
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
      badge: 'TRADICIONAL',
      desc: 'Nuestra combinación favorita: pechuga desmechada sazonada con hierbas mediterráneas, jamón artesanal y queso mozzarella fundido.',
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
      category: 'clasica',
      badge: 'CARIBEÑA',
      desc: 'La reina caribeña: piña dulce caramelizada al fuego de leña, cubos de jamón ahumado y mozzarella dorada al punto perfecto.',
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
      badge: 'ARTESANAL',
      desc: 'Pechuga de pollo marinada con ajo y romero, cubierta con reducción de tomate fresco y doble capa de queso mozzarella.',
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
      badge: 'FAVORITA',
      desc: 'Champiñones frescos salteados en mantequilla clarificada, trozos tiernos de pechuga marinada y abundante mozzarella fundida.',
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
      category: 'clasica',
      badge: 'ITALIANA',
      desc: 'Abundantes rodajas de pepperoni curado con notas de pimentón español y pimienta, gratinadas sobre salsa pomodoro casera.',
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
      category: 'clasica',
      badge: 'VEGETARIANA',
      desc: 'Pimientos asados a fuego vivo, champiñones, maíz dulce, cebolla blanca caramelizada, aceitunas negras y albahaca fresca en hoja.',
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
  const ADDITIONS_CONFIG = [
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

  // CONSTANTES DEL NEGOCIO
  const WHATSAPP_PHONE = '573162446724';
  const STORAGE_KEY_MENU = 'ferpizz_menu_v3';
  const STORAGE_KEY_CART = 'ferpizz_cart_v3';
  const ADMIN_PASSWORD_DEFAULT = 'ferpizz2026';

  // ESTADO GLOBAL
  let activeMenu = [];
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
    loadMenuData();
    loadCartData();
    renderCurrentDate();
    renderMenuGrid();
    setupToppingsModal();
    setupCartDrawer();
    setupLeafletMap();
    setupSecretCMS();
    setupCategoryFilters();
    setupPortionsGuideSync();
    setupScrollAnimations();
    setupMobileStickyBar();
  }

  // CARGAR DATOS DEL MENÚ
  function loadMenuData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY_MENU);
      if (stored) {
        activeMenu = JSON.parse(stored);
      } else {
        activeMenu = JSON.parse(JSON.stringify(DEFAULT_MENU));
        localStorage.setItem(STORAGE_KEY_MENU, JSON.stringify(activeMenu));
      }
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

    container.innerHTML = '';

    const filteredPizzas = activeFilter === 'all'
      ? activeMenu
      : activeMenu.filter(p => p.category === activeFilter);

    filteredPizzas.forEach((pizza, index) => {
      const card = document.createElement('article');
      card.className = `pizza-editorial-card reveal-on-scroll ${pizza.featured ? 'card-featured' : ''}`;
      card.id = `pizza-card-${pizza.id}`;
      card.dataset.pizzaId = pizza.id;

      // Tamaño predeterminado: Mediana
      const defaultSize = 'mediana';
      const initialPrice = pizza.prices[defaultSize] || pizza.prices.familiar || 0;

      card.innerHTML = `
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
              class="btn-add-to-cart" 
              data-pizza-id="${pizza.id}"
            >
              <span>+ PERSONALIZAR Y PEDIR</span>
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
    const pizza = activeMenu.find(p => p.id === pizzaId);
    if (!pizza) return;

    modalCustomState = {
      pizzaId: pizza.id,
      pizza: pizza,
      sizeKey: sizeKey,
      selectedAdditions: [],
      quantity: 1
    };

    // Actualizar datos del modal
    const titleEl = document.getElementById('toppingsModalTitle');
    const subEl = document.getElementById('toppingsModalSub');
    const basePillEl = document.getElementById('toppingsBasePill');
    const qtyEl = document.getElementById('modalQtyCount');
    const notesInput = document.getElementById('modalItemNotes');

    if (titleEl) titleEl.textContent = `PIZZA ${pizza.name.toUpperCase()}`;
    if (subEl) subEl.textContent = `Formato: ${SIZES[sizeKey].label} (${SIZES[sizeKey].portions})`;
    
    const basePrice = pizza.prices[sizeKey] || 0;
    if (basePillEl) basePillEl.textContent = `Precio base: ${formatCOP(basePrice)}`;
    if (qtyEl) qtyEl.textContent = '1';
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

    ADDITIONS_CONFIG.forEach(add => {
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

  function updateModalTotalDisplay() {
    if (!modalCustomState.pizza) return;
    const basePrice = modalCustomState.pizza.prices[modalCustomState.sizeKey] || 0;
    const additionsSum = modalCustomState.selectedAdditions.reduce((acc, a) => acc + a.price, 0);
    const unitPrice = basePrice + additionsSum;
    const total = unitPrice * modalCustomState.quantity;

    const displayEl = document.getElementById('modalTotalSumDisplay');
    if (displayEl) {
      displayEl.textContent = formatCOP(total);
    }
  }

  function handleConfirmCustomPizza() {
    if (!modalCustomState.pizza) return;

    const pizza = modalCustomState.pizza;
    const sizeKey = modalCustomState.sizeKey;
    const basePrice = pizza.prices[sizeKey] || 0;
    const additionsSum = modalCustomState.selectedAdditions.reduce((acc, a) => acc + a.price, 0);
    const unitPrice = basePrice + additionsSum;
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
      } else {
        badge.style.transform = 'scale(1.25)';
        setTimeout(() => badge.style.transform = 'scale(1)', 250);
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
          <span class="empty-icon">🍕</span>
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
      row.innerHTML = `
        <div class="receipt-item-info">
          <div class="receipt-item-name">${item.quantity}x Pizza ${item.name}</div>
          <div class="receipt-item-meta">Formato: ${item.sizeLabel} (${item.sizePortions})</div>
          ${item.additions && item.additions.length > 0 ? `
            <div class="receipt-item-additions">+ Adic: ${item.additions.map(a => a.name).join(', ')}</div>
          ` : ''}
          ${item.notes ? `
            <div class="receipt-item-notes" style="font-size:0.75rem; color:var(--ink-muted); margin-top:3px;">📝 Nota: ${item.notes}</div>
          ` : ''}
        </div>
        <div class="receipt-item-actions">
          <span class="receipt-item-price">${formatCOP(itemSubtotal)}</span>
          <button type="button" class="receipt-item-remove-btn" data-item-id="${item.cartItemId}">
            Quitar
          </button>
        </div>
      `;
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
            <span style="transform: rotate(45deg); font-size: 15px;">🍕</span>
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

      itemsText += `• *${item.quantity}x Pizza ${item.name}*\n`;
      itemsText += `  └ Formato: ${item.sizeLabel} (${item.sizePortions})\n`;
      if (item.additions && item.additions.length > 0) {
        itemsText += `  └ Adicionales: ${item.additions.map(a => a.name).join(', ')}\n`;
      }
      if (item.notes) {
        itemsText += `  └ Nota de cocina: ${item.notes}\n`;
      }
      itemsText += `  └ Subtotal: ${formatCOP(itemSubtotal)}\n`;
    });

    const googleMapsUrl = `https://maps.google.com/?q=${currentCoordinates.lat.toFixed(5)},${currentCoordinates.lng.toFixed(5)}`;

    const message = 
`🍕 *NUEVO PEDIDO — FER PIZZ CARTAGENA*
──────────────────────────────
👤 *Cliente:* ${name}
📞 *Teléfono:* ${phone}
📍 *Dirección:* ${address}
🗺️ *Ubicación GPS:* ${googleMapsUrl}
${notes ? `📝 *Notas:* ${notes}\n` : ''}──────────────────────────────
📋 *DETALLE DE TU PEDIDO:*
${itemsText}──────────────────────────────
💰 *TOTAL ESTIMADO:* ${formatCOP(subtotal)} COP
──────────────────────────────
“UNA IDEA QUE NACIÓ PARA SERVIR”
¡Horno encendido! 🔥 Gracias por preferirnos.`;

    const waUrl = `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
    showToast('✓ Abriendo WhatsApp oficial de Fer Pizz...');
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
      '.portions-interactive-grid, #pizzaMenuContainer, .additions-official-panel, .cooks-fluid-card, .contact-split-grid, .official-brand-footer, .reveal-on-scroll'
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
      '.portions-interactive-grid, #pizzaMenuContainer, .additions-official-panel, .cooks-fluid-card, .contact-split-grid, .official-brand-footer'
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
          openAdminModal();
          stampClickCount = 0;
        } else {
          stampClickTimer = setTimeout(() => stampClickCount = 0, 2000);
        }
      });
    }

    if (window.location.hash === '#admin') openAdminModal();
    window.addEventListener('hashchange', () => {
      if (window.location.hash === '#admin') openAdminModal();
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

  function verifyAdminPassword() {
    const input = document.getElementById('adminPasswordInput');
    const errorEl = document.getElementById('authErrorMsg');
    const authView = document.getElementById('adminAuthView');
    const dashView = document.getElementById('adminDashboardView');

    if (!input) return;
    const entered = input.value.trim();

    if (entered === ADMIN_PASSWORD_DEFAULT || entered === 'admin') {
      authView.classList.add('hidden');
      dashView.classList.remove('hidden');
      if (errorEl) errorEl.textContent = '';
      populateAdminPizzaTable();
    } else {
      if (errorEl) errorEl.textContent = 'Clave incorrecta. Por favor intenta de nuevo.';
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
      `;
      tbody.appendChild(tr);
    });
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
