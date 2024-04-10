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
  // NginxOriginal,
  // MysqlPlainWordmark,
  // PostgresqlOriginal,
  // MaterializecssPlain,
  // LodashPlain,
  AngularOriginal,
  TerraformOriginal,
  SlackOriginal,
  JiraOriginal,
  NodejsOriginal,
  TypescriptOriginal,
  FirebaseOriginal,
  BootstrapOriginal,
  RedisOriginal,
  PostcssOriginal,
  AntdesignOriginal,
  GithubactionsOriginal,
  KubernetesOriginal,
  SymfonyOriginal,
  RancherOriginal,
  MongodbOriginal,
  SassOriginal,
  ReduxOriginal,
} from 'devicons-react';
import { FaSpotify } from 'react-icons/fa6';

export const tags = {
  LinuxPlain: {
    text: 'Linux',
    color: '#FCC624',
    icon: <LinuxPlain />,
  },
  Heroku: {
    text: 'Heroku',
    color: '#430098',
    icon: <HerokuPlain />,
  },
  Hadoop: {
    text: 'Hadoop',
    color: '#FBC02D',
    icon: <HadoopPlain />,
  },
  Gatsby: {
    text: 'Gatsby',
    color: '#663399',
    icon: <GatsbyOriginal />,
  },
  Postman: {
    text: 'Postman',
    color: '#FF6C37',
    icon: <PostcssOriginal />,
  },
  Graphql: {
    text: 'GraphQL',
    color: '#E535AB',
    icon: <GraphqlPlain />,
  },
  Rxjs: {
    text: 'Rxjs',
    color: '#B7178C',
    icon: <RxjsPlain />,
  },
  Redis: {
    text: 'Redis',
    color: '#DC382D',
    icon: <RedisOriginal />,
  },
  Bootstrap: {
    text: 'Bootstrap',
    color: '#7952B3',
    icon: <BootstrapOriginal />,
  },
  Sentry: {
    text: 'Sentry',
    color: 'black',
    icon: <SentryOriginal />,
  },
  React: {
    text: 'React',
    color: 'black',
    icon: <ReactOriginal />,
  },
  Firebase: {
    text: 'Firebase',
    color: '#FFCA28',
    icon: <FirebaseOriginal />,
  },
  TypeScript: {
    text: 'TypeScript',
    color: '#e6e6e6',
    icon: <TypescriptOriginal />,
  },
  JavaScript: {
    text: 'JavaScript',
    color: '#F0DB4F',
    icon: <JavascriptPlain />,
  },
  HTML: {
    text: 'HTML 5',
    color: '#E34F26',
    icon: <Html5Plain />,
  },
  CSS: {
    text: 'CSS',
    color: '#264DE4',
    icon: <Css3Plain />,
  },
  'Ant design': {
    text: 'Ant design',
    color: '#e6e6e6',
    icon: <AntdesignOriginal />,
  },
  Python: {
    text: 'Python',
    color: '#3776AB',
    icon: <PythonPlain />,
  },
  'Node.js': {
    text: 'Node.js',
    color: '#68A063',
    icon: <NodejsOriginal />,
  },
  TensorFlow: {
    text: 'TensorFlow',
    color: '#FF6F00',
    icon: <TensorflowOriginal />,
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
  },
  Git: {
    text: 'Git',
    color: '#F05032',
    icon: <GitPlain />,
  },
  GitHub: {
    text: 'GitHub',
    color: '#181717',
    icon: <GithubOriginal />,
  },
  GitLab: {
    text: 'GitLab',
    color: '#FCA326',
    icon: <GitlabOriginal />,
  },
  'Data Science': {
    text: 'Data Science',
    color: '#F37726',
  },
  AWS: {
    text: 'AWS',
    color: '#232F3E',
    icon: <AmazonwebservicesPlainWordmark />,
  },
  Agile: {
    text: 'Agile',
    color: '#000000',
  },
  JIRA: {
    text: 'Jira',
    color: '#00599C',
    icon: <JiraOriginal />,
  },
  Slack: {
    text: 'Slack',
    color: '#0078D4',
    icon: <SlackOriginal />,
  },
  Terraform: {
    text: 'Terraform',
    color: '#FA7343',
    icon: <TerraformOriginal />,
  },
  'CI/CD': {
    text: 'CI/CD',
    color: '#007AFF',
    icon: <GithubactionsOriginal />,
  },
  Laravel: {
    text: 'Laravel',
    color: '#A4C639',
    icon: <LaravelOriginal />,
  },
  Confluence: {
    text: 'Confluence',
    color: '#172B4D',
    icon: <ConfluencePlain />,
  },
  Redash: {
    text: 'Redash',
    color: '#007396',
  },
  Docker: {
    text: 'Docker',
    color: '#06213f',
    icon: <DockerPlain />,
  },
  Angular: {
    text: 'Angular',
    color: '#000000',
    icon: <AngularOriginal />,
  },
  IONIC: {
    text: 'Ionic',
    color: '#EE4C2C',
    icon: <IonicOriginal />,
  },
  ReactNative: {
    text: 'React Native',
    color: '#009688',
    icon: <ReactOriginalWordmark />,
  },
  Serverless: {
    text: 'Serverless',
    color: '#6DB33F',
  },
  Rancher: {
    text: 'Rancher',
    color: '#0075A8',
    icon: <RancherOriginal />,
  },
  Kubernetes: {
    text: 'Kubernetes',
    color: '#E09F3E',
    icon: <KubernetesOriginal />,
  },
  Symfony: {
    text: 'Symfony',
    color: '#000000',
    icon: <SymfonyOriginal />,
  },
  Mongo: {
    text: 'MongoDB',
    color: '#47A248',
    icon: <MongodbOriginal />,
  },
  Spotify: {
    text: 'Spotify API',
    color: '#1DB954',
    icon: <FaSpotify fill='#1ed760' />,
  },
  REDUX: {
    text: 'Redux',
    color: '#764ABC',
    icon: <ReduxOriginal />,
  },
  SASS: {
    text: 'Sass',
    color: '#CC6699',
    icon: <SassOriginal />,
  },
};
