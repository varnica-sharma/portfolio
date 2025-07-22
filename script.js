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

// ===== ENHANCED TYPING EFFECT WITH CURSOR FOLLOWING =====
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
const cursorElement = document.querySelector('.typing-cursor');
const typingSpeed = isMobile() ? 100 : 80;
const deletingSpeed = isMobile() ? 50 : 40;
const delayBetweenTexts = isMobile() ? 2000 : 2500;

function typeEffect() {
    if (!typingElement || !cursorElement) return;
    
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
        if (href && href.startsWith('#')) {
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
            alert('Email:
