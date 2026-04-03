// ── i18n ─────────────────────────────────────────────────────────────
const T = {
  en: {
    'nav.home':       'home',
    'nav.projects':   'projects',
    'nav.skills':     'skills',
    'nav.contact':    'contact',
    'hero.greeting':  "Hi, I'm <span>André.</span>",
    'hero.bio':       'Computer Science student at <strong>UFRA</strong>, Ananindeua. Microsoft ecosystem enthusiast and passionate about low-level performance.',
    'status.open':    'Open to collaborate',
    'status.semester':'2nd semester',
    'status.focus':   'Currently studying:',
    'trajectory.title': '// trajectory & experience',
    'traj1.title':    'Computer Science Student',
    'traj1.desc':     'Focusing on low-level programming, algorithms, and systems architecture.',
    'traj2.title':    'IT Auxiliary',
    'traj2.desc':     'Supporting social impact projects through technology and infrastructure management.',
    'traj3.title':    'Microsoft Ecosystem Deep Dive',
    'traj3.desc':     'Studying for AZ-900 and exploring Win32 API for high-performance applications.',
    'skills.title':   '// languages & tools',
    'proj1.full_desc': "A high-stakes console quiz built in C++ using the Win32 API. The twist: if the user runs out of lives — calculated from the system's actual RAM — the computer reboots. No mercy.",
    'proj2.full_desc': 'Euclidean GCD algorithm compiled from C++ to WebAssembly via Emscripten. Native processing power delivered straight to the browser.',
    'proj3.full_desc': 'IT support for social impact solutions and tech education in the Amazon region.',
    'footer.text':    'Built with a C++ Mindset',
  },
  pt: {
    'nav.home':       'início',
    'nav.projects':   'projetos',
    'nav.skills':     'skills',
    'nav.contact':    'contato',
    'hero.greeting':  'Oi, eu sou o <span>André.</span>',
    'hero.bio':       'Estudante de Ciência da Computação na <strong>UFRA</strong>, em Ananindeua. Entusiasta do ecossistema Microsoft e apaixonado por performance em baixo nível.',
    'status.open':    'Disponível para colaborar',
    'status.semester':'2º período',
    'status.focus':   'Foco atual:',
    'trajectory.title': '// trajetória & experiência',
    'traj1.title':    'Estudante de Ciência da Computação',
    'traj1.desc':     'Focado em programação de baixo nível, algoritmos e arquitetura de sistemas.',
    'traj2.title':    'Auxiliar de TI',
    'traj2.desc':     'Apoiando projetos de impacto social através de tecnologia e gestão de infraestrutura.',
    'traj3.title':    'Imersão no Ecossistema Microsoft',
    'traj3.desc':     'Estudando para AZ-900 e explorando Win32 API para aplicações de alta performance.',
    'skills.title':   '// linguagens & ferramentas',
    'proj1.full_desc': 'Um quiz matemático de console em C++ com Win32 API. O detalhe: se o usuário esgotar as vidas — calculadas pela RAM real do sistema — o computador é reiniciado. Sem clemência.',
    'proj2.full_desc': 'Algoritmo de Euclides para MDC compilado de C++ para WebAssembly via Emscripten. Performance nativa direto no navegador.',
    'proj3.full_desc': 'Suporte de TI para soluções de impacto social e educação tecnológica na região amazônica.',
    'footer.text':    'Desenvolvido com C++ Mindset',
  }
};

// Detecta navegador — PT se pt-*, senão EN (inglês como prioridade)
let lang = (navigator.language || 'en').toLowerCase().startsWith('pt') ? 'pt' : 'en';

function applyLang(l) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const v = T[l][el.dataset.i18n];
    if (v !== undefined) el.innerHTML = v;
  });
  document.documentElement.lang          = l === 'pt' ? 'pt-br' : 'en';
  document.getElementById('lang-flag').textContent  = l === 'pt' ? '🇺🇸' : '🇧🇷';
  document.getElementById('lang-label').textContent = l === 'pt' ? 'EN'  : 'PT';
  lang = l;
}

