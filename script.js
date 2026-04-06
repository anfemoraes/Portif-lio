/* ============================================================
   script.js — André Portfolio
   ============================================================ */

// ── Skills ────────────────────────────────────────────────
const skills = [
  { name: 'C++',        icon: 'fas fa-code',        bg: '#00599C' },
  { name: 'Python',     icon: 'fab fa-python',       bg: '#3776AB' },
  { name: 'React',      icon: 'fab fa-react',        bg: '#222' },
  { name: 'Node.js',    icon: 'fab fa-node-js',      bg: '#3C873A' },
  { name: 'AWS',        icon: 'fab fa-aws',          bg: '#FF9900' },
  { name: 'Azure',      icon: 'fab fa-microsoft',    bg: '#0078D4' },
  { name: 'Linux',      icon: 'fab fa-linux',        bg: '#2b2b2b' },
  { name: 'Git',        icon: 'fab fa-git-alt',      bg: '#F05032' },
  { name: 'PostgreSQL', icon: 'fas fa-database',     bg: '#336791' },
  { name: 'PHP',        icon: 'fab fa-php',          bg: '#8892BF' },
  { name: 'WordPress',  icon: 'fab fa-wordpress',    bg: '#21759B' },
  { name: 'JavaScript', icon: 'fab fa-js',           bg: '#997200' },
];

function renderSkills() {
  const cloud = document.getElementById('skill-cloud');
  if (!cloud) return;
  cloud.innerHTML = '';
  skills.forEach((skill, i) => {
    const b = document.createElement('div');
    b.className = 'skill-badge';
    b.style.backgroundColor = skill.bg;
    b.style.transitionDelay = `${i * 50}ms`;
    b.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
    cloud.appendChild(b);
    requestAnimationFrame(() => requestAnimationFrame(() => b.classList.add('visible')));
  });
}

// ── Timeline ──────────────────────────────────────────────
const timeline = {
  pt: [
    { year: '2022',  title: 'Técnico em Informática — IFSULDEMINAS', desc: 'Base técnica sólida em redes, sistemas e desenvolvimento.',              color: '' },
    { year: '2024',  title: 'FASEPA — Assistente de Informática',     desc: 'Sistemas web com PHP/WordPress e automação de relatórios.',             color: '' },
    { year: '2024',  title: 'Instituto Hator — Mentor Web',           desc: 'Orientação em lógica de programação e tecnologias front-end.',          color: '' },
    { year: '2024',  title: 'SBPC/UFPA — Monitor de Infraestrutura',  desc: 'Configuração de redes e suporte técnico durante o evento.',             color: '' },
    { year: '2024',  title: 'Ciência da Computação — UFRA',           desc: 'Início da graduação. Foco em Cloud, performance e sistemas.',           color: 'green' },
    { year: '2025',  title: 'Enactus UFRA — TI',                      desc: 'Sistemas com React e Node.js para impacto social.',                    color: 'green' },
    { year: '2025',  title: 'Hackathon Banco do Brasil — Top 10 🏆',  desc: 'Solução de educação financeira com gamificação. Top 10 nacional.',     color: 'green' },
    { year: '2025',  title: 'UNFCCC (COP30) — Suporte TIC',           desc: 'Suporte técnico multilíngue (EN/ES/FR) para conferências globais.',    color: 'green' },
    { year: 'Agora', title: 'Open to Work',                            desc: 'Disponível para estágios e oportunidades júnior em Cloud/Dev.',        color: 'green' },
  ],
  en: [
    { year: '2022',  title: 'IT Technician — IFSULDEMINAS',           desc: 'Solid technical background in networking, systems and development.',    color: '' },
    { year: '2024',  title: 'FASEPA — IT Assistant',                  desc: 'Web systems with PHP/WordPress and report automation.',                 color: '' },
    { year: '2024',  title: 'Instituto Hator — Web Mentor',           desc: 'Mentored students in programming logic and front-end technologies.',    color: '' },
    { year: '2024',  title: 'SBPC/UFPA — Infrastructure Monitor',     desc: 'Network setup and technical support during the event.',                 color: '' },
    { year: '2024',  title: 'Computer Science — UFRA',                desc: 'Started degree. Focus on Cloud, performance and systems.',              color: 'green' },
    { year: '2025',  title: 'Enactus UFRA — IT',                      desc: 'Built systems with React and Node.js for social impact.',              color: 'green' },
    { year: '2025',  title: 'Banco do Brasil Hackathon — Top 10 🏆',  desc: 'Financial literacy solution with gamification. National top 10.',      color: 'green' },
    { year: '2025',  title: 'UNFCCC (COP30) — ICT Support',           desc: 'Multilingual tech support (EN/ES/FR) for global conferences.',         color: 'green' },
    { year: 'Now',   title: 'Open to Work',                            desc: 'Available for internships and junior roles in Cloud/Dev.',             color: 'green' },
  ]
};

