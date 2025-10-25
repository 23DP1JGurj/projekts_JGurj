// ===== ОБНОВЛЕННЫЕ ДАННЫЕ ДЛЯ СЕРВИСНОГО ЦЕНТРА =====
const products = [
  // ===== ТЕЛЕФОНЫ (8 товаров) =====
  {
    id: 'iphone-15-pro',
    title: 'Apple iPhone 15 Pro',
    description: 'Flagship viedtālrunis ar titāna korpusu, A17 Pro čipu un uzlabotām kamerām. Ideāls produktivitātei un kreatīvam darbam.',
    price: '€1199',
    image: 'src/image/iphone15pro.png',
    badge: 'Jauns',
    category: 'telefoni'
  },
  {
    id: 'samsung-s24',
    title: 'Samsung Galaxy S24 Ultra',
    description: 'Vadošais Android viedtālrunis ar S-Pen, AI funkcijām un spožu displeju. Perfekts daudzuzdevumiem.',
    price: '€1099',
    image: 'src/image/samsungs24.png',
    badge: 'AI Powered',
    category: 'telefoni'
  },
  {
    id: 'google-pixel-8',
    title: 'Google Pixel 8 Pro',
    description: 'Tīrais Android pieredze ar uzlabotām Google AI kamerām. Labākais foto un video kvalitāte.',
    price: '€899',
    image: 'src/image/pixel8.png',
    badge: 'Google AI',
    category: 'telefoni'
  },
  {
    id: 'oneplus-12',
    title: 'OnePlus 12',
    description: 'Ātrākā uzlāde industrijā, gluds 120Hz displejs un jaudīgs Snapdragon processors.',
    price: '€799',
    image: 'src/image/oneplus12.png',
    badge: 'Fast Charge',
    category: 'telefoni'
  },
  {
    id: 'xiaomi-14',
    title: 'Xiaomi 14 Pro',
    description: 'Innovatīvs Leica kameras sistēma, ātrs uzlādes un ilga baterijas dzīve.',
    price: '€849',
    image: 'src/image/xiaomi14.png',
    badge: 'Leica',
    category: 'telefoni'
  },
  {
    id: 'iphone-14',
    title: 'Apple iPhone 14',
    description: 'Uzticams viedtālrunis ar izcilu veiktspēju, labu bateriju un iOS ekosistēmu.',
    price: '€799',
    image: 'src/image/iphone14.png',
    badge: 'Izmēģināts',
    category: 'telefoni'
  },
  {
    id: 'samsung-z-fold5',
    title: 'Samsung Z Fold 5',
    description: 'Saliekamais viedtālrunis ar lielu displeju, perfekts darbam un izklaidei.',
    price: '€1599',
    image: 'src/image/zfold5.png',
    badge: 'Foldable',
    category: 'telefoni'
  },
  {
    id: 'nothing-phone2',
    title: 'Nothing Phone (2)',
    description: 'Unikāls dizains ar gaismas interfeisu, tīrs operētājsistēma un laba veiktspēja.',
    price: '€649',
    image: 'src/image/nothing2.png',
    badge: 'Unique',
    category: 'telefoni'
  },

  // ===== PORTATĪVIE DATORI (6 товаров) =====
  {
    id: 'macbook-pro-16',
    title: 'MacBook Pro 16" M3 Max',
    description: 'Profesionāls portatīvais dators ar M3 Max čipu, lielisku ekrānu un ilgu baterijas dzīvi.',
    price: '€3499',
    image: 'src/image/macbook16.png',
    badge: 'Pro',
    category: 'portatīvie-datori'
  },
  {
    id: 'dell-xps-15',
    title: 'Dell XPS 15',
    description: 'Jaudīgs kreatīvais darbstacijas laptops ar 4K displeju un NVIDIA grafikas karti.',
    price: '€2199',
    image: 'src/image/dellxps15.png',
    badge: '4K Display',
    category: 'portatīvie-datori'
  },
  {
    id: 'lenovo-thinkpad',
    title: 'Lenovo ThinkPad X1',
    description: 'Uzņēmumu klases laptops ar izcilu taustiņu, MIL-STD testētu un garu baterijas dzīvi.',
    price: '€1899',
    image: 'src/image/thinkpad.png',
    badge: 'Business',
    category: 'portatīvie-datori'
  },
  {
    id: 'asus-rog-zephyrus',
    title: 'ASUS ROG Zephyrus',
    description: 'Geiminga laptops ar augstākās klases GPU, augstu atsvaidzināšanas frekvenci un RGB apgaismojumu.',
    price: '€2799',
    image: 'src/image/asusrog.png',
    badge: 'Gaming',
    category: 'portatīvie-datori'
  },
  {
    id: 'hp-spectre',
    title: 'HP Spectre x360',
    description: 'Premium 2-in-1 konvertējamais laptops ar OLED displeju un ilgu baterijas dzīvi.',
    price: '€1599',
    image: 'src/image/hpspectre.png',
    badge: 'Convertible',
    category: 'portatīvie-datori'
  },
  {
    id: 'macbook-air-15',
    title: 'MacBook Air 15" M2',
    description: 'Plānais un vieglais laptops ar lielu 15 collu ekrānu, M2 čipu un bezventilatora dizainu.',
    price: '€1499',
    image: 'src/image/macbookair15.png',
    badge: 'Ultra Thin',
    category: 'portatīvie-datori'
  },

  // ===== PROCESORI (6 товаров) =====
  {
    id: 'intel-i9-14900k',
    title: 'Intel Core i9-14900K',
    description: 'Desktop processors ar 24 kodoliem, līdz 6.0 GHz takts frekvenci un uzlabotu veiktspēju spēlēs.',
    price: '€649',
    image: 'src/image/i914900k.png',
    badge: 'Flagship',
    category: 'procesori'
  },
  {
    id: 'amd-ryzen-9-7950x',
    title: 'AMD Ryzen 9 7950X',
    description: '16-kodolu processors ar Zen 4 arhitektūru, augstu takts frekvenci un zemu enerģijas patēriņu.',
    price: '€699',
    image: 'src/image/ryzen7950x.png',
    badge: '16-Core',
    category: 'procesori'
  },
  {
    id: 'intel-i7-14700k',
    title: 'Intel Core i7-14700K',
    description: 'Jaudīgs processors 20 kodoliem, lielisks izvēle gan spēlēm, gan produktivitātes darbiem.',
    price: '€449',
    image: 'src/image/i714700k.png',
    badge: 'Performance',
    category: 'procesori'
  },
  {
    id: 'amd-ryzen-7-7800x3d',
    title: 'AMD Ryzen 7 7800X3D',
    description: 'Gaming processors ar 3D V-Cache tehnoloģiju, nodrošina izcilu veiktspēju spēlēs.',
    price: '€449',
    image: 'src/image/ryzen7800x3d.png',
    badge: '3D V-Cache',
    category: 'procesori'
  },
  {
    id: 'intel-i5-14600k',
    title: 'Intel Core i5-14600K',
    description: 'Lieliska cenas un veiktspējas attiecība, 14 kodoli, perfekts vidējas klases sistēmām.',
    price: '€329',
    image: 'src/image/i514600k.png',
    badge: 'Value',
    category: 'procesori'
  },
  {
    id: 'amd-ryzen-5-7600x',
    title: 'AMD Ryzen 5 7600X',
    description: '6-kodolu processors ar augstu takts frekvenci, ideāls budžeta gaming sistēmām.',
    price: '€299',
    image: 'src/image/ryzen7600x.png',
    badge: 'Budget King',
    category: 'procesori'
  },

  // ===== VIDEOKARTES (5 товаров) =====
  {
    id: 'nvidia-rtx-4090',
    title: 'NVIDIA RTX 4090',
    description: 'Jaudīgākā gaming videokarte pasaulē ar 24 GB GDDR6X atmiņu un DLSS 3 tehnoloģiju.',
    price: '€1799',
    image: 'src/image/rtx4090.png',
    badge: 'Ultimate',
    category: 'videokartes'
  },
  {
    id: 'amd-rx-7900xtx',
    title: 'AMD Radeon RX 7900 XTX',
    description: 'Augstākās klases AMD videokarte ar 24 GB GDDR6 atmiņu un uzlabotu ray tracing veiktspēju.',
    price: '€999',
    image: 'src/image/rx7900xtx.png',
    badge: 'AMD Flagship',
    category: 'videokartes'
  },
  {
    id: 'nvidia-rtx-4080',
    title: 'NVIDIA RTX 4080',
    description: 'Augstas veiktspējas videokarte ar 16 GB GDDR6X atmiņu, lielisks izvēle 4K gaming.',
    price: '€1199',
    image: 'src/image/rtx4080.png',
    badge: '4K Ready',
    category: 'videokartes'
  },
  {
    id: 'amd-rx-7800xt',
    title: 'AMD Radeon RX 7800 XT',
    description: 'Vidējas klases videokarte ar izcilu veiktspēju 1440p izšķirtspējā un labu vērtību.',
    price: '€549',
    image: 'src/image/rx7800xt.png',
    badge: '1440p King',
    category: 'videokartes'
  },
  {
    id: 'nvidia-rtx-4070',
    title: 'NVIDIA RTX 4070',
    description: 'Enerģijas efektīva videokarte ar DLSS 3 atbalstu, perfekta 1440p gaming un streaming.',
    price: '€649',
    image: 'src/image/rtx4070.png',
    badge: 'Efficient',
    category: 'videokartes'
  }
];


