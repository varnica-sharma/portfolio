// ===== PARTICLES.JS CONFIGURATION =====
particlesJS('particles-js', {
    particles: {
        number: { 
            value: window.innerWidth < 768 ? 30 : 60, 
            density: { enable: true, value_area: 800 } 
        },
        color: { value: "#00D9FF" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: {
            value: window.innerWidth < 768 ? 0.3 : 0.4,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: window.innerWidth < 768 ? 2 : 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: window.innerWidth < 768 ? 100 : 150,
            color: "#00D9FF",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: window.innerWidth < 768 ? 1 : 1.5,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: { enable: false, rotateX: 600, rotateY: 1200 }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: window.innerWidth >= 768, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: window.innerWidth < 768 ? 100 : 150, duration: 0.4 },
            push: { particles_nb: 2 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

// ===== MOBILE VIEWPORT DETECTION =====
function isMobile() {
    return window.innerWidth <= 768;
}

function isSmallMobile() {
    return window.innerWidth <= 480;
}

// ===== ENHANCED TYPING EFFECT =====
const typingTexts = [
    "Data Science Student",
    "Healthcare AI Researcher", 
    "Machine Learning Engineer",
    "Graph Neural Network Specialist",
    "Deep Learning Developer",
    "Python Data Scientist"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');
const typingSpeed = isMobile() ? 100 : 80;
const deletingSpeed = isMobile() ? 50 : 40;
const delayBetweenTexts = isMobile() ? 2000 : 2500;

function typeEffect() {
    if (!typingElement) return;
    
    const currentText = typingTexts[textIndex];
    
    if (isDeleting) {
        typingElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        
        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % typingTexts.length;
            setTimeout(typeEffect, 500);
            return;
        }
    } else {
        typingElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        
        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(typeEffect, delayBetweenTexts);
            return;
        }
    }
    
    setTimeout(typeEffect, isDeleting ? deletingSpeed : typingSpeed);
}

// ===== MOBILE-OPTIMIZED SMOOTH SCROLLING =====
document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                const offset = isMobile() ? 80 : 100;
                const targetPosition = target.offsetTop - offset;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
            
            // Close mobile menu if open
            const navList = document.querySelector('.navlist');
            const menuIcon = document.querySelector('#menu-icon');
            if (navList && menuIcon) {
                navList.classList.remove('active');
                menuIcon.classList.remove('bx-x');
            }
        }
    });
});

// ===== ENHANCED MOBILE MENU TOGGLE =====
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

if (menuIcon && navList) {
    menuIcon.addEventListener('click', (e) => {
        e.stopPropagation();
        menuIcon.classList.toggle('bx-x');
        navList.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        if (navList.classList.contains('active')) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navList.classList.contains('active') && 
            !navList.contains(e.target) && 
            !menuIcon.contains(e.target)) {
            navList.classList.remove('active');
            menuIcon.classList.remove('bx-x');
            document.body.style.overflow = '';
        }
    });
}

// ===== MOBILE-OPTIMIZED ACTIVE NAVIGATION =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = 'home';
    const offset = isMobile() ? 150 : 200;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.pageYOffset >= (sectionTop - offset)) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

// ===== MOBILE-OPTIMIZED ANIMATIONS =====
const observerOptions = {
    threshold: isMobile() ? 0.05 : 0.1,
    rootMargin: isMobile() ? '0px 0px -30px 0px' : '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Mobile-specific animations
            if (entry.target.classList.contains('skill-cluster')) {
                const delay = isMobile() ? 100 : 200;
                const delayMultiplier = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay * delayMultiplier);
            }
            
            if (entry.target.classList.contains('project-card')) {
                const delay = isMobile() ? 150 : 300;
                const delayMultiplier = Array.from(entry.target.parentNode.children).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay * delayMultiplier);
            }
        }
    });
}, observerOptions);

