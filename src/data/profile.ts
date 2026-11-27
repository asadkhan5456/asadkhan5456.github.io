// Facts only. Do not add numbers, client names or skills that are not confirmed.
export const profile = {
  name: 'Asad Faiyyaz Khan',
  city: 'Aalen, Germany',
  linkedin: 'https://www.linkedin.com/in/ak54/',
  github: 'https://github.com/asadkhan5456',
  // Email is split so it does not appear as plain text in the HTML.
  emailUser: 'asadfkhan5456',
  emailDomain: 'gmail.com',
  cvPath: '/cv/Asad_Faiyyaz_Khan_CV.pdf',
};

export const bio = [
  'I am an AI Engineer and Solution Architect building agentic AI systems for enterprise clients. I design and deliver multi-agent document-processing systems, Model Context Protocol (MCP) tool integrations and the data pipelines behind them, from architecture to production on Microsoft Azure.',
  'As main developer and client contact, I translate business needs into working solutions and advise on architecture, cloud services and quality evaluation. Earlier, I built a multilingual voice assistant on Azure OpenAI for industrial machines at Albert Handtmann.',
];

export const experience = [
  {
    title: 'Senior AI Engineer (Solution Architect – Data & AI)',
    org: 'PlanB GmbH',
    dates: '02/2026 – present',
    summary: 'Main developer and client contact across five client projects.',
  },
  {
    title: 'Development Engineer (AI Engineer)',
    org: 'Albert Handtmann Maschinenfabrik, Biberach',
    dates: '06/2023 – 08/2025',
    summary: '',
  },
  {
    title: "Master's thesis, AI-based process monitoring",
    org: 'Albert Handtmann',
    dates: '11/2022 – 05/2023',
    summary: '',
  },
  {
    title: 'Data Scientist Intern',
    org: 'Keysight Technologies, Böblingen',
    dates: '03/2022 – 07/2022',
    summary: '',
  },
  {
    title: 'Data Analyst Intern (NLP)',
    org: 'Magnificent Data, Schönefeld',
    dates: '10/2021 – 01/2022',
    summary: '',
  },
];

export const education = [
  { degree: 'M.Sc. Information and Electrical Engineering', school: 'Hochschule Wismar', dates: '2019 – 2023' },
  { degree: 'B.E. Mechanical Engineering', school: 'University of Pune', dates: '2015 – 2018' },
];

export const languages = [
  { name: 'English', level: 'C1' },
  { name: 'German', level: 'B1' },
];

export const skills = [
  {
    area: 'Agents & LLMs',
    items: ['LangGraph', 'MCP / FastMCP', 'Azure OpenAI', 'Tool calling', 'Document intelligence', 'Structured extraction'],
  },
  {
    area: 'Engineering',
    items: ['Python', 'FastAPI', 'Docker', 'Kubernetes', 'Helm', 'CI/CD', 'Kafka', 'Airflow', 'Bifrost LLM gateway'],
  },
  {
    area: 'Cloud & data',
    items: ['Azure', 'Azure AI Foundry', 'Microsoft Fabric', 'PySpark', 'Delta Lake', 'SQL'],
  },
  { area: 'ML', items: ['PyTorch', 'scikit-learn', 'Hugging Face', 'MLOps'] },
];