// ===== ГЛОБАЛЬНЫЕ ПЕРЕМЕННЫЕ =====
let currentProducts = [...products];
let currentSort = 'default';
let currentPageId = 'servisa-centrs';

// ===== УЛУЧШЕННАЯ СИСТЕМА СОХРАНЕНИЯ СОСТОЯНИЯ =====
class StateManager {
    constructor() {
        this.storageKey = 'servisa-centrs-state';
        this.init();
    }

    init() {
        // Отключаем автоматическое восстановление скролла браузера
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        // Восстанавливаем состояние при загрузке
        this.restoreState();
        
        // Сохраняем состояние при различных событиях
        window.addEventListener('beforeunload', () => this.saveFullState());
        window.addEventListener('pagehide', () => this.saveFullState());
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) this.saveFullState();
        });

        // Автосохранение скролла
        this.initScrollSaving();
        
        // Сохраняем состояние при навигации
        this.initNavigationTracking();
    }

    saveFullState() {
        try {
            const state = {
                currentPage: currentPageId,
                scrollPosition: window.pageYOffset || document.documentElement.scrollTop,
                products: {
                    current: currentProducts,
                    sort: currentSort
                },
                filters: this.getCurrentFilters(),
                timestamp: Date.now()
            };
            
            localStorage.setItem(this.storageKey, JSON.stringify(state));
            sessionStorage.setItem(this.storageKey, JSON.stringify(state));
        } catch (e) {
            console.warn('Не удалось сохранить состояние:', e);
        }
    }

    restoreState() {
        try {
            // Пробуем сначала sessionStorage (для текущей сессии), потом localStorage
            let saved = sessionStorage.getItem(this.storageKey) || localStorage.getItem(this.storageKey);
            
            if (saved) {
                const state = JSON.parse(saved);
                
                // Проверяем актуальность состояния (не старше 1 часа)
                if (state.timestamp && (Date.now() - state.timestamp) < 3600000) {
                    currentPageId = state.currentPage || 'servisa-centrs';
                    currentProducts = state.products?.current || [...products];
                    currentSort = state.products?.sort || 'default';
                    
                    // Восстанавливаем фильтры
                    this.restoreFilters(state.filters);
                    
                    // Восстанавливаем страницу
                    this.restorePage(state.currentPage, state.scrollPosition);
                    
                    return true;
                }
            }
        } catch (e) {
            console.warn('Не удалось восстановить состояние:', e);
        }
        
        return false;
    }

    restorePage(pageId, scrollPosition) {
        if (pageId && pageId !== 'servisa-centrs') {
            // Показываем страницу без анимации загрузки
            setTimeout(() => {
                showPage(pageId, false);
                
                // Восстанавливаем скролл после отрисовки страницы
                setTimeout(() => {
                    if (scrollPosition > 0) {
                        window.scrollTo({ top: scrollPosition, behavior: 'auto' });
                    }
                }, 100);
            }, 50);
        }
    }

    getCurrentFilters() {
        const searchInput = document.getElementById('searchInput');
        const activeFilter = document.querySelector('.filter-btn.active');
        const activeSort = document.querySelector('.sort-btn.active');
        
        return {
            search: searchInput?.value || '',
            category: activeFilter?.dataset.filter || 'all',
            sort: activeSort?.dataset.sort || 'default'
        };
    }

    restoreFilters(filters) {
        if (!filters) return;
        
        // Восстанавливаем поиск
        const searchInput = document.getElementById('searchInput');
        if (searchInput && filters.search) {
            searchInput.value = filters.search;
        }
        
        // Восстанавливаем фильтры и сортировку
        if (filters.category) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === filters.category);
            });
        }
        
        if (filters.sort) {
            document.querySelectorAll('.sort-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.sort === filters.sort);
            });
        }
    }

    initScrollSaving() {
        let scrollTimeout;
        let lastScrollPosition = 0;
        
        window.addEventListener('scroll', () => {
            const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
            
            // Сохраняем только если скролл изменился значительно
            if (Math.abs(currentPosition - lastScrollPosition) > 50) {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    this.saveFullState();
                    lastScrollPosition = currentPosition;
                }, 250);
            }
        }, { passive: true });
    }

    initNavigationTracking() {
        // Перехватываем клики по ссылкам
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (link) {
                this.saveFullState();
            }
        });

        // Перехватываем клики по кнопкам
        document.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (button && (button.onclick || button.getAttribute('onclick'))) {
                setTimeout(() => this.saveFullState(), 100);
            }
        });
    }

    // Быстрое сохранение только основных данных
    quickSave() {
        try {
            const state = {
                currentPage: currentPageId,
                scrollPosition: window.pageYOffset || document.documentElement.scrollTop,
                timestamp: Date.now()
            };
            sessionStorage.setItem(this.storageKey + '-quick', JSON.stringify(state));
        } catch (e) {
            // Игнорируем ошибки быстрого сохранения
        }
    }
}

