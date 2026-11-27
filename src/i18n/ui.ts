// All interface strings live here so a German version (/de/) can be added later.
export const languages = { en: 'English' } as const;
export const defaultLang = 'en';
export type Lang = keyof typeof languages;

export const ui = {
  en: {
    'site.name': 'Asad Faiyyaz Khan',
    'site.role': 'Senior AI Engineer · Agentic systems, MCP and Azure',
    'site.description':
      'Senior AI Engineer building agentic AI systems, MCP tool integrations and the data pipelines behind them, from architecture to production on Microsoft Azure.',
    'nav.work': 'Work',
    'nav.projects': 'Projects',
    'nav.writing': 'Writing',
    'nav.about': 'About',
    'nav.cv': 'CV',
    'nav.contact': 'Contact',
    'nav.skip': 'Skip to content',
    'theme.toggle': 'Toggle dark mode',
    'home.intro':
      'I design and build multi-agent systems that turn complex documents into structured data, expose tools through the Model Context Protocol and run them in production on Azure.',
    'home.location': 'Based in Aalen · open to roles in Baden-Württemberg',
    'home.cv': 'Download CV',
    'home.linkedin': 'LinkedIn',
    'home.selected': 'Selected work',
    'home.allWork': 'All case studies',
    'home.building': 'Building now',
    'work.title': 'Work',
    'work.intro': 'Case studies from client and industry projects.',
    'work.note': 'Client names and figures are withheld. Happy to go into detail in an interview.',
    'work.footer': 'Client names withheld; details shared with permission.',
    'work.context': 'Context',
    'work.problem': 'Problem',
    'work.approach': 'What I built',
    'work.role': 'My role',
    'work.outcome': 'Outcome',
    'work.stack': 'Stack',
    'work.back': 'All case studies',
    'projects.title': 'Projects',
    'projects.intro': 'Things I build outside client work.',
    'projects.more': 'More projects will be added here.',
    'projects.repo': 'Repository',
    'writing.title': 'Writing',
    'writing.intro': 'Notes on agentic systems, MCP and document AI.',
    'writing.empty': 'No posts yet. The first one is in progress.',
    'about.title': 'About',
    'about.experience': 'Experience',
    'about.education': 'Education',
    'about.languages': 'Languages',
    'about.skills': 'Skills',
    'cv.title': 'CV',
    'cv.intro': 'A two-page PDF with my experience, skills and education.',
    'cv.download': 'Download CV (PDF)',
    'contact.title': 'Contact',
    'contact.intro': 'The best way to reach me is by email or LinkedIn.',
    'contact.email': 'Email',
    'notfound.title': 'Page not found',
    'notfound.body': 'The page you are looking for does not exist.',
    'notfound.home': 'Back to the home page',
  },
} as const;

export function t(key: keyof (typeof ui)['en'], lang: Lang = defaultLang): string {
  return ui[lang][key] ?? ui[defaultLang][key];
}
