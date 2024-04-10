import { getAlbumPath, getSocialNetworkPath } from '../../utils/getPublicPath';

import type { Song } from '../../interfaces/types';
import { tags } from '../tags';

export const SpotifyClone = {
  name: 'Spotify Clone',
  length: '1 month',
  imageUrl: getSocialNetworkPath('spotify.png'),
  link: 'https://spotify-react-web-client.onrender.com/',
  artist: 'Personal project',
  github: 'https://github.com/francoborrelli/spotify-react-web-client',
  skills: [
    tags.React,
    tags.SASS,
    tags.REDUX,
    tags.Spotify,
    tags.Docker,
    tags['CI/CD'],
    tags.Heroku,
  ],
} as Song;

// const LBS = {
//   name: 'LBS_JOB_TITLE',
//   length: 'LBS_JOB_DURATION',
//   artist: 'LBS Informática',
//   link: 'https://www.lbsinformatica.com.ar/',
//   imageUrl: publicURL('/images/experience/logo_lbs.svg'),
//   description: 'LBS_JOB_DESCRIPTION',
//   skills: [
//     tags.React,
//     tags.Docker,
//     tags.TypeScript,
//     tags.Laravel,
//     tags['CI/CD'],
//     tags.GitLab,
//     tags.Redash,
//   ],
// } as Song;

export const PersonalProjects = {
  name: 'PROJECTS',
  color: '#113066',
  songs: [SpotifyClone],
  description: 'Description 1',
  imageUrl: getAlbumPath('wallows.jpg'),
};
