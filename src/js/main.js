let currentProducts = [...products];
let currentSort = 'default';
let currentPageId = 'servisa-centrs';
let previousPageId = 'servisa-centrs';

class StateManager {
    constructor() {
        this.storageKey = 'servisa-centrs-state';
        this.init();
    }

    // Inicializē stāvokļa pārvaldnieku
    init() {
        if ('scrollRestoration' in history) {
            history.scrollRestoration = 'manual';
        }

        this.restoreState();
        
        window.addEventListener('beforeunload', () => this.saveFullState());
        window.addEventListener('pagehide', () => this.saveFullState());
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) this.saveFullState();
        });

        this.initScrollSaving();
        this.initNavigationTracking();
    }

    // Saglabā pilno lietotnes stāvokli
    saveFullState() {
        try {
            const state = {
                currentPage: currentPageId,
                previousPage: previousPageId,
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
            console.warn('Neizdevās saglabāt stāvokli:', e);
        }
    }

    // Atjauno saglabāto stāvokli no localStorage vai sessionStorage
    restoreState() {
        try {
            let saved = sessionStorage.getItem(this.storageKey) || localStorage.getItem(this.storageKey);
            
            if (saved) {
                const state = JSON.parse(saved);
                
                if (state.timestamp && (Date.now() - state.timestamp) < 3600000) {
                    currentPageId = state.currentPage || 'servisa-centrs';
                    previousPageId = state.previousPage || 'servisa-centrs';
                    currentProducts = state.products?.current || [...products];
                    currentSort = state.products?.sort || 'default';
                    
                    this.restoreFilters(state.filters);
                    this.restorePage(state.currentPage, state.scrollPosition);
                    
                    return true;
                }
            }
        } catch (e) {
            console.warn('Neizdevās atjaunot stāvokli:', e);
        }
        
        return false;
    }

    // Atjauno konkrētu lapu un ritināšanas pozīciju
    restorePage(pageId, scrollPosition) {
        if (pageId && (pageId !== 'servisa-centrs' || 
            pageId === 'remonts' || pageId === 'diagnostika' || pageId === 'apkalposana')) {
            setTimeout(() => {
                showPage(pageId, false);
                
                setTimeout(() => {
                    if (scrollPosition > 0) {
                        window.scrollTo({ top: scrollPosition, behavior: 'auto' });
                    }
                }, 100);
            }, 50);
        }
    }

    // Iegūst pašreizējos filtru iestatījumus
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

    // Atjauno filtrus no saglabātā stāvokļa
    restoreFilters(filters) {
        if (!filters) return;
        
        const searchInput = document.getElementById('searchInput');
        if (searchInput && filters.search) {
            searchInput.value = filters.search;
            setTimeout(() => filterProducts(filters.search), 100);
        }

        if (filters.category) {
            document.querySelectorAll('.filter-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.filter === filters.category);
            });
            setTimeout(() => filterProductsByCategory(filters.category), 100);
        }
        
        if (filters.sort) {
            document.querySelectorAll('.sort-btn').forEach(btn => {
                btn.classList.toggle('active', btn.dataset.sort === filters.sort);
            });
            setTimeout(() => sortProducts(filters.sort), 100);
        }
    }

    // Inicializē ritināšanas pozīcijas saglabāšanu
    initScrollSaving() {
        let scrollTimeout;
        let lastScrollPosition = 0;
        
        window.addEventListener('scroll', () => {
            const currentPosition = window.pageYOffset || document.documentElement.scrollTop;

            if (Math.abs(currentPosition - lastScrollPosition) > 50) {
                clearTimeout(scrollTimeout);
                scrollTimeout = setTimeout(() => {
                    this.saveFullState();
                    lastScrollPosition = currentPosition;
                }, 250);
            }
        }, { passive: true });
    }

    // Izseko navigāciju stāvokļa saglabāšanai
    initNavigationTracking() {
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href]');
            if (link) {
                this.saveFullState();
            }
        });

        document.addEventListener('click', (e) => {
            const button = e.target.closest('button');
            if (button && (button.onclick || button.getAttribute('onclick'))) {
                setTimeout(() => this.saveFullState(), 100);
            }
        });
    }

    // Ātra stāvokļa saglabāšana
    quickSave() {
        try {
            const state = {
                currentPage: currentPageId,
                previousPage: previousPageId,
                scrollPosition: window.pageYOffset || document.documentElement.scrollTop,
                timestamp: Date.now()
            };
            sessionStorage.setItem(this.storageKey + '-quick', JSON.stringify(state));
        } catch (e) {
            // Tukšs kļūdu apstrādes bloks
        }
    }
}

