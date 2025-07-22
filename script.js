@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

/* ===== CSS VARIABLES ===== */
:root {
    /* Deep Space Theme */
    --bg-primary: #0B0E12;
    --bg-secondary: #1A2238;
    --bg-accent: #2A2F42;
    
    /* Neon Colors */
    --cyan: #00D9FF;
    --purple: #8B5CF6;
    --pink: #F472B6;
    --orange: #F97316;
    --green: #10B981;
    
    /* Gradients */
    --gradient-primary: linear-gradient(135deg, var(--cyan), var(--purple));
    --gradient-accent: linear-gradient(135deg, var(--pink), var(--orange));
    --gradient-success: linear-gradient(135deg, var(--green), var(--cyan));
    
    /* Text Colors */
    --text-primary: #FFFFFF;
    --text-secondary: #B8BCC8;
    --text-muted: #6B7280;
    
    /* Glass Effect */
    --glass-bg: rgba(255, 255, 255, 0.1);
    --glass-border: rgba(255, 255, 255, 0.2);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
    
    /* Neon Glow */
    --neon-glow: 0 0 20px rgba(0, 217, 255, 0.5);
    --neon-glow-strong: 0 0 30px rgba(0, 217, 255, 0.8);
    
    /* Typography */
    --font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    --font-size-xs: 0.75rem;
    --font-size-sm: 0.875rem;
    --font-size-base: 1rem;
    --font-size-lg: 1.125rem;
    --font-size-xl: 1.25rem;
    --font-size-2xl: 1.5rem;
    --font-size-3xl: 1.875rem;
    --font-size-4xl: 2.25rem;
    --font-size-5xl: 3rem;
    
    /* Spacing */
    --space-xs: 0.5rem;
    --space-sm: 1rem;
    --space-md: 1.5rem;
    --space-lg: 2rem;
    --space-xl: 3rem;
    --space-2xl: 4rem;
    
    /* Border Radius */
    --radius-sm: 0.5rem;
    --radius-md: 1rem;
    --radius-lg: 1.5rem;
    --radius-xl: 2rem;
    
    /* Transitions */
    --transition-fast: 0.15s ease;
    --transition-normal: 0.3s ease;
    --transition-slow: 0.5s ease;
    
    /* Z-Index */
    --z-dropdown: 1000;
    --z-sticky: 1020;
    --z-fixed: 1030;
    --z-modal: 1040;
    --z-tooltip: 1070;
}

/* Light Theme Variables */
[data-theme="light"] {
    --bg-primary: #FFFFFF;
    --bg-secondary: #F8FAFC;
    --bg-accent: #E2E8F0;
    --text-primary: #1F2937;
    --text-secondary: #4B5563;
    --text-muted: #9CA3AF;
    --glass-bg: rgba(255, 255, 255, 0.8);
    --glass-border: rgba(0, 0, 0, 0.1);
    --glass-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
}

/* ===== RESET & BASE ===== */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    font-size: 16px;
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    line-height: 1.6;
    color: var(--text-primary);
    background: var(--bg-primary);
    overflow-x: hidden;
    transition: all var(--transition-normal);
}

/* ===== PARTICLE BACKGROUND ===== */
#particles-js {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* ===== THEME TOGGLE ===== */
.theme-toggle {
    position: fixed;
    top: 2rem;
    right: 2rem;
    width: 50px;
    height: 50px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: var(--z-fixed);
    transition: all var(--transition-normal);
    box-shadow: var(--glass-shadow);
}

.theme-toggle:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: var(--glass-shadow), var(--neon-glow);
}

#theme-icon {
    font-size: 1.2rem;
    color: var(--cyan);
    transition: all var(--transition-normal);
}

/* ===== GLASS MORPHISM UTILITIES ===== */
.glass {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    box-shadow: var(--glass-shadow);
}

.glass-btn {
    position: relative;
    overflow: hidden;
    transition: all var(--transition-normal);
}

.glass-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: left 0.5s;
}

.glass-btn:hover::before {
    left: 100%;
}

