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

// ===== ENHANCED TYPING EFFECT =====
const typingTexts = [
    "M.Sc. Data Science Student",
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
const typingSpeed = 80;
const deletingSpeed = 40;
const delayBetweenTexts = 2500;

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
        if (href.startsWith('#')) {
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
    navigator.clipboard.writeText(text).then(() => {
        showCopyToast();
    }).catch(err => {
        console.error('Failed to copy: ', err);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        try {
            document.execCommand('copy');
            showCopyToast();
        } catch (err) {
            console.error('Fallback copy failed: ', err);
        }
        document.body.removeChild(textArea);
    });
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

// ===== FRAMEWORK SHOWCASE ANIMATIONS =====
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

// ===== TOOL TAG ANIMATIONS =====
document.querySelectorAll('.tool-tag').forEach(tag => {
    tag.addEventListener('mouseenter', () => {
        tag.style.transform = 'translateY(-3px) scale(1.05)';
    });
    
    tag.addEventListener('mouseleave', () => {
        tag.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== TECH NODE INTERACTIONS =====
document.querySelectorAll('.tech-node').forEach(node => {
    node.addEventListener('click', () => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '80px';
        ripple.style.height = '80px';
        ripple.style.background = 'rgba(0, 217, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        ripple.style.top = '50%';
        ripple.style.left = '50%';
        ripple.style.marginTop = '-40px';
        ripple.style.marginLeft = '-40px';
        
        node.style.position = 'relative';
        node.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// ===== BACK TO TOP FUNCTIONALITY =====
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
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

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Start typing effect
    setTimeout(typeEffect, 1000);
    
    // Observe elements for animations
    const elementsToObserve = document.querySelectorAll('.skill-cluster, .project-card, .education-card');
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
    
    // Initialize scroll animations
    updateActiveNav();
});

// ===== PERFORMANCE OPTIMIZATIONS =====
// Throttle scroll events
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(() => {
        updateActiveNav();
    }, 10);
});

// ===== EASTER EGG =====
let clickCount = 0;
document.querySelector('.logo-text').addEventListener('click', () => {
    clickCount++;
    if (clickCount === 5) {
        document.body.style.filter = 'hue-rotate(180deg)';
        setTimeout(() => {
            document.body.style.filter = 'none';
            clickCount = 0;
        }, 2000);
    }
});

// ===== SOCIAL LINK TRACKING =====
document.querySelectorAll('.social-link, .method-content a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        console.log(`User clicked: ${href}`);
        // You can add analytics tracking here
    });
});

// Add ripple animation keyframes
const style
