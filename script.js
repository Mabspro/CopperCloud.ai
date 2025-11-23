// CopperCloud Website JavaScript
// Enhanced functionality for the landing page

document.addEventListener('DOMContentLoaded', function() {
    // Mark page as JS-enabled
    document.documentElement.classList.add('js');
    document.documentElement.classList.remove('no-js');
    
    // Initialize all functionality
    initScrollEffects();
    initAnimatedCounters();
    initSmoothScrolling();
    initMobileMenu();
    initIntersectionObserver();
    initParallaxEffects();
    initValueStackInteractivity();
    
    // Fallback: ensure elements in viewport are visible immediately and after delay
    function showVisibleElements() {
        const elements = document.querySelectorAll('.premium-card, .metric-item, .stack-card');
        elements.forEach((el, index) => {
            const rect = el.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200;
            if (isVisible && !el.classList.contains('animate-in')) {
                setTimeout(() => {
                    el.classList.add('animate-in');
                }, index * 50);
            }
        });
    }
    
    // Show immediately
    showVisibleElements();
    
    // Show again after a delay to catch any missed
    setTimeout(showVisibleElements, 300);
    setTimeout(showVisibleElements, 1000);
    
    // Initialize Roadmap Timeline
    initRoadmapTimeline();
});

// Roadmap Timeline Interactions
function initRoadmapTimeline() {
    const markers = document.querySelectorAll('.timeline-marker');
    const progressBar = document.getElementById('timeline-progress');
    const roadmapSection = document.getElementById('roadmap');
    
    if (!markers.length || !progressBar) return;
    
    // Animate progress bar on scroll
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    progressBar.style.width = '100%';
                }, 500);
            }
        });
    }, { threshold: 0.3 });
    
    if (roadmapSection) {
        observer.observe(roadmapSection);
    }
    
    // Marker hover interactions
    markers.forEach((marker, index) => {
        marker.addEventListener('mouseenter', function() {
            const phase = this.dataset.phase;
            const progress = phase === '1' ? '33%' : phase === '2' ? '66%' : '100%';
            progressBar.style.width = progress;
            
            // Highlight corresponding card
            const cards = document.querySelectorAll('#roadmap .premium-card');
            cards.forEach(card => card.classList.remove('timeline-highlight'));
            if (cards[index]) {
                cards[index].classList.add('timeline-highlight');
            }
        });
        
        marker.addEventListener('click', function() {
            const phase = this.dataset.phase;
            const cards = document.querySelectorAll('#roadmap .premium-card');
            const targetCard = cards[parseInt(phase) - 1];
            
            if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
                targetCard.style.animation = 'pulse 0.6s ease';
                setTimeout(() => {
                    targetCard.style.animation = '';
                }, 600);
            }
        });
    });
}

// Header scroll effects
function initScrollEffects() {
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    let ticking = false;

    function updateHeader() {
        const scrollY = window.scrollY;
        
        if (scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateHeader);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

// Animated counters for metrics
function initAnimatedCounters() {
    const counters = document.querySelectorAll('.metric-value[data-target]');
    
    const animateCounter = (counter) => {
        const target = parseFloat(counter.getAttribute('data-target'));
        const isDecimal = counter.hasAttribute('data-decimal');
        const unit = counter.getAttribute('data-unit') || '';
        const unitElement = counter.querySelector('.metric-unit');
        const duration = 2000; // 2 seconds
        const steps = 60; // 60fps
        const increment = target / (duration / (1000 / steps));
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                if (isDecimal) {
                    counter.innerHTML = current.toFixed(1) + (unitElement ? unitElement.outerHTML : '');
                } else {
                    counter.innerHTML = Math.floor(current) + (unitElement ? unitElement.outerHTML : '');
                }
                requestAnimationFrame(updateCounter);
            } else {
                if (isDecimal) {
                    counter.innerHTML = target.toFixed(1) + (unitElement ? unitElement.outerHTML : '');
                } else {
                    counter.innerHTML = target + (unitElement ? unitElement.outerHTML : '');
                }
            }
        };
        
        updateCounter();
    };

    // Intersection Observer for counters
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                animateCounter(entry.target);
            }
        });
    }, { threshold: 0.3 });

    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Smooth scrolling for navigation links
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
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
        mobileToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
        
        // Close menu when clicking on a link
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!mobileToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('active');
                mobileToggle.classList.remove('active');
            }
        });
    }
}

// Intersection Observer for animations
function initIntersectionObserver() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Stagger animation for cards
                setTimeout(() => {
                    entry.target.classList.add('animate-in');
                }, index * 100);
                // Stop observing once animated
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animation
    const animateElements = document.querySelectorAll('.premium-card, .metric-item, .impact-stat, .timeline-item, .stack-card');
    animateElements.forEach((el, index) => {
        // Check if element is already in viewport on load
        const rect = el.getBoundingClientRect();
        const isInViewport = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (isInViewport) {
            // If already visible, animate immediately with slight delay
            setTimeout(() => {
                el.classList.add('animate-in');
            }, index * 50);
        } else {
            // Otherwise, observe for when it enters viewport
            observer.observe(el);
        }
    });
}

