/* ============================================================
   script.js — André Portfolio
   ============================================================ */

// ── Skills ────────────────────────────────────────────────
const skills = [
  { name: 'C++',     icon: 'fas fa-code',      bg: '#00599C' },
  { name: 'Python',  icon: 'fab fa-python',    bg: '#3776AB' },
  { name: 'Rust',    icon: 'fab fa-rust',       bg: '#B7410E' },
  { name: 'Azure',   icon: 'fab fa-microsoft', bg: '#0078D4' },
  { name: 'Linux',   icon: 'fab fa-linux',     bg: '#2b2b2b' },
  { name: 'Windows', icon: 'fab fa-windows',   bg: '#0078D4' }
];

function renderSkills() {
  const cloud = document.getElementById('skill-cloud');
  if (!cloud) return;
  cloud.innerHTML = '';
  skills.forEach((skill, i) => {
    const b = document.createElement('div');
    b.className = 'skill-badge';
    b.style.backgroundColor = skill.bg;
    b.style.transitionDelay = `${i * 60}ms`;
    b.innerHTML = `<i class="${skill.icon}"></i> ${skill.name}`;
    cloud.appendChild(b);
    // trigger animation
    requestAnimationFrame(() => requestAnimationFrame(() => b.classList.add('visible')));
  });
}

// ── Timeline ──────────────────────────────────────────────
const timeline = {
  pt: [
    { year: '2023',    title: 'Início na UFRA',          desc: 'Ingressou em Ciência da Computação na UFRA.',  color: '' },
    { year: '2024',    title: 'Enactus UFRA — TI',       desc: 'Integrou o time de TI para impacto social.',  color: 'green' },
    { year: '2024',    title: 'WebAssembly & C++',        desc: 'Projetos com Emscripten e Win32 API.',         color: '' },
    { year: 'Agora',   title: 'Open to Work',             desc: 'Disponível para estágios e freelas.',          color: 'green' },
  ],
  en: [
    { year: '2023',    title: 'Joined UFRA',              desc: 'Started Computer Science at UFRA.',            color: '' },
    { year: '2024',    title: 'Enactus UFRA — IT',        desc: 'Joined the IT team for social impact.',        color: 'green' },
    { year: '2024',    title: 'WebAssembly & C++',         desc: 'Projects with Emscripten and Win32 API.',     color: '' },
    { year: 'Now',     title: 'Open to Work',              desc: 'Available for internships & freelance.',      color: 'green' },
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
    { txt: 'whoami',                     cls: 'cmd', delay: 400  },
    { txt: 'André — Dev & Estudante',    cls: '',    delay: 900  },
    { txt: 'cat skills.txt',             cls: 'cmd', delay: 1400 },
    { txt: 'C++ | Python | Rust | Azure',cls: '',    delay: 1900 },
    { txt: 'echo $STATUS',               cls: 'cmd', delay: 2500 },
    { txt: '>> Disponível para oportunidades', cls: 'green', delay: 3000 },
  ],
  en: [
    { txt: 'whoami',                     cls: 'cmd', delay: 400  },
    { txt: 'André — Dev & Student',      cls: '',    delay: 900  },
    { txt: 'cat skills.txt',             cls: 'cmd', delay: 1400 },
    { txt: 'C++ | Python | Rust | Azure',cls: '',    delay: 1900 },
    { txt: 'echo $STATUS',               cls: 'cmd', delay: 2500 },
    { txt: '>> Open to opportunities',   cls: 'green', delay: 3000 },
  ]
};

function runTerminal(lang) {
  const body  = document.getElementById('term-body');
  const curr  = document.getElementById('term-curr');
  if (!body || !curr) return;

  // clear previous lines (keep prompt)
  Array.from(body.querySelectorAll('.term-line')).forEach(el => el.remove());

  const lines = terminalLines[lang] || terminalLines.pt;
  lines.forEach(({ txt, cls, delay }) => {
    setTimeout(() => {
      const div = document.createElement('div');
      div.className = `term-line${cls ? ' ' + cls : ''}`;
      const prompt = cls === 'cmd' ? `<span style="color:var(--blue)">C:\\Users\\Andre&gt;</span> ` : '  ';
      div.innerHTML = `${prompt}${txt}`;
      body.insertBefore(div, curr);
    }, delay);
  });
}

// ── i18n ──────────────────────────────────────────────────
const i18n = {
  pt: {
    'nav.home':        'Home',
    'nav.projects':    'Projetos',
    'nav.contact':     'Contato',
    'hero.bio':        'Estudante de Ciência da Computação na <strong>UFRA</strong>. Entusiasta Microsoft e apaixonado por performance.',
    'status.open':     'Disponível',
    'skills.title':    '// linguagens & ferramentas',
    'trajectory.title':'// trajetória',
    'footer.text':     'Construído com Mentalidade C++',
  },
  en: {
    'nav.home':        'Home',
    'nav.projects':    'Projects',
    'nav.contact':     'Contact',
    'hero.bio':        'Computer Science student at <strong>UFRA</strong>. Microsoft enthusiast passionate about performance.',
    'status.open':     'Available',
    'skills.title':    '// languages & tools',
    'trajectory.title':'// trajectory',
    'footer.text':     'Built with a C++ Mindset',
  }
};

let currentLang = localStorage.getItem('lang') || 'pt';

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  const flag  = document.getElementById('lang-flag');
  const label = document.getElementById('lang-label');
  if (flag)  flag.textContent  = lang === 'pt' ? '🇧🇷' : '🇺🇸';
  if (label) label.textContent = lang === 'pt' ? 'PT'  : 'EN';

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.innerHTML = i18n[lang][key];
  });

  // re-render dynamic content
  renderTimeline(lang);
  runTerminal(lang);
}

function toggleLang() {
  applyLang(currentLang === 'pt' ? 'en' : 'pt');
}

// ── Init ──────────────────────────────────────────────────
window.addEventListener('DOMContentLoaded', () => {
  renderSkills();
  applyLang(currentLang);
});

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('project-search');
    const projectCards = document.querySelectorAll('.card-project-full');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const term = e.target.value.toLowerCase();

            projectCards.forEach(card => {
                // Pega todo o texto do card (título, tags, tech)
                const content = card.innerText.toLowerCase();
                
                if (content.includes(term)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    }
});
const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.card-project-full');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const filter = btn.dataset.filter.toLowerCase();

        // ativa botão selecionado
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        projectCards.forEach(card => {
            const tech = card.querySelector('.main-tech span')
                             .innerText.toLowerCase();

            if (filter === 'all' || tech.includes(filter)) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        });
    });
});
// ===== MODAL FILTRO =====
const openFilterBtn = document.getElementById('open-filter');
const closeFilterBtn = document.getElementById('close-filter');
const modal = document.getElementById('filter-modal');

if (openFilterBtn && modal) {
    openFilterBtn.addEventListener('click', () => {
        modal.classList.add('active');
    });
}

if (closeFilterBtn) {
    closeFilterBtn.addEventListener('click', () => {
        modal.classList.remove('active');
    });
}

// fechar clicando fora
if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
        }
    });
}