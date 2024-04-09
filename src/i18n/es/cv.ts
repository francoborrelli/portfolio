// Experience

export const LBS = {
  LBS_JOB_TITLE: 'Software Engineer',
  LBS_JOB_DURATION: 'La Plata, Jun 2023 - Presente',
  LBS_JOB_DESCRIPTION:
    'En LBS Informática, contribuí en diversos proyectos utilizando React para el frontend y Laravel para el backend.',
};

export const GRAL = {
  GRAL_JOB_TITLE: 'Software Engineer',
  GRAL_JOB_DURATION: 'La Plata, Oct 2019 - Presente',
  GRAL_JOB_DESCRIPTION: `Durante mi experiencia laboral, participé en la implementación de diversos sistemas web para la gestión interna de la empresa. En este puesto, trabajé con una variedad de frameworks y lenguajes de programación, incluyendo Typescript (React, Express.js), Python (Django) y PHP (Laravel y Symfony), permitiendo así un desarrollo ágil y eficiente. \n Además, me encargué de manejar tanto bases de datos relacionales, como Mysql y Postgres, así como bases de datos no relacionales, incluyendo Mongodb y Dynamodb, asegurando la integridad y eficacia de los sistemas. \nOtro aspecto destacado de mi trabajo fue la implementación de aplicaciones móviles utilizando React Native. Además, gestioné activamente estas aplicaciones en la Google Play Console.\nComo parte de mis responsabilidades, establecí y mantuve pipelines de Integración Continua/Despliegue Continuo (CI/CD).\nAdemás, tuve la oportunidad de adquirir experiencia en la gestión de infraestructura y servicios en AWS, incluyendo S3, EC2, ECS, Cloudwatch, Cloudfront, AWS Lambda y SQS.`,
};

export const QWERTY = {
  QWERTY_JOB_TITLE: 'Software Developer',
  QWERTY_JOB_DURATION: 'La Plata, Feb 2019 - May 2022',
  QWERTY_JOB_DESCRIPTION: `Tuve el privilegio de participar la implementación de diversos sistemas web y móviles para clientes externos. Esta experiencia me permitió trabajar con una amplia gama de tecnologías, incluyendo frameworks de Javascript como Angular, React, Express, React Native y Ionic así como el uso de Python con Django, lo que contribuyó al desarrollo de soluciones versátiles y eficientes para nuestros clientes.\nAdemás, me encargué de la gestión de servicios utilizando Kubernetes, aprovechando la plataforma Rancher para garantizar la escalabilidad y confiabilidad de nuestras aplicaciones en entornos de producción.`,
};

export const LIFIA = {
  LIFIA_JOB_TITLE: 'Pasante I+D',
  LIFIA_JOB_DURATION: 'La Plata, May 2017 - Oct 2021',
  LIFIA_JOB_DESCRIPTION:
    'Participación como pasante en los proyectos de alumno orientados a la investigación en temáticas de innovación y a la formación profesional.',
};

// Global Object
export const cv = {
  EXPERIENCE: 'Experiencia Profesional',
  EDUCATION: 'Educación',
  PROJECTS: 'Proyectos',
  PUBLICATIONS: 'Publicaciones',
  SKILLS: 'Habilidades',

  WEB_SITE: 'Sitio Web',

  ...LBS,
  ...GRAL,
  ...QWERTY,
  ...LIFIA,
} as const;