// Parallax effects for background elements
function initParallaxEffects() {
    const parallaxElements = document.querySelectorAll('.bg-animation');
    let ticking = false;

    function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;

        parallaxElements.forEach(element => {
            element.style.transform = `translateY(${rate}px)`;
        });

        ticking = false;
    }

    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }

    window.addEventListener('scroll', requestTick);
}

// Enhanced button interactions with ripple effect
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        // Ripple effect on click
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
        
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Grid node interactions
document.addEventListener('DOMContentLoaded', function() {
    const gridNodes = document.querySelectorAll('.grid-node');
    
    gridNodes.forEach(node => {
        node.addEventListener('mouseenter', function() {
            // Highlight connected nodes
            const location = this.getAttribute('data-location');
            this.style.transform = 'scale(1.05)';
            this.style.zIndex = '10';
        });
        
        node.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
            this.style.zIndex = '1';
        });
    });
});

// Enhanced card hover effects
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.premium-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            // Add glow effect
            this.style.boxShadow = '0 20px 40px rgba(243, 130, 24, 0.2), 0 0 0 1px rgba(243, 130, 24, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
});

// Typing animation for hero title (optional enhancement)
function initTypingAnimation() {
    const heroTitle = document.querySelector('.hero-title');
    if (!heroTitle) return;
    
    const text = heroTitle.textContent;
    heroTitle.textContent = '';
    heroTitle.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < text.length) {
            heroTitle.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 100);
        }
    };
    
    // Start typing animation after a delay
    setTimeout(typeWriter, 1000);
}

// Performance optimization: Debounce scroll events
function debounce(func, wait, immediate) {
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

// Lazy loading for images (if any are added later)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Form handling (for future contact forms)
function initFormHandling() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Add form validation and submission logic here
            const formData = new FormData(this);
            
            // Show loading state
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';
            submitBtn.disabled = true;
            
            // Simulate form submission (replace with actual endpoint)
            setTimeout(() => {
                submitBtn.textContent = 'Message Sent!';
                setTimeout(() => {
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 2000);
            }, 1000);
        });
    });
}

// Analytics tracking (placeholder for future implementation)
function trackEvent(eventName, properties = {}) {
    // Placeholder for analytics tracking
    console.log('Event tracked:', eventName, properties);
    
    // Example: Google Analytics 4
    // gtag('event', eventName, properties);
    
    // Example: Custom analytics
    // analytics.track(eventName, properties);
}

// Track button clicks
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        trackEvent('cta_click', {
            button_text: e.target.textContent.trim(),
            page_section: e.target.closest('section')?.id || 'unknown'
        });
    }
});

// Error handling
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service
});

// Performance monitoring
window.addEventListener('load', function() {
    // Log performance metrics
    const perfData = performance.getEntriesByType('navigation')[0];
    console.log('Page load time:', perfData.loadEventEnd - perfData.loadEventStart, 'ms');
});

// Accessibility enhancements
function initAccessibility() {
    // Add keyboard navigation support
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            document.body.classList.add('keyboard-navigation');
        }
    });
    
    document.addEventListener('mousedown', function() {
        document.body.classList.remove('keyboard-navigation');
    });
    
    // Add skip link functionality
    const skipLink = document.querySelector('.skip-link');
    if (skipLink) {
        skipLink.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.focus();
                target.scrollIntoView();
            }
        });
    }
}

// Initialize accessibility features
document.addEventListener('DOMContentLoaded', initAccessibility);

// Value Stack Interactivity - Show connections between layers
function initValueStackInteractivity() {
    const stackCards = document.querySelectorAll('.stack-card');
    const arrows = document.querySelectorAll('.arrow-connector');
    
    if (!stackCards.length) return;
    
    stackCards.forEach((card, index) => {
        card.addEventListener('mouseenter', function() {
            // Highlight this card
            this.style.transform = 'translateY(-6px) scale(1.02)';
            
            // Highlight adjacent arrows
            if (index > 0) {
                arrows[index - 1].style.opacity = '1';
                arrows[index - 1].style.transform = 'scale(1.1)';
            }
            if (index < arrows.length) {
                arrows[index].style.opacity = '1';
                arrows[index].style.transform = 'scale(1.1)';
            }
            
            // Subtle highlight on adjacent cards
            const prevCard = stackCards[index - 1];
            const nextCard = stackCards[index + 1];
            if (prevCard) {
                prevCard.style.opacity = '0.9';
            }
            if (nextCard) {
                nextCard.style.opacity = '0.9';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            // Reset all
            stackCards.forEach(c => {
                c.style.transform = '';
                c.style.opacity = '1';
            });
            arrows.forEach(a => {
                a.style.opacity = '';
                a.style.transform = '';
            });
        });
    });
}

// Export functions for potential external use
window.CopperCloudSite = {
    trackEvent,
    initTypingAnimation,
    initLazyLoading,
    initFormHandling
};

// Deck link functionality
document.addEventListener('DOMContentLoaded', function() {
    const deckLink = document.getElementById('deck-link');
    if (deckLink) {
        deckLink.addEventListener('click', function(e) {
            e.preventDefault();
            const deckUrl = 'https://claude.ai/public/artifacts/3b70511c-cf9f-4da1-9120-eb94b5819391';
            window.open(deckUrl, '_blank');
        });
    }
});
