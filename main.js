// FLOATING TAGS HERO
const tags = [
  "Machine Learning", "Time Series Forecasting", "Graph Neural Networks", "Deep Learning",
  "XGBoost & CatBoost", "Streamlit", "PyTorch", "Healthcare AI", "FastAPI & Docker",
  "NLP & Transformers", "AWS Cloud", "Predictive Modeling", "Data Pipelines", "LLM Engineering"
];
const heroTagPositions = [
  [30, 15], [85, 13], [60, 25], [140, 60], [100, 80],
  [55, 78], [120, 50], [170, 26], [180, 70], [115, 10],
  [180, 40], [95, 60], [160, 85], [53, 51]
];
const tagsContainer = document.getElementById('floating-tags');
if (tagsContainer) {
  tags.forEach((text, idx) => {
    if (idx < heroTagPositions.length) {
      const tag = document.createElement('div');
      tag.className = 'float-tag';
      tag.style.top = heroTagPositions[idx][0] + 'px';
      tag.style.left = `calc(${heroTagPositions[idx][1]}vw - 100px)`;
      tag.style.animationDelay = (idx * 0.3) + 's';
      tag.innerHTML = `<i class='bx bx-badge-check'></i> ${text}`;
      tagsContainer.appendChild(tag);
    }
  });
}

// TYPEWRITER EFFECT
const roles = [
  "ML Engineer & Researcher",
  "Time Series Forecasting Expert",
  "Healthcare AI Specialist",
  "Published IEEE Researcher",
  "Data Pipeline Architect",
  "Graph Neural Network Developer",
  "NLP & LLM Engineer"
];

let roleIndex = 0, charIndex = 0, deleting = false;

function typeWriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  
  const current = roles[roleIndex];
  const colors = ['#6366f1', '#8b5cf6', '#06b6d4', '#10b981'];
  el.style.transition = "color 0.3s";
  el.style.color = colors[roleIndex % colors.length];
  
  if (!deleting) {
    el.textContent = current.substring(0, charIndex + 1);
    if (++charIndex === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1500);
      return;
    }
  } else {
    el.textContent = current.substring(0, charIndex - 1);
    if (--charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  
  setTimeout(typeWriter, deleting ? 50 : 120);
}

// Start typewriter on load
window.addEventListener('DOMContentLoaded', typeWriter);

// ABOUT TABS INTERACTION
const aboutTabs = document.querySelectorAll('.about-btn');
const aboutCards = document.querySelectorAll('.about-content-card');

aboutTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    aboutTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    
    aboutCards.forEach(card => card.classList.remove('active'));
    const targetCard = document.getElementById('about-content-' + tab.dataset.target);
    if (targetCard) {
      targetCard.classList.add('active');
    }
  });
});

// NAVIGATION LINK HIGHLIGHT ON SCROLL
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  let currentSection = '';
  
  sections.forEach(sec => {
    const sectionTop = sec.offsetTop;
    const sectionHeight = sec.clientHeight;
    if (window.scrollY >= sectionTop - 150) {
      currentSection = sec.getAttribute('id');
    }
  });
  
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + currentSection) {
      link.classList.add('active');
    }
  });
});

// SMOOTH SCROLL FOR ANCHOR LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
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

// ADD ANIMATION ON SCROLL
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
  const animateElements = document.querySelectorAll('.project-card, .contact-card, .skill-category');
  animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
  });
});
