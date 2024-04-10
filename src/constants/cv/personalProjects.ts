import { getAlbumPath, getSocialNetworkPath } from '../../utils/getPublicPath';

import { tags } from '../tags';
import type { Song } from '../../interfaces/types';

export const SpotifyClone = {
  name: 'SPOTIFY_CLONE_NAME',
  artist: 'SPOTIFY_CLONE_ARTIST',
  length: 'SPOTIFY_CLONE_LENGTH',
  description: 'SPOTIFY_CLONE_DESCRIPTION',
  imageUrl: getSocialNetworkPath('spotify.png'),
  link: 'https://spotify-react-web-client.onrender.com/',
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
  images: [
    'https://github.com/francoborrelli/spotify-react-web-client/blob/master/images/artist.png?raw=true',
    'https://github.com/francoborrelli/spotify-react-web-client/blob/master/images/artists.png?raw=true',
    'https://github.com/francoborrelli/spotify-react-web-client/blob/master/images/browse.png?raw=true',
    'https://github.com/francoborrelli/spotify-react-web-client/blob/master/images/devices.png?raw=true',
    'https://github.com/francoborrelli/spotify-react-web-client/blob/master/images/newPlaylist.png?raw=true',
    'https://github.com/francoborrelli/spotify-react-web-client/blob/master/images/playlist.png?raw=true',
    'https://github.com/francoborrelli/spotify-react-web-client/blob/master/images/search.png?raw=true',
    'https://github.com/francoborrelli/spotify-react-web-client/blob/master/images/songs.png?raw=true',
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
