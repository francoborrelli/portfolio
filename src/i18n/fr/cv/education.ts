// Education

const APU = {
  APU_NAME: 'Analyste Programmeur',
  APU_ARTIST: 'Faculté d\'Informatique | UNLP',
  APU_LENGTH: 'Fév 2015 - Nov 2019',
  APU_DESCRIPTION: `GPA du diplôme : 9.19/10\nLa carrière d'Analyste Programmeur vise à former des diplômés avec des connaissances de base des fondamentaux de la discipline et des technologies actuelles, leur permettant d'être qualifiés pour un travail professionnel dans des systèmes de petite et moyenne complexité.`,
};

const LICENCIATURA = {
  LICENCIATURA_NAME: 'Licence en Systèmes',
  LICENCIATURA_ARTIST: 'Faculté d\'Informatique | UNLP',
  LICENCIATURA_LENGTH: 'Fév 2015 - Mar 2021',
  LICENCIATURA_DESCRIPTION: `GPA du diplôme : 9.35/10\nLa Licence en Systèmes est certifiée internationalement par EUROINF.`,
};

const ENGLISH_CAMBRIDGE = {
  ENGLISH_CAMBRIDGE_NAME: 'Cambridge English: First (FCE) – Niveau CEFR C1',
  ENGLISH_CAMBRIDGE_ARTIST: 'Cambridge University Press & Assessment English',
  ENGLISH_CAMBRIDGE_LENGTH: 'Déc 2014',
  ENGLISH_CAMBRIDGE_DESCRIPTION: `Note : A\nLa certification Cambridge English: Advanced (CAE) est la preuve de compétences élevées en anglais à des fins académiques et professionnelles.`,
};

const MIKROWAYS_KUBERNETES = {
  MIKROWAYS_KUBERNETES_NAME: 'Fondements de Kubernetes',
  MIKROWAYS_KUBERNETES_ARTIST: 'Mikroways',
  MIKROWAYS_KUBERNETES_LENGTH: 'Fév 2020',
  MIKROWAYS_KUBERNETES_DESCRIPTION: `Ce cours m'a fourni une compréhension complète de Kubernetes, une plateforme puissante d'orchestration de conteneurs.`,
};

const REACT_UDEMY = {
  REACT_UDEMY_NAME: 'React - Le Guide Complet',
  REACT_UDEMY_ARTIST: 'Udemy',
  REACT_UDEMY_LENGTH: 'Mar 2018',
  REACT_UDEMY_DESCRIPTION: `Ce cours m'a équipé des compétences pour développer des applications web modernes et dynamiques en utilisant React.`,
};

const FISCALIA = {
  FISCALIA_NAME: 'Développement Web avec Architecture REST',
  FISCALIA_ARTIST: 'Fiscalía de Estado | Province de Buenos Aires',
  FISCALIA_LENGTH: 'Fév 2019',
  FISCALIA_DESCRIPTION: `Le cours s'est concentré sur l'enseignement du développement en utilisant l'architecture REST.`,
};

const ANGULAR_UDEMY = {
  ANGULAR_UDEMY_NAME: 'Angular : De Zéro à Expert',
  ANGULAR_UDEMY_ARTIST: 'Udemy',
  ANGULAR_UDEMY_LENGTH: 'Mai 2019',
  ANGULAR_UDEMY_DESCRIPTION: `Ce cours m'a fourni une compréhension complète d'Angular, un framework frontend puissant.`,
};

const MAGISTER_DATA_ANALYSIS = {
  MAGISTER_DATA_ANALYSIS_NAME: 'Master en Intelligence des Données avec focus sur le Big Data',
  MAGISTER_DATA_ANALYSIS_ARTIST: 'Faculté d\'Informatique | UNLP',
  MAGISTER_DATA_ANALYSIS_LENGTH: 'Mar 2021 - Juil 2024',
  MAGISTER_DATA_ANALYSIS_DESCRIPTION: `GPA du diplôme : 9.6/10\nLe Master en Intelligence des Données avec focus sur le Big Data vise les diplômés universitaires en Informatique et/ou domaines connexes.`,
};

export const EDUCATION = {
  ...APU,
  ...FISCALIA,
  ...REACT_UDEMY,
  ...LICENCIATURA,
  ...ANGULAR_UDEMY,
  ...ENGLISH_CAMBRIDGE,
  ...MIKROWAYS_KUBERNETES,
  ...MAGISTER_DATA_ANALYSIS,
} as const;
