// Facts only, in German and English. No client names, numbers or unconfirmed skills.
type L<T = string> = { de: T; en: T };

export const profile = {
  name: 'Asad Faiyyaz Khan',
  linkedin: 'https://www.linkedin.com/in/ak54/',
  github: 'https://github.com/asadkhan5456',
  githubHandle: 'asadkhan5456',
  // Email is split so it never appears as plain text in the HTML.
  emailUser: 'asadfkhan5456',
  emailDomain: 'gmail.com',
  cvPdf: { de: '/cv/Asad_Faiyyaz_Khan_Lebenslauf.pdf', en: '/cv/Asad_Faiyyaz_Khan_CV.pdf' },
};

export const bio: L<string[]> = {
  de: [
    'Ich bin AI Engineer und Solution Architect und baue agentische KI-Systeme für Unternehmenskunden. Ich entwerfe und liefere Multi-Agenten-Systeme für die Dokumentenverarbeitung, Tool-Integrationen über das Model Context Protocol (MCP) und die Datenpipelines dahinter – von der Architektur bis zum Betrieb auf Microsoft Azure.',
    'Als Hauptentwickler und Ansprechpartner für Kunden übersetze ich fachliche Anforderungen in funktionierende Lösungen und berate zu Architektur, Cloud-Services und Qualitätsbewertung. Davor habe ich bei Albert Handtmann einen mehrsprachigen Sprachassistenten auf Basis von Azure OpenAI für Industriemaschinen entwickelt.',
  ],
  en: [
    'I am an AI Engineer and Solution Architect building agentic AI systems for enterprise clients. I design and deliver multi-agent document-processing systems, Model Context Protocol (MCP) tool integrations and the data pipelines behind them, from architecture to production on Microsoft Azure.',
    'As main developer and client contact, I translate business needs into working solutions and advise on architecture, cloud services and quality evaluation. Earlier, I built a multilingual voice assistant on Azure OpenAI for industrial machines at Albert Handtmann.',
  ],
};

export const location: L = { de: 'Aalen, Deutschland', en: 'Aalen, Germany' };

export interface Job { title: L; org: string; place?: L; start: string; end: L; points: L<string[]> }

export const experience: Job[] = [
  {
    title: { de: 'Senior AI Engineer (Solution Architect – Data & AI)', en: 'Senior AI Engineer (Solution Architect – Data & AI)' },
    org: 'PlanB GmbH',
    start: '02/2026',
    end: { de: 'heute', en: 'present' },
    points: {
      de: [
        'Hauptentwickler und Ansprechpartner für Kunden in mehreren Kundenprojekten; Beratung zu Lösungsarchitektur, Auswahl von Azure-Services und Qualitätsbewertung von KI innerhalb von Sicherheitsvorgaben der Kunden wie Tenant-Beschränkungen und Zugriffskontrolle.',
        'Ein produktives Multi-Agenten-System entworfen, gebaut und ausgerollt, das PDF-Dokumente in strukturierte Daten umwandelt – mit Apache Kafka zwischen den Komponenten, betrieben auf Azure.',
        'Multi-Agenten-Dokumentenverarbeitung für komplexe Dokumente (PDF, Word, Tabellen, Bilder) entworfen und entwickelt; Konvertierung und Extraktion als Tools über MCP bereitgestellt; Validierung und Evaluation der Agentenausgaben gebaut; Deployment auf Kubernetes mit Helm.',
        'Metadatengesteuerte Python/PySpark-Pipelines in Microsoft Fabric (Lakehouse, Delta Lake) entwickelt, die viele Datenquellen integrieren, mit ontologiebasierter Standardisierung für KI- und ML-Anwendungsfälle.',
        'Entwurf der Ziel-Architektur auf Azure für die Cloud-Migration einer KI-Plattform, inklusive Service-Auswahl, Dimensionierung und Migrationsplanung.',
        'Einarbeitung und Begleitung eines neuen Kollegen; Unterstützung von Auszubildenden.',
      ],
      en: [
        'Main developer and client contact across several client projects; advise on solution architecture, Azure service selection and AI quality evaluation within client security requirements such as tenant restrictions and access control.',
        'Designed, built and deployed a production multi-agent system that turns PDF documents into structured data, with Apache Kafka between components, hosted on Azure.',
        'Designed and developed multi-agent document processing for complex documents (PDF, Word, tables, images), exposing conversion and extraction as tools via MCP; built validation and evaluation of agent output; deployed on Kubernetes with Helm.',
        'Developed metadata-driven Python/PySpark pipelines in Microsoft Fabric (Lakehouse, Delta Lake) integrating many data sources, with ontology-based standardization for AI/ML use cases.',
        'Designing the target Azure architecture for a cloud migration of an AI platform, including service selection, sizing and migration planning.',
        'Onboarded and guided a new colleague; support apprentices.',
      ],
    },
  },
  {
    title: { de: 'Development Engineer (AI Engineer)', en: 'Development Engineer (AI Engineer)' },
    org: 'Albert Handtmann Maschinenfabrik GmbH & Co. KG',
    place: { de: 'Biberach', en: 'Biberach' },
    start: '06/2023',
    end: { de: '08/2025', en: '08/2025' },
    points: {
      de: [
        'Einen mehrsprachigen Sprachassistenten für Füll- und Portioniermaschinen mit Azure OpenAI GPT-Modellen und Whisper entwickelt, im Produktiveinsatz bei Kunden getestet.',
        'MLOps-Infrastruktur auf Azure mit CI/CD für automatisierte Modellvalidierung und Deployment aufgebaut.',
        'ML-Modelle in Echtzeit-Produktionsprozesse integriert, um Maschinenparameter zu analysieren; Features entwickelt und produktive Modelle überwacht.',
        'Mit Entwicklern, Produktionsleitern und Stakeholdern von den Anforderungen bis zur Auslieferung zusammengearbeitet; Praktikanten betreut.',
      ],
      en: [
        'Developed a multilingual voice assistant for filling and portioning machines with Azure OpenAI GPT models and Whisper, tested in production at customer sites.',
        'Built MLOps infrastructure on Azure with CI/CD for automated model validation and deployment.',
        'Integrated ML models into real-time production processes to analyze machine parameters; engineered features and monitored deployed models.',
        'Worked with developers, production managers and stakeholders from requirements to delivery; supported interns.',
      ],
    },
  },
  {
    title: { de: 'Masterarbeit – KI-basierte Prozessüberwachung', en: "Master's thesis – AI-based process monitoring" },
    org: 'Albert Handtmann',
    start: '11/2022',
    end: { de: '05/2023', en: '05/2023' },
    points: {
      de: ['ML-basierte Prozessüberwachung zur Vorhersage der Produktqualität, auf Azure mit CI/CD für das Nachtrainieren bereitgestellt.'],
      en: ['ML-based process monitoring predicting product quality, deployed on Azure with CI/CD for retraining.'],
    },
  },
  {
    title: { de: 'Data Scientist (Praktikum)', en: 'Data Scientist Intern' },
    org: 'Keysight Technologies',
    place: { de: 'Böblingen', en: 'Böblingen' },
    start: '03/2022',
    end: { de: '07/2022', en: '07/2022' },
    points: {
      de: ['ML-basiertes Analysewerkzeug mit automatisierten Datenpipelines.'],
      en: ['ML-based analytics tool with automated data pipelines.'],
    },
  },
  {
    title: { de: 'Data Analyst (Praktikum, NLP)', en: 'Data Analyst Intern (NLP)' },
    org: 'Magnificent Data GmbH',
    place: { de: 'Schönefeld', en: 'Schönefeld' },
    start: '10/2021',
    end: { de: '01/2022', en: '01/2022' },
    points: {
      de: ['Transformer-basierte Chatbots zur Analyse von Kundenfeedback.'],
      en: ['Transformer-based chatbots for customer feedback analysis.'],
    },
  },
];

