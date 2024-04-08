import { tags } from '../tags';

const publicURL = (url: string) => process.env.PUBLIC_URL + url;

//Professional Experience
const LBS = {
  name: 'Full Stack Developer',
  description: {
    bulletPoints: [
      'Collaborated in an agile environment in a team of 10 to develop a new web application from the\n' +
        'ground up using Spring Boot (Java) and React (Typescript)\n',
      'Optimized filtering, searching, and sorting based on JSON data to improve user experience with\n' +
        '50% improvement in filtering and searching speed\n',
      'Implemented data scraping from multiple websites which gathered details of over 100 different\n' +
        'funding opportunities, as well as developed a user alert system based on website updates which\n' +
        'combined saves users more than 4 hours a week',
    ],
    tags: [
      tags.React,
      tags.Docker,
      tags.TypeScript,
      tags.Laravel,
      tags['CI/CD'],
      tags.GitLab,
      tags.Redash,
    ],
  },
  imageUrl: publicURL('/images/experience/logo_lbs.svg'),
  link: 'https://www.lbsinformatica.com.ar/',
  artist: 'LBS Informática',
  lengthStart: 'Jul 2022',
  lengthEnd: 'Dec 2022',
  location: 'La Plata',
};

const GRAL = {
  name: 'Full Stack Developer',
  description: {
    bulletPoints: [
      'Lead mentor for 5th grade students for competitive programming in Python, C++, and FMS Logo with\n' +
        'emphasis on algorithms, data structures, and programming basics\n',
      'Mentored kids with top 3 placements in the National Programming Competition and a student\n' +
        'participating in the Junior Croatian Informatics Olympiad with 2nd best score for the age group',
    ],
    tags: [
      tags.React,
      tags.ReactNative,
      tags.AWS,
      tags.Docker,
      tags.TypeScript,
      tags['Node.js'],
      tags.Laravel,
      tags.Django,
      tags['CI/CD'],
      tags['Ant design'],
      tags.GitLab,
      tags.Serverless,
      tags.Terraform,
      tags.Kubernetes,
      tags.Slack,
    ],
  },
  imageUrl: publicURL('/images/experience/gral.jpeg'),
  link: 'https://www.gralsaneamiento.com.ar/',
  artist: 'Gral Saneamiento SA',
  lengthStart: 'Sep 2021',
  lengthEnd: 'Present',
  location: 'La Plata',
};

const QWERTY = {
  name: 'Full Stack Developer',
  link: 'https://qwertysoft.ar/',
  description: {
    bulletPoints: [
      'Maintain and improve existing secure software products as part of an agile team, using Django\n' +
        '(Python), React (JavaScript), and Go on Linux\n',
      'Expanded API-s and implemented dynamically created documentation on over 20% of endpoints\n',
      'Designed a system for enabling and disabling features which shortened development time by 5%',
    ],
    tags: [
      tags.Angular,
      tags.Django,
      tags.IONIC,
      tags.Docker,
      tags.TypeScript,
      tags['Node.js'],
      tags['CI/CD'],
      tags.GitLab,
      tags.JIRA,
      tags.Kubernetes,
      tags.Agile,
    ],
  },
  imageUrl: publicURL('/images/experience/qwerty.jpeg'),
  artist: 'Qwertysoft SRL',
  lengthStart: 'Dec 2022',
  lengthEnd: 'Present',
  location: 'La Plata',
};

const LIFIA = {
  name: 'Intern R+D ad-honorem',
  link: 'https://lifia.info.unlp.edu.ar/',
  description: {
    bulletPoints: [
      'Durante mi experiencia laboral, participé en la implementación de diversos sistemas web para la gestión interna de la empresa. En este puesto, trabajé con una variedad de frameworks y lenguajes de programación, incluyendo Typescript (React, Express.js), Python (Django) y PHP (Laravel y Symfony), permitiendo así un desarrollo ágil y eficiente. Además, me encargué de manejar tanto bases de datos relacionales, como Mysql y Postgres, así como bases de datos no relacionales, incluyendo Mongodb y Dynamodb, asegurando la integridad y eficacia de los sistemas. Otro aspecto destacado de mi trabajo fue la implementación de aplicaciones móviles utilizando React Native. Además, gestioné activamente estas aplicaciones en la Google Play Console. Como parte de mis responsabilidades, establecí y mantuve pipelines de Integración Continua/Despliegue Continuo (CI/CD). Además, tuve la oportunidad de adquirir experiencia en la gestión de infraestructura y servicios en AWS, incluyendo S3, EC2, ECS, Cloudwatch, Cloudfront, AWS Lambda y SQS.',
    ],
    tags: [],
  },
  imageUrl: publicURL('/images/experience/lifia.jpeg'),
  artist: 'LIFIA - UNLP',
  lengthStart: 'Dec 2022',
  lengthEnd: 'Present',
  location: 'La Plata',
};

export const ProfessionalExperience = {
  name: 'Professional Experience',
  description: 'Description 2',
  color: '#c45f23',

  songs: [LBS, GRAL, QWERTY, LIFIA],
  imageUrl:
    'https://upload.wikimedia.org/wikipedia/en/thumb/3/3f/Ed_Sheeran_%2B_cover.png/220px-Ed_Sheeran_%2B_cover.png',
};
