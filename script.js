// script.js - Interactive Elements and Animations for Queenly's CV

// ========================================
// MOTION PREFERENCE CHECK
// ========================================

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ========================================
// PAGE LOADER
// ========================================

window.addEventListener('load', function() {
    const loader = document.querySelector('.page-loader');
    
    setTimeout(function() {
        loader.classList.add('hidden');
        
        // Remove loader from DOM after transition
        setTimeout(function() {
            loader.style.display = 'none';
        }, 500);
    }, prefersReducedMotion ? 100 : 800);
});

// ========================================
// SCROLL ANIMATIONS
// ========================================

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (!prefersReducedMotion) {
                observer.unobserve(entry.target);
            }
        }
    });
}, observerOptions);

// Observe all sections with data-animate attribute
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => {
        if (prefersReducedMotion) {
            element.classList.add('animate-in');
        } else {
            observer.observe(element);
        }
    });
});

// ========================================
// SMOOTH SCROLL FOR LINKS
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// DYNAMIC SECTION HIGHLIGHTS
// ========================================

if (!prefersReducedMotion) {
    const sections = document.querySelectorAll('.section');
    
    sections.forEach(section => {
        section.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s ease';
            this.style.transform = 'translateY(-4px)';
        });
        
        section.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// ========================================
// CONTACT ITEM INTERACTIONS
// ========================================

if (!prefersReducedMotion) {
    const contactItems = document.querySelectorAll('.contact-item');
    
    contactItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1.2) rotate(5deg)';
                icon.style.transition = 'transform 0.3s ease';
            }
        });
        
        item.addEventListener('mouseleave', function() {
            const icon = this.querySelector('.contact-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });
}

// ========================================
// AWARD ITEMS ANIMATION
// ========================================

const awardItems = document.querySelectorAll('.award-item');

awardItems.forEach((award, index) => {
    if (!prefersReducedMotion) {
        award.style.animationDelay = index * 0.2 + 's';
        
        award.addEventListener('mouseenter', function() {
            const badge = this.querySelector('.award-badge');
            if (badge) {
                badge.style.transform = 'scale(1.1) rotate(5deg)';
                badge.style.transition = 'transform 0.4s ease';
            }
        });
        
        award.addEventListener('mouseleave', function() {
            const badge = this.querySelector('.award-badge');
            if (badge) {
                badge.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    }
});

// ========================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ========================================

document.addEventListener('keydown', function(e) {
    // Press 'T' to scroll to top
    if (e.key === 't' || e.key === 'T') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            window.scrollTo({
                top: 0,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    }
    
    // Press 'B' to scroll to bottom
    if (e.key === 'b' || e.key === 'B') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            window.scrollTo({
                top: document.body.scrollHeight,
                behavior: prefersReducedMotion ? 'auto' : 'smooth'
            });
        }
    }
    
    // Press 'C' to scroll to contact
    if (e.key === 'c' || e.key === 'C') {
        if (!e.ctrlKey && !e.metaKey && !e.altKey) {
            const contactSection = document.querySelector('.contact-section');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        }
    }
});

// ========================================
// CONSOLE MESSAGE (Professional Touch)
// ========================================

console.log('%c✈️ Welcome to Queenly\'s Professional CV', 
    'color: #d4af37; font-size: 20px; font-weight: bold; font-family: "Cormorant Garamond", serif;');
console.log('%cExcellence in Aviation Service', 
    'color: #0b1b3f; font-size: 14px; font-family: "Montserrat", sans-serif;');

// ========================================
// FAB (FLOATING ACTION BUTTON)
// ========================================

const fabButton = document.getElementById('fabButton');
if (fabButton) {
    fabButton.addEventListener('click', function() {
        const contactSection = document.querySelector('.contact-section');
        if (contactSection) {
            contactSection.scrollIntoView({
                behavior: prefersReducedMotion ? 'auto' : 'smooth',
                block: 'start'
            });
        }
    });
}
