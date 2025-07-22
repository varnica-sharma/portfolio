// ===== PARTICLES.JS CONFIGURATION =====
particlesJS('particles-js', {
    particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: "#00D9FF" },
        shape: {
            type: "circle",
            stroke: { width: 0, color: "#000000" },
        },
        opacity: {
            value: 0.5,
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
            speed: 2,
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
            repulse: { distance: 200, duration: 0.4 },
            push: { particles_nb: 4 },
            remove: { particles_nb: 2 }
        }
    },
    retina_detect: true
});

// ===== TYPING EFFECT =====
const typingTexts = [
    "Data Science Student",
    "Machine Learning Enthusiast", 
    "Healthcare AI Researcher",
    "Deep Learning Developer",
    "Python Developer"
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.querySelector('.typing-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;

function typeEffect() {
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

// Start typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(typeEffect, 1000);
});

// ===== SKILL BAR ANIMATION =====
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        bar.style.width = width;
    });
}

// ===== SMOOTH SCROLLING FOR NAVIGATION =====
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute('href'));
        
        target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
        
        // Close mobile menu if open
        document.querySelector('.navlist').classList.remove('active');
        document.querySelector('#menu-icon').classList.remove('bx-x');
    });
});

// ===== MOBILE MENU TOGGLE =====
const menuIcon = document.querySelector('#menu-icon');
const navList = document.querySelector('.navlist');

menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('bx-x');
    navList.classList.toggle('active');
});

// ===== ACTIVE NAVIGATION HIGHLIGHT =====
function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
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

// ===== SCROLL ANIMATIONS =====
function handleScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in-up');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.classList.add('fade-in-up');
        }
    });
}

// ===== INTERSECTION OBSERVER FOR ANIMATIONS =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            
            // Trigger specific animations based on element
            if (entry.target.classList.contains('skills-container')) {
                animateSkillBars();
            }
        }
    });
}, observerOptions);

// Observe elements for animations
document.addEventListener('DOMContentLoaded', () => {
    const elementsToObserve = document.querySelectorAll('.skills-container, .project-card, .about-text, .achievement-card');
    
    elementsToObserve.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        observer.observe(element);
    });
});

// ===== FLOATING ELEMENTS PARALLAX =====
function initFloatingElements() {
    const floatingElements = document.querySelectorAll('.float-item');
    
    floatingElements.forEach((element, index) => {
        const speed = element.getAttribute('data-speed') || 1;
        
        // Add mouse move parallax effect
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth) * 100;
            const y = (e.clientY / window.innerHeight) * 100;
            
            element.style.transform = `translate(${x * speed * 0.1}px, ${y * speed * 0.1}px)`;
        });
    });
}

// ===== ENHANCED FORM SUBMISSION =====
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById('msg');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Show loading state
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> <span>Sending...</span>';
        submitBtn.disabled = true;
        
        // Simulate form submission (replace with your actual form handler)
        setTimeout(() => {
            msg.innerHTML = "✅ Message sent successfully! I'll get back to you soon.";
            msg.className = "form-message success";
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Hide message after 5 seconds
            setTimeout(() => {
                msg.innerHTML = "";
                msg.className = "form-message";
            }, 5000);
        }, 2000);
    });
}

// ===== SMOOTH BACK TO TOP =====
document.querySelector('.back-to-top').addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== PROJECT CARD INTERACTIONS =====
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-12px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
    });
});

// ===== ACHIEVEMENT CARD ANIMATIONS =====
document.querySelectorAll('.achievement-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        const icon = card.querySelector('.achievement-icon');
        icon.style.transform = 'scale(1.1) rotate(5deg)';
    });
    
    card.addEventListener('mouseleave', () => {
        const icon = card.querySelector('.achievement-icon');
        icon.style.transform = 'scale(1) rotate(0deg)';
    });
});

// ===== FLOATING ICON CLICK EFFECTS =====
document.querySelectorAll('.float-item').forEach(item => {
    item.addEventListener('click', () => {
        // Create ripple effect
        const ripple = document.createElement('div');
        ripple.style.position = 'absolute';
        ripple.style.width = '100px';
        ripple.style.height = '100px';
        ripple.style.background = 'rgba(0, 217, 255, 0.3)';
        ripple.style.borderRadius = '50%';
        ripple.style.transform = 'scale(0)';
        ripple.style.animation = 'ripple 0.6s linear';
        ripple.style.pointerEvents = 'none';
        
        item.style.position = 'relative';
        item.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ===== EVENT LISTENERS =====
window.addEventListener('scroll', () => {
    updateActiveNav();
    handleScrollAnimations();
});

window.addEventListener('resize', () => {
    // Close mobile menu on resize
    navList.classList.remove('active');
    menuIcon.classList.remove('bx-x');
});

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', () => {
    // Initialize floating elements
    initFloatingElements();
    
    // Add smooth reveal animation to page elements
    const revealElements = document.querySelectorAll('section');
    revealElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = `all 0.6s ease ${index * 0.1}s`;
        
        setTimeout(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, 100 + (index * 100));
    });
    
    // Initialize scroll animations
    handleScrollAnimations();
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
        handleScrollAnimations();
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
document.querySelectorAll('.social-icon, .method-details a').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        console.log(`User clicked: ${href}`);
        // You can add analytics tracking here
    });
});

// ===== LOADING SCREEN (OPTIONAL) =====
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Trigger entrance animations
    setTimeout(() => {
        document.querySelectorAll('.achievement-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 150);
        });
    }, 500);
});