const stateManager = new StateManager();

// Atgriežas uz iepriekšējo lapu
function goBack() {
    if (previousPageId && previousPageId !== currentPageId) {
        showPage(previousPageId);
    } else {
        showPage('servisa-centrs');
    }
}

// Parsē cenu no virknes uz skaitli
function parsePrice(priceStr) {
    const cleanPrice = priceStr.replace(/\D/g, '');
    return parseFloat(cleanPrice) || 0;
}

// Attēlo produktu sarakstu
function renderProducts(productsArray = currentProducts) {
    const container = document.getElementById('cardsGrid');
    const noProductsMessage = document.getElementById('noProductsMessage');
    
    if (!container) return;

    if (productsArray.length === 0) {
        container.style.display = 'none';
        if (noProductsMessage) noProductsMessage.style.display = 'block';
        updateProductCount();
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

// Inicializē meklēšanas un filtrēšanas funkcionalitāti
function initSearchAndFilter() {
    const searchInput = document.getElementById('searchInput');
    const filterButtons = document.querySelectorAll('.filter-btn');
    const sortButtons = document.querySelectorAll('.sort-btn');
    
    if (searchInput) {
        const clearSearchBtn = document.querySelector('.clear-search-btn');
        
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.trim();
            
            if (clearSearchBtn) {
                clearSearchBtn.style.display = searchTerm ? 'block' : 'none';
            }
            
            console.log('Searching:', searchTerm);
            filterProducts(searchTerm);
            stateManager.saveFullState();
        });
        
        if (clearSearchBtn) {
            clearSearchBtn.addEventListener('click', () => {
                searchInput.value = '';
                filterProducts('');
                clearSearchBtn.style.display = 'none';
                stateManager.saveFullState();
            });
        }
        
        searchInput.addEventListener('change', (e) => {
            const searchTerm = e.target.value.trim();
            filterProducts(searchTerm);
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

// Filtrē produktus pēc meklēšanas vaicājuma
function filterProducts(searchTerm) {
    console.log('Filtering with search term:', searchTerm);
    
    if (!searchTerm || searchTerm === '') {
        currentProducts = [...products];
        console.log('Empty search, showing all products:', currentProducts.length);
    } else {
        const searchLower = searchTerm.toLowerCase().trim();
        console.log('Searching in lowercase:', searchLower);
        
        currentProducts = products.filter(product => {
            return product.title.toLowerCase().includes(searchLower) ||
                   product.description.toLowerCase().includes(searchLower);
        });
        console.log('Products after filtering:', currentProducts.length);
    }
    
    applyCurrentSort();
    renderProducts();
}

// Filtrē produktus pēc kategorijas
function filterProductsByCategory(category) {
    console.log('Filtering by category:', category);
    
    if (category === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => product.category === category);
    }
    
    console.log('Products after category filter:', currentProducts.length);
    applyCurrentSort();
    renderProducts();
}

// Kārto produktus pēc norādītā kritērija
function sortProducts(sortType) {
    console.log('Sorting by:', sortType);
    currentSort = sortType;
    
    const productsToSort = [...currentProducts];
    
    switch(sortType) {
        case 'az':
            productsToSort.sort((a, b) => a.title.localeCompare(b.title));
            break;
        case 'za':
            productsToSort.sort((a, b) => b.title.localeCompare(a.title));
            break;
        case 'price-low':
            productsToSort.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
            break;
        case 'price-high':
            productsToSort.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
            break;
        default:
            break;
    }
    
    currentProducts = productsToSort;
    renderProducts();
}

// Piemēro pašreizējo kārtošanas veidu
function applyCurrentSort() {
    if (currentSort !== 'default') {
        sortProducts(currentSort);
    }
}

// Atjaunina produktu skaitītāju
function updateProductCount() {
    const countElement = document.getElementById('productCount');
    if (countElement) {
        const count = currentProducts.length;
        const total = products.length;
        
        if (count === 0) {
            countElement.textContent = 'Atrastas 0 preces';
        } else if (count === 1) {
            countElement.textContent = 'Atrasta 1 prece';
        } else if (count === total) {
            countElement.textContent = `Atrastas ${count} preces`;
        } else {
            countElement.textContent = `Atrastas ${count} no ${total} precēm`;
        }
        
        console.log('Product count updated:', count, 'of', total);
    }
}

// Atiestata visus filtrus un kārtošanu
function resetFilters() {
    console.log('Resetting filters');
    
    currentProducts = [...products];
    currentSort = 'default';
    
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = '';
        console.log('Cleared search input');
    }
    
    const clearSearchBtn = document.querySelector('.clear-search-btn');
    if (clearSearchBtn) {
        clearSearchBtn.style.display = 'none';
    }
    
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

// Rāda norādīto lapu
function showPage(pageId, useLoading = true) {
    if (currentPageId !== pageId) {
        previousPageId = currentPageId;
    }
    
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

// Veic lapas pārslēgšanu
function performPageSwitch(pageId) {
    const allPages = document.querySelectorAll('.page-content');
    
    allPages.forEach(page => {
        page.classList.remove('active');
    });

    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
        currentPageId = pageId;
        
        if (pageId === 'karte') {
            setTimeout(() => {
                renderProducts();
                initSearchAndFilter();
                
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
                        console.warn('Nevarēja atjaunot ritināšanas pozīciju:', e);
                    }
                }, 200);
            }, 50);
        } else {
            setTimeout(() => {
                initScrollAnimations();
            }, 50);
        }
        
        setTimeout(() => stateManager.quickSave(), 100);
    }
    
    setTimeout(() => {
        initScrollToTop();
    }, 100);
}

