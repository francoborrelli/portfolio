// Skills — detailed keys for playlist/now-playing; names fall back to EN for the rest

export const SKILLS = {
  // Display-name aliases (legacy)
  TYPESCRIPT: 'TypeScript',
  JAVASCRIPT: 'JavaScript',
  PYTHON: 'Python',
  PHP: 'PHP',
  JAVA: 'Java',
  C_SHARP: 'C#',
  REACT: 'React',
  ANGULAR: 'Angular',
  VUE: 'Vue.js',
  HTML: 'HTML',
  CSS: 'CSS',
  SASS: 'Sass',
  NODE: 'Node.js',
  EXPRESS: 'Express.js',
  LARAVEL: 'Laravel',
  DJANGO: 'Django',
  SYMFONY: 'Symfony',
  REACT_NATIVE: 'React Native',
  IONIC: 'Ionic',
  EXPO: 'Expo',
  MYSQL: 'MySQL',
  POSTGRESQL: 'PostgreSQL',
  MONGODB: 'MongoDB',
  DYNAMODB: 'DynamoDB',
  DOCKER: 'Docker',
  KUBERNETES: 'Kubernetes',
  AWS: 'AWS',
  CI_CD: 'CI/CD',
  GIT: 'Git',
  LINUX: 'Linux',
  AGILE: 'Agile',
  SCRUM: 'Scrum',

  // GraphQL
  GRAPHQL_HELP:
    'GraphQL ist eine Abfragesprache für APIs und eine Runtime zu ihrer Ausführung. Clients können genau die Daten anfordern, die sie brauchen.',
  GRAPHQL_EXPERIENCE: `GraphQL-Erfahrung (4+ Jahre):
  \n<b>•Schema-Design:</b> Klare GraphQL-Schemas mit Typen, Beziehungen und effizienten Queries.
  \n<b>•Resolver:</b> Resolver für Datenabruf, Transformation und Performance-Optimierung.
  \n<b>•Effektive Queries:</b> Verschachtelte Queries, Fragmente und Variablen für flexible, wiederverwendbare Requests.`,
  GRAPHQL_YEARS: '4 Jahre',

  // Next.js
  'NEXT.JS_HELP':
    'Next.js ist ein React-Framework für Full-Stack-Webapps mit SSR, SSG, Routing und API Routes.',
  'NEXT.JS_EXPERIENCE': `Praktische Next.js-Erfahrung (4+ Jahre):
  \n<b>•App Router & Pages:</b> Produktions-Apps mit verschachtelten Layouts, dynamischen Routes und Data Loading.
  \n<b>•Rendering-Strategien:</b> Auswahl zwischen SSR, SSG, ISR und Client-Side Rendering.
  \n<b>•Full-Stack:</b> API Routes / Route Handlers, Middleware und Server Actions.
  \n<b>•Deployment:</b> Auslieferung auf Vercel mit Environments, Previews und Rollouts.`,
  'NEXT.JS_YEARS': '4 Jahre',

  // AI
  AI_HELP:
    'AI umfasst generative Tools und LLM-gestützte Entwicklung: Modelle, APIs und agentische Workflows, um Software schneller zu entwerfen und zu verbessern.',
  AI_EXPERIENCE: `Angewandte AI im Alltag (4+ Jahre):
  \n<b>•LLM-gestützte Entwicklung:</b> Einsatz von Cursor, Claude Code und Codex für Design, Implementierung, Refactoring, Debugging und Dokumentation.
  \n<b>•Prompting & Workflows:</b> Strukturierte Prompts, Kontext und iterative Reviews für produktionsreife Ergebnisse.
  \n<b>•Produkt-Features:</b> Integration von AI-Capabilities, wenn sie echten Nutzernutzen bringen.
  \n<b>•Kontinuierliches Lernen:</b> Google-AI-Specialization und verwandte Kurse, angewandt in realen Projekten.`,
  AI_YEARS: '4 Jahre',

  // Cursor
  CURSOR_HELP:
    'Cursor ist ein AI-gestützter Code-Editor für LLM-assistierte Entwicklung mit tiefem Codebase-Kontext und agentischen Workflows.',
  CURSOR_EXPERIENCE: `Tägliche Cursor-Nutzung (2+ Jahre):
  \n<b>•Agentisches Coding:</b> Multi-File-Änderungen, Refactors und Features mit Cursor-Agents bei sorgfältiger Diff-Review.
  \n<b>•Codebase-Kontext:</b> Chat und Rules ausgerichtet auf Architektur und Projektkonventionen.
  \n<b>•Debug & Review:</b> Schnellere Untersuchung, Tests und PR-Polish ohne Ownership am finalen Code zu verlieren.`,
  CURSOR_YEARS: '2 Jahre',

  // Prompt Engineering
  PROMPT_ENGINEERING_HELP:
    'Prompt Engineering ist die Praxis, Anweisungen, Kontext und Evaluationsschleifen so zu gestalten, dass LLMs zuverlässige Outputs für echte Engineering-Arbeit liefern.',
  PROMPT_ENGINEERING_EXPERIENCE: `Angewandtes Prompt Engineering (2+ Jahre):
  \n<b>•Strukturierte Prompts:</b> Rolle, Constraints, Beispiele und Acceptance Criteria für actionable Outputs.
  \n<b>•Iterative Loops:</b> Prompts mit Feedback, Rubriken und Verifikation für Produktionsqualität verfeinern.
  \n<b>•Engineering-Workflows:</b> Prompting-Patterns für Design, Implementierung, Debugging, Dokumentation und Research.`,
  PROMPT_ENGINEERING_YEARS: '2 Jahre',

  // Notion
  NOTION_HELP:
    'Notion ist ein All-in-one-Workspace für Docs, Wikis, Projekt-Tracking und Knowledge Management.',
  NOTION_EXPERIENCE: `Notion für Engineering-Zusammenarbeit (3+ Jahre):
  \n<b>•Docs & Wikis:</b> Technische Notes, RFCs und Team-Knowledge-Bases.
  \n<b>•Projekt-Tracking:</b> Tasks, Roadmaps und Meeting-Notes in gemeinsamen Workspaces.
  \n<b>•Prozesse:</b> Templates und Databases für konsistente Delivery und Dokumentation.`,
  NOTION_YEARS: '3 Jahre',

  // GitHub Actions
  GITHUB_ACTIONS_HELP:
    'GitHub Actions ist eine CI/CD-Plattform zur Automatisierung von Build, Test und Deploy direkt aus GitHub-Repositories.',
  GITHUB_ACTIONS_EXPERIENCE: `GitHub Actions in echten Pipelines (4+ Jahre):
  \n<b>•YAML-Workflows:</b> Jobs für Lint, Test, Build und Deploy.
  \n<b>•Wiederverwendbare Automation:</b> Matrices, Caching, Artifacts und reusable Workflows.
  \n<b>•Delivery:</b> Releases und Environment-Deploys mit Secrets, Environments und Branch Protections.`,
  GITHUB_ACTIONS_YEARS: '4 Jahre',

  // Grafana
  GRAFANA_HELP:
    'Grafana ist eine Observability-Plattform für Metrics, Logs und Dashboards zur Überwachung von App- und Infrastruktur-Gesundheit.',
  GRAFANA_EXPERIENCE: `Grafana für Observability (2+ Jahre):
  \n<b>•Dashboards:</b> Panels für Latenz, Errors, Throughput und Resource Usage.
  \n<b>•Alerting:</b> Actionable Alerts statt Rauschen.
  \n<b>•Ops-Sichtbarkeit:</b> Production-Debugging und Tracking der Service-Gesundheit über die Zeit.`,
  GRAFANA_YEARS: '2 Jahre',
};
