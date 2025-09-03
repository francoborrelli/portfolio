// Education

const APU = {
  APU_NAME: 'Analista Programmatore',
  APU_ARTIST: 'Facoltà di Informatica | UNLP',
  APU_LENGTH: 'Feb 2015 - Nov 2019',
  APU_DESCRIPTION: `GPA del diploma: 9.19/10\nLa carriera di Analista Programmatore mira a formare laureati con conoscenze di base dei fondamentali della disciplina e delle tecnologie attuali, permettendo loro di essere qualificati per il lavoro professionale in sistemi di piccola e media complessità.`,
};

const LICENCIATURA = {
  LICENCIATURA_NAME: 'Laurea in Sistemi',
  LICENCIATURA_ARTIST: 'Facoltà di Informatica | UNLP',
  LICENCIATURA_LENGTH: 'Feb 2015 - Mar 2021',
  LICENCIATURA_DESCRIPTION: `GPA del diploma: 9.35/10\nLa Laurea in Sistemi è certificata internazionalmente da EUROINF.`,
};

const ENGLISH_CAMBRIDGE = {
  ENGLISH_CAMBRIDGE_NAME: 'Cambridge English: First (FCE) – Livello CEFR C1',
  ENGLISH_CAMBRIDGE_ARTIST: 'Cambridge University Press & Assessment English',
  ENGLISH_CAMBRIDGE_LENGTH: 'Dic 2014',
  ENGLISH_CAMBRIDGE_DESCRIPTION: `Voto: A\nLa certificazione Cambridge English: Advanced (CAE) è la prova di competenze di alto livello nella lingua inglese per scopi accademici e professionali.`,
};

const MIKROWAYS_KUBERNETES = {
  MIKROWAYS_KUBERNETES_NAME: 'Fondamenti di Kubernetes',
  MIKROWAYS_KUBERNETES_ARTIST: 'Mikroways',
  MIKROWAYS_KUBERNETES_LENGTH: 'Feb 2020',
  MIKROWAYS_KUBERNETES_DESCRIPTION: `Questo corso mi ha fornito una comprensione completa di Kubernetes, una potente piattaforma di orchestrazione di container.`,
};

const REACT_UDEMY = {
  REACT_UDEMY_NAME: 'React - La Guida Completa',
  REACT_UDEMY_ARTIST: 'Udemy',
  REACT_UDEMY_LENGTH: 'Mar 2018',
  REACT_UDEMY_DESCRIPTION: `Questo corso mi ha equipaggiato con le competenze per sviluppare applicazioni web moderne e dinamiche utilizzando React.`,
};

const FISCALIA = {
  FISCALIA_NAME: 'Sviluppo Web con Architettura REST',
  FISCALIA_ARTIST: 'Fiscalía de Estado | Provincia di Buenos Aires',
  FISCALIA_LENGTH: 'Feb 2019',
  FISCALIA_DESCRIPTION: `Il corso si è concentrato sull'insegnamento dello sviluppo utilizzando l'architettura REST.`,
};

const ANGULAR_UDEMY = {
  ANGULAR_UDEMY_NAME: 'Angular: Da Zero a Esperto',
  ANGULAR_UDEMY_ARTIST: 'Udemy',
  ANGULAR_UDEMY_LENGTH: 'Mag 2019',
  ANGULAR_UDEMY_DESCRIPTION: `Questo corso mi ha fornito una comprensione completa di Angular, un potente framework frontend.`,
};

const MAGISTER_DATA_ANALYSIS = {
  MAGISTER_DATA_ANALYSIS_NAME: 'Master in Intelligence dei Dati con focus su Big Data',
  MAGISTER_DATA_ANALYSIS_ARTIST: 'Facoltà di Informatica | UNLP',
  MAGISTER_DATA_ANALYSIS_LENGTH: 'Mar 2021 - Lug 2024',
  MAGISTER_DATA_ANALYSIS_DESCRIPTION: `GPA del diploma: 9.6/10\nIl Master in Intelligence dei Dati con focus su Big Data mira ai laureati universitari in Informatica e/o campi correlati.`,
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