/* ===== HEADER ===== */
.glass-header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 1rem 5%;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border-bottom: 1px solid var(--glass-border);
    display: flex;
    align-items: center;
    justify-content: space-between;
    z-index: var(--z-sticky);
    transition: all var(--transition-normal);
}

.logo-container {
    display: flex;
    align-items: center;
}

.logo-text {
    font-size: var(--font-size-2xl);
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    cursor: pointer;
    transition: all var(--transition-normal);
}

.logo-text:hover {
    transform: scale(1.05);
    filter: drop-shadow(0 0 10px rgba(0, 217, 255, 0.5));
}

.navlist {
    display: flex;
    list-style: none;
    gap: var(--space-lg);
    padding: var(--space-sm) var(--space-lg);
    border-radius: var(--radius-lg);
}

.nav-link {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 500;
    padding: var(--space-sm) var(--space-md);
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
    position: relative;
}

.nav-link::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 2px;
    background: var(--gradient-primary);
    transition: all var(--transition-normal);
    transform: translateX(-50%);
}

.nav-link:hover,
.nav-link.active {
    color: var(--cyan);
    transform: translateY(-2px);
}

.nav-link:hover::before,
.nav-link.active::before {
    width: 80%;
}

#menu-icon {
    display: none;
    font-size: 1.5rem;
    color: var(--cyan);
    cursor: pointer;
    padding: var(--space-sm);
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
}

/* ===== HERO SECTION ===== */
.home {
    min-height: 100vh;
    display: flex;
    align-items: center;
    padding: 5rem 5% 2rem;
    position: relative;
}

.hero-container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
    align-items: center;
}

.home-content {
    z-index: 2;
}

.availability-badge {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-sm) var(--space-md);
    border-radius: 50px;
    font-size: var(--font-size-sm);
    font-weight: 500;
    margin-bottom: var(--space-lg);
    animation: float 3s ease-in-out infinite;
}

.pulse {
    color: var(--green);
    animation: pulse 2s infinite;
}

.hero-title {
    font-size: clamp(2.5rem, 8vw, 4rem);
    font-weight: 900;
    line-height: 1.1;
    margin-bottom: var(--space-md);
    color: var(--text-primary);
}

.name-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    position: relative;
}

.name-gradient::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: var(--gradient-primary);
    border-radius: 2px;
    opacity: 0.7;
}

.typing-container {
    margin-bottom: var(--space-lg);
}

.hero-subtitle {
    font-size: var(--font-size-2xl);
    font-weight: 600;
    color: var(--cyan);
    display: flex;
    align-items: center;
}

.typing-text {
    min-height: 1.5em;
}

.cursor {
    animation: blink 1s infinite;
    color: var(--cyan);
}

.hero-description {
    font-size: var(--font-size-lg);
    line-height: 1.8;
    color: var(--text-secondary);
    margin-bottom: var(--space-xl);
    max-width: 600px;
}

.stats-container {
    display: flex;
    gap: var(--space-xl);
    padding: var(--space-lg);
    border-radius: var(--radius-lg);
    margin-bottom: var(--space-xl);
}

.stat-item {
    text-align: center;
    flex: 1;
}

.stat-number {
    font-size: var(--font-size-3xl);
    font-weight: 800;
    color: var(--cyan);
    display: block;
}

.stat-symbol {
    font-size: var(--font-size-2xl);
    color: var(--cyan);
    font-weight: 700;
}

.stat-label {
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    font-weight: 500;
    margin-top: var(--space-xs);
}

.cta-buttons {
    display: flex;
    gap: var(--space-md);
    margin-bottom: var(--space-xl);
}

.btn {
    display: inline-flex;
    align-items: center;
    gap: var(--space-sm);
    padding: var(--space-md) var(--space-lg);
    font-size: var(--font-size-base);
    font-weight: 600;
    text-decoration: none;
    border-radius: var(--radius-md);
    border: none;
    cursor: pointer;
    transition: all var(--transition-normal);
    position: relative;
    overflow: hidden;
}

.btn-primary {
    background: var(--gradient-primary);
    color: white;
    box-shadow: var(--neon-glow);
}

.btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--neon-glow-strong);
}

.btn-secondary {
    background: transparent;
    color: var(--cyan);
    border: 2px solid var(--cyan);
}

.btn-secondary:hover {
    background: var(--cyan);
    color: var(--bg-primary);
    box-shadow: var(--neon-glow);
}

.social-links {
    display: flex;
    gap: var(--space-md);
}

.social-icon {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-decoration: none;
    color: var(--text-primary);
    font-size: var(--font-size-lg);
    transition: all var(--transition-normal);
}

.social-icon:hover {
    transform: translateY(-3px) scale(1.1);
    color: var(--cyan);
    box-shadow: var(--neon-glow);
}

/* ===== HERO VISUAL ===== */
.hero-visual {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.floating-elements {
    position: relative;
    width: 400px;
    height: 400px;
}

.float-item {
    position: absolute;
    width: 60px;
    height: 60px;
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border: 1px solid var(--glass-border);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-xl);
    color: var(--cyan);
    animation: orbit 20s linear infinite;
    box-shadow: var(--glass-shadow);
}

.float-item:nth-child(1) {
    top: 10%;
    left: 10%;
    animation-delay: -5s;
}

.float-item:nth-child(2) {
    top: 10%;
    right: 10%;
    animation-delay: -10s;
}

.float-item:nth-child(3) {
    bottom: 10%;
    left: 10%;
    animation-delay: -15s;
}

.float-item:nth-child(4) {
    bottom: 10%;
    right: 10%;
    animation-delay: 0s;
}

.hologram-effect {
    width: 300px;
    height: 300px;
    border: 2px solid var(--cyan);
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0, 217, 255, 0.1) 0%, transparent 70%);
    animation: rotate 10s linear infinite;
    position: relative;
}

.hologram-effect::before,
.hologram-effect::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 1px solid var(--cyan);
    border-radius: 50%;
    opacity: 0.3;
}

.hologram-effect::before {
    width: 80%;
    height: 80%;
    animation: rotate 15s linear infinite reverse;
}

.hologram-effect::after {
    width: 60%;
    height: 60%;
    animation: rotate 25s linear infinite;
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: var(--space-sm);
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
    animation: float 3s ease-in-out infinite;
}

.mouse {
    width: 24px;
    height: 40px;
    border: 2px solid var(--cyan);
    border-radius: 15px;
    position: relative;
}

.wheel {
    width: 4px;
    height: 8px;
    background: var(--cyan);
    border-radius: 2px;
    position: absolute;
    top: 8px;
    left: 50%;
    transform: translateX(-50%);
    animation: mouseWheel 2s infinite;
}

/* ===== ABOUT SECTION ===== */
.about-section {
    padding: var(--space-2xl) 5%;
    background: var(--bg-secondary);
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.section-header {
    text-align: center;
    margin-bottom: var(--space-2xl);
}

.section-title {
    font-size: var(--font-size-4xl);
    font-weight: 800;
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    margin-bottom: var(--space-md);
    position: relative;
}

.section-title::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: var(--gradient-primary);
    border-radius: 2px;
}

.section-subtitle {
    font-size: var(--font-size-lg);
    color: var(--text-secondary);
    max-width: 600px;
    margin: 0 auto;
}

.about-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
    align-items: start;
}

.about-content {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.about-text {
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
}

.about-text h3 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--cyan);
    margin-bottom: var(--space-md);
}

.about-text p {
    color: var(--text-secondary);
    line-height: 1.8;
    margin-bottom: var(--space-md);
}

.education-timeline {
    margin-top: var(--space-lg);
}

.timeline-item {
    display: flex;
    align-items: flex-start;
    gap: var(--space-md);
    padding: var(--space-md);
    border-radius: var(--radius-md);
    margin-bottom: var(--space-md);
    position: relative;
}

.timeline-dot {
    width: 12px;
    height: 12px;
    background: var(--gradient-primary);
    border-radius: 50%;
    margin-top: 4px;
    flex-shrink: 0;
}

.timeline-content h4 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-xs);
}