// Инициализация менеджера состояния
const stateManager = new StateManager();

// ===== ОСНОВНЫЕ ФУНКЦИИ =====
function parsePrice(priceStr) {
    const cleanPrice = priceStr.replace(/\D/g, '');
    return parseFloat(cleanPrice) || 0;
}

function renderProducts(productsArray = currentProducts) {
    const container = document.getElementById('cardsGrid');
    const noProductsMessage = document.getElementById('noProductsMessage');
    
    if (!container) return;

    if (productsArray.length === 0) {
        container.style.display = 'none';
        if (noProductsMessage) noProductsMessage.style.display = 'block';
        return;
    }

    container.style.display = 'grid';
    if (noProductsMessage) noProductsMessage.style.display = 'none';

    container.innerHTML = productsArray.map(product => `
        <article class="product-card" tabindex="0" data-category="${product.category}">
            <figure class="card-img">
                <img src="${product.image}" alt="${product.title} attēls" 
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDMwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMjAwIiBmaWxsPSIjRjNGNEY2Ii8+CjxwYXRoIGQ9Ik0xMjUgODBDMTI1IDczLjAwMDEgMTMxIDY3LjAwMDEgMTM3LjUgNjcuMDAwMUMxNDQgNjcuMDAwMSAxNTAgNzMuMDAwMSAxNTAgODBDMTUwIDg3IDE0NCA5MyAxMzcuNSA5M0MxMzEgOTMgMTI1IDg3IDEyNSA4MFoiIGZpbGw9IiNEN0Q4REIiLz4KPHBhdGggZD0iTTEwNSAxMjBDMTA1IDExMyAxMTEgMTA3IDExNy41IDEwN0MxMjQgMTA3IDEzMCAxMTMgMTMwIDEyMEMxMzAgMTI3IDEyNCAxMzMgMTE3LjUgMTMzQzExMSAxMzMgMTA1IDEyNyAxMDUgMTIwWiIgZmlsbD0iI0Q3RDhEQiIvPgo8cGF0aCBkPSJNMTY1IDEyMEMxNjUgMTEzIDE3MSAxMDcgMTc3LjUgMTA3QzE4NCAxMDcgMTkwIDExMyAxOTAgMTIwQzE5MCAxMjcgMTg0IDEzMyAxNzcuNSAxMzNDMTcxIDEzMyAxNjUgMTI3IDE2NSAxMjBaIiBmaWxsPSIjRDdEOERCIi8+Cjwvc3ZnPgo='">
            </figure>
            <div class="card-body">
                <h3>${product.title}</h3>
                <p class="desc">${product.description}</p>
            </div>
            <div class="card-meta">
                <div class="price">${product.price}</div>
                <button class="btn" aria-label="Skatīt detaļas par ${product.title}" 
                        onclick="showPage('${product.id}')">
                    Skatīt
                </button>
            </div>
        </article>
    `).join('');

    updateProductCount();
    initScrollAnimations();
    stateManager.quickSave();
}

