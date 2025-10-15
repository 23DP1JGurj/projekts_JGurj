function showPage(pageId, callback) {
    const loadingBar = document.createElement('div');
    loadingBar.className = 'loading-bar';
    document.body.appendChild(loadingBar);

    setTimeout(() => {
      loadingBar.style.width = '100%';

      setTimeout(() => {
        document.querySelectorAll('.page-content').forEach(page => {
          page.classList.remove('active');
        });

        const target = document.getElementById(pageId);
        if (target) {
          target.classList.add('active');
        }

        if (document.body.contains(loadingBar)) {
          document.body.removeChild(loadingBar);
        }

        initScrollAnimations();
        if (typeof callback === 'function') {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              callback();
            });
          });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 300);
    }, 10);
  }


    function toggleMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const burger = document.querySelector('.burger-menu');
      mobileMenu.classList.toggle('active');
      burger.classList.toggle('active');
      document.body.classList.toggle('no-scroll', mobileMenu.classList.contains('active'));
    }

    function closeMobileMenu() {
      const mobileMenu = document.getElementById('mobileMenu');
      const burger = document.querySelector('.burger-menu');
      mobileMenu.classList.remove('active');
      burger.classList.remove('active');
      document.body.classList.remove('no-scroll');
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
    }

    document.addEventListener('DOMContentLoaded', function() {
      const dropdowns = document.querySelectorAll('.dropdown');
      
      dropdowns.forEach(dropdown => {
        const dropbtn = dropdown.querySelector('.dropbtn');
        
        dropbtn.addEventListener('click', function(e) {
          e.stopPropagation();
          dropdowns.forEach(d => {
            if (d !== dropdown) {
              d.classList.remove('active');
            }
          });
          dropdown.classList.toggle('active');
        });
      });
      
      document.addEventListener('click', function() {
        dropdowns.forEach(dropdown => {
          dropdown.classList.remove('active');
        });
      });
      
      const burgerMenu = document.querySelector('.burger-menu');
      const closeMenu = document.querySelector('.close-menu');
      
      if (burgerMenu) {
        burgerMenu.addEventListener('click', toggleMobileMenu);
      }
      
      if (closeMenu) {
        closeMenu.addEventListener('click', closeMobileMenu);
      }
      
      document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
          closeMobileMenu();
        }
      });
      
      initScrollAnimations();
    });

    function initScrollAnimations() {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      }, observerOptions);
      
      document.querySelectorAll('.scroll-animate').forEach(el => {
        observer.observe(el);
      });
    }
    
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
          themeLabel.textContent = 'Dark';
        } else {
          document.documentElement.removeAttribute('data-theme');
          themeToggle.setAttribute('aria-pressed', 'false');
          themeIcon.innerHTML = '<circle cx="12" cy="12" r="4"></circle><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />';
          themeLabel.textContent = 'Light';
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

      window._siteTheme = {
        set: (t) => { localStorage.setItem(storageKey, t); applyTheme(t); },
        clear: () => { localStorage.removeItem(storageKey); applyTheme(getInitialTheme()); }
      };
    })();