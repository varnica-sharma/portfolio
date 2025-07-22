// Floating tags animation
const tags = [
  "Machine Learning",
  "Bioinformatics",
  "Graph Networks",
  "Deep Learning",
  "Data Mining",
  "Streamlit",
  "PyTorch",
  "Healthcare AI",
  "Statistics",
  "Visualization"
];
const tagsContainer = document.getElementById('floating-tags');
tags.forEach((text, idx) => {
  const tag = document.createElement('div');
  tag.className = 'float-tag';
  tag.style.animationDelay = (idx * 0.5) + 's';
  tag.innerHTML = `<i class='bx bx-badge-check'></i> ${text}`;
  tagsContainer.appendChild(tag);
});

// Typewriter effect
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
  setTimeout(typeWriter, deleting ? 47 : 113);
}
window.onload = typeWriter;

// Highlight current nav section
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('header nav a');
  let cur = '';
  sections.forEach(sec => {
    if (window.scrollY + 90 >= sec.offsetTop) cur = sec.id;
  });
  navLinks.forEach(a => {
    a.classList.remove('active');
    if (a.getAttribute('href') === `#${cur}`) a.classList.add('active');
  });
});
