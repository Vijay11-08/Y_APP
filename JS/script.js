// Custom scripts for Glow Skincare Clinic

document.addEventListener('DOMContentLoaded', function() {

    // ===== Active Nav Link Highlight =====
    const currentLocation = location.pathname;
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

    navLinks.forEach(link => {
        // Remove default active class first
        if (!link.getAttribute('href').includes('index.html') || !currentLocation.endsWith('/')) {
            // Keep active class logic
        }
        if(link.getAttribute('href') !== '/' && currentLocation.includes(link.getAttribute('href'))) {
            link.classList.add('active');
        } else if (currentLocation.endsWith('/') && link.getAttribute('href') === 'index.html') {
            link.classList.add('active');
        }
    });

    // ===== Navbar Scroll Effect =====
    const navbar = document.getElementById('main-navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });
    }

    // ===== Scroll Animations (Intersection Observer) =====
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if (animatedElements.length > 0) {
        const observerOptions = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger the animations
                    setTimeout(() => {
                        entry.target.classList.add('visible');
                    }, index * 100);
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        animatedElements.forEach(el => observer.observe(el));
    }

    // ===== Smooth Counter Animation for Stats =====
    const statNumbers = document.querySelectorAll('.hero-stat h3');
    if (statNumbers.length > 0) {
        const counterObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounter(entry.target);
                    counterObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.5 });

        statNumbers.forEach(el => counterObserver.observe(el));
    }

    function animateCounter(element) {
        const text = element.textContent;
        const number = parseInt(text.replace(/[^0-9]/g, ''));
        const suffix = text.replace(/[0-9]/g, '');
        const duration = 2000;
        const steps = 60;
        const increment = number / steps;
        let current = 0;
        let step = 0;

        const timer = setInterval(() => {
            step++;
            current = Math.min(Math.round(increment * step), number);

            if (number >= 1000) {
                element.textContent = (current / 1000).toFixed(current >= number ? 0 : 0) + suffix;
                if (current >= number) {
                    element.textContent = (number / 1000) + 'K+';
                }
            } else {
                element.textContent = current + suffix;
            }

            if (step >= steps) {
                element.textContent = text;
                clearInterval(timer);
            }
        }, duration / steps);
    }

    // ===== Scroll to Top Button =====
    const scrollTopBtn = document.querySelector('.scroll-to-top');
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 500) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ===== Parallax-lite Effect for Hero =====
    const heroSection = document.querySelector('.hero-section');
    if (heroSection) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            if (scrolled < 800) {
                const heroImg = heroSection.querySelector('.hero-image-wrapper img');
                if (heroImg) {
                    heroImg.style.transform = `translateY(${scrolled * 0.08}px)`;
                }
            }
        });
    }

    // ===== Add fade-in animation to flow steps when they come into view =====
    const flowSteps = document.querySelectorAll('.flow-step');
    if (flowSteps.length > 0) {
        const flowObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    flowObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        flowSteps.forEach((step, index) => {
            step.style.opacity = '0';
            step.style.transform = 'translateY(30px)';
            step.style.transition = `all 0.6s cubic-bezier(0.25, 0.8, 0.25, 1) ${index * 0.15}s`;
            flowObserver.observe(step);
        });
    }

});