// ===== ФИЛЬТРАЦИЯ И ПОИСК =====
function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');
    
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            filterProducts(searchTerm);
            stateManager.saveFullState();
        });
    }

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const filter = btn.dataset.filter;
            filterProductsByCategory(filter);
            stateManager.saveFullState();
        });
    });

    sortButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const sortType = btn.dataset.sort;
            sortProducts(sortType);
            
            sortButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            stateManager.saveFullState();
        });
    });
}

function filterProducts(searchTerm) {
    if (!searchTerm) {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => 
            product.title.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm) ||
            product.category.toLowerCase().includes(searchTerm)
        );
    }
    
    applyCurrentSort();
    renderProducts();
}

function filterProductsByCategory(category) {
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    applyCurrentSort();
    renderProducts();
}

function sortProducts(sortType) {
    currentSort = sortType;
    
    switch(sortType) {
        case 'az':
            currentProducts.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'za':
            currentProducts.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'price-low':
            currentProducts.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            break;
        case 'price-high':
            currentProducts.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            break;
        default:
            currentProducts = [...products];
    }
    
    renderProducts();
}

function applyCurrentSort() {
    if (currentSort !== 'default') {
        sortProducts(currentSort);
    }
}

function updateProductCount() {
    const countElement = document.getElementById('productCount');
    if (countElement) {
        const count = currentProducts.length;
        let text = `Atrasti ${count} prece`;
        if (count !== 1) {
            text += 's';
        }
        countElement.textContent = text;
    }
}

