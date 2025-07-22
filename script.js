/* =================  PARTICLES  ================= */
particlesJS("particles-js", {
  "particles": {
    "number": { "value": 55, "density": { "enable": true, "value_area": 800 } },
    "color": { "value": "#00D9FF" },
    "shape": { "type": "circle" },
    "opacity": { "value": 0.3, "random": false },
    "size": { "value": 3, "random": true },
    "line_linked": { "enable": true, "distance": 150, "color": "#00D9FF", "opacity": 0.2, "width": 1 },
    "move": { "enable": true, "speed": 1, "direction": "none", "out_mode": "bounce" }
  },
  "interactivity": {
    "events": {
      "onhover": { "enable": true, "mode": "repulse" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "repulse": { "distance": 120, "duration": 0.4 },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});

/* =================  TYPING EFFECT  ================= */
const typingEl = document.getElementById("typing");
const words = ["Data-Science Enthusiast", "Healthcare-AI Researcher", "ML Engineer"];
let idx = 0, char = 0, current = "", isDeleting = false, delay = 100;

function type() {
  current = words[idx];
  typingEl.textContent = current.substring(0, char);

  if (!isDeleting && char++ === current.length) {
    isDeleting = true; delay = 1800;                 // pause at end
  } else if (isDeleting && char-- === 0) {
    isDeleting = false; idx = (idx + 1) % words.length; delay = 200;
  } else {
    delay = isDeleting ? 60 : 120;
  }
  setTimeout(type, delay);
}
setTimeout(type, 500);

/* =================  COUNTER UP  ================= */
const counters = document.querySelectorAll(".count");
const options = { threshold: 0.6 };
const countObs = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !entry.target.dataset.done) {
      const update = () => {
        const target = +entry.target.dataset.count || +entry.target.dataset.target;
        const c = +entry.target.textContent;
        const inc = Math.ceil(target / 60);
        if (c < target) {
          entry.target.textContent = c + inc;
          setTimeout(update, 40);
        } else {
          entry.target.textContent = target;
          entry.target.dataset.done = true;
        }
      };
      update();
    }
  });
}, options);
counters.forEach(c => countObs.observe(c));

/* =================  NAV ACTIVE + STICKY  ================= */
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");
function updateNav() {
  let index = sections.length;
  while (--index && window.scrollY + 120 < sections[index].offsetTop) {}
  navLinks.forEach(link => link.classList.remove("active"));
  navLinks[index].classList.add("active");
}
updateNav(); window.addEventListener("scroll", updateNav);

const header = document.getElementById("page-header");
window.addEventListener("scroll", () => {
  header.classList.toggle("sticky", window.scrollY > 60);
});

/* =================  MOBILE MENU  ================= */
const menuIcon = document.getElementById("menu-icon");
const navlist = document.querySelector(".navlist");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
window.addEventListener("scroll", () => {
  menuIcon.classList.remove("bx-x");
  navlist.classList.remove("open");
});

/* =================  THEME TOGGLE  ================= */
const toggleBtn = document.getElementById("theme-toggle");
const icon = document.querySelector("#theme-toggle i");
let theme = localStorage.getItem("theme") || "dark";
setTheme(theme);

toggleBtn.onclick = () => {
  theme = theme === "dark" ? "light" : "dark";
  setTheme(theme);
};
function setTheme(t) {
  document.documentElement.setAttribute("data-theme", t);
  icon.className = t === "dark" ? "fas fa-moon" : "fas fa-sun";
  localStorage.setItem("theme", t);
}

/* =================  GOOGLE-SHEET FORM  ================= */
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    fetch("https://script.google.com/macros/s/AKfycbxzLfKeDBN8MNtEvFZf8F2J0xc0n18FD98EVWr1AS71cAAIPI9ZTZSLNuvCNtadUfPnVA/exec",
      { method: "POST", body: new FormData(form) })
      .then(() => {
        msg.textContent = "Message sent ✔";
        setTimeout(() => (msg.textContent = ""), 5000);
        form.reset();
      })
      .catch(() => alert("Message failed. Please email me directly!"));
  });
}
