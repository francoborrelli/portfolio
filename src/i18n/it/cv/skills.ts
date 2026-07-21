// Skills — detailed keys for playlist/now-playing; names fall back to EN for the rest

export const SKILLS = {
  // Display-name aliases (legacy)
  JavaScript: 'JavaScript',
  TypeScript: 'TypeScript',
  Python: 'Python',
  Java: 'Java',
  'C#': 'C#',
  PHP: 'PHP',
  SQL: 'SQL',
  HTML: 'HTML',
  CSS: 'CSS',
  SCSS: 'SCSS',
  React: 'React',
  Angular: 'Angular',
  'Vue.js': 'Vue.js',
  'Node.js': 'Node.js',
  'Express.js': 'Express.js',
  'Next.js': 'Next.js',
  Redux: 'Redux',
  Bootstrap: 'Bootstrap',
  'Material-UI': 'Material-UI',
  'Tailwind CSS': 'Tailwind CSS',
  MongoDB: 'MongoDB',
  PostgreSQL: 'PostgreSQL',
  MySQL: 'MySQL',
  Redis: 'Redis',
  Firebase: 'Firebase',
  Docker: 'Docker',
  Kubernetes: 'Kubernetes',
  Git: 'Git',
  GitHub: 'GitHub',
  GitLab: 'GitLab',
  Jenkins: 'Jenkins',
  AWS: 'AWS',
  Azure: 'Azure',
  'Google Cloud': 'Google Cloud',
  TensorFlow: 'TensorFlow',
  PyTorch: 'PyTorch',
  'Scikit-learn': 'Scikit-learn',
  Pandas: 'Pandas',
  NumPy: 'NumPy',
  Matplotlib: 'Matplotlib',
  OpenCV: 'OpenCV',
  'REST API': 'API REST',
  GraphQL: 'GraphQL',
  Microservices: 'Microservizi',
  Agile: 'Agile',
  Scrum: 'Scrum',
  'CI/CD': 'CI/CD',
  Testing: 'Test',
  Jest: 'Jest',
  Cypress: 'Cypress',

  // GraphQL
  GRAPHQL_HELP:
    'GraphQL è un linguaggio di query per API e un runtime per eseguirle. Permette ai client di richiedere solo i dati di cui hanno bisogno.',
  GRAPHQL_EXPERIENCE: `Competenza in GraphQL (4+ anni):
  \n<b>•Schema design:</b> Definizione di schemi GraphQL chiari con tipi, relazioni e query efficienti.
  \n<b>•Resolver:</b> Scrittura di resolver per fetch, trasformazione e ottimizzazione dei dati.
  \n<b>•Query efficaci:</b> Query nidificate, fragment e variabili per richieste flessibili e riutilizzabili.`,
  GRAPHQL_YEARS: '4 anni',

  // Next.js
  'NEXT.JS_HELP':
    'Next.js è un framework React per applicazioni web full-stack, con SSR, SSG, routing e API routes.',
  'NEXT.JS_EXPERIENCE': `Esperienza pratica con Next.js (4+ anni):
  \n<b>•App Router e Pages:</b> App in produzione con layout nidificati, route dinamiche e data loading.
  \n<b>•Strategie di rendering:</b> Scelta tra SSR, SSG, ISR e client-side rendering.
  \n<b>•Full-stack:</b> API routes / Route Handlers, middleware e server actions.
  \n<b>•Deploy:</b> Pubblicazione su Vercel con ambienti, preview e rollouts.`,
  'NEXT.JS_YEARS': '4 anni',

  // AI
  AI_HELP:
    "L'AI include tooling generativo e sviluppo assistito da LLM: modelli, API e workflow agentici per progettare e migliorare software più velocemente.",
  AI_EXPERIENCE: `AI applicata nel lavoro quotidiano (4+ anni):
  \n<b>•Sviluppo assistito da LLM:</b> Uso di Cursor, Claude Code e Codex per accelerare design, implementazione, refactoring, debug e documentazione.
  \n<b>•Prompting e workflow:</b> Prompt strutturati, contesto e review iterative per output affidabili in produzione.
  \n<b>•Feature di prodotto:</b> Integrazione di capacità AI quando aggiungono valore reale all'utente.
  \n<b>•Apprendimento continuo:</b> Specializzazioni Google AI e corsi correlati applicati a progetti reali.`,
  AI_YEARS: '4 anni',

  // Cursor
  CURSOR_HELP:
    'Cursor è un editor AI-powered per lo sviluppo assistito da LLM, con contesto profondo del codebase e workflow agentici.',
  CURSOR_EXPERIENCE: `Uso quotidiano di Cursor (2+ anni):
  \n<b>•Coding agentico:</b> Cambi multi-file, refactor e feature con agent Cursor, revisionando i diff con attenzione.
  \n<b>•Contesto del codebase:</b> Chat e rules allineate ad architettura e convenzioni del progetto.
  \n<b>•Debug e review:</b> Accelerare investigazione, test e polish di PR senza perdere ownership del codice.`,
  CURSOR_YEARS: '2 anni',

  // Prompt Engineering
  PROMPT_ENGINEERING_HELP:
    "Il prompt engineering è la pratica di progettare istruzioni, contesto e loop di valutazione affinché gli LLM producano output affidabili per il lavoro di engineering.",
  PROMPT_ENGINEERING_EXPERIENCE: `Prompt engineering applicato (2+ anni):
  \n<b>•Prompt strutturati:</b> Ruolo, vincoli, esempi e criteri di accettazione per output azionabili.
  \n<b>•Loop iterativi:</b> Raffinare prompt con feedback, rubriche e verifica per qualità di produzione.
  \n<b>•Workflow di engineering:</b> Pattern di prompting per design, implementazione, debug, documentazione e research.`,
  PROMPT_ENGINEERING_YEARS: '2 anni',

  // Notion
  NOTION_HELP:
    'Notion è uno workspace all-in-one per documenti, wiki, tracking di progetto e knowledge management.',
  NOTION_EXPERIENCE: `Notion per la collaborazione engineering (3+ anni):
  \n<b>•Docs e wiki:</b> Note tecniche, RFC e knowledge base di team.
  \n<b>•Project tracking:</b> Task, roadmap e meeting notes in workspace condivisi.
  \n<b>•Processi:</b> Template e database per delivery e documentazione coerenti.`,
  NOTION_YEARS: '3 anni',

  // GitHub Actions
  GITHUB_ACTIONS_HELP:
    'GitHub Actions è una piattaforma CI/CD per automatizzare build, test e deploy direttamente da repository GitHub.',
  GITHUB_ACTIONS_EXPERIENCE: `GitHub Actions in pipeline reali (4+ anni):
  \n<b>•Workflow YAML:</b> Job di lint, test, build e deploy.
  \n<b>•Automazione riusabile:</b> Matrici, caching, artifact e reusable workflows.
  \n<b>•Delivery:</b> Release e deploy per ambiente con secrets, environments e branch protection.`,
  GITHUB_ACTIONS_YEARS: '4 anni',

  // Grafana
  GRAFANA_HELP:
    "Grafana è una piattaforma di observability per metriche, log e dashboard per monitorare salute di app e infrastruttura.",
  GRAFANA_EXPERIENCE: `Grafana per observability (2+ anni):
  \n<b>•Dashboard:</b> Pannelli per latenza, errori, throughput e uso risorse.
  \n<b>•Alerting:</b> Alert actionable invece di rumore.
  \n<b>•Visibilità ops:</b> Debug in produzione e tracking della salute del servizio nel tempo.`,
  GRAFANA_YEARS: '2 anni',
} as const;