export const education: { degree: L; school: string; dates: string }[] = [
  { degree: { de: 'M.Sc. Information and Electrical Engineering', en: 'M.Sc. Information and Electrical Engineering' }, school: 'Hochschule Wismar', dates: '2019 – 2023' },
  { degree: { de: 'B.E. Mechanical Engineering', en: 'B.E. Mechanical Engineering' }, school: 'University of Pune', dates: '2015 – 2018' },
];

export const languages: { name: L; level: string }[] = [
  { name: { de: 'Englisch', en: 'English' }, level: 'C1' },
  { name: { de: 'Deutsch', en: 'German' }, level: 'B1' },
];

export const skills: { area: L; items: string[] }[] = [
  { area: { de: 'Agenten & LLMs', en: 'Agents & LLMs' }, items: ['LangGraph', 'MCP / FastMCP', 'Azure OpenAI', 'Tool calling', 'Document intelligence', 'Structured extraction'] },
  { area: { de: 'Engineering', en: 'Engineering' }, items: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'Helm', 'CI/CD', 'Kafka', 'Airflow', 'Bifrost LLM gateway'] },
  { area: { de: 'Cloud & Daten', en: 'Cloud & data' }, items: ['Azure', 'Azure AI Foundry', 'Microsoft Fabric', 'PySpark', 'Delta Lake', 'SQL'] },
  { area: { de: 'Machine Learning', en: 'Machine learning' }, items: ['PyTorch', 'scikit-learn', 'Hugging Face', 'MLOps'] },
];

// Public repositories, described from their own READMEs.
export const repos: { name: string; url: string; desc: L; stack: string[]; older?: boolean }[] = [
  {
    name: 'genai_cold_email_generator',
    url: 'https://github.com/asadkhan5456/genai_cold_email_generator',
    desc: {
      de: 'Liest Stellenanzeigen von einer Karriereseite, sucht passende Portfolio-Links per Vektorsuche und schreibt daraus eine personalisierte E-Mail.',
      en: 'Reads job details from a careers page, finds matching portfolio links with vector search and writes a personalised email.',
    },
    stack: ['LangChain', 'Groq', 'ChromaDB', 'FastAPI', 'Streamlit', 'Docker'],
    older: true,
  },
  {
    name: 'Newsroom-AI-Agent',
    url: 'https://github.com/asadkhan5456/Newsroom-AI-Agent',
    desc: {
      de: 'Automation, die neue Artikel per RSS abholt, eine deutsche Zusammenfassung und Schlagzeilen erzeugt, das JSON validiert und an ein CMS, per E-Mail und in Logs ausliefert.',
      en: 'Automation that picks up new articles via RSS, writes a German summary and headlines, validates the JSON and delivers it to a CMS, by email and to logs.',
    },
    stack: ['n8n', 'LLM', 'JSON validation'],
  },
  {
    name: 'predictive_maintenance',
    url: 'https://github.com/asadkhan5456/predictive_maintenance',
    desc: {
      de: 'Vorhersage der Restlebensdauer von Turbofan-Triebwerken aus Sensordaten, bereitgestellt als API mit Tests und CI.',
      en: 'Predicts the remaining useful life of turbofan engines from sensor data, served as an API with tests and CI.',
    },
    stack: ['Python', 'scikit-learn', 'FastAPI', 'Docker'],
    older: true,
  },
];