function renderTimeline(lang) {
  const list = document.getElementById('timeline-list');
  if (!list) return;
  const items = timeline[lang] || timeline.pt;
  list.innerHTML = items.map(item => `
    <div class="tl-item">
      <div class="tl-dot ${item.color}"></div>
      <div class="tl-content">
        <div class="tl-year">${item.year}</div>
        <div class="tl-title">${item.title}</div>
        <div class="tl-desc">${item.desc}</div>
      </div>
    </div>
  `).join('');
}

// ── Terminal ──────────────────────────────────────────────
const terminalLines = {
  pt: [
    { txt: 'whoami',                                   cls: 'cmd',   delay: 400  },
    { txt: 'André — Dev Full Stack & Cloud',           cls: '',      delay: 900  },
    { txt: 'cat skills.txt',                           cls: 'cmd',   delay: 1400 },
    { txt: 'React · Node · AWS · C++ · Python · PHP', cls: '',      delay: 1900 },
    { txt: 'cat idiomas.txt',                          cls: 'cmd',   delay: 2400 },
    { txt: 'EN C1 · ES B2 · FR A2',                   cls: '',      delay: 2900 },
    { txt: 'echo $STATUS',                             cls: 'cmd',   delay: 3400 },
    { txt: '>> Disponível para oportunidades',         cls: 'green', delay: 3900 },
  ],
  en: [
    { txt: 'whoami',                                   cls: 'cmd',   delay: 400  },
    { txt: 'André — Full Stack Dev & Cloud',           cls: '',      delay: 900  },
    { txt: 'cat skills.txt',                           cls: 'cmd',   delay: 1400 },
    { txt: 'React · Node · AWS · C++ · Python · PHP', cls: '',      delay: 1900 },
    { txt: 'cat languages.txt',                        cls: 'cmd',   delay: 2400 },
    { txt: 'EN C1 · ES B2 · FR A2',                   cls: '',      delay: 2900 },
    { txt: 'echo $STATUS',                             cls: 'cmd',   delay: 3400 },
    { txt: '>> Open to opportunities',                 cls: 'green', delay: 3900 },
  ]
};

function runTerminal(lang) {
  const body = document.getElementById('term-body');
  const curr = document.getElementById('term-curr');
  if (!body || !curr) return;
  Array.from(body.querySelectorAll('.term-line')).forEach(el => el.remove());
  const lines = terminalLines[lang] || terminalLines.pt;
  lines.forEach(({ txt, cls, delay }) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = `term-line${cls ? ' ' + cls : ''}`;
      const prompt = cls === 'cmd'
        ? `<span style="color:var(--blue)">C:\\Users\\Andre&gt;</span> `
        : '  ';
      div.innerHTML = `${prompt}${txt}`;
      body.insertBefore(div, curr);
    }, delay);
  });
}

// ── i18n — textos estáticos ────────────────────────────────
const i18n = {
  pt: {
    'nav.home':         'Home',
    'nav.projects':     'Projetos',
    'nav.contact':      'Contato',
    'hero.bio':         'Dev Full Stack & Cloud · Graduando em Ciência da Computação na <strong>UFRA</strong>. Multilíngue · Apaixonado por performance.',
    'status.open':      'Disponível',
    'skills.title':     '// linguagens & ferramentas',
    'trajectory.title': '// trajetória',
    'footer.text':      'Construído com Mentalidade C++',
    'badges.title':     '// certificações & badges',
    'badges.verify':    'Verificar <i class="fas fa-external-link-alt"></i>',
  },
  en: {
    'nav.home':         'Home',
    'nav.projects':     'Projects',
    'nav.contact':      'Contact',
    'hero.bio':         'Full Stack Dev & Cloud · Computer Science student at <strong>UFRA</strong>. Multilingual · Passionate about performance.',
    'status.open':      'Available',
    'skills.title':     '// languages & tools',
    'trajectory.title': '// trajectory',
    'footer.text':      'Built with a C++ Mindset',
    'badges.title':     '// certifications & badges',
    'badges.verify':    'Verify<i class="fas fa-external-link-alt"></i>',
  }
};

// ── Auto-tradução via Claude API ───────────────────────────
const autoTranslateCache = {};

