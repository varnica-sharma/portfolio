// FLOATING TAGS HERO
const tags = [
  "Machine Learning", "Bioinformatics", "Graph Networks", "Deep Learning",
  "Data Mining", "Streamlit", "PyTorch", "Healthcare AI", "Statistics", "Visualization",
  "R Programming", "ML Ops", "Predictive Modeling", "Analytics", "Data Engineering"
];
const heroTagPositions = [
  [10, 48], [24, 10], [32, 85], [60, 20], [56, 55], [12, 65], [85, 30], [77, 71], [45, 10], [55, 75],
  [68, 45], [30, 57], [82, 50], [22, 28], [75, 66]
];
const tagsContainer = document.getElementById('floating-tags');
tags.forEach((text, idx) => {
  const tag = document.createElement('div');
  tag.className = 'float-tag';
  tag.style.top = heroTagPositions[idx][0] + 'px';
  tag.style.left = `calc(${heroTagPositions[idx][1]}vw)`;
  tag.style.animationDelay = (idx * 0.4) + 's';
  tag.innerHTML = `<i class='bx bx-badge-check'></i> ${text}`;
  tagsContainer.appendChild(tag);
});

// TYPEWRITER
const roles = [
  "Healthcare Data Specialist",
  "Bioinformatics Enthusiast",
  "AI & ML Innovator",
  "Predictive Modeling Pro"
];
let roleIndex = 0, charIndex = 0, deleting = false;
function typeWriter() {
  const el = document.getElementById('typewriter');
  if (!el) return;
  const current = roles[roleIndex];
  el.style.transition = "color 0.2s";
  el.style.color = (roleIndex % 2 === 0) ? "#856ad3" : "#74e4ae";
  if (!deleting) {
    el.textContent = current.substring(0, charIndex + 1);
    if (++charIndex === current.length) {
      deleting = true;
      setTimeout(typeWriter, 1100);
      return;
    }
  } else {
    el.textContent = current.substring(0, charIndex - 1);
    if (--charIndex === 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  }
  setTimeout(typeWriter, deleting ? 41 : 111);
}
window.onload = typeWriter;

// ABOUT ME TABS
const aboutTabs = document.querySelectorAll('.about-btn');
const aboutCards = document.querySelectorAll('.about-content-card');
aboutTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    aboutTabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    aboutCards.forEach(card => card.classList.remove('active'));
    document.getElementById('about-content-' + tab.dataset.target).classList.add('active');
  });
});

// NAV HIGHLIGHT
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  let cur = '';
  sections.forEach(sec => {
    if (window.scrollY + 110 >= sec.offsetTop) cur = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === '#' + cur) a.classList.add('active');
  });
});
