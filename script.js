const messages = {
  pt: {
    'page.title': 'André Moraes — Engenheiro de Software Full Stack & Cloud',
    'page.description': 'Portfólio de André Moraes — Engenheiro de Software Full Stack e Cloud (AWS), com foco em performance, acessibilidade e sistemas em produção.',
    'skip': 'Pular para o conteúdo',
    'brand.role': 'Engenheiro de Software · Full Stack & Cloud',
    'nav.label': 'Navegação principal',
    'nav.projects': 'Projetos',
    'nav.stack': 'Stack',
    'nav.contact': 'Contato',
    'language.toggle': 'Mudar idioma para inglês',
    'theme.label': 'Alternar tema',
    'theme.light': 'Tema claro',
    'theme.dark': 'Tema escuro',
    'intro.eyebrow': 'PORTFÓLIO / 2026',
    'intro.titlePrefix': 'Construindo software com',
    'intro.titleAccent': 'propósito.',
    'intro.description': 'Engenheiro de Software Full Stack & Cloud (AWS), estudante de Ciência da Computação na UFRA. Construo aplicações web, automações e soluções em nuvem — com foco em performance, acessibilidade e impacto real.',
    'intro.links': 'Links de contato',
    'projects.eyebrow': 'TRABALHOS SELECIONADOS',
    'projects.title': 'Projetos',
    'projects.note': 'Ideias transformadas em soluções digitais — do full stack ao serverless.',
    'projects.filters': 'Filtrar projetos por tecnologia',
    'projects.carousel': 'Carrossel de projetos',
    'projects.previous': 'Projeto anterior',
    'projects.next': 'Próximo projeto',
    'projects.empty': 'Nenhum projeto encontrado para essa tecnologia.',
    'filter.all': 'Todos',
    'project.chronos.type': 'Serverless',
    'project.chronos.description': 'Arquitetura serverless na AWS para ingestão e governança de ~50 mil documentos/mês (PDFs e imagens), preservando a base histórica para análises futuras.',
    'project.cargo.type': 'DevOps · Cloud',
    'project.cargo.description': 'Aplicação full stack de gestão logística (React, TypeScript, Rust/Axum, PostgreSQL) com fluxo DevOps Cloud Native ponta a ponta: Docker, CI/CD no GitHub Actions e infraestrutura provisionada com Terraform na AWS.',
    'project.potyara.type': 'Impacto social',
    'project.potyara.description': 'Plataforma para montagem de kits na engenharia civil — Top 4 do Edital Canteiro Lab 2026. Atuação em arquitetura, automações e implementação técnica de requisitos de fomento.',
    'project.miaudota.type': 'Web app',
    'project.miaudota.description': 'Plataforma de adoção que conecta ONGs e pessoas (React + Node.js + PostgreSQL), com foco em usabilidade e acessibilidade.',
    'project.hackathon.type': 'Top 10 nacional',
    'project.hackathon.description': 'Solução gamificada de educação financeira apresentada entre as dez melhores equipes do país.',
    'project.ficat.type': 'Modernização',
    'project.ficat.description': 'Modernização de sistema legado em PHP (versões recentes), atualização do MariaDB, redesign acessível com identidade visual da UFRA e deploy em servidor Linux.',
    'project.code': 'Código (GitHub)',
    'project.deploy': 'Ver Projeto (Deploy)',
    'project.deployTitle': 'Link de deploy ainda não informado',
    'project.technologies': 'Tecnologias',
    'project.technologiesAndFields': 'Tecnologias e áreas',
    'tag.socialImpact': 'Impacto social',
    'tag.gamification': 'Gamificação',
    'tag.accessibility': 'Acessibilidade',
    'preview.chronos.line1': 'AWS Lambda · S3 · ~50k docs/mês',
    'preview.chronos.line2': 'ingestão · governança · base histórica',
    'preview.potyara.line1': 'Potyara · kits de engenharia civil',
    'preview.potyara.line2': 'Top 4 · Edital Canteiro Lab 2026',
    'preview.ficat.line1': 'PHP moderno · MariaDB · Linux',
    'preview.ficat.line2': 'acessibilidade · identidade UFRA',
    'brand.home': 'André Moraes — início',
    'link.email': 'E-mail',
    'link.emailLabel': 'Enviar e-mail',
    'cv.button': 'Baixar CV',
    'cv.label': 'Baixar CV (PDF)',
    'skills.eyebrow': 'FERRAMENTAS DO DIA A DIA',
    'skills.title': 'Stack',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end & dados',
    'skills.cloud': 'Cloud & DevOps',
    'contact.eyebrow': 'VAMOS CONVERSAR',
    'contact.title': 'Tem um projeto em mente?',
    'contact.description': 'Estou disponível para oportunidades e colaborações em engenharia de software, cloud e dados.',
    'contact.button': 'Entrar em contato',
    'footer.copyright': '©',
    'footer.made': 'Feito com HTML, CSS e JavaScript.',
    'footer.top': 'Voltar ao topo',
    'slide.count': (current, total) => `Projeto ${current} de ${total}`,
    'slide.empty': 'Nenhum projeto',
  },
  en: {
    'page.title': 'André Moraes — Full Stack & Cloud Software Engineer',
    'page.description': 'Portfolio of André Moraes — Full Stack & Cloud (AWS) Software Engineer focused on performance, accessibility, and production systems.',
    'skip': 'Skip to content',
    'brand.role': 'Software Engineer · Full Stack & Cloud',
    'nav.label': 'Main navigation',
    'nav.projects': 'Projects',
    'nav.stack': 'Stack',
    'nav.contact': 'Contact',
    'language.toggle': 'Switch language to Portuguese',
    'theme.label': 'Toggle theme',
    'theme.light': 'Light mode',
    'theme.dark': 'Dark mode',
    'intro.eyebrow': 'PORTFOLIO / 2026',
    'intro.titlePrefix': 'Building software with',
    'intro.titleAccent': 'purpose.',
    'intro.description': 'Full Stack & Cloud (AWS) Software Engineer and Computer Science student at UFRA. I build web applications, automations, and cloud solutions focused on performance, accessibility, and real impact.',
    'intro.links': 'Contact links',
    'projects.eyebrow': 'SELECTED WORK',
    'projects.title': 'Projects',
    'projects.note': 'Ideas turned into digital solutions — from full stack to serverless.',
    'projects.filters': 'Filter projects by technology',
    'projects.carousel': 'Project carousel',
    'projects.previous': 'Previous project',
    'projects.next': 'Next project',
    'projects.empty': 'No projects found for this technology.',
    'filter.all': 'All',
    'project.chronos.type': 'Serverless',
    'project.chronos.description': 'Serverless architecture on AWS for ingesting and governing ~50k documents/month (PDFs and images), preserving the historical base for future analysis.',
    'project.cargo.type': 'DevOps · Cloud',
    'project.cargo.description': 'Full stack logistics management application (React, TypeScript, Rust/Axum, PostgreSQL) with an end-to-end Cloud Native DevOps flow: Docker, CI/CD on GitHub Actions, and infrastructure provisioned with Terraform on AWS.',
    'project.potyara.type': 'Social impact',
    'project.potyara.description': 'Platform for assembling kits in civil engineering — Top 4 in the Canteiro Lab 2026 grant. Worked on architecture, automations, and technical implementation of grant requirements.',
    'project.miaudota.type': 'Web app',
    'project.miaudota.description': 'Adoption platform connecting NGOs and people (React + Node.js + PostgreSQL), focused on usability and accessibility.',
    'project.hackathon.type': 'National top 10',
    'project.hackathon.description': 'Gamified financial education solution presented among the country’s ten best teams.',
    'project.ficat.type': 'Modernization',
    'project.ficat.description': 'Modernization of a legacy PHP system (recent versions), MariaDB upgrade, accessible redesign with UFRA visual identity, and deployment on a Linux server.',
    'project.code': 'Code (GitHub)',
    'project.deploy': 'View Project (Deploy)',
    'project.deployTitle': 'Deployment link not provided yet',
    'project.technologies': 'Technologies',
    'project.technologiesAndFields': 'Technologies and fields',
    'tag.socialImpact': 'Social impact',
    'tag.gamification': 'Gamification',
    'tag.accessibility': 'Accessibility',
    'preview.chronos.line1': 'AWS Lambda · S3 · ~50k docs/month',
    'preview.chronos.line2': 'ingestion · governance · historical base',
    'preview.potyara.line1': 'Potyara · civil engineering kits',
    'preview.potyara.line2': 'Top 4 · Canteiro Lab 2026 grant',
    'preview.ficat.line1': 'Modern PHP · MariaDB · Linux',
    'preview.ficat.line2': 'accessibility · UFRA identity',
    'brand.home': 'André Moraes — home',
    'link.email': 'Email',
    'link.emailLabel': 'Send email',
    'cv.button': 'Download CV',
    'cv.label': 'Download CV (PDF)',
    'skills.eyebrow': 'TOOLS I WORK WITH',
    'skills.title': 'Stack',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end & data',
    'skills.cloud': 'Cloud & DevOps',
    'contact.eyebrow': 'LET’S TALK',
    'contact.title': 'Have a project in mind?',
    'contact.description': 'I’m available for opportunities and collaborations in software engineering, cloud, and data.',
    'contact.button': 'Get in touch',
    'footer.copyright': '©',
    'footer.made': 'Built with HTML, CSS, and JavaScript.',
    'footer.top': 'Back to top',
    'slide.count': (current, total) => `Project ${current} of ${total}`,
    'slide.empty': 'No projects',
  },
};

const themeToggle = document.querySelector('#theme-toggle');
const languageToggle = document.querySelector('#language-toggle');
const languageCurrent = document.querySelector('#language-current');
const languageNext = document.querySelector('#language-next');
const filterButtons = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card');
const emptyState = document.querySelector('#empty-state');
const yearLabel = document.querySelector('#current-year');
const projectCarousel = document.querySelector('#project-carousel');
const previousButton = document.querySelector('#previous-project');
const nextButton = document.querySelector('#next-project');
const slideCount = document.querySelector('#slide-count');
let currentFilter = 'all';
let currentIndex = 0;
let currentLanguage = readPreference('lang', 'pt', ['pt', 'en']);

function readPreference(key, fallback, allowedValues) {
  try {
    const savedValue = localStorage.getItem(key);
    return allowedValues.includes(savedValue) ? savedValue : fallback;
  } catch (error) {
    console.warn(`Não foi possível ler a preferência "${key}":`, error);
    return fallback;
  }
}

function savePreference(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (error) {
    console.warn(`Não foi possível salvar a preferência "${key}":`, error);
  }
}

function updateThemeLabel() {
  if (!themeToggle) return;
  const isLight = document.documentElement.dataset.theme === 'light';
  const label = messages[currentLanguage][isLight ? 'theme.dark' : 'theme.light'];
  themeToggle.setAttribute('aria-label', label);
  const visibleLabel = themeToggle.querySelector('.theme-label');
  if (visibleLabel) visibleLabel.textContent = label;
}

function applyTheme(theme) {
  const selectedTheme = theme === 'light' ? 'light' : 'dark';
  const isLight = selectedTheme === 'light';
  document.documentElement.dataset.theme = selectedTheme;
  document.documentElement.style.colorScheme = selectedTheme;

  if (themeToggle) themeToggle.setAttribute('aria-pressed', String(isLight));
  updateThemeLabel();

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.content = isLight ? '#F8FAFC' : '#0F172A';
}

function getMatchingCards() {
  return [...projectCards].filter(card => {
    const technologies = card.dataset.technologies.toLowerCase().split(/\s+/);
    return currentFilter === 'all' || technologies.includes(currentFilter);
  });
}

function renderCarousel(direction = 'next') {
  const matchingCards = getMatchingCards();
  const isListMode = currentFilter === 'all';
  const currentCard = matchingCards[currentIndex];

  if (projectCarousel) projectCarousel.dataset.mode = isListMode ? 'list' : 'slide';

  projectCards.forEach(card => {
    const isVisible = matchingCards.includes(card);
    const isCurrent = isListMode || card === currentCard;

    card.hidden = !isVisible;
    card.classList.toggle('is-current', isCurrent);
    card.classList.remove('slide-in-next', 'slide-in-previous');
    card.inert = !isCurrent;
    card.setAttribute('aria-hidden', String(!isCurrent));
  });

  if (!isListMode && currentCard) {
    requestAnimationFrame(() => {
      currentCard.classList.add(direction === 'previous' ? 'slide-in-previous' : 'slide-in-next');
    });
  }

  if (emptyState) emptyState.hidden = matchingCards.length > 0;
  if (slideCount) {
    slideCount.hidden = isListMode;
    slideCount.textContent = matchingCards.length
      ? messages[currentLanguage]['slide.count'](currentIndex + 1, matchingCards.length)
      : messages[currentLanguage]['slide.empty'];
  }
  if (previousButton) previousButton.disabled = isListMode || matchingCards.length < 2;
  if (nextButton) nextButton.disabled = isListMode || matchingCards.length < 2;
}

function applyLanguage(language) {
  currentLanguage = language === 'en' ? 'en' : 'pt';
  const languageMessages = messages[currentLanguage];

  document.documentElement.lang = currentLanguage === 'en' ? 'en' : 'pt-BR';
  document.title = languageMessages['page.title'];

  document.querySelectorAll('[data-i18n]').forEach(element => {
    const translation = languageMessages[element.dataset.i18n];
    if (translation !== undefined) element.textContent = translation;
  });
  document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
    const translation = languageMessages[element.dataset.i18nAriaLabel];
    if (translation !== undefined) element.setAttribute('aria-label', translation);
  });
  document.querySelectorAll('[data-i18n-title]').forEach(element => {
    const translation = languageMessages[element.dataset.i18nTitle];
    if (translation !== undefined) element.title = translation;
  });
  document.querySelectorAll('[data-i18n-content]').forEach(element => {
    const translation = languageMessages[element.dataset.i18nContent];
    if (translation !== undefined) element.content = translation;
  });

  if (languageCurrent) languageCurrent.textContent = currentLanguage.toUpperCase();
  if (languageNext) languageNext.textContent = currentLanguage === 'pt' ? 'EN' : 'PT';
  if (languageToggle) languageToggle.setAttribute('aria-label', languageMessages['language.toggle']);

  updateThemeLabel();
  renderCarousel();
}

applyTheme(readPreference('theme', 'dark', ['dark', 'light']));

themeToggle?.addEventListener('click', () => {
  const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  applyTheme(nextTheme);
  savePreference('theme', nextTheme);
});

languageToggle?.addEventListener('click', () => {
  const nextLanguage = currentLanguage === 'pt' ? 'en' : 'pt';
  applyLanguage(nextLanguage);
  savePreference('lang', nextLanguage);
});

function filterProjects(filter) {
  currentFilter = filter;
  currentIndex = 0;
  renderCarousel();
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const selectedFilter = button.dataset.filter.toLowerCase();

    filterButtons.forEach(filterButton => {
      const isSelected = filterButton === button;
      filterButton.classList.toggle('is-active', isSelected);
      filterButton.setAttribute('aria-pressed', String(isSelected));
    });

    filterProjects(selectedFilter);
  });
});

previousButton?.addEventListener('click', () => {
  if (currentFilter === 'all') return;
  const matchingCount = getMatchingCards().length;
  if (matchingCount < 2) return;
  currentIndex = (currentIndex - 1 + matchingCount) % matchingCount;
  renderCarousel('previous');
});

nextButton?.addEventListener('click', () => {
  if (currentFilter === 'all') return;
  const matchingCount = getMatchingCards().length;
  if (matchingCount < 2) return;
  currentIndex = (currentIndex + 1) % matchingCount;
  renderCarousel('next');
});

if (yearLabel) yearLabel.textContent = String(new Date().getFullYear());
applyLanguage(currentLanguage);