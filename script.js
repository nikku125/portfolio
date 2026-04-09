document.addEventListener('DOMContentLoaded', () => {
    // 1. Scroll Reveal Logic
    const revealElements = document.querySelectorAll('.reveal, .reveal-up, .reveal-left, .reveal-right');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.9;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    // Initial check and scroll event
    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 2. Navbar Scroll Effect
    const navbar = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Smooth Anchor Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 4. Mobile Menu Logic (Refined)
    const menuToggle = document.querySelector('.menu-toggle');
    const desktopNav = document.querySelector('.desktop-nav');
    
    if (menuToggle && desktopNav) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('is-active');
            desktopNav.classList.toggle('mobile-active');
            
            // Simple toggle for mobile view visibility
            if (desktopNav.classList.contains('mobile-active')) {
                desktopNav.style.display = 'flex';
                desktopNav.style.flexDirection = 'column';
                desktopNav.style.position = 'absolute';
                desktopNav.style.top = '100%';
                desktopNav.style.left = '0';
                desktopNav.style.width = '100%';
                desktopNav.style.background = 'var(--bg-dark)';
                desktopNav.style.padding = '2rem';
                desktopNav.style.borderBottom = '1px solid var(--border-color)';
            } else {
                desktopNav.style.display = ''; // Reset to default
            }
        });
    }

    // 5. Dynamic Data Stream Simulation
    const dataStreams = document.querySelectorAll('.data-stream');
    setInterval(() => {
        dataStreams.forEach(stream => {
            const randomHex = Math.random().toString(16).substr(2, 6).toUpperCase();
            stream.textContent = randomHex;
        });
    }, 2000);

    // 6. Active Nav Link on Scroll
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-item');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - 120) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active-link');
            if (item.getAttribute('href').includes(current)) {
                item.classList.add('active-link');
            }
        });
    });
});