async function autoTranslateText(text, targetLang) {
  const cacheKey = `${targetLang}:${text}`;
  if (autoTranslateCache[cacheKey]) return autoTranslateCache[cacheKey];
  const langName = targetLang === 'en' ? 'English' : 'Brazilian Portuguese';
  try {
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: 1000,
        messages: [{
          role: 'user',
          content: `Translate the following text to ${langName}. Return ONLY the translated text, nothing else. Preserve any HTML tags exactly as they appear.\n\nText: ${text}`
        }]
      })
    });
    const data = await response.json();
    const translated = data.content?.[0]?.text?.trim() || text;
    autoTranslateCache[cacheKey] = translated;
    return translated;
  } catch (e) {
    console.warn('Auto-translate failed:', e);
    return text;
  }
}

// ── Bandeiras SVG ─────────────────────────────────────────
function getFlagSVG(country) {
  if (flagSVGs && flagSVGs[country]) return flagSVGs[country];
  if (country === 'br') {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="22" height="15" style="border-radius:2px;display:block;">
      <rect width="20" height="14" fill="#009C3B"/>
      <polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FEDF00"/>
      <circle cx="10" cy="7" r="3.2" fill="#002776"/>
      <path d="M7.1,5.8 Q10,4.5 12.9,5.8" stroke="#fff" stroke-width="0.5" fill="none"/>
    </svg>`;
  } else {
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="22" height="15" style="border-radius:2px;display:block;">
      <rect width="20" height="14" fill="#B22234"/>
      <rect y="1.08"  width="20" height="1.08" fill="#fff"/>
      <rect y="3.23"  width="20" height="1.08" fill="#fff"/>
      <rect y="5.38"  width="20" height="1.08" fill="#fff"/>
      <rect y="7.54"  width="20" height="1.08" fill="#fff"/>
      <rect y="9.69"  width="20" height="1.08" fill="#fff"/>
      <rect y="11.85" width="20" height="1.08" fill="#fff"/>
      <rect width="8" height="7.54" fill="#3C3B6E"/>
      <g fill="#fff">
        <circle cx="1"   cy="1" r="0.4"/> <circle cx="2"   cy="1" r="0.4"/>
        <circle cx="3"   cy="1" r="0.4"/> <circle cx="4"   cy="1" r="0.4"/>
        <circle cx="5"   cy="1" r="0.4"/> <circle cx="6"   cy="1" r="0.4"/>
        <circle cx="1.5" cy="2" r="0.4"/> <circle cx="2.5" cy="2" r="0.4"/>
        <circle cx="3.5" cy="2" r="0.4"/> <circle cx="4.5" cy="2" r="0.4"/>
        <circle cx="5.5" cy="2" r="0.4"/>
        <circle cx="1"   cy="3" r="0.4"/> <circle cx="2"   cy="3" r="0.4"/>
        <circle cx="3"   cy="3" r="0.4"/> <circle cx="4"   cy="3" r="0.4"/>
        <circle cx="5"   cy="3" r="0.4"/> <circle cx="6"   cy="3" r="0.4"/>
        <circle cx="1.5" cy="4" r="0.4"/> <circle cx="2.5" cy="4" r="0.4"/>
        <circle cx="3.5" cy="4" r="0.4"/> <circle cx="4.5" cy="4" r="0.4"/>
        <circle cx="5.5" cy="4" r="0.4"/>
        <circle cx="1"   cy="5" r="0.4"/> <circle cx="2"   cy="5" r="0.4"/>
        <circle cx="3"   cy="5" r="0.4"/> <circle cx="4"   cy="5" r="0.4"/>
        <circle cx="5"   cy="5" r="0.4"/> <circle cx="6"   cy="5" r="0.4"/>
        <circle cx="1.5" cy="6" r="0.4"/> <circle cx="2.5" cy="6" r="0.4"/>
        <circle cx="3.5" cy="6" r="0.4"/> <circle cx="4.5" cy="6" r="0.4"/>
        <circle cx="5.5" cy="6" r="0.4"/>
      </g>
    </svg>`;
  }
}


// ── Bandeiras nos idiomas (status card) ──────────────────
const langData = [
  { code: 'en', flag: 'us', label: 'EN', level: 'C1' },
  { code: 'es', flag: 'es', label: 'ES', level: 'B2' },
  { code: 'fr', flag: 'fr', label: 'FR', level: 'A2' },
];

