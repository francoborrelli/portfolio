import { getAlbumPath } from '../../utils/getPublicPath';
import { tags } from '../tags';

import type { Playlist, Song } from '../../interfaces/types';

import { RondasDeNegocio, Cooperativas, Puertos } from './personalProjects';
import { AuthoringTool, SoundSuitMobileApp, SoundSuitWebApp } from './personalProjects';
import { RUKIR, GO4Clic, MasEfectivo, QwertyLandingPage, TFD } from './personalProjects';
import { GralLecturas, GralLecturasWeb, GralTasks, GralVehicles } from './personalProjects';

const publicURL = (url: string) => process.env.PUBLIC_URL + url;

export enum JobTypesEnum {
  JOB = 'JOB',
}

const SpherzGmbH = {
  name: 'SPHERZ_GMBH_JOB_NAME',
  length: 'SPHERZ_GMBH_JOB_LENGTH',
  artist: 'SPHERZ_GMBH_JOB_ARTIST',
  types: [JobTypesEnum.JOB],
  link: 'https://soundsuit.fm/',
  imageUrl: publicURL('/images/experience/soundsuit.png'),
  experience: 'SPHERZ_GMBH_JOB_DESCRIPTION',
  skills: [
    tags.React,
    tags.ReactNative,
    tags.Vercel,
    tags.Cloudflare,
    tags.GooglePlay,
    tags.Android,
    tags.IOS,
    tags.Electron,
    tags.Docker,
    tags.TypeScript,
    tags['Node.js'],
    tags.JIRA,
    tags.GitHub,
  ],
  relatedSongs: [SoundSuitWebApp, SoundSuitMobileApp]
} as Song;

const TFD_JOB = {
  name: 'TFD_JOB_NAME',
  length: 'TFD_JOB_LENGTH',
  artist: 'TFD | Tufacturadigital',
  types: [JobTypesEnum.JOB],
  link: 'https://tufacturadigital.com.ar/',
  imageUrl: publicURL('/images/projects/tfd/logo.png'),
  experience: 'TFD_JOB_DESCRIPTION',
  skills: [
    tags.AWS,
    tags.Mercadopago,
    tags.Angular,
    tags.Docker,
    tags.TypeScript,
    tags.Django,
    tags['CI/CD'],
    tags.GitLab,
    tags.Postman,
    tags.Bootstrap,
  ],
  relatedSongs: [TFD],
} as Song;

const LBS = {
  name: 'LBS_JOB_NAME',
  length: 'LBS_JOB_LENGTH',
  artist: 'LBS Informática',
  types: [JobTypesEnum.JOB],
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
  relatedSongs: [Puertos, Cooperativas, RondasDeNegocio],
} as Song;

const GRAL = {
  name: 'GRAL_JOB_NAME',
  length: 'GRAL_JOB_LENGTH',
  artist: 'Gral Saneamiento SA',
  experience: 'GRAL_JOB_DESCRIPTION',
  types: [JobTypesEnum.JOB],
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
  relatedSongs: [GralVehicles, GralLecturas, GralLecturasWeb, GralTasks],
} as Song;

const QWERTY = {
  name: 'QWERTY_JOB_NAME',
  link: 'https://qwertysoft.ar/',
  artist: 'Qwertysoft SRL',
  length: 'QWERTY_JOB_LENGTH',
  types: [JobTypesEnum.JOB],
  experience: 'QWERTY_JOB_DESCRIPTION',
  imageUrl: publicURL('/images/experience/qwerty.png'),
  skills: [
    tags.Angular,
    tags.Docker,
    tags.Django,
    tags.IONIC,
    tags.TypeScript,
    tags['Node.js'],
    tags['CI/CD'],
    tags.GitLab,
    tags.JIRA,
    tags.Confluence,
    tags.Kubernetes,
    tags.Rancher,
    tags.Sentry,
    tags.Postman,
  ],
  relatedSongs: [QwertyLandingPage, RUKIR, GO4Clic, MasEfectivo],
} as Song;

const LIFIA = {
  artist: 'LIFIA - UNLP',
  name: 'LIFIA_JOB_NAME',
  length: 'LIFIA_JOB_LENGTH',
  types: [JobTypesEnum.JOB],
  experience: 'LIFIA_JOB_DESCRIPTION',
  link: 'https://lifia.info.unlp.edu.ar/',
  imageUrl: publicURL('/images/experience/lifia.jpg'),
  skills: [
    tags.Firebase,
    tags['Node.js'],
    tags.Bootstrap,
    tags.IONIC,
    tags.GitHub,
    tags.ReactNative,
    tags.Mongo,
  ],
  relatedSongs: [AuthoringTool],
} as Song;

export const ProfessionalExperience = {
  name: 'EXPERIENCE',
  color: '#422023',
  filters: [JobTypesEnum.JOB],
  songs: [SpherzGmbH, LBS, TFD_JOB, GRAL, QWERTY, LIFIA],
  getImage(lang) {
    return getAlbumPath('Experience-cover', lang, 'png');
  },
} as Playlist;
