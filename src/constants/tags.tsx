import {
  ReactOriginal,
  DockerPlain,
  JavascriptPlain,
  LaravelOriginal,
  DjangoPlain,
  GithubOriginal,
  GitlabOriginal,
  Html5Plain,
  Css3Plain,
  PythonPlain,
  TensorflowOriginal,
  GitPlain,
  IonicOriginal,
  ReactOriginalWordmark,
  ConfluencePlain,
  RxjsPlain,
  GraphqlPlain,
  GatsbyOriginal,
  HadoopPlain,
  HerokuPlain,
  LinuxPlain,
  AngularOriginal,
  TerraformOriginal,
  SlackOriginal,
  JiraOriginal,
  NodejsOriginal,
  TypescriptOriginal,
  FirebaseOriginal,
  BootstrapOriginal,
  RedisOriginal,
  AntdesignOriginal,
  GithubactionsOriginal,
  KubernetesOriginal,
  RancherOriginal,
  MongodbOriginal,
  SassOriginal,
  ReduxOriginal,
  PostmanPlain,
  AndroidOriginal,
  PostgresqlOriginal,
  DynamodbPlain,
  MysqlOriginal,
} from 'devicons-react';
import { FaSpotify, FaSymfony, FaArrowsSpin, FaTelegram, FaAws, FaApple } from 'react-icons/fa6';
import { PiGooglePlayLogo } from 'react-icons/pi';