function resetFilters() {
    currentProducts = [...products];
    currentSort = 'default';
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.filter === 'all') btn.classList.add('active');
    });
    
    document.querySelectorAll('.sort-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.sort === 'default') btn.classList.add('active');
    });
    
    renderProducts();
    stateManager.saveFullState();
}

// ===== СИСТЕМА СТРАНИЦ =====
function showPage(pageId, useLoading = true) {
    // Сохраняем текущее состояние перед переходом
    stateManager.saveFullState();
    currentPageId = pageId;
    
    if (useLoading) {
        showLoadingBar();
        setTimeout(() => {
            performPageSwitch(pageId);
            hideLoadingBar();
        }, 300);
    } else {
        performPageSwitch(pageId);
    }
}

function performPageSwitch(pageId) {
    const allPages = document.querySelectorAll('.page-content');
    
    // Скрываем все страницы
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        // Показываем целевую страницу
        targetPage.classList.add('active');
        currentPageId = pageId;
        
        // Специфичная инициализация для каждой страницы
        if (pageId === 'karte') {
            setTimeout(() => {
                renderProducts();
                initSearchAndFilter();
                
                // Восстанавливаем скролл после полной загрузки
                setTimeout(() => {
                    try {
                        const quickState = sessionStorage.getItem(stateManager.storageKey + '-quick');
                        if (quickState) {
                            const state = JSON.parse(quickState);
                            if (state.scrollPosition > 0) {
                                window.scrollTo({ top: state.scrollPosition, behavior: 'auto' });
                            }
                        }
                    } catch (e) {
                        // Игнорируем ошибки восстановления скролла
                    }
                }, 200);
            }, 50);
        } else {
            // Для других страниц просто инициализируем анимации
            setTimeout(() => {
                initScrollAnimations();
            }, 50);
        }
        
        // Быстрое сохранение после переключения страницы
        setTimeout(() => stateManager.quickSave(), 100);
    }
}

