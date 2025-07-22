// Animated Typewriter
const roles = [
    "AI Developer",
    "Analytics Engineer",
    "Data Storyteller",
    "Business Insights Partner",
    "Problem Solver"
];
let roleIdx = 0, charPos = 0, del = false;
function typeLoop() {
    const el = document.getElementById("typed-txt");
    if (!el) return;
    let curr = roles[roleIdx];
    if (!del) {
        el.textContent = curr.slice(0, charPos + 1);
        charPos++;
        if (charPos === curr.length) {
            del = true;
            setTimeout(typeLoop, 1200);
            return;
        }
    } else {
        el.textContent = curr.slice(0, charPos - 1);
        charPos--;
        if (charPos === 0) {
            roleIdx = (roleIdx + 1) % roles.length;
            del = false;
        }
    }
    setTimeout(typeLoop, del ? 45 : 110);
}
document.addEventListener('DOMContentLoaded', () => setTimeout(typeLoop, 240));

// Skill bar animation
function animateSkillBars() {
    document.querySelectorAll('.bar-val').forEach(bar => {
        let width = bar.dataset.width || 0;
        bar.style.width = width + '%';
    });
}
document.addEventListener('DOMContentLoaded', animateSkillBars);

// Tabs
function initTabs() {
    let btns = document.querySelectorAll('.tab-btn');
    let tabs = document.querySelectorAll('.tab-body');
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            tabs.forEach(tab => tab.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
            if(btn.dataset.tab === 'skills') setTimeout(animateSkillBars, 350);
        });
    });
}
document.addEventListener('DOMContentLoaded', initTabs);

// Responsive menu
const navBtn = document.getElementById('nav-toggle');
const navList = document.getElementById('site-nav');
navBtn.addEventListener('click', () => {
    navList.classList.toggle('open');
    navBtn.classList.toggle('active');
});
document.querySelectorAll('#site-nav a').forEach(link => {
    link.addEventListener('click', () => {
        navList.classList.remove('open');
        navBtn.classList.remove('active');
    })
});
window.addEventListener('resize', () => {
    if (window.innerWidth > 700) {
        navList.classList.remove('open');
        navBtn.classList.remove('active');
    }
});