function toggleLang() {
  const next = lang === 'en' ? 'pt' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => el.style.opacity = '0');
  setTimeout(() => {
    applyLang(next);
    document.querySelectorAll('[data-i18n]').forEach(el => el.style.opacity = '1');
  }, 150);
}

// ── Skills com Ícones ─────────────────────────────────────────────────
const skills = [
  { name: 'C++', icon: '<i class="fab fa-cuttlefish"></i>', color: 'blue' },
  { name: 'C#', icon: '<i class="fas fa-hashtag"></i>', color: 'blue' },
  { name: 'Rust', icon: '<i class="fas fa-gear"></i>', color: 'orange' },
  { name: 'Python', icon: '<i class="fab fa-python"></i>', color: 'blue' },
  { name: 'WebAssembly', icon: '<i class="fas fa-cube"></i>', color: 'green' },
  { name: 'Win32 API', icon: '<i class="fab fa-windows"></i>', color: 'blue' },
  { name: 'Azure', icon: '<i class="fas fa-cloud"></i>', color: 'purple' },
  { name: 'AWS', icon: '<i class="fab fa-aws"></i>', color: 'purple' },
  { name: 'Emscripten', icon: '<i class="fas fa-code"></i>', color: 'blue' },
  { name: 'Linux', icon: '<i class="fab fa-linux"></i>', color: 'green' },
  { name: 'Git', icon: '<i class="fab fa-git-alt"></i>', color: 'blue' },
  { name: 'Low-level', icon: '<i class="fas fa-microchip"></i>', color: 'orange' },
];

function renderSkills() {
  const skillCloud = document.getElementById('skill-cloud');
  if (!skillCloud) return;
  
  skillCloud.innerHTML = '';
  skills.forEach(skill => {
    const skillItem = document.createElement('div');
    skillItem.className = 'skill-item';
    skillItem.setAttribute('data-color', skill.color);
    skillItem.setAttribute('title', skill.name);
    skillItem.innerHTML = `<div class="skill-icon">${skill.icon}</div>`;
    skillCloud.appendChild(skillItem);
  });
}

// ── Terminal typewriter ───────────────────────────────────────────────
const termBody = document.getElementById('term-body');
const termCurr = document.getElementById('term-curr');
const cmd  = 'C:\\Users\\Andre> status --check';
const logs = [
  '> Initializing Microsoft environment...',
  '> Loading C++ / Win32 API modules...',
  '> Enactus Project Status: <span style="color:#00ff99">Active</span>',
  '> AZ-900 Progress: <span style="color:#ffd166">██████░░░░ 60%</span>',
  '> System: <span style="color:#00ff99">Running at peak performance.</span>',
];
let ci = 0, cmdEl = null;

function initTerm() {
  if (!termBody || !termCurr) return;
  termCurr.remove();
  cmdEl = document.createElement('div');
  cmdEl.className = 'term-cmd';
  termBody.appendChild(cmdEl);
  typeChar();
}

function typeChar() {
  if (ci < cmd.length) { 
    cmdEl.textContent += cmd[ci++]; 
    setTimeout(typeChar, 55); 
  }
  else setTimeout(showLogs, 400);
}

function showLogs() {
  logs.forEach((log, idx) => {
    setTimeout(() => {
      const p = document.createElement('div');
      p.className = 'term-out';
      p.innerHTML = log;
      termBody.appendChild(p);
      if (idx === logs.length - 1) {
        const curr = document.createElement('div');
        curr.className = 'term-curr';
        curr.innerHTML = 'C:\\Users\\Andre&gt; <span class="cursor"></span>';
        termBody.appendChild(curr);
      }
    }, idx * 550);
  });
}

// ── Inicialização ─────────────────────────────────────────────────────
window.addEventListener('load', () => {
  applyLang(lang);
  renderSkills();
  initTerm();
});