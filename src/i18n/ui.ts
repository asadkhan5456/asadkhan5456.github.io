export const languages = { de: 'Deutsch', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'de';

const de = {
  'site.role': 'Senior AI Engineer · Agentic Systems, MCP und Azure',
  'site.description':
    'Senior AI Engineer in Aalen. Ich baue agentische KI-Systeme, MCP-Tool-Integrationen und die Datenpipelines dahinter – von der Architektur bis zum Betrieb auf Microsoft Azure.',
  'site.titleSuffix': 'Senior AI Engineer',
  'nav.label': 'Hauptnavigation',
  'nav.about': 'Über mich',
  'nav.experience': 'Erfahrung',
  'nav.work': 'Arbeiten',
  'nav.skills': 'Kenntnisse',
  'nav.projects': 'Projekte',
  'nav.contact': 'Kontakt',
  'nav.cv': 'Lebenslauf',
  'nav.menu': 'Menü',
  'nav.skip': 'Zum Inhalt springen',
  'theme.toggle': 'Dunkles Design umschalten',
  'lang.switch': 'Sprache wählen',
  'newTab': '(öffnet in neuem Tab)',
  'hero.intro':
    'Ich entwickle Multi-Agenten-Systeme, die komplexe Dokumente in strukturierte Daten verwandeln, stelle Werkzeuge über das Model Context Protocol bereit und bringe sie auf Azure in Produktion.',
  'hero.location': 'Ansässig in Aalen · offen für Positionen in Baden-Württemberg',
  'hero.cv': 'Lebenslauf ansehen',
  'hero.graphicLabel':
    'Animation: Ein Dokument wird gescannt, Felder werden markiert, Agenten verarbeiten sie und erzeugen einen strukturierten Datensatz.',
  'about.title': 'Über mich',
  'about.photoAlt': 'Asad Faiyyaz Khan im dunklen Anzug vor einem Gebäude mit Glasfassade',
  'about.languages': 'Sprachen',
  'about.education': 'Ausbildung',
  'about.based': 'Standort',
  'experience.title': 'Erfahrung',
  'work.title': 'Ausgewählte Arbeiten',
  'work.note': 'Kundennamen und Zahlen nenne ich nicht. Details erläutere ich gern im Gespräch.',
  'work.footer': 'Kundennamen anonymisiert; Details mit Genehmigung geteilt.',
  'work.read': 'Fallstudie lesen',
  'work.context': 'Ausgangslage',
  'work.problem': 'Problem',
  'work.approach': 'Was ich gebaut habe',
  'work.role': 'Meine Rolle',
  'work.outcome': 'Ergebnis',
  'work.stack': 'Technologien',
  'work.back': 'Zurück zur Startseite',
  'work.diagramNote': 'Vereinfachte, generische Darstellung.',
  'skills.title': 'Kenntnisse',
  'projects.title': 'Projekte & GitHub',
  'projects.building': 'Aktuell in Arbeit',
  'projects.github': 'Öffentliche Repositories',
  'projects.githubProfile': 'Profil auf GitHub',
  'projects.older': 'Älteres Lernprojekt',
  'blog.title': 'Blog',
  'blog.intro': 'Notizen zu agentischen Systemen, MCP und Dokumenten-KI.',
  'blog.soon': 'Erscheint bald',
  'contact.title': 'Kontakt',
  'contact.line': 'Lassen Sie uns sprechen.',
  'contact.body': 'Am schnellsten erreichen Sie mich per E-Mail oder über LinkedIn.',
  'contact.email': 'E-Mail',
  'cv.title': 'Lebenslauf',
  'cv.intro': 'Zwei Seiten mit Erfahrung, Kenntnissen und Ausbildung. Der Lebenslauf ist auf Englisch.',
  'cv.open': 'PDF öffnen',
  'cv.download': 'PDF herunterladen',
  'cv.page': 'Seite',
  'cv.pageAlt': 'Vorschau Lebenslauf, Seite',
  'notfound.title': 'Seite nicht gefunden',
  'notfound.body': 'Diese Seite gibt es nicht. Auf der Startseite finden Sie alle Inhalte.',
  'notfound.home': 'Zur Startseite',
  'footer.location': 'Aalen, Deutschland',
};

const en: Record<keyof typeof de, string> = {
  'site.role': 'Senior AI Engineer · Agentic systems, MCP and Azure',
  'site.description':
    'Senior AI Engineer in Aalen, Germany. I build agentic AI systems, MCP tool integrations and the data pipelines behind them, from architecture to production on Microsoft Azure.',
  'site.titleSuffix': 'Senior AI Engineer',
  'nav.label': 'Main navigation',
  'nav.about': 'About',
  'nav.experience': 'Experience',
  'nav.work': 'Work',
  'nav.skills': 'Skills',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.cv': 'CV',
  'nav.menu': 'Menu',
  'nav.skip': 'Skip to content',
  'theme.toggle': 'Toggle dark mode',
  'lang.switch': 'Choose language',
  'newTab': '(opens in a new tab)',
  'hero.intro':
    'I build multi-agent systems that turn complex documents into structured data, expose tools through the Model Context Protocol and run them in production on Azure.',
  'hero.location': 'Based in Aalen · open to roles in Baden-Württemberg',
  'hero.cv': 'View CV',
  'hero.graphicLabel':
    'Animation: a document is scanned, fields are highlighted, agents process them and produce a structured record.',
  'about.title': 'About',
  'about.photoAlt': 'Asad Faiyyaz Khan in a dark suit in front of a building with a glass facade',
  'about.languages': 'Languages',
  'about.education': 'Education',
  'about.based': 'Based in',
  'experience.title': 'Experience',
  'work.title': 'Selected work',
  'work.note': 'Client names and figures are withheld. Happy to go into detail in an interview.',
  'work.footer': 'Client names withheld; details shared with permission.',
  'work.read': 'Read case study',
  'work.context': 'Context',
  'work.problem': 'Problem',
  'work.approach': 'What I built',
  'work.role': 'My role',
  'work.outcome': 'Outcome',
  'work.stack': 'Stack',
  'work.back': 'Back to the home page',
  'work.diagramNote': 'Simplified, generic view.',
  'skills.title': 'Skills',
  'projects.title': 'Projects & GitHub',
  'projects.building': 'Building now',
  'projects.github': 'Public repositories',
  'projects.githubProfile': 'Profile on GitHub',
  'projects.older': 'Older learning project',
  'blog.title': 'Blog',
  'blog.intro': 'Notes on agentic systems, MCP and document AI.',
  'blog.soon': 'Coming soon',
  'contact.title': 'Contact',
  'contact.line': "Let's talk.",
  'contact.body': 'The quickest way to reach me is by email or on LinkedIn.',
  'contact.email': 'Email',
  'cv.title': 'CV',
  'cv.intro': 'Two pages with my experience, skills and education.',
  'cv.open': 'Open PDF',
  'cv.download': 'Download PDF',
  'cv.page': 'Page',
  'cv.pageAlt': 'CV preview, page',
  'notfound.title': 'Page not found',
  'notfound.body': 'This page does not exist. The home page has everything.',
  'notfound.home': 'Go to the home page',
  'footer.location': 'Aalen, Germany',
};

export const ui = { de, en } as const;
export type UiKey = keyof typeof de;

export function useT(lang: Lang) {
  return (key: UiKey) => ui[lang][key] ?? ui[defaultLang][key];
}

/** Path for a page in the given language. `path` is the language-neutral path, e.g. "/cv/". */
export function localePath(lang: Lang, path = '/') {
  return lang === defaultLang ? path : `/${lang}${path}`;
}

/** Strip the language prefix from a URL path. */
export function neutralPath(pathname: string) {
  return pathname.replace(/^\/en(\/|$)/, '/');
}

/** Pick the value for a language from a bilingual field. */
export function pick<T>(value: { de: T; en: T }, lang: Lang): T {
  return value[lang];
}
