// ===== PARTICLES.JS CONFIGURATION =====
particlesJS('particles-js', {
    particles: {
        number: { value: 60, density: { enable: true, value_area: 800 } },
        color: { value: "#00D9FF" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: {
            value: 0.4,
            random: false,
            anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
            value: 3,
            random: true,
            anim: { enable: false, speed: 40, size_min: 0.1, sync: false }
        },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00D9FF",
            opacity: 0.2,
            width: 1
        },
        move: {
            enable: true,
            speed: 1.5,
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
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            grab: { distance: 400, line_linked: { opacity: 1 } },
            bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
            repulse: { distance: 150, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

// ===== FIXED TYPING EFFECT (WORKING PERFECTLY) =====
const typingTexts = [
    "M.Sc. Data Science Student",
    "Healthcare AI Researcher", 
    "Machine Learning Engineer",
    "Graph Neural Network Specialist",
    "Deep Learning Developer",
    "Python Data Scientist",
    "Precision Medicine Expert"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingElement;
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 3000;

function initializeTyping() {
    typingElement = document.querySelector('.typing-text');
    if (typingElement) {
        typeEffect();
    }
}

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

// ===== SMOOTH SCROLLING FOR NAVIGATION =====
document.querySelectorAll('.nav-link, a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(href);
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
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

// ===== MOBILE MENU TOGGLE =====
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

if (menuIcon && navList) {
    menuIcon.addEventListener('click', () => {
        menuIcon.classList.toggle('bx-x');
        navList.classList.toggle('active');
    });
}

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = 'home';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= (sectionTop - 200)) {
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

// ===== ENHANCED ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger specific animations
            if (entry.target.classList.contains('skill-cluster')) {
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 200;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
            }
            
            if (entry.target.classList.contains('project-card')) {
                const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 300;
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, delay);
            }
        }
    });
}, observerOptions);

// ===== COPY TO CLIPBOARD FUNCTIONALITY =====
function copyToClipboard(text) {
    if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
            showCopyToast();
        }).catch(err => {
            console.error('Failed to copy: ', err);
            fallbackCopyTextToClipboard(text);
        });
    } else {
        fallbackCopyTextToClipboard(text);
    }
}

function fallbackCopyTextToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    textArea.style.top = '0';
    textArea.style.left = '0';
    textArea.style.position = 'fixed';
    
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    
    try {
        const successful = document.execCommand('copy');
        if (successful) {
            showCopyToast();
        }
    } catch (err) {
        console.error('Fallback copy failed: ', err);
    }
    
    document.body.removeChild(textArea);
}

function showCopyToast() {
    const toast = document.getElementById('copy-toast');
    if (toast) {
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }
}

// ===== ENHANCED PROJECT CARD INTERACTIONS =====
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

// ===== SKILL ITEM INTERACTIONS =====
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', () => {
        const icon = item.querySelector('.skill-icon');
        if (icon) {
            icon.style.transform = 'scale(1.1) rotate(3deg)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        const icon = item.querySelector('.skill-icon');
        if (icon) {
            icon.style.transform = 'scale(1) rotate(0deg)';
        }
    });
});

// ===== TECH NODE INTERACTIONS =====
document.querySelectorAll('.tech-node').forEach(node => {
    node.addEventListener('click', () => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '60px';
        ripple.style.height = '60px';
        ripple.style.background = 'rgba(0, 217, 255, 0.5)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'rippleEffect 0.8s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.top = '50%';
        ripple.style.left = '50%';
        ripple.style.marginTop = '-30px';
        ripple.style.marginLeft = '-30px';
        
        node.style.position = 'relative';
        node.appendChild(ripple);
        
        setTimeout(() => {
            if (ripple.parentNode) {
                ripple.remove();
            }
        }, 800);
    });
});

// Add ripple animation
if (!document.getElementById('ripple-styles')) {
    const style = document.createElement('style');
    style.id = 'ripple-styles';
    style.textContent = `
        @keyframes rippleEffect {
            to {
                transform: scale(2);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===== INTERSECTION OBSERVER FOR SCROLL ANIMATIONS =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize typing effect
    initializeTyping();
    
    const elementsToObserve = document.querySelectorAll(
        '.skill-cluster, .project-card, .education-card, .framework-item, .exp-item'
    );
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
});

// ===== EVENT LISTENERS =====
window.addEventListener('scroll', () => {
    updateActiveNav();
});

window.addEventListener('resize', () => {
    // Close mobile menu on resize
    if (navList && menuIcon) {
        navList.classList.remove('active');
        menuIcon.classList.remove('bx-x');
    }
});

// ===== SMOOTH PAGE LOAD ANIMATION =====
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    
    // Start typing effect if not already started
    if (!typingElement) {
        initializeTyping();
    }
    
    // Animate skill icons on load
    setTimeout(() => {
        document.querySelectorAll('.skill-icon').forEach((icon, index) => {
            setTimeout(() => {
                icon.style.transform = 'scale(1.1)';
                setTimeout(() => {
                    icon.style.transform = 'scale(1)';
                }, 200);
            }, index * 100);
        });
    }, 1000);
});

// ===== BACK TO TOP FUNCTIONALITY =====
const backToTopBtn = document.querySelector('.back-to-top');
if (backToTopBtn) {
    backToTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===== PERFORMANCE OPTIMIZATIONS =====
let ticking = false;

function updateOnScroll() {
    updateActiveNav();
    ticking = false;
}

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
});

// ===== EASTER EGG =====
let logoClickCount = 0;
const logoText = document.querySelector('.logo-text');
if (logoText) {
    logoText.addEventListener('click', () => {
        logoClickCount++;
        if (logoClickCount === 7) {
            // Secret color theme
            document.documentElement.style.setProperty('--cyan', '#ff6b6b');
            document.documentElement.style.setProperty('--purple', '#4ecdc4');
            setTimeout(() => {
                document.documentElement.style.setProperty('--cyan', '#00D9FF');
                document.documentElement.style.setProperty('--purple', '#8B5CF6');
                logoClickCount = 0;
            }, 3000);
        }
    });
}

// ===== LAZY LOADING FOR PERFORMANCE =====
if ('IntersectionObserver' in window) {
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

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}