// ===== MOBILE-OPTIMIZED COPY TO CLIPBOARD =====
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyToast();
        }).catch(err => {
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        document.execCommand('copy');
        showCopyToast();
    } catch (err) {
        console.error('Fallback copy failed: ', err);
        // Show alternative message for mobile
        if (isMobile()) {
            alert('Email: varnicasharma1515@gmail.com\n\nPlease copy manually');
        }
    }
    
    document.body.removeChild(textArea);
}

function showCopyToast() {
    const toast = document.getElementById('copy-toast');
    if (toast) {
        toast.classList.add('show');
        
        // Auto-hide faster on mobile
        const hideDelay = isMobile() ? 2000 : 3000;
        setTimeout(() => {
            toast.classList.remove('show');
        }, hideDelay);
    }
}

// ===== MOBILE TOUCH INTERACTIONS =====
if (isMobile()) {
    // Add touch feedback to interactive elements
    document.querySelectorAll('.btn, .social-link, .method-item, .project-card').forEach(element => {
        element.addEventListener('touchstart', function() {
            this.style.transform = 'scale(0.98)';
        });
        
        element.addEventListener('touchend', function() {
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
    
    // Disable hover effects on mobile
    document.querySelectorAll('.project-card, .skill-item, .framework-item').forEach(card => {
        card.addEventListener('touchstart', () => {
            // Touch feedback handled above
        });
    });
} else {
    // Desktop hover interactions
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(5deg)';
            }
        });
        
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.project-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const icon = item.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1.1) rotate(-5deg)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const icon = item.querySelector('.skill-icon');
            if (icon) {
                icon.style.transform = 'scale(1) rotate(0deg)';
            }
        });
    });

    document.querySelectorAll('.framework-item').forEach(item => {
        item.addEventListener('mouseenter', () => {
            const logo = item.querySelector('.framework-logo');
            if (logo) {
                logo.style.transform = 'scale(1.05) translateY(-2px)';
            }
        });
        
        item.addEventListener('mouseleave', () => {
            const logo = item.querySelector('.framework-logo');
            if (logo) {
                logo.style.transform = 'scale(1) translateY(0)';
            }
        });
    });

    document.querySelectorAll('.tool-tag').forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            tag.style.transform = 'translateY(-3px) scale(1.05)';
        });
        
        tag.addEventListener('mouseleave', () => {
            tag.style.transform = 'translateY(0) scale(1)';
        });
    });
}

// ===== MOBILE-SPECIFIC TECH NODE INTERACTIONS =====
document.querySelectorAll('.tech-node').forEach(node => {
    const createRipple = () => {
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = isMobile() ? '60px' : '80px';
        ripple.style.height = isMobile() ? '60px' : '80px';
        ripple.style.background = 'rgba(0, 217, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.top = '50%';
        ripple.style.left = '50%';
        ripple.style.marginTop = isMobile() ? '-30px' : '-40px';
        ripple.style.marginLeft = isMobile() ? '-30px' : '-40px';
        
        node.style.position = 'relative';
        node.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    };
    
    if (isMobile()) {
        node.addEventListener('touchstart', createRipple);
    } else {
        node.addEventListener('click', createRipple);
    }
});

// ===== ENHANCED BACK TO TOP =====
const backToTop = document.querySelector('.back-to-top');
if (backToTop) {
    backToTop.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Show/hide back to top button based on scroll position
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const showThreshold = isMobile() ? 300 : 500;
        
        if (scrollTop > showThreshold) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
}

// ===== MOBILE ORIENTATION CHANGE HANDLER =====
window.addEventListener('orientationchange', () => {
    // Recalculate dimensions after orientation change
    setTimeout(() => {
        updateActiveNav();
        
        // Reinitialize particles with new dimensions
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.number.value = window.innerWidth < 768 ? 30 : 60;
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }, 500);
});

// ===== MOBILE PERFORMANCE OPTIMIZATIONS =====
let ticking = false;

function updateOnScroll() {
    updateActiveNav();
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}