// Rāda ielādes joslu
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

// Paslēpj ielādes joslu
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

// Inicializē animācijas ritināšanas laikā
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

// Pārslēž mobilo izvēlni
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');
    mobileMenu.classList.toggle('active');
    burger.classList.toggle('active');
    document.body.classList.toggle('no-scroll', mobileMenu.classList.contains('active'));
    stateManager.quickSave();
}

// Aizver mobilo izvēlni
function closeMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const burger = document.querySelector('.burger-menu');
    mobileMenu.classList.remove('active');
    burger.classList.remove('active');
    document.body.classList.remove('no-scroll');
    stateManager.quickSave();
}

// Ritina līdz norādītajai sadaļai
function scrollToSection(sectionId) {
    const scrollToElement = () => {
        const element = document.getElementById(sectionId);
        if (element) {
            const top = element.getBoundingClientRect().top + window.pageYOffset - 80;
            window.scrollTo({ top, behavior: 'smooth' });
        }
    };

    if (currentPageId === 'servisa-centrs') {
        scrollToElement();
    } else {
        showPage('servisa-centrs');
        setTimeout(() => {
            const checkElement = setInterval(() => {
                const element = document.getElementById(sectionId);
                if (element && element.offsetParent !== null) {
                    clearInterval(checkElement);
                    scrollToElement();
                }
            }, 50);
            
            setTimeout(() => clearInterval(checkElement), 1000);
        }, 400);
    }
}

// Ritina lapu uz augšu
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Pārslēž mobilo nolaižamo izvēlni
function toggleMobileDropdown(button) {
    const dropdown = button.parentElement;
    dropdown.classList.toggle('active');
    stateManager.quickSave();
}

// Atver attēla modālo logu
function openImageModal(imageSrc) {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    
    modalImage.src = imageSrc;
    modal.classList.add('active');
    document.body.classList.add('no-scroll');
}

// Aizver attēla modālo logu
function closeImageModal() {
    const modal = document.getElementById('imageModal');
    modal.classList.remove('active');
    document.body.classList.remove('no-scroll');
}

// Notikumu klausītāji modālajam logam
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('modal-backdrop')) {
        closeImageModal();
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeImageModal();
    }
});

// Tēmas pārvaldības funkcionalitāte
(function () {
    const storageKey = 'site-theme'; 
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    const themeLabel = document.getElementById('theme-label');

    // Piemēro izvēlēto tēmu
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

    // Iegūst sākotnējo tēmu
    function getInitialTheme() {
        const stored = localStorage.getItem(storageKey);
        if (stored === 'dark' || stored === 'light') return stored;
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        return prefersDark ? 'dark' : 'light';
    }

    // Pārslēž tēmu
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

    // Sistēmas tēmas izmaiņu klausītājs
    if (window.matchMedia) {
        const mql = window.matchMedia('(prefers-color-scheme: dark)');
        mql.addEventListener && mql.addEventListener('change', (e) => {
            if (!localStorage.getItem(storageKey)) {
                applyTheme(e.matches ? 'dark' : 'light');
            }
        });
    }
})();

// Inicializē ritināšanas uz augšu pogu
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTopBtn');
    if (!scrollBtn) return;

    function toggleScrollButton() {
        if (window.pageYOffset > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    }

    window.addEventListener('scroll', toggleScrollButton);
    
    scrollBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    toggleScrollButton();
}

