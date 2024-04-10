// export const tagColors = [
//   '#F94144', // Red
//   '#F3722C', // Orange
//   '#F8961E', // Dark Orange
//   '#F9C74F', // Yellow
//   '#90BE6D', // Green
//   '#43AA8B', // Teal
//   '#577590', // Blue Gray
//   '#277DA1', // Dark Cyan
//   '#649E7D', // Grayish Teal
//   '#264653', // Deep Blue
//   '#2A9D8F', // Dark Cyan
//   '#E76F51', // Rust
//   '#E9C46A', // Mustard
//   '#F4A261', // Light Orange
//   '#E9A18C', // Light Salmon
//   '#F6B6B6', // Pink
//   '#B5838D', // Mauve
//   '#1D3557', // Navy Blue
//   '#457B9D', // Cool Blue
//   '#82C9F8', // Sky Blue
//   '#8ECAE6', // Light Cyan
//   '#BAE4B3', // Pastel Green
//   '#B3DE81', // Celadon Green
//   '#C4D4A4', // Greenish Beige
//   '#A9D6C2', // Light Teal
// ];

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
  AmazonwebservicesPlainWordmark,
  IonicOriginal,
  ReactOriginalWordmark,
  SentryOriginal,
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
} from 'devicons-react';
import { FaSpotify, FaSymfony, FaArrowsSpin } from 'react-icons/fa6';

export const tags = {
  LinuxPlain: {
    text: 'Linux',
    color: '#FCC624',
    icon: <LinuxPlain />,
    link: 'https://www.linux.org/',
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
    icon: <SentryOriginal />,
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
    icon: <AmazonwebservicesPlainWordmark />,
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
};