.timeline-date {
    font-size: var(--font-size-sm);
    color: var(--cyan);
    font-weight: 500;
    margin-bottom: var(--space-xs);
}

.timeline-content p {
    color: var(--text-secondary);
    margin: 0;
}

.skills-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.skill-category {
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
}

.skill-category h3 {
    font-size: var(--font-size-xl);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-lg);
    display: flex;
    align-items: center;
    gap: var(--space-sm);
}

.skill-category h3 i {
    color: var(--cyan);
}

.skill-items {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.skill-item {
    display: flex;
    flex-direction: column;
    gap: var(--space-sm);
}

.skill-name {
    font-weight: 500;
    color: var(--text-primary);
}

.skill-bar {
    height: 6px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 3px;
    overflow: hidden;
    position: relative;
}

.skill-progress {
    height: 100%;
    background: var(--gradient-primary);
    border-radius: 3px;
    width: 0;
    transition: width 1s ease;
    position: relative;
}

.skill-progress::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    animation: shimmer 2s infinite;
}

.tech-stack {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
}

.tech-badge {
    padding: var(--space-sm) var(--space-md);
    background: rgba(0, 217, 255, 0.1);
    color: var(--cyan);
    border: 1px solid rgba(0, 217, 255, 0.3);
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-weight: 500;
    transition: all var(--transition-normal);
}

.tech-badge:hover {
    background: rgba(0, 217, 255, 0.2);
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 217, 255, 0.3);
}

.experience-list {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.exp-item {
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-md);
    border-left: 3px solid var(--cyan);
}

.exp-item h4 {
    font-size: var(--font-size-lg);
    font-weight: 600;
    color: var(--text-primary);
    margin-bottom: var(--space-xs);
}

.exp-company {
    color: var(--cyan);
    font-weight: 500;
    display: block;
    margin-bottom: var(--space-xs);
}

.exp-date {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
}

/* ===== PROJECTS SECTION ===== */
.projects-section {
    padding: var(--space-2xl) 5%;
    background: var(--bg-primary);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: var(--space-xl);
}

.project-card {
    border-radius: var(--radius-lg);
    overflow: hidden;
    transition: all var(--transition-normal);
    display: flex;
    flex-direction: column;
    position: relative;
}

.project-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--glass-shadow), var(--neon-glow);
}

.project-card.featured {
    border: 2px solid var(--cyan);
    box-shadow: var(--neon-glow);
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: var(--space-lg);
    padding-bottom: var(--space-md);
}

.project-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-lg);
    color: white;
}

.featured-badge {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-sm);
    background: var(--gradient-accent);
    color: white;
    font-size: var(--font-size-xs);
    font-weight: 600;
    border-radius: var(--radius-sm);
    text-transform: uppercase;
    letter-spacing: 0.05em;
}

.project-content {
    padding: 0 var(--space-lg) var(--space-lg);
    flex-grow: 1;
}

.project-title {
    font-size: var(--font-size-xl);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
    line-height: 1.3;
}

.project-description {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-lg);
}

.project-highlights {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-sm);
    margin-bottom: var(--space-lg);
}

.highlight-item {
    display: flex;
    align-items: center;
    gap: var(--space-xs);
    padding: var(--space-xs) var(--space-sm);
    background: rgba(16, 185, 129, 0.1);
    color: var(--green);
    border: 1px solid rgba(16, 185, 129, 0.3);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-weight: 500;
}

.tech-stack-project {
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-xs);
    margin-bottom: var(--space-lg);
}

.tech-tag {
    padding: var(--space-xs) var(--space-sm);
    background: rgba(255, 255, 255, 0.1);
    color: var(--text-primary);
    border-radius: var(--radius-sm);
    font-size: var(--font-size-xs);
    font-weight: 500;
}

.project-actions {
    display: flex;
    gap: var(--space-sm);
    padding: 0 var(--space-lg) var(--space-lg);
}

.btn-project {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--space-xs);
    padding: var(--space-sm) var(--space-md);
    text-decoration: none;
    border-radius: var(--radius-md);
    font-size: var(--font-size-sm);
    font-weight: 600;
    transition: all var(--transition-normal);
}