// DOM ielādes inicializācija
document.addEventListener('DOMContentLoaded', function() {
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
    
    const burgerMenu = document.querySelector('.burger-menu');
    const closeMenu = document.querySelector('.close-menu');
    
    if (burgerMenu) burgerMenu.addEventListener('click', toggleMobileMenu);
    if (closeMenu) closeMenu.addEventListener('click', closeMobileMenu);
    
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') closeMobileMenu();
    });
    
    initScrollToTop();
    
    if (document.getElementById('karte').classList.contains('active')) {
        setTimeout(() => {
            renderProducts();
            initSearchAndFilter();
        }, 100);
    } else {
        initScrollAnimations();
    }
    
    if (document.getElementById('kontakti').classList.contains('active')) {
        setTimeout(() => {
            initContactForm();
        }, 100);
    }
    
    window.addEventListener('load', () => {
        setTimeout(() => stateManager.saveFullState(), 500);
    });
});

// Periodiska stāvokļa saglabāšana
setInterval(() => {
    stateManager.quickSave();
}, 30000);

// Inicializē kontaktu formu
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    if (!contactForm) return;

    contactForm.addEventListener('submit', handleFormSubmit);
    
    const inputs = contactForm.querySelectorAll('input, select, textarea');
    inputs.forEach(input => {
        input.addEventListener('blur', validateField);
        input.addEventListener('input', clearFieldError);
    });
}

// Apstrādā formas iesniegšanu
function handleFormSubmit(e) {
    e.preventDefault();
    const form = e.target;
    
    if (validateForm(form)) {
        submitForm(form);
    }
}

// Validē visu formu
function validateForm(form) {
    let isValid = true;
    const fields = form.querySelectorAll('input[required], select[required], textarea[required]');
    
    fields.forEach(field => {
        if (!validateField({ target: field })) {
            isValid = false;
        }
    });
    
    return isValid;
}

// Validē atsevišķu lauku
function validateField(e) {
    const field = e.target;
    const value = field.value.trim();
    const errorElement = document.getElementById(field.id + 'Error');
    
    field.classList.remove('error', 'success');
    if (errorElement) errorElement.classList.remove('show');
    
    if (field.hasAttribute('required') && !value) {
        showError(field, errorElement, 'Šis lauks ir obligāts');
        return false;
    }
    
    switch(field.type) {
        case 'email':
            if (!isValidEmail(value)) {
                showError(field, errorElement, 'Lūdzu ievadiet derīgu e-pasta adresi');
                return false;
            }
            break;
        case 'tel':
            if (value && !isValidPhone(value)) {
                showError(field, errorElement, 'Lūdzu ievadiet derīgu tālruņa numuru');
                return false;
            }
            break;
    }
    
    if (value) {
        field.classList.add('success');
    }
    
    return true;
}

// Notīra lauka kļūdas paziņojumu
function clearFieldError(e) {
    const field = e.target;
    const errorElement = document.getElementById(field.id + 'Error');
    
    field.classList.remove('error');
    if (errorElement) errorElement.classList.remove('show');
}

// Rāda kļūdas paziņojumu laukam
function showError(field, errorElement, message) {
    field.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('show');
    }
}

// Pārbauda e-pasta derīgumu
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Pārbauda telefona numura derīgumu
function isValidPhone(phone) {
    const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,4}[-\s.]?[0-9]{1,9}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

// Iesniedz formu
function submitForm(form) {
    const submitBtn = form.querySelector('.submit-btn');
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    const successMessage = document.getElementById('formSuccess');
    
    btnText.style.display = 'none';
    btnLoading.style.display = 'flex';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        btnText.style.display = 'block';
        btnLoading.style.display = 'none';
        submitBtn.disabled = false;
        
        successMessage.style.display = 'block';
        form.reset();
        
        const fields = form.querySelectorAll('input, select, textarea');
        fields.forEach(field => {
            field.classList.remove('success', 'error');
            const errorElement = document.getElementById(field.id + 'Error');
            if (errorElement) errorElement.classList.remove('show');
        });
        
        setTimeout(() => {
            successMessage.style.display = 'none';
        }, 5000);
        
    }, 2000);
}

// Pārraksta showPage funkciju kontaktu formas inicializācijai
const originalShowPage = showPage;
showPage = function(pageId, useLoading = true) {
    originalShowPage(pageId, useLoading);
    
    if (pageId === 'kontakti') {
        setTimeout(() => {
            initContactForm();
        }, 100);
    }
};

// Dodas uz mājas lapu
function goToHomePage() {
    if (currentPageId === 'servisa-centrs') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
        showPage('servisa-centrs');
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 400);
    }
}