// script.js - Interactive Elements and Animations for Queenly's CV

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
    }, 800);
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
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections with data-animate attribute
document.addEventListener('DOMContentLoaded', function() {
    const animatedElements = document.querySelectorAll('[data-animate]');
    animatedElements.forEach(element => {
        observer.observe(element);
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
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========================================
// DYNAMIC SECTION HIGHLIGHTS
// ========================================

const sections = document.querySelectorAll('.section');

sections.forEach(section => {
    section.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
        this.style.transform = 'scale(1.02)';
    });
    
    section.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ========================================
// CONTACT ITEM INTERACTIONS
// ========================================

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

// ========================================
// AWARD ITEMS ANIMATION
// ========================================

const awardItems = document.querySelectorAll('.award-item');

awardItems.forEach((award, index) => {
    award.style.animationDelay = index * 0.2 + 's';
    
    award.addEventListener('mouseenter', function() {
        const icon = this.querySelector('.award-icon');
        if (icon) {
            icon.style.transform = 'scale(1.3) rotate(10deg)';
            icon.style.transition = 'transform 0.4s ease';
        }
    });
    
    award.addEventListener('mouseleave', function() {
        const icon = this.querySelector('.award-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ========================================
// KEYBOARD NAVIGATION ENHANCEMENT
// ========================================

document.addEventListener('keydown', function(e) {
    // Press 'T' to scroll to top
    if (e.key === 't' || e.key === 'T') {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
    
    // Press 'B' to scroll to bottom
    if (e.key === 'b' || e.key === 'B') {
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth'
        });
    }
});

// ========================================
// CONSOLE MESSAGE (Professional Touch)
// ========================================

console.log('%c✈️ Welcome to Queenly\'s Professional CV', 
    'color: #b8860b; font-size: 20px; font-weight: bold; font-family: "Cormorant Garamond", serif;');
console.log('%cExcellence in Aviation Service', 
    'color: #002244; font-size: 14px; font-family: "Montserrat", sans-serif;');
