import { getAlbumPath } from '../../utils/getPublicPath';
import { tags } from '../tags';

import type { Song } from '../../interfaces/types';

const publicURL = (url: string) => process.env.PUBLIC_URL + url;

const LBS = {
  name: 'LBS_JOB_TITLE',
  length: 'LBS_JOB_DURATION',
  artist: 'LBS Informática',
  link: 'https://www.lbsinformatica.com.ar/',
  imageUrl: publicURL('/images/experience/logo_lbs.svg'),
  description: 'LBS_JOB_DESCRIPTION',
  skills: [tags.React, tags.Docker, tags.TypeScript, tags.Laravel, tags['CI/CD'], tags.GitLab],
} as Song;

const GRAL = {
  name: 'GRAL_JOB_TITLE',
  length: 'GRAL_JOB_DURATION',
  artist: 'Gral Saneamiento SA',
  description: 'GRAL_JOB_DESCRIPTION',
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
  ],
} as Song;

const QWERTY = {
  name: 'QWERTY_JOB_TITLE',
  link: 'https://qwertysoft.ar/',
  artist: 'Qwertysoft SRL',
  length: 'QWERTY_JOB_DURATION',
  description: 'QWERTY_JOB_DESCRIPTION',
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
  name: 'LIFIA_JOB_TITLE',
  length: 'LIFIA_JOB_DURATION',
  description: 'LIFIA_JOB_DESCRIPTION',
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
  songs: [LBS, GRAL, QWERTY, LIFIA],
  imageUrl: getAlbumPath('ed.jpg'),
};
