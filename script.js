/* -------- particles -------- */
particlesJS.load('particles',
  'https://gistcdn.githack.com/simeydotme/4ace180105d581aba3a0990353d363df/raw/particles.json'
);

/* -------- mobile menu -------- */
const menuIcon = document.getElementById('menu-icon');
const navlist  = document.querySelector('.navlist');
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};
window.addEventListener('scroll', () => {
  menuIcon.classList.remove('bx-x');
  navlist.classList.remove('open');
});

/* -------- sticky navbar + link highlight -------- */
const navbar   = document.getElementById('navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
function activeMenu() {
  let index = sections.length;
  while (--index && window.scrollY + 120 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove('active'));
  navLinks[index].classList.add('active');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}
activeMenu();
window.addEventListener('scroll', activeMenu);

/* -------- counters -------- */
document.querySelectorAll('.counter').forEach(counter => {
  const update = () => {
    const target = +counter.dataset.target;
    const current = +counter.innerText;
    const inc = target / 200;
    if (current < target) {
      counter.innerText = Math.ceil(current + inc);
      requestAnimationFrame(update);
    } else counter.innerText = target;
  };
  update();
});

/* -------- typing effect -------- */
const words = ['Data-Science Enthusiast', 'ML Researcher', 'Healthcare AI Researcher'];
let i = 0, j = 0, current = '', isDeleting = false;
const typedEl = document.getElementById('typed');
function type() {
  current = words[i];
  typedEl.innerText = current.slice(0, j);
  if (!isDeleting && j < current.length) j++;
  else if (isDeleting && j > 0) j--;
  else {
    if (!isDeleting) { isDeleting = true; setTimeout(type, 1000); return; }
    isDeleting = false; i = (i + 1) % words.length;
  }
  setTimeout(type, isDeleting ? 50 : 120);
}
type();

/* -------- skills bars -------- */
const bars = document.querySelectorAll('.bar');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      const pct = e.target.dataset.width + '%';
      e.target.style.setProperty('--w', pct);
      e.target.style.animation = 'grow 1.2s forwards';
      observer.unobserve(e.target);
    }
  });
},{threshold:.6});
bars.forEach(bar => observer.observe(bar));

/* -------- theme toggle -------- */
const toggle  = document.getElementById('theme-toggle');
const icon    = document.querySelector('#theme-toggle i');
const dark = () => document.documentElement.removeAttribute('data-theme');
const light = () => document.documentElement.setAttribute('data-theme','light');
toggle.onclick = () => {
  const isLight = document.documentElement.hasAttribute('data-theme');
  isLight ? dark() : light();
  icon.classList.toggle('fa-moon');
  icon.classList.toggle('fa-sun');
};

/* -------- google sheet form -------- */
const form = document.forms['submit-to-google-sheet'];
const msg  = document.getElementById('msg');
if (form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    fetch('https://script.google.com/macros/s/AKfycbxzLfKeDBN8MNtEvFZf8F2J0xc0n18FD98EVWr1AS71cAAIPI9ZTZSLNuvCNtadUfPnVA/exec',
      { method:'POST', body:new FormData(form) })
      .then(() => { msg.innerHTML='Message sent ✔'; form.reset(); })
      .catch(()  => { msg.innerHTML='Error, please try again'; })
      .finally(() => setTimeout(()=> msg.innerHTML='',5000));
  });
}
