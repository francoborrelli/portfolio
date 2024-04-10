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

// Projects

export const SPOTIFY_CLONE = {
  SPOTIFY_CLONE_NAME: 'Clone de Spotify',
  SPOTIFY_CLONE_LENGTH: '1 mes',
  SPOTIFY_CLONE_ARTIST: 'Proyecto personal',
  SPOTIFY_CLONE_DESCRIPTION: `Este proyecto es un Cliente Web de Spotify desarrollado utilizando la API Web de Spotify y el SDK de Reproducción de Spotify. Se inició con Create React App, proporcionando una sólida base para construir la aplicación web.\nEl cliente ofrece varias características para mejorar la experiencia de reproducción de música del usuario. En primer lugar, los usuarios pueden disfrutar de la reproducción completa de pistas de audio directamente desde la plataforma de Spotify. Esto incluye opciones completas de control de reproducción como pausar, ajustar el volumen y habilitar el modo de reproducción aleatoria, brindando a los usuarios un control total sobre su experiencia auditiva.\nAdemás, el cliente permite a los usuarios administrar sus listas de reproducción de manera sencilla. Pueden crear nuevas listas de reproducción o editar las existentes sin problemas dentro de la interfaz web. Además, los usuarios tienen acceso a su historial de reproducción reciente y a los principales artistas, lo que les permite descubrir nueva música o volver a escuchar sus pistas favoritas.\nOtra característica clave es la capacidad de seguir o dejar de seguir listas de reproducción y artistas directamente desde el cliente web. Esto simplifica la curación de listas de reproducción y el descubrimiento de artistas, permitiendo a los usuarios personalizar su biblioteca musical según sus preferencias.\nAdemás, los usuarios pueden administrar su biblioteca de pistas agregando o eliminando pistas según lo deseen. El cliente también facilita la gestión de dispositivos, permitiendo a los usuarios cambiar de dispositivo de reproducción de manera conveniente dentro de la aplicación.\nPor último, el cliente ofrece capacidades de búsqueda avanzadas, lo que permite a los usuarios explorar la extensa base de datos de Spotify buscando pistas, álbumes, artistas y listas de reproducción.`,
};

// Global Object
export const cv = {
  EXPERIENCE: 'Experiencia Profesional',
  EDUCATION: 'Educación',
  PROJECTS: 'Proyectos',
  PUBLICATIONS: 'Publicaciones',
  SKILLS: 'Habilidades',

  WEB_SITE: 'Sitio Web',

  // Experience
  ...LBS,
  ...GRAL,
  ...QWERTY,
  ...LIFIA,

  // Projects
  ...SPOTIFY_CLONE,
} as const;