const flagSVGs = {
  us: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="18" height="13" style="border-radius:2px;display:block;"><rect width="20" height="14" fill="#B22234"/><rect y="1.08" width="20" height="1.08" fill="#fff"/><rect y="3.23" width="20" height="1.08" fill="#fff"/><rect y="5.38" width="20" height="1.08" fill="#fff"/><rect y="7.54" width="20" height="1.08" fill="#fff"/><rect y="9.69" width="20" height="1.08" fill="#fff"/><rect y="11.85" width="20" height="1.08" fill="#fff"/><rect width="8" height="7.54" fill="#3C3B6E"/></svg>`,
  es: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="18" height="13" style="border-radius:2px;display:block;"><rect width="20" height="14" fill="#AA151B"/><rect y="3.5" width="20" height="7" fill="#F1BF00"/></svg>`,
  fr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="18" height="13" style="border-radius:2px;display:block;"><rect width="20" height="14" fill="#fff"/><rect width="6.67" height="14" fill="#002395"/><rect x="13.33" width="6.67" height="14" fill="#ED2939"/></svg>`,
  br: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 14" width="22" height="15" style="border-radius:2px;display:block;"><rect width="20" height="14" fill="#009C3B"/><polygon points="10,1.5 18.5,7 10,12.5 1.5,7" fill="#FEDF00"/><circle cx="10" cy="7" r="3.2" fill="#002776"/><path d="M7.1,5.8 Q10,4.5 12.9,5.8" stroke="#fff" stroke-width="0.5" fill="none"/></svg>`,
};

function renderLangFlags() {
  const row = document.getElementById('lang-flags-row');
  if (!row) return;
  row.innerHTML = langData.map(l => `
    <span class="lang-flag-item">
      ${flagSVGs[l.flag]}
      <strong>${l.label}</strong> ${l.level}
    </span>
  `).join('<span style="color:var(--border);margin:0 2px">·</span>');
}

// ── Aplicar idioma ────────────────────────────────────────
let currentLang = localStorage.getItem('lang') || 'pt';
let isTranslating = false;

async function applyLang(lang) {
  if (isTranslating) return;
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const flagEl  = document.getElementById('lang-flag');
  const labelEl = document.getElementById('lang-label');
  if (flagEl)  flagEl.innerHTML    = getFlagSVG(lang === 'pt' ? 'br' : 'us');
  if (labelEl) labelEl.textContent = lang === 'pt' ? 'PT' : 'EN';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang]?.[key] !== undefined) el.innerHTML = i18n[lang][key];
  });

  const autoEls = document.querySelectorAll('[data-i18n-auto]');
  if (autoEls.length > 0) {
    isTranslating = true;
    showTranslatingBadge(true);
    await Promise.all(Array.from(autoEls).map(async el => {
      const original = el.dataset.originalText || el.innerHTML;
      el.dataset.originalText = original;
      el.innerHTML = await autoTranslateText(original, lang);
    }));
    isTranslating = false;
    showTranslatingBadge(false);
  }

  renderTimeline(lang);
  runTerminal(lang);
}

function toggleLang() {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
}

// ── Badge "Traduzindo..." ─────────────────────────────────
function showTranslatingBadge(show) {
  let badge = document.getElementById('translating-badge');
  if (show && !badge) {
    badge = document.createElement('div');
    badge.id = 'translating-badge';
    badge.innerHTML = `<span class="spinner"></span> Traduzindo...`;
    badge.style.cssText = `
      position:fixed; bottom:1.5rem; right:1.5rem;
      background:var(--card); border:1px solid var(--border);
      color:var(--blue); font-family:var(--font-mono);
      font-size:0.72rem; padding:6px 14px; border-radius:99px;
      display:flex; align-items:center; gap:8px;
      z-index:9999; animation:fadeIn 0.2s ease;
    `;
    document.body.appendChild(badge);
  } else if (!show && badge) {
    badge.remove();
  }
}

// ── Init ──────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  renderLangFlags();
  applyLang(currentLang);
});

// ── Projects: busca & filtro ──────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('project-search');
  if (searchInput) {
    searchInput.addEventListener('input', e => {
      const term = e.target.value.toLowerCase();
      document.querySelectorAll('.card-project-full').forEach(card => {
        card.classList.toggle('hidden', !card.innerText.toLowerCase().includes(term));
      });
    });
  }
});

const filterButtons = document.querySelectorAll('.filter-btn');
filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter.toLowerCase();
    filterButtons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.querySelectorAll('.card-project-full').forEach(card => {
      const techEl = card.querySelector('.main-tech span');
      const tech = techEl ? techEl.innerText.toLowerCase() : '';
      card.classList.toggle('hidden', filter !== 'all' && !tech.includes(filter));
    });
  });
});

const openFilterBtn  = document.getElementById('open-filter');
const closeFilterBtn = document.getElementById('close-filter');
const modal          = document.getElementById('filter-modal');

if (openFilterBtn && modal)  openFilterBtn.addEventListener('click',  () => modal.classList.add('active'));
if (closeFilterBtn)          closeFilterBtn.addEventListener('click', () => modal.classList.remove('active'));
if (modal) modal.addEventListener('click', e => { if (e.target === modal) modal.classList.remove('active'); });
