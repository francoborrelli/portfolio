import { getAlbumPath } from '../../utils/getPublicPath';
import { tags } from '../tags';

import type { Playlist, Song } from '../../interfaces/types';

const publicURL = (url: string) => process.env.PUBLIC_URL + url;

enum JobTypesEnum {
  JOB = 'JOB',
}

const LBS = {
  name: 'LBS_JOB_NAME',
  length: 'LBS_JOB_LENGTH',
  artist: 'LBS Informática',
  type: JobTypesEnum.JOB,
  link: 'https://www.lbsinformatica.com.ar/',
  imageUrl: publicURL('/images/experience/logo_lbs.svg'),
  experience: 'LBS_JOB_DESCRIPTION',
  skills: [
    tags.React,
    tags.Docker,
    tags.TypeScript,
    tags.Laravel,
    tags['CI/CD'],
    tags.GitLab,
    tags.Postman,
    tags.Redash,
  ],
} as Song;

const GRAL = {
  name: 'GRAL_JOB_NAME',
  length: 'GRAL_JOB_LENGTH',
  artist: 'Gral Saneamiento SA',
  experience: 'GRAL_JOB_DESCRIPTION',
  type: JobTypesEnum.JOB,
  link: 'https://www.gralsaneamiento.com.ar/',
  imageUrl: publicURL('/images/experience/gral.jpg'),
  skills: [
    tags.AWS,
    tags.Graphql,
    tags.Laravel,
    tags.Docker,
    tags.ReactNative,
    tags.TypeScript,
    tags.React,
    tags['Node.js'],
    tags.Django,
    tags['CI/CD'],
    tags['Ant design'],
    tags.GitLab,
    tags.Serverless,
    tags.Terraform,
    tags.Kubernetes,
    tags.Slack,
    tags.Symfony,
    tags.Redis,
    tags.Telegram,
    tags.AppCenter,
    tags.Postgres,
  ],
} as Song;

const QWERTY = {
  name: 'QWERTY_JOB_NAME',
  link: 'https://qwertysoft.ar/',
  artist: 'Qwertysoft SRL',
  length: 'QWERTY_JOB_LENGTH',
  type: JobTypesEnum.JOB,
  experience: 'QWERTY_JOB_DESCRIPTION',
  imageUrl: publicURL('/images/experience/qwerty.png'),
  skills: [
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
    tags.Rancher,
    tags.Sentry,
    tags.Confluence,
    tags.Postman,
  ],
} as Song;

const LIFIA = {
  artist: 'LIFIA - UNLP',
  name: 'LIFIA_JOB_NAME',
  length: 'LIFIA_JOB_LENGTH',
  type: JobTypesEnum.JOB,
  experience: 'LIFIA_JOB_DESCRIPTION',
  link: 'https://lifia.info.unlp.edu.ar/',
  imageUrl: publicURL('/images/experience/lifia.jpg'),
  skills: [
    tags.Firebase,
    tags['Node.js'],
    tags.Bootstrap,
    tags.IONIC,
    tags.ReactNative,
    tags.Mongo,
  ],
} as Song;

export const ProfessionalExperience = {
  name: 'EXPERIENCE',
  color: '#c45f23',
  filters: [JobTypesEnum.JOB],
  songs: [LBS, GRAL, QWERTY, LIFIA],
  imageUrl: getAlbumPath('ed.jpg'),
} as Playlist;