// ===== EVENT LISTENERS =====
window.addEventListener('scroll', () => {
    if (isMobile()) {
        requestTick(); // Throttled scroll for mobile performance
    } else {
        updateActiveNav();
    }
});

window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (navList && menuIcon) {
        navList.classList.remove('active');
        menuIcon.classList.remove('bx-x');
        document.body.style.overflow = '';
    }
    
    // Update mobile detection and reinitialize if needed
    setTimeout(() => {
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.number.value = window.innerWidth < 768 ? 30 : 60;
            window.pJSDom[0].pJS.particles.line_linked.distance = window.innerWidth < 768 ? 100 : 150;
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
    }, 100);
});

// ===== MOBILE INITIALIZATION =====
document.addEventListener('DOMContentLoaded', () => {
    // Start typing effect with mobile optimization
    setTimeout(() => {
        typeEffect();
    }, isMobile() ? 800 : 1000);
    
    // Initialize intersection observers
    const elementsToObserve = document.querySelectorAll('.skill-cluster, .project-card, .education-card, .profile-card');
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = isMobile() ? 'all 0.4s ease' : 'all 0.6s ease';
        observer.observe(element);
    });
    
    // Add loading complete class for mobile-specific styles
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 500);
    
    // Mobile-specific initializations
    if (isMobile()) {
        // Reduce animation complexity on mobile
        document.querySelectorAll('.float, .rotate').forEach(element => {
            element.style.animationDuration = '8s';
        });
        
        // Optimize scroll behavior
        document.body.style.overscrollBehavior = 'none';
        
        // Add mobile class for CSS targeting
        document.documentElement.classList.add('mobile');
    }
    
    // Initialize scroll animations
    updateActiveNav();
});

// ===== MOBILE EASTER EGG =====
let logoTapCount = 0;
const logoElement = document.querySelector('.logo-text');

if (logoElement) {
    logoElement.addEventListener(isMobile() ? 'touchstart' : 'click', () => {
        logoTapCount++;
        if (logoTapCount === (isMobile() ? 3 : 5)) {
            document.body.style.filter = 'hue-rotate(180deg)';
            setTimeout(() => {
                document.body.style.filter = 'none';
                logoTapCount = 0;
            }, 2000);
        }
    });
}

// ===== MOBILE NETWORK OPTIMIZATION =====
if (isMobile() && 'connection' in navigator) {
    const connection = navigator.connection;
    
    if (connection.effectiveType === '2g' || connection.effectiveType === 'slow-2g') {
        // Reduce particle count for slow connections
        if (window.pJSDom && window.pJSDom[0]) {
            window.pJSDom[0].pJS.particles.number.value = 15;
            window.pJSDom[0].pJS.fn.particlesRefresh();
        }
        
        // Disable some animations for better performance
        document.querySelectorAll('.animate-on-scroll').forEach(element => {
            element.style.animation = 'none';
        });
    }
}

// ===== PREVENT ZOOM ON DOUBLE TAP (iOS) =====
if (isMobile()) {
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function (event) {
        const now = (new Date()).getTime();
        if (now - lastTouchEnd <= 300) {
            event.preventDefault();
        }
        lastTouchEnd = now;
    }, false);
}

// ===== MOBILE ACCESSIBILITY ENHANCEMENTS =====
if (isMobile()) {
    // Increase tap target sizes
    document.querySelectorAll('.btn, .social-link, .nav-link').forEach(element => {
        const currentPadding = window.getComputedStyle(element).padding;
        if (parseFloat(currentPadding) < 12) {
            element.style.padding = '12px';
            element.style.minHeight = '44px';
            element.style.minWidth = '44px';
        }
    });
    
    // Add focus indicators for keyboard navigation
    document.querySelectorAll('button, a, input, textarea').forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid #00D9FF';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = 'none';
        });
    });
}

console.log(`Portfolio initialized - Mobile: ${isMobile()}, Screen: ${window.innerWidth}x${window.innerHeight}`);
