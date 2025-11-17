// CopperCloud Website JavaScript
// Enhanced functionality for the landing page

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all functionality
    initScrollEffects();
    initAnimatedCounters();
    initSmoothScrolling();
    initMobileMenu();
    initIntersectionObserver();
    initParallaxEffects();
    initValueStackInteractivity();
});

// Performance optimization: Debounce function
function debounce(func, wait = 15, immediate = false) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Header scroll effects
function initScrollEffects() {
    const header = document.querySelector('.header');
    if (!header) return;

    const updateHeader = () => {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };

    window.addEventListener('scroll', debounce(updateHeader), { passive: true });
}

// Animated counters for metrics
function initAnimatedCounters() {
    const counters = document.querySelectorAll('[data-target]');
    if (!counters.length) return;
    
    const animateCounter = (counter) => {
        const target = parseInt(counter.getAttribute('data-target'), 10);
        const duration = 2000;
        let start = 0;
        const stepTime = 16; // Approx 60fps
        const totalSteps = Math.round(duration / stepTime);
        const increment = target / totalSteps;

        const update = () => {
            start += increment;
            if (start < target) {
                counter.textContent = Math.floor(start);
                requestAnimationFrame(update);
            } else {
                counter.textContent = target;
            }
        };
        requestAnimationFrame(update);
    };

    const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateCounter(entry.target);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 60;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Mobile menu functionality
function initMobileMenu() {
    const mobileToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileToggle && navLinks) {
        mobileToggle.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('active') && !navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const animatedElements = document.querySelectorAll('.premium-card, .metric-item, .impact-stat');
    if (!animatedElements.length) return;

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });
}

// Parallax effects for background elements
function initParallaxEffects() {
    const parallaxBg = document.querySelector('.hero-section::before');
    if (!parallaxBg) return;

    const updateParallax = () => {
        const scrolled = window.pageYOffset;
        parallaxBg.style.transform = `translateY(${scrolled * 0.1}px)`;
    };

    window.addEventListener('scroll', debounce(updateParallax), { passive: true });
}

// Value Stack Interactivity - Show connections between layers
function initValueStackInteractivity() {
    const stackCards = document.querySelectorAll('.stack-card');
    const arrows = document.querySelectorAll('.arrow-connector');
    if (!stackCards.length) return;
    
    stackCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
            card.style.boxShadow = 'var(--shadow-lg)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = 'none';
        });
    });
}

// Initialize accessibility features
function initAccessibility() {
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', () => {
        document.body.classList.remove('keyboard-navigation');
    });
}

document.addEventListener('DOMContentLoaded', initAccessibility);