export const tags = {
  LinuxPlain: {
    text: 'Linux',
    color: '#FCC624',
    icon: <LinuxPlain />,
    link: 'https://www.linux.org/',
  },
  Keycloak: {
    text: 'Keycloak',
    color: '#EB5424',
    link: 'https://www.keycloak.org/',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='800px' height='800px' viewBox='0 0 1024 1024'>
        <path
          d='M786.2 395.5h-80.6c-1.5 0-3-.8-3.7-2.1l-64.7-112.2c-.8-1.3-2.2-2.1-3.8-2.1h-264c-1.5 0-3 .8-3.7 2.1l-67.3 116.4-64.8 112.2c-.7 1.3-.7 2.9 0 4.3l64.8 112.2 67.2 116.5c.7 1.3 2.2 2.2 3.7 2.1h264.1c1.5 0 3-.8 3.8-2.1L702 630.6c.7-1.3 2.2-2.2 3.7-2.1h80.6c2.7 0 4.8-2.2 4.8-4.8V400.4c-.1-2.7-2.3-4.9-4.9-4.9zM477.5 630.6l-20.3 35c-.3.5-.8 1-1.3 1.3-.6.3-1.2.5-1.9.5h-40.3c-1.4 0-2.7-.7-3.3-2l-60.1-104.3-5.9-10.3-21.6-36.9c-.3-.5-.5-1.1-.4-1.8 0-.6.2-1.3.5-1.8l21.7-37.6 65.9-114c.7-1.2 2-2 3.3-2H454c.7 0 1.4.2 2.1.5.5.3 1 .7 1.3 1.3l20.3 35.2c.6 1.2.5 2.7-.2 3.8l-65.1 112.8c-.3.5-.4 1.1-.4 1.6 0 .6.2 1.1.4 1.6l65.1 112.7c.9 1.5.8 3.1 0 4.4zm202.1-116.7L658 550.8l-5.9 10.3L592 665.4c-.7 1.2-1.9 2-3.3 2h-40.3c-.7 0-1.3-.2-1.9-.5-.5-.3-1-.7-1.3-1.3l-20.3-35c-.9-1.3-.9-2.9-.1-4.2l65.1-112.7c.3-.5.4-1.1.4-1.6 0-.6-.2-1.1-.4-1.6l-65.1-112.8c-.7-1.2-.8-2.6-.2-3.8l20.3-35.2c.3-.5.8-1 1.3-1.3.6-.4 1.3-.5 2.1-.5h40.4c1.4 0 2.7.7 3.3 2l65.9 114 21.7 37.6c.3.6.5 1.2.5 1.8 0 .4-.2 1-.5 1.6z'
          style={{ fill: 'white' }}
        />
      </svg>
    ),
  },
  Mysql: {
    text: 'MySQL',
    color: '#4479A1',
    link: 'https://www.mysql.com/',
    icon: <MysqlOriginal />,
  },
  GooglePlay: {
    text: 'Google Play Console',
    color: '#414141',
    icon: <PiGooglePlayLogo />,
    link: 'https://play.google.com/console/about/',
  },
  Heroku: {
    text: 'Heroku',
    color: '#430098',
    icon: <HerokuPlain />,
    link: 'https://www.heroku.com/',
  },
  Hadoop: {
    text: 'Hadoop',
    color: '#FBC02D',
    icon: <HadoopPlain />,
    link: 'https://hadoop.apache.org/',
  },
  Gatsby: {
    text: 'Gatsby',
    color: '#663399',
    icon: <GatsbyOriginal />,
    link: 'https://www.gatsbyjs.com/',
  },
  Postman: {
    text: 'Postman',
    color: '#FF6C37',
    icon: <PostmanPlain />,
    link: 'https://www.postman.com/',
  },
  Graphql: {
    text: 'GraphQL',
    color: '#E535AB',
    icon: <GraphqlPlain />,
    link: 'https://graphql.org/',
  },
  Rxjs: {
    text: 'Rxjs',
    color: '#B7178C',
    icon: <RxjsPlain />,
    link: 'https://rxjs-dev.firebaseapp.com/',
  },
  Redis: {
    text: 'Redis',
    color: '#DC382D',
    icon: <RedisOriginal />,
    link: 'https://redis.io/',
  },
  Bootstrap: {
    text: 'Bootstrap',
    color: '#7952B3',
    icon: <BootstrapOriginal />,
    link: 'https://getbootstrap.com/',
  },
  Sentry: {
    text: 'Sentry',
    color: 'black',
    icon: (
      <svg
        viewBox='0 0 128 128'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          fill: 'white',
          width: '1rem',
          height: '1rem',
        }}
      >
        <path
          d='M74.012 13.328a11.939 11.939 0 0 0-20.45 0L36.734 42.145a82.34 82.34 0 0 1 45.383 68.164H70.309a70.78 70.78 0 0 0-39.527-58.09l-15.57 26.926a40.72 40.72 0 0 1 23.598 31.113H11.68a1.94 1.94 0 0 1-1.582-2.836l7.516-12.781a27.4 27.4 0 0 0-8.59-4.859l-7.445 12.781c-1.562 2.684-1.988 5.887-1.172 8.883s2.789 5.547 5.492 7.07a11.9 11.9 0 0 0 5.781 1.535h37.152a49.63 49.63 0 0 0-20.453-44.258l5.902-10.227a61.04 61.04 0 0 1 26.336 54.484H92.09a91.74 91.74 0 0 0-41.953-81.305l11.938-20.453a1.97 1.97 0 0 1 2.684-.691c1.355.742 51.879 88.898 52.828 89.922a1.95 1.95 0 0 1-.035 1.949 1.96 1.96 0 0 1-1.707.941h-12.168a104 104 0 0 1 0 9.742h12.219a11.73 11.73 0 0 0 11.813-11.789 11.47 11.47 0 0 0-1.582-5.832zm0 0'
          fill='white'
        ></path>
      </svg>
    ),
    link: 'https://sentry.io/',
  },
  React: {
    text: 'React',
    color: 'black',
    icon: <ReactOriginal />,
    link: 'https://reactjs.org/',
  },
  Firebase: {
    text: 'Firebase',
    color: '#FFCA28',
    icon: <FirebaseOriginal />,
    link: 'https://firebase.google.com/',
  },
  TypeScript: {
    text: 'TypeScript',
    color: '#e6e6e6',
    icon: <TypescriptOriginal />,
    link: 'https://www.typescriptlang.org/',
  },
  JavaScript: {
    text: 'JavaScript',
    color: '#F0DB4F',
    icon: <JavascriptPlain />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  HTML: {
    text: 'HTML 5',
    color: '#E34F26',
    icon: <Html5Plain />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
  },
  CSS: {
    text: 'CSS',
    color: '#264DE4',
    icon: <Css3Plain />,
    link: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
  },
  'Ant design': {
    text: 'Ant design',
    color: '#e6e6e6',
    icon: <AntdesignOriginal />,
    link: 'https://ant.design/',
  },
  Python: {
    text: 'Python',
    color: '#3776AB',
    icon: <PythonPlain />,
    link: 'https://www.python.org/',
  },
  'Node.js': {
    text: 'Node.js',
    color: '#68A063',
    icon: <NodejsOriginal />,
    link: 'https://nodejs.org/',
  },
  TensorFlow: {
    text: 'TensorFlow',
    color: '#FF6F00',
    icon: <TensorflowOriginal />,
    link: 'https://www.tensorflow.org/',
  },
  ML: {
    text: 'ML',
    color: '#FF6F00',
  },
  AI: {
    text: 'AI',
    color: '#FF6F00',
  },
  Django: {
    text: 'Django',
    color: '#092E20',
    icon: <DjangoPlain />,
    link: 'https://www.djangoproject.com/',
  },
  Git: {
    text: 'Git',
    color: '#F05032',
    icon: <GitPlain />,
    link: 'https://git-scm.com/',
  },
  GitHub: {
    text: 'GitHub',
    color: '#181717',
    icon: <GithubOriginal />,
    link: 'https://github.com/',
  },
  GitLab: {
    text: 'GitLab',
    color: '#FCA326',
    icon: <GitlabOriginal />,
    link: 'https://about.gitlab.com/',
  },
  'Data Science': {
    text: 'Data Science',
    color: '#F37726',
  },
  AWS: {
    text: 'AWS',
    color: '#232F3E',
    icon: <FaAws />,
    link: 'https://aws.amazon.com/',
  },
  Agile: {
    text: 'Agile',
    color: '#000000',
    icon: <FaArrowsSpin />,
    link: 'https://agilemanifesto.org/',
  },
  JIRA: {
    text: 'Jira',
    color: '#00599C',
    icon: <JiraOriginal />,
    link: 'https://www.atlassian.com/software/jira',
  },
  Slack: {
    text: 'Slack',
    color: '#0078D4',
    icon: <SlackOriginal />,
    link: 'https://slack.com/',
  },
  Terraform: {
    text: 'Terraform',
    color: '#FA7343',
    icon: <TerraformOriginal />,
    link: 'https://www.terraform.io/',
  },
  'CI/CD': {
    text: 'CI/CD',
    color: '#007AFF',
    icon: <GithubactionsOriginal />,
    link: 'https://www.redhat.com/es/topics/devops/what-is-ci-cd',
  },
  Laravel: {
    text: 'Laravel',
    color: '#A4C639',
    icon: <LaravelOriginal />,
    link: 'https://laravel.com/',
  },
  Confluence: {
    text: 'Confluence',
    color: '#172B4D',
    icon: <ConfluencePlain />,
    link: 'https://www.atlassian.com/software/confluence',
  },
  Redash: {
    text: 'Redash',
    color: '#007396',
    link: 'https://redash.io/',
  },
  Docker: {
    text: 'Docker',
    color: '#06213f',
    icon: <DockerPlain />,
    link: 'https://www.docker.com/',
  },
  Angular: {
    text: 'Angular',
    color: '#000000',
    icon: <AngularOriginal />,
    link: 'https://angular.io/',
  },
  IONIC: {
    text: 'Ionic',
    color: '#EE4C2C',
    icon: <IonicOriginal />,
    link: 'https://ionicframework.com/',
  },
  ReactNative: {
    text: 'React Native',
    color: '#009688',
    icon: <ReactOriginalWordmark />,
    link: 'https://reactnative.dev/',
  },
  Serverless: {
    text: 'Serverless',
    color: '#6DB33F',
    link: 'https://www.serverless.com/',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' width='800px' height='800px' viewBox='-9.5 0 50 31'>
        <path
          d='M2,22.419H6.956L5.42,27H2ZM2,13.71H9.875L8.34,18.29H2ZM2,5H12.794L11.259,9.581H2ZM17.679,5H30V9.581H16.143ZM13.224,18.291,14.76,13.71H30v4.581Zm-1.383,4.128H30V27H10.305Z'
          style={{
            fill: '#fd5750',
            fillRule: 'evenodd',
          }}
        />
      </svg>
    ),
  },
  Dynamo: {
    text: 'DynamoDB',
    color: '#4053D6',
    link: 'https://aws.amazon.com/dynamodb/',
    icon: <DynamodbPlain />,
  },
  Rancher: {
    text: 'Rancher',
    color: '#0075A8',
    icon: <RancherOriginal />,
    link: 'https://rancher.com/',
  },
  Kubernetes: {
    text: 'Kubernetes',
    color: '#E09F3E',
    icon: <KubernetesOriginal />,
    link: 'https://kubernetes.io/',
  },
  Symfony: {
    text: 'Symfony',
    color: '#000000',
    icon: <FaSymfony />,
    link: 'https://symfony.com/',
  },
  Mongo: {
    text: 'MongoDB',
    color: '#47A248',
    icon: <MongodbOriginal />,
    link: 'https://www.mongodb.com/',
  },
  Spotify: {
    text: 'Spotify API',
    color: '#1DB954',
    icon: <FaSpotify fill='#1ed760' />,
    link: 'https://developer.spotify.com/',
  },
  REDUX: {
    text: 'Redux',
    color: '#764ABC',
    icon: <ReduxOriginal />,
    link: 'https://redux.js.org/',
  },
  SASS: {
    text: 'Sass',
    color: '#CC6699',
    icon: <SassOriginal />,
    link: 'https://sass-lang.com/',
  },
  Android: {
    text: 'Android',
    color: '#000000',
    icon: <AndroidOriginal />,
    link: 'https://developer.android.com/',
  },
  IOS: {
    text: 'iOS',
    color: '#000000',
    icon: <FaApple />,
    link: 'https://developer.apple.com/',
  },
  Telegram: {
    text: 'Telegram Bot Api',
    color: '#0088cc',
    link: 'https://core.telegram.org/bots/api',
    icon: <FaTelegram />,
  },
  Postgres: {
    text: 'PostgreSQL',
    color: '#336791',
    link: 'https://www.postgresql.org/',
    icon: <PostgresqlOriginal />,
  },
  Express: {
    text: 'Express',
    color: '#000000',
    link: 'https://expressjs.com/',
    icon: (
      <svg
        viewBox='0 0 128 128'
        xmlns='http://www.w3.org/2000/svg'
        style={{
          fill: 'white',
          width: '1rem',
          height: '1rem',
        }}
      >
        <path
          fill='white'
          d='M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44M1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08m5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57'
        ></path>
      </svg>
    ),
  },
  Mercadopago: {
    text: 'Mercado Pago API',
    color: '#3484A1',
    link: 'https://www.mercadopago.com.ar/developers/es/guides',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='-16 0 120 60'>
        <title>Mercado Pago logo - Brandlogos.net</title>
        <path
          d='M307.93,354.9c-23.67,0-42.87,12.28-42.87,27.42s19.2,28.61,42.87,28.61,42.87-13.46,42.87-28.61S331.62,354.9,307.93,354.9Z'
          transform='translate(-264.25 -353.77)'
          style={{ fill: '#00b1ea' }}
        />
        <path
          d='M294,373.84s-.44.47-.17.82c.66.85,2.71,1.33,4.78.87,1.23-.28,2.82-1.53,4.34-2.75a17.47,17.47,0,0,1,5-3.16,5.69,5.69,0,0,1,3.62-.1,11.3,11.3,0,0,1,3.3,1.93c2.87,2.16,14.43,12.24,16.43,14a110.59,110.59,0,0,1,19-6c-.85-5.17-4-10.11-8.74-14-6.66,2.8-15.34,4.47-23.3.59a22,22,0,0,0-8.59-1.95c-6.31.15-9.05,2.88-11.94,5.77Z'
          transform='translate(-264.25 -353.77)'
          style={{
            fill: '#fff',
          }}
        />
        <path
          d='M330.77,386.55c-.14-.12-13.58-11.89-16.64-14.18a7.48,7.48,0,0,0-3.77-1.79,5.39,5.39,0,0,0-1.8.17,16.31,16.31,0,0,0-4.92,2.93c-1.7,1.36-3.31,2.64-4.8,3a7.75,7.75,0,0,1-5.29-.79,2.37,2.37,0,0,1-.88-1,1.62,1.62,0,0,1,.45-1.76l3.72-4,1.31-1.29a24.84,24.84,0,0,0-3.38.76,14.93,14.93,0,0,1-4,.74,37.85,37.85,0,0,1-4-.63,66,66,0,0,1-11.57-3.87c-5.28,3.93-8.72,8.75-9.74,14.16.76.2,2.74.65,3.26.77,11.94,2.66,15.66,5.39,16.34,6a3.95,3.95,0,0,1,6.19.36,4.55,4.55,0,0,1,2.85-1,5.39,5.39,0,0,1,1.7.3,3.88,3.88,0,0,1,2.4,2.17,4,4,0,0,1,1.66-.35,5,5,0,0,1,2,.44,4.23,4.23,0,0,1,2.35,4.73,3.49,3.49,0,0,1,.47,0,4.73,4.73,0,0,1,4.17,7,7.51,7.51,0,0,0,4.11,1.1,2.65,2.65,0,0,0,1.93-.84c.12-.17.25-.36.13-.5l-3.37-3.74s-.56-.52-.37-.73.54.09.77.29c1.71,1.44,3.8,3.59,3.8,3.59s.17.3,1,.44a3.51,3.51,0,0,0,2.67-.62,5.25,5.25,0,0,0,.59-.6l0,0a1.78,1.78,0,0,0-.1-2.22L316,391.13s-.57-.52-.37-.73.54.1.78.3c1.24,1,3,2.81,4.69,4.46a3.2,3.2,0,0,0,3.77-.13,2.69,2.69,0,0,0,1.39-2.46,2.83,2.83,0,0,0-.84-1.64l-5.38-5.4s-.57-.48-.36-.73.54.09.77.29c1.71,1.44,6.34,5.68,6.34,5.68a3.26,3.26,0,0,0,3.64-.07,2.45,2.45,0,0,0,1.2-1.93A2.7,2.7,0,0,0,330.77,386.55Z'
          transform='translate(-264.25 -353.77)'
          style={{
            fill: '#fff',
          }}
        />
        <path
          d='M304.71,393.39a10.73,10.73,0,0,0-1.86.42c-.06,0,.05-.37.13-.57s1.18-3.49-1.5-4.64a3.15,3.15,0,0,0-3.73.56c-.11.12-.16.11-.17,0a3,3,0,0,0-2.08-2.74,4,4,0,0,0-4.56,1.63,2.91,2.91,0,1,0-.87,2.49s0,0,0,.1a3.85,3.85,0,0,0,2.41,4.43,2.88,2.88,0,0,0,2.83-.44c.24-.16.27-.1.24.13-.1.67,0,2.13,2.06,2.95a2.61,2.61,0,0,0,3.06-.57c.26-.24.33-.2.34.17a3.69,3.69,0,1,0,3.7-3.87Z'
          transform='translate(-264.25 -353.77)'
          style={{
            fill: '#fff',
          }}
        />
        <path
          d='M307.93,353.77c-24.12,0-43.68,12.83-43.68,28.57V384c0,16.7,17.1,30.22,43.68,30.22,26.75,0,43.68-13.52,43.68-30.22v-1.67C351.61,366.6,332.05,353.77,307.93,353.77Zm41.71,25.4a100,100,0,0,0-18.35,6c-4.15-3.62-13.72-11.94-16.31-13.89a11.47,11.47,0,0,0-3.39-2,5.67,5.67,0,0,0-1.66-.26,7,7,0,0,0-2.11.35,17.14,17.14,0,0,0-5,3.14l-.09.06c-1.5,1.2-3.06,2.43-4.24,2.7a7,7,0,0,1-1.56.17,4,4,0,0,1-2.95-1c-.07-.1,0-.25.15-.46l0,0,3.64-3.93c2.86-2.86,5.55-5.55,11.76-5.7h.31a22.17,22.17,0,0,1,8.16,1.93A25.21,25.21,0,0,0,329.19,369a29,29,0,0,0,12.18-2.91C345.81,369.8,348.74,374.29,349.64,379.17Zm-41.71-23.72c12.8,0,24.26,3.67,32,9.45a27,27,0,0,1-10.7,2.42,23.65,23.65,0,0,1-10.41-2.51,23.39,23.39,0,0,0-8.88-2.1h-.35a15.34,15.34,0,0,0-10.12,3.6,20.17,20.17,0,0,0-5.06.92,13.8,13.8,0,0,1-3.56.69c-.46,0-1.27,0-1.35,0a69.45,69.45,0,0,1-12.76-3.53C284.4,358.9,295.54,355.46,307.93,355.46Zm-32.73,10c5.32,2.17,11.79,3.87,13.84,4,.57,0,1.18.11,1.79.11a14.78,14.78,0,0,0,4-.75c.77-.21,1.63-.45,2.53-.62-.24.24-.48.47-.72.72l-3.71,4a1.86,1.86,0,0,0-.5,2,2.62,2.62,0,0,0,1,1.08,7.75,7.75,0,0,0,3.93,1,7.23,7.23,0,0,0,1.56-.16c1.55-.34,3.18-1.65,4.91-3a16.3,16.3,0,0,1,4.82-2.88,5.32,5.32,0,0,1,1.35-.18,1.73,1.73,0,0,1,.34,0,7.35,7.35,0,0,1,3.65,1.74c3,2.28,16.5,14.05,16.62,14.17a2.59,2.59,0,0,1,.8,2,2.16,2.16,0,0,1-1.07,1.71,3.28,3.28,0,0,1-1.77.55,2.9,2.9,0,0,1-1.56-.45c-.05,0-4.66-4.26-6.35-5.69a1.43,1.43,0,0,0-.79-.43.48.48,0,0,0-.35.16c-.27.33,0,.78.39,1.08l5.39,5.41a2.57,2.57,0,0,1,.75,1.46,2.44,2.44,0,0,1-1.27,2.23,3.46,3.46,0,0,1-1.91.63,2.69,2.69,0,0,1-1.53-.47l-.77-.76c-1.41-1.39-2.87-2.83-3.94-3.72a1.43,1.43,0,0,0-.8-.42.44.44,0,0,0-.34.15c-.12.14-.2.37.1.78a2.43,2.43,0,0,0,.27.3l3.93,4.41a1.5,1.5,0,0,1,.09,1.89l-.14.17c-.12.13-.25.25-.36.35a3.18,3.18,0,0,1-1.92.61,2.79,2.79,0,0,1-.54,0,1.33,1.33,0,0,1-.77-.32l-.05-.05c-.21-.22-2.2-2.24-3.83-3.61a1.34,1.34,0,0,0-.76-.41.46.46,0,0,0-.35.16c-.32.35.16.89.37,1.08l3.35,3.7a.63.63,0,0,1-.13.22c-.12.16-.52.57-1.75.73a3.15,3.15,0,0,1-.45,0,7.66,7.66,0,0,1-3.28-1,5,5,0,0,0-4.51-7.12h-.18A4.43,4.43,0,0,0,302,387.4a5.34,5.34,0,0,0-2.09-.46,4.31,4.31,0,0,0-1.53.28,4.21,4.21,0,0,0-2.44-2.08,5.39,5.39,0,0,0-1.8-.31,4.7,4.7,0,0,0-2.8.9,4.24,4.24,0,0,0-3.29-1.59,4.3,4.3,0,0,0-3,1.23c-1-.79-5.18-3.43-16.26-5.95-.52-.12-1.72-.46-2.49-.69C267.36,373.76,270.52,369.22,275.2,365.49Zm20.54,28.84-.12-.11h-.12a.62.62,0,0,0-.34.14,2.86,2.86,0,0,1-1.66.59,2.61,2.61,0,0,1-.92-.18,3.58,3.58,0,0,1-2.24-4.16.37.37,0,0,0-.11-.34l-.18-.15-.17.16a2.67,2.67,0,1,1,.78-2.26l.1.72.4-.61a3.91,3.91,0,0,1,3.11-1.7,4.07,4.07,0,0,1,1.16.18,2.7,2.7,0,0,1,1.89,2.51c0,.34.28.36.32.36a.44.44,0,0,0,.31-.16,2.69,2.69,0,0,1,2-.82,3.63,3.63,0,0,1,1.47.33c2.51,1.08,1.37,4.26,1.36,4.3-.21.52-.23.76,0,.9l.1,0h.07a1.53,1.53,0,0,0,.48-.13,4.33,4.33,0,0,1,1.34-.3,3.47,3.47,0,0,1,3.43,3.43,3.42,3.42,0,0,1-6.84.15c0-.16,0-.58-.37-.58a.68.68,0,0,0-.42.21,2.41,2.41,0,0,1-1.68.76,2.88,2.88,0,0,1-1.1-.24c-1.95-.79-2-2.13-1.9-2.67A.38.38,0,0,0,295.74,394.33Zm12.19,14.87c-23.2,0-42-12-42-26.88,0-.6,0-1.19.1-1.78l2.41.57c11.31,2.52,15,5.13,15.68,5.62A4.25,4.25,0,0,0,288,392.6a3.88,3.88,0,0,0,.78-.07,5,5,0,0,0,3.2,3.7,4.2,4.2,0,0,0,1.51.29,4.24,4.24,0,0,0,1-.12,4.92,4.92,0,0,0,4.3,2.81,3.6,3.6,0,0,0,1.3-.24,5,5,0,0,0,8.19,1.59,9.34,9.34,0,0,0,4.23,1.26,4.24,4.24,0,0,0,.64,0,3.9,3.9,0,0,0,2.87-1.4,1.88,1.88,0,0,0,.18-.29,4.76,4.76,0,0,0,1.36.21,4.58,4.58,0,0,0,2.73-1,3.81,3.81,0,0,0,1.62-2.35v0a4.38,4.38,0,0,0,.91.1,5.08,5.08,0,0,0,2.81-.89,4,4,0,0,0,2-3.61,4.58,4.58,0,0,0,.93.1,4.81,4.81,0,0,0,2.64-.81,3.83,3.83,0,0,0,1.83-3,4.08,4.08,0,0,0-.58-2.41A108.86,108.86,0,0,1,349.89,381c0,.44.05.89.05,1.34C349.94,397.17,331.13,409.2,307.93,409.2Z'
          transform='translate(-264.25 -353.77)'
          style={{
            fill: '#2d3277',
          }}
        />
      </svg>
    ),
  },
  Expo: {
    text: 'Expo',
    color: '#000000',
    link: 'https://expo.io/',
    icon: (
      <svg xmlns='http://www.w3.org/2000/svg' fill='white' height='17px' viewBox='0 0 32 32'>
        <path d='M24.292 15.547c1.968 0.131 3.729-1.213 4.115-3.145-0.475-0.735-1.287-1.177-2.161-1.177-2.272-0.052-3.491 2.651-1.953 4.323zM15.115 4.697l5.359-3.104-1.708-0.963-7.391 4.281 0.589 0.328 1.119 0.629 2.032-1.176zM21.161 1.307c0.089 0.027 0.161 0.1 0.188 0.188l2.484 7.593c0.047 0.131-0.005 0.272-0.125 0.344-1.968 1.156-2.916 3.489-2.317 5.693 0.656 2.391 2.937 3.953 5.401 3.703 0.135-0.011 0.265 0.073 0.307 0.203l2.563 7.803c0.041 0.131-0.011 0.271-0.125 0.344l-7.859 4.771c-0.037 0.021-0.084 0.036-0.131 0.036-0.068 0.016-0.14 0-0.203-0.041l-2.765-1.797c-0.048-0.031-0.084-0.077-0.109-0.129l-5.396-12.896-8.219 4.875c-0.016 0.011-0.037 0.021-0.052 0.032-0.084 0.036-0.183 0.025-0.261-0.021l-1.859-1.093c-0.136-0.073-0.188-0.245-0.115-0.381l7.953-15.749c0.025-0.057 0.077-0.104 0.135-0.131l7.959-4.609c0.088-0.052 0.197-0.057 0.292-0.005zM12.839 6.407l-1.932-1.089-7.693 15.229 1.396 0.823 6.631-9.015c0.063-0.089 0.167-0.136 0.271-0.12 0.104 0.011 0.192 0.077 0.235 0.177l7.228 17.296 1.933 1.251-8.063-24.552zM26.245 16.964c-2.256 0-3.787-2.292-2.923-4.376 0.86-2.083 3.563-2.619 5.156-1.025 0.595 0.593 0.928 1.396 0.928 2.235 0.005 1.749-1.412 3.167-3.161 3.167z' />
      </svg>
    ),
  },
};