.btn-live {
    background: var(--gradient-primary);
    color: white;
    box-shadow: 0 0 15px rgba(0, 217, 255, 0.3);
}

.btn-live:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 20px rgba(0, 217, 255, 0.5);
}

.btn-code {
    background: transparent;
    color: var(--text-primary);
    border: 1px solid var(--glass-border);
}

.btn-code:hover {
    background: var(--glass-bg);
    transform: translateY(-2px);
}

.coming-soon {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    border: 2px dashed var(--glass-border);
}

.coming-soon-content {
    text-align: center;
    color: var(--text-secondary);
}

.coming-soon-icon {
    width: 80px;
    height: 80px;
    background: var(--glass-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-2xl);
    color: var(--cyan);
    margin: 0 auto var(--space-md);
}

.coming-soon-content h3 {
    font-size: var(--font-size-xl);
    margin-bottom: var(--space-sm);
}

/* ===== CONTACT SECTION ===== */
.contact-section {
    padding: var(--space-2xl) 5%;
    background: var(--bg-secondary);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-2xl);
    align-items: start;
}

.contact-info {
    display: flex;
    flex-direction: column;
    gap: var(--space-lg);
}

.contact-card {
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
}

.contact-card h3 {
    font-size: var(--font-size-2xl);
    font-weight: 700;
    color: var(--text-primary);
    margin-bottom: var(--space-md);
}

.contact-card p {
    color: var(--text-secondary);
    line-height: 1.6;
    margin-bottom: var(--space-lg);
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.contact-method {
    display: flex;
    align-items: center;
    gap: var(--space-md);
    padding: var(--space-md);
    background: rgba(255, 255, 255, 0.05);
    border-radius: var(--radius-md);
    transition: all var(--transition-normal);
}

.contact-method:hover {
    background: rgba(255, 255, 255, 0.1);
    transform: translateX(5px);
}

.method-icon {
    width: 50px;
    height: 50px;
    background: var(--gradient-primary);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: var(--font-size-lg);
    color: white;
    flex-shrink: 0;
}

.method-details {
    flex: 1;
}

.method-label {
    display: block;
    font-size: var(--font-size-sm);
    color: var(--text-secondary);
    font-weight: 500;
    margin-bottom: var(--space-xs);
}

.method-details a {
    color: var(--text-primary);
    text-decoration: none;
    font-weight: 600;
    transition: all var(--transition-normal);
}

.method-details a:hover {
    color: var(--cyan);
}

.contact-form-container {
    display: flex;
    flex-direction: column;
    gap: var(--space-md);
}

.contact-form {
    padding: var(--space-xl);
    border-radius: var(--radius-lg);
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: var(--space-md);
    margin-bottom: var(--space-md);
}

.form-group {
    position: relative;
    margin-bottom: var(--space-md);
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: var(--space-md) var(--space-md);
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--glass-border);
    border-radius: var(--radius-md);
    color: var(--text-primary);
    font-size: var(--font-size-base);
    font-family: inherit;
    transition: all var(--transition-normal);
}

.form-group input:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--cyan);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 0 0 3px rgba(0, 217, 255, 0.1);
}

.form-group label {
    position: absolute;
    top: -8px;
    left: var(--space-md);
    background: var(--bg-secondary);
    color: var(--text-secondary);
    font-size: var(--font-size-xs);
    font-weight: 500;
    padding: 0 var(--space-xs);
    pointer-events: none;
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.submit-btn {
    width: 100%;
    padding: var(--space-md) var(--space-lg);
    font-size: var(--font-size-lg);
    font-weight: 600;
}

.form-message {
    text-align: center;
    padding: var(--space-md);
    border-radius: var(--radius-md);
    font-weight: 500;
}

.form-message.success {
    background: rgba(16, 185, 129, 0.1);
    color: var(--green);
    border: 1px solid rgba(16, 185, 129, 0.3);
}

.form-message.error {
    background: rgba(239, 68, 68, 0.1);
    color: #ef4444;
    border: 1px solid rgba(239, 68, 68, 0.3);
}

/* ===== FOOTER ===== */
.glass-footer {
    background: var(--glass-bg);
    backdrop-filter: blur(20px);
    border-top: 1px solid var(--glass-border);
    padding: var(--space-lg) 5%;
}

.footer-content {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-content p {
    color: var(--text-secondary);
    font-size: var(--font-size-sm);
}

.back-to-top {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    text-decoration: none;
    color: var(--cyan);
    font-size: var(--font-size-lg);
    transition: all var(--transition-normal);
}

.back-to-top:hover {
    transform: translateY(-3px);
    box-shadow: var(--neon-glow);
}

/* ===== ANIMATIONS ===== */
@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
}

@keyframes pulse {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.5; }
}

@keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
}

@keyframes orbit {
    0% { transform: rotate(0deg) translateX(200px) rotate(0deg); }
    100% { transform: rotate(360deg) translateX(200px) rotate(-360deg); }
}

@keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes mouseWheel {
    0% { transform: translateX(-50%) translateY(0); opacity: 0; }
    10%, 90% { opacity: 1; }
    100% { transform: translateX(-50%) translateY(16px); opacity: 0; }
}

@keyframes shimmer {
    0% { left: -100%; }
    100% { left: 100%; }
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* ===== RESPONSIVE DESIGN ===== */
@media (max-width: 1024px) {
    .hero-container,
    .about-grid,
    .contact-grid {
        grid-template-columns: 1fr;
        gap: var(--space-xl);
    }
    
    .hero-visual {
        order: -1;
        margin-bottom: var(--space-lg);
    }
    
    .floating-elements {
        width: 300px;
        height: 300px;
    }
    
    .hologram-effect {
        width: 200px;
        height: 200px;
    }
}

@media (max-width: 768px) {
    :root {
        --font-size-4xl: 2rem;
        --font-size-3xl: 1.75rem;
        --font-size-2xl: 1.375rem;
        --space-2xl: 3rem;
        --space-xl: 2rem;
    }
    
    .navlist {
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background: var(--glass-bg);
        backdrop-filter: blur(20px);
        border: 1px solid var(--glass-border);
        border-top: none;
        flex-direction: column;
        padding: var(--space-lg);
        transform: translateY(-100vh);
        transition: transform var(--transition-normal);
        opacity: 0;
        visibility: hidden;
    }
    
    .navlist.active {
        transform: translateY(0);
        opacity: 1;
        visibility: visible;
    }
    
    #menu-icon {
        display: block;
    }
    
    .home {
        padding: 8rem 5% 2rem;
    }
    
    .stats-container {
        flex-direction: column;
        gap: var(--space-md);
    }
    
    .cta-buttons {
        flex-direction: column;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        gap: var(--space-lg);
    }
    
    .form-row {
        grid-template-columns: 1fr;
    }
    
    .footer-content {
        flex-direction: column;
        gap: var(--space-md);
        text-align: center;
    }
    
    .theme-toggle {
        top: 1rem;
        right: 1rem;
        width: 45px;
        height: 45px;
    }
}

@media (max-width: 480px) {
    .home,
    .about-section,
    .projects-section,
    .contact-section {
        padding-left: var(--space-md);
        padding-right: var(--space-md);
    }
    
    .hero-title {
        font-size: 2rem;
    }
    
    .stats-container {
        padding: var(--space-md);
    }
    
    .about-text,
    .skill-category,
    .contact-card,
    .contact-form {
        padding: var(--space-md);
    }
    
    .floating-elements {
        width: 250px;
        height: 250px;
    }
    
    .float-item {
        width: 50px;
        height: 50px;
        font-size: var(--font-size-lg);
    }
}

/* Utility Classes */
.text-center { text-align: center; }
.text-gradient {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
}

/* Scroll Animations */
.fade-in-up {
    animation: fadeInUp 0.6s ease forwards;
    opacity: 0;
    transform: translateY(30px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
    background: var(--bg-secondary);
}

::-webkit-scrollbar-thumb {
    background: var(--gradient-primary);
    border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
    background: var(--cyan);
}