function showLoadingBar() {
    let loadingBar = document.getElementById('loadingBar');
    if (!loadingBar) {
        loadingBar = document.createElement('div');
        loadingBar.id = 'loadingBar';
        loadingBar.className = 'loading-bar';
        document.body.appendChild(loadingBar);
    }
    loadingBar.style.width = '0%';
    
    setTimeout(() => {
        loadingBar.style.width = '70%';
    }, 10);
    
    setTimeout(() => {
        loadingBar.style.width = '100%';
    }, 200);
}

function hideLoadingBar() {
    const loadingBar = document.getElementById('loadingBar');
    if (loadingBar) {
        setTimeout(() => {
            loadingBar.style.width = '0%';
            setTimeout(() => {
                if (loadingBar.parentNode) {
                    loadingBar.parentNode.removeChild(loadingBar);
                }
            }, 300);
        }, 100);
    }
}

// ===== АНИМАЦИИ =====
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.05,
        rootMargin: '0px 0px -10px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, 100);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.scroll-animate:not(.animate-in)').forEach(el => {
        observer.observe(el);
    });
}

// ===== НАВИГАЦИЯ И МЕНЮ =====
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('no-scroll', mobileMenu.classList.contains('active'));
    stateManager.quickSave();
}

function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');
    mobileMenu.classList.remove('active');
    burger.classList.remove('active');
    document.body.classList.remove('no-scroll');
    stateManager.quickSave();
}

function scrollToSection(sectionId) {
    const scrollToElement = () => {
        const element = document.getElementById(sectionId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    if (document.getElementById('servisa-centrs').classList.contains('active')) {
        scrollToElement();
    } else {
        showPage('servisa-centrs', scrollToElement);
    }
}

function scrollToTop() {
    showPage('servisa-centrs', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

function toggleMobileDropdown(button) {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('active');
    stateManager.quickSave();
}

// ===== ТЕМНАЯ ТЕМА =====
(function () {
    const storageKey = 'site-theme'; 
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');

    function applyTheme(theme) {
        if (theme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            themeToggle.setAttribute('aria-pressed', 'true');
            themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />';
            themeLabel.textContent = 'Gaiša';
        } else {
            document.documentElement.removeAttribute('data-theme');
            themeToggle.setAttribute('aria-pressed', 'false');
            themeIcon.innerHTML = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />';
            themeLabel.textContent = 'Tumšā';
        }
    }

    function getInitialTheme() {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'dark' || stored === 'light') return stored;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }

    function toggleTheme() {
        const current = document.documentElement.getAttribute('data-theme') === 'dark' ? 'dark' : 'light';
        const next = current === 'dark' ? 'light' : 'dark';
        applyTheme(next);
        localStorage.setItem(storageKey, next);
        stateManager.quickSave();
    }

    applyTheme(getInitialTheme());

    themeToggle.addEventListener('click', function () {
        toggleTheme();
    });

    if (window.matchMedia) {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        mql.addEventListener && mql.addEventListener('change', (e) => {
            if (!localStorage.getItem(storageKey)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();

// ===== ИНИЦИАЛИЗАЦИЯ =====
document.addEventListener('DOMContentLoaded', function() {
    // Инициализация dropdown меню
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        dropbtn.addEventListener('click', function(e) {
            e.stopPropagation();
            dropdowns.forEach(d => {
                if (d !== dropdown) d.classList.remove('active');
            });
            dropdown.classList.toggle('active');
            stateManager.quickSave();
        });
    });
    
    document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => dropdown.classList.remove('active'));
    });
    
    // Мобильное меню
    const burgerMenu = document.querySelector('.burger-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    if (burgerMenu) burgerMenu.addEventListener('click', toggleMobileMenu);
    if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMobileMenu();
    });
    
    // Инициализируем страницу товаров если она активна
    if (document.getElementById('karte').classList.contains('active')) {
        setTimeout(() => {
            renderProducts();
            initSearchAndFilter();
        }, 100);
    } else {
        // Инициализируем анимации для главной страницы
        initScrollAnimations();
    }
    
    // Финальное сохранение состояния после полной загрузки
    window.addEventListener('load', () => {
        setTimeout(() => stateManager.saveFullState(), 500);
    });
});

// ===== РЕЗЕРВНОЕ СОХРАНЕНИЕ =====
// Дополнительное сохранение каждые 30 секунд на случай сбоев
setInterval(() => {
    stateManager.quickSave();
}, 30000);