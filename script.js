const messages = {
  pt: {
    'page.title': 'André Moraes — Desenvolvedor de Software',
    'page.description': 'Portfólio de André Moraes, desenvolvedor de software com foco em aplicações web, cloud e performance.',
    'skip': 'Pular para o conteúdo',
    'brand.role': 'Desenvolvedor de Software',
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
    'intro.description': 'Desenvolvedor Full Stack & Cloud e estudante de Ciência da Computação na UFRA. Crio experiências web focadas em performance, acessibilidade e impacto.',
    'intro.links': 'Links de contato',
    'projects.eyebrow': 'TRABALHOS SELECIONADOS',
    'projects.title': 'Projetos',
    'projects.note': 'Ideias transformadas em soluções digitais.',
    'projects.filters': 'Filtrar projetos por tecnologia',
    'projects.carousel': 'Carrossel de projetos',
    'projects.previous': 'Projeto anterior',
    'projects.next': 'Próximo projeto',
    'projects.empty': 'Nenhum projeto encontrado para essa tecnologia.',
    'filter.all': 'Todos',
    'project.enactus.type': 'Impacto social',
    'project.enactus.description': 'Sistemas web para apoiar iniciativas de inovação social e sustentabilidade da Enactus UFRA.',
    'project.miaudota.type': 'Web app',
    'project.miaudota.description': 'Plataforma de adoção que conecta ONGs e pessoas, com foco em tornar a busca por um novo lar mais simples.',
    'project.hackathon.type': 'Top 10 nacional',
    'project.hackathon.description': 'Solução gamificada de educação financeira apresentada entre as dez melhores equipes do país.',
    'project.quiz.type': 'Sistemas',
    'project.quiz.description': 'Quiz matemático de console em C++ que combina perguntas, vidas e interação com recursos do Windows.',
    'project.code': 'Código (GitHub)',
    'project.deploy': 'Ver Projeto (Deploy)',
    'project.deployTitle': 'Link de deploy ainda não informado',
    'project.technologies': 'Tecnologias',
    'project.technologiesAndFields': 'Tecnologias e áreas',
    'skills.eyebrow': 'FERRAMENTAS DO DIA A DIA',
    'skills.title': 'Stack',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end & dados',
    'skills.cloud': 'Cloud & ferramentas',
    'contact.eyebrow': 'VAMOS CONVERSAR',
    'contact.title': 'Tem um projeto em mente?',
    'contact.description': 'Estou disponível para oportunidades e colaborações.',
    'contact.button': 'Entrar em contato',
    'footer.made': 'Feito com HTML, CSS e JavaScript.',
    'footer.top': 'Voltar ao topo',
    'slide.count': (current, total) => `Projeto ${current} de ${total}`,
    'slide.empty': 'Nenhum projeto',
  },
  en: {
    'page.title': 'André Moraes — Software Developer',
    'page.description': 'Portfolio of André Moraes, a software developer focused on web applications, cloud, and performance.',
    'skip': 'Skip to content',
    'brand.role': 'Software Developer',
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
    'intro.description': 'Full Stack & Cloud Developer and Computer Science student at UFRA. I build web experiences focused on performance, accessibility, and impact.',
    'intro.links': 'Contact links',
    'projects.eyebrow': 'SELECTED WORK',
    'projects.title': 'Projects',
    'projects.note': 'Ideas turned into digital solutions.',
    'projects.filters': 'Filter projects by technology',
    'projects.carousel': 'Project carousel',
    'projects.previous': 'Previous project',
    'projects.next': 'Next project',
    'projects.empty': 'No projects found for this technology.',
    'filter.all': 'All',
    'project.enactus.type': 'Social impact',
    'project.enactus.description': 'Web systems that support Enactus UFRA initiatives in social innovation and sustainability.',
    'project.miaudota.type': 'Web app',
    'project.miaudota.description': 'An adoption platform connecting NGOs and people, designed to make finding a new home easier.',
    'project.hackathon.type': 'National top 10',
    'project.hackathon.description': 'A gamified financial education solution presented among the country’s ten best teams.',
    'project.quiz.type': 'Systems',
    'project.quiz.description': 'A C++ terminal math quiz combining questions, lives, and interaction with Windows features.',
    'project.code': 'Code (GitHub)',
    'project.deploy': 'View Project (Deploy)',
    'project.deployTitle': 'Deployment link not provided yet',
    'project.technologies': 'Technologies',
    'project.technologiesAndFields': 'Technologies and fields',
    'skills.eyebrow': 'TOOLS I WORK WITH',
    'skills.title': 'Stack',
    'skills.frontend': 'Front-end',
    'skills.backend': 'Back-end & data',
    'skills.cloud': 'Cloud & tools',
    'contact.eyebrow': 'LET’S TALK',
    'contact.title': 'Have a project in mind?',
    'contact.description': 'I’m available for opportunities and collaborations.',
    'contact.button': 'Get in touch',
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
