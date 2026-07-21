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
  Microservices: 'Microservices',
  Agile: 'Agile',
  Scrum: 'Scrum',
  'CI/CD': 'CI/CD',
  Testing: 'Tests',
  Jest: 'Jest',
  Cypress: 'Cypress',

  // GraphQL
  GRAPHQL_HELP:
    'GraphQL est un langage de requête pour les API et un runtime pour les exécuter. Il permet aux clients de demander uniquement les données dont ils ont besoin.',
  GRAPHQL_EXPERIENCE: `Compétence en GraphQL (4+ ans) :
  \n<b>•Conception de schéma :</b> Définition de schémas GraphQL clairs avec types, relations et requêtes efficaces.
  \n<b>•Resolvers :</b> Écriture de resolvers pour le fetch, la transformation et l'optimisation des données.
  \n<b>•Requêtes efficaces :</b> Requêtes imbriquées, fragments et variables pour des appels flexibles et réutilisables.`,
  GRAPHQL_YEARS: '4 ans',

  // Next.js
  'NEXT.JS_HELP':
    'Next.js est un framework React pour des applications web full-stack, avec SSR, SSG, routing et API routes.',
  'NEXT.JS_EXPERIENCE': `Expérience pratique avec Next.js (4+ ans) :
  \n<b>•App Router et Pages :</b> Apps en production avec layouts imbriqués, routes dynamiques et data loading.
  \n<b>•Stratégies de rendu :</b> Choix entre SSR, SSG, ISR et rendu côté client.
  \n<b>•Full-stack :</b> API routes / Route Handlers, middleware et server actions.
  \n<b>•Déploiement :</b> Publication sur Vercel avec environnements, previews et rollouts.`,
  'NEXT.JS_YEARS': '4 ans',

  // AI
  AI_HELP:
    "L'IA couvre les outils génératifs et le développement assisté par LLM : modèles, APIs et workflows agentiques pour concevoir et améliorer le logiciel plus rapidement.",
  AI_EXPERIENCE: `IA appliquée au quotidien (4+ ans) :
  \n<b>•Développement assisté par LLM :</b> Utilisation de Cursor, Claude Code et Codex pour accélérer design, implémentation, refactoring, debug et documentation.
  \n<b>•Prompting et workflows :</b> Prompts structurés, contexte et reviews itératives pour des sorties fiables en production.
  \n<b>•Fonctionnalités produit :</b> Intégration de capacités IA lorsqu'elles apportent une vraie valeur utilisateur.
  \n<b>•Apprentissage continu :</b> Spécialisations Google AI et cours associés appliqués à des projets réels.`,
  AI_YEARS: '4 ans',

  // Cursor
  CURSOR_HELP:
    'Cursor est un éditeur AI-powered pour le développement assisté par LLM, avec un contexte profond du codebase et des workflows agentiques.',
  CURSOR_EXPERIENCE: `Usage quotidien de Cursor (2+ ans) :
  \n<b>•Coding agentique :</b> Changements multi-fichiers, refactors et features avec les agents Cursor, en reviewant soigneusement les diffs.
  \n<b>•Contexte du codebase :</b> Chat et rules alignés sur l'architecture et les conventions du projet.
  \n<b>•Debug et review :</b> Accélérer investigation, tests et polish de PR sans perdre l'ownership du code.`,
  CURSOR_YEARS: '2 ans',

  // Prompt Engineering
  PROMPT_ENGINEERING_HELP:
    "Le prompt engineering est la pratique de concevoir instructions, contexte et boucles d'évaluation pour que les LLM produisent des sorties fiables pour le travail d'engineering.",
  PROMPT_ENGINEERING_EXPERIENCE: `Prompt engineering appliqué (2+ ans) :
  \n<b>•Prompts structurés :</b> Rôle, contraintes, exemples et critères d'acceptation pour des sorties actionnables.
  \n<b>•Boucles itératives :</b> Affiner les prompts avec feedback, rubriques et vérification pour une qualité production.
  \n<b>•Workflows d'engineering :</b> Patterns de prompting pour design, implémentation, debug, documentation et research.`,
  PROMPT_ENGINEERING_YEARS: '2 ans',

  // Notion
  NOTION_HELP:
    'Notion est un workspace all-in-one pour docs, wikis, suivi de projets et knowledge management.',
  NOTION_EXPERIENCE: `Notion pour la collaboration engineering (3+ ans) :
  \n<b>•Docs et wikis :</b> Notes techniques, RFCs et bases de connaissance d'équipe.
  \n<b>•Suivi de projet :</b> Tâches, roadmaps et notes de réunion dans des workspaces partagés.
  \n<b>•Processus :</b> Templates et databases pour une delivery et une documentation cohérentes.`,
  NOTION_YEARS: '3 ans',

  // GitHub Actions
  GITHUB_ACTIONS_HELP:
    'GitHub Actions est une plateforme CI/CD pour automatiser build, test et deploy directement depuis des dépôts GitHub.',
  GITHUB_ACTIONS_EXPERIENCE: `GitHub Actions dans des pipelines réels (4+ ans) :
  \n<b>•Workflows YAML :</b> Jobs de lint, test, build et deploy.
  \n<b>•Automatisation réutilisable :</b> Matrices, caching, artifacts et reusable workflows.
  \n<b>•Delivery :</b> Releases et deploys par environnement avec secrets, environments et branch protections.`,
  GITHUB_ACTIONS_YEARS: '4 ans',

  // Grafana
  GRAFANA_HELP:
    "Grafana est une plateforme d'observability pour métriques, logs et dashboards afin de suivre la santé des apps et de l'infra.",
  GRAFANA_EXPERIENCE: `Grafana pour l'observability (2+ ans) :
  \n<b>•Dashboards :</b> Panneaux pour latence, erreurs, throughput et usage des ressources.
  \n<b>•Alerting :</b> Alertes actionnables plutôt que du bruit.
  \n<b>•Visibilité ops :</b> Debug en production et suivi de la santé du service dans le temps.`,
  GRAFANA_YEARS: '2 ans',
} as const;
