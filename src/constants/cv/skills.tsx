import { Avatar } from 'antd';

// Utils
import { getAlbumPath } from '../../utils/getPublicPath';

// Constants
import { tags } from '../tags';
import { PersonalProjects } from './personalProjects';

// Interfaces
import type { Playlist, Song } from '../../interfaces/types';

export enum SkillsTypesEnum {
  CURRENT = 'CURRENT',
  PAST_FREQUENTLY = 'PAST_FREQUENTLY',
  PAST_OCCASIONALLY = 'PAST_OCCASIONALLY',
}

const CURRENT = [
  tags.React,
  tags.ReactNative,
  tags.TypeScript,
  tags.AWS,
  tags.Docker,
  tags.Django,
  tags.Express,
  tags.Vercel,
  tags.Cloudflare,
  tags.Expo,
  tags.REDUX,
  tags.SASS,
  tags['GitLab'],
  tags['Git'],
  tags['CI/CD'],
  tags['Ant design'],
  tags.Linux,
  tags.GooglePlay,
  tags.Android,
  tags.IOS,
];

const PAST_FREQUENTLY = [
  tags.Angular,
  tags.Laravel,
  tags.Firebase,
  tags.IONIC,
  tags.Mysql,
  tags.Mongo,
  tags.Redis,
  tags.Postgres,
  tags.Serverless,
  tags.Dynamo,
  tags.Postman,
  tags.Slack,
  tags.GitHub,
  tags.Postman,
  tags.Bootstrap,
  tags.JIRA,
  tags.Confluence,
  tags.Sentry,
];

const PAST_OCCASIONALLY = [
  tags.Graphql,
  tags.Terraform,
  tags.AppCenter,
  tags.Symfony,
  tags.Gatsby,
  tags.Heroku,
  tags.Rancher,
  tags.Keycloak,
  tags.TensorFlow,
  tags.Telegram,
  tags.Spotify,
  tags.Mercadopago,
];

const AVALIABLE_SKILLS = {
  CURRENT,
  PAST_FREQUENTLY,
  PAST_OCCASIONALLY,
};

const mapTag = (tag: (typeof AVALIABLE_SKILLS)['CURRENT'][number], type: string) => {
  const key = tag.text.toUpperCase().replaceAll(' ', '_');
  return {
    types: [type],
    skills: [],
    link: tag.link,
    name: tag.text,
    color: tag.color,
    imageUrl: tag.image,
    length: `${key}_YEARS`,
    explanation: `${key}_HELP`,
    description: `${key}_EXPERIENCE`,
    relatedSongs: PersonalProjects.songs.filter((song) =>
      song.skills.some((s) => s.text === tag.text)
    ),

    avatar: (
      <Avatar
        shape='square'
        size={'large'}
        className='avatar-tag'
        style={{ backgroundColor: tag.color, fontSize: '1.5rem', marginRight: 15 }}
        icon={tag.icon}
      ></Avatar>
    ),
  } as Song;
};

export const SKILLS_SONGS = Object.entries(AVALIABLE_SKILLS)
  .map(([type, tags]) => {
    return tags.map((tag) => mapTag(tag, type));
  })
  .flat();

export const Skills = {
  name: 'SKILLS',
  color: '#4f596e',
  songs: SKILLS_SONGS,
  defaultFilter: 'CURRENT',
  description: 'Description 5',
  filters: [
    SkillsTypesEnum.CURRENT,
    SkillsTypesEnum.PAST_FREQUENTLY,
    SkillsTypesEnum.PAST_OCCASIONALLY,
  ],
  getImage(lang) {
    return getAlbumPath('Skills-cover', lang, 'png');
  },
} as Playlist;
