import {
  getAlbumPath,
  getProjectPath,
  getExperiencePath,
  getSocialNetworkPath,
} from '../../utils/getPublicPath';

import { tags } from '../tags';
import type { Song } from '../../interfaces/types';

enum ProjectTypesEnum {
  PERSONAL_PROJECT = 'PERSONAL_PROJECT',
  QWERTY = 'QWERTY',
  GRAL = 'GRAL',
  UNLP = 'UNLP',
}

export const SpotifyClone = {
  name: 'SPOTIFY_CLONE_NAME',
  artist: 'SPOTIFY_CLONE_ARTIST',
  length: 'SPOTIFY_CLONE_LENGTH',
  description: 'SPOTIFY_CLONE_DESCRIPTION',
  type: ProjectTypesEnum.PERSONAL_PROJECT,
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
    getProjectPath('spotify_clone/3.png'),
    getProjectPath('spotify_clone/6.png'),
    getProjectPath('spotify_clone/1.png'),
    getProjectPath('spotify_clone/2.png'),
    getProjectPath('spotify_clone/4.png'),
    getProjectPath('spotify_clone/5.png'),
    getProjectPath('spotify_clone/7.png'),
  ],
} as Song;

export const LottieReactNative = {
  name: 'LOTTIE_NAME',
  artist: 'LOTTIE_ARTIST',
  length: 'LOTTIE_LENGTH',
  description: 'LOTTIE_DESCRIPTION',
  type: ProjectTypesEnum.PERSONAL_PROJECT,
  imageUrl: getProjectPath('lottie/logo.png'),
  images: [getProjectPath('lottie/1.jpg'), getProjectPath('lottie/2.jpg')],
  link: 'https://expo.dev/@francoborrelli/react-native-lottie?serviceType=classic&distribution=expo-go/',
  github: 'https://github.com/francoborrelli/react-native-lottie-prototype',
  skills: [tags.ReactNative, tags.Expo, tags.TypeScript, tags.Android],
} as Song;

export const TensorflowReactNative = {
  name: 'TENSORFLOW_REACT_NATIVE_NAME',
  artist: 'TENSORFLOW_REACT_NATIVE_ARTIST',
  length: 'TENSORFLOW_REACT_NATIVE_LENGTH',
  description: 'TENSORFLOW_DESCRIPTION',
  type: ProjectTypesEnum.PERSONAL_PROJECT,
  imageUrl: getProjectPath('tensorflowjs/logo.png'),
  github: 'https://github.com/francoborrelli/react-native-tensorflowjs',
  skills: [tags.TensorFlow, tags.ReactNative, tags.Expo, tags.TypeScript],
  images: [getProjectPath('tensorflowjs/1.jpg'), getProjectPath('tensorflowjs/2.jpg')],
} as Song;

export const TFD = {
  name: 'TFD_NAME',
  artist: 'TFD_ARTIST',
  length: 'TFD_LENGTH',
  description: 'TFD_DESCRIPTION',
  type: ProjectTypesEnum.QWERTY,
  imageUrl: getProjectPath('tfd/logo.png'),
  link: 'https://tufacturadigital.com.ar/',
  youtube: 'https://www.youtube.com/channel/UCA8witVr88Wj5sA8c9sI8qg',
  images: [
    getProjectPath('tfd/1.png'),
    getProjectPath('tfd/2.png'),
    getProjectPath('tfd/3.png'),
    getProjectPath('tfd/4.png'),
    getProjectPath('tfd/5.png'),
  ],
  skills: [
    tags.Angular,
    tags.Django,
    tags.Postgres,
    tags.Docker,
    tags.AWS,
    tags['CI/CD'],
    tags.Mercadopago,
    tags.Redis,
  ],
} as Song;

export const CalmCovid = {
  name: 'CALM_COVID_NAME',
  artist: 'CALM_COVID_ARTIST',
  length: 'CALM_COVID_LENGTH',
  type: ProjectTypesEnum.QWERTY,
  description: 'CALM_COVID_DESCRIPTION',
  imageUrl: getProjectPath('calm_covid/logo.png'),
  github: '',
  skills: [tags.ReactNative, tags.TypeScript, tags.Firebase, tags.Android],
  images: [
    getProjectPath('calm_covid/4.jpg'),
    getProjectPath('calm_covid/1.jpg'),
    getProjectPath('calm_covid/2.jpg'),
    getProjectPath('calm_covid/3.jpg'),
    getProjectPath('calm_covid/5.jpg'),
    getProjectPath('calm_covid/6.jpg'),
  ],
} as Song;

export const QwertyLandingPage = {
  name: 'QWERTY_LANDING_PAGE_NAME',
  artist: 'QWERTY_LANDING_PAGE_ARTIST',
  length: 'QWERTY_LANDING_PAGE_LENGTH',
  type: ProjectTypesEnum.QWERTY,
  description: 'QWERTY_LANDING_PAGE_DESCRIPTION',
  imageUrl: getExperiencePath('qwerty.png'),
  link: 'http://qwertysoft.ar/',
  skills: [tags.Express, tags.Docker, tags.SASS, tags.AWS, tags['CI/CD']],
  images: [
    getProjectPath('qwertysite/1.png'),
    getProjectPath('qwertysite/5.png'),
    getProjectPath('qwertysite/4.png'),
    getProjectPath('qwertysite/2.png'),
    getProjectPath('qwertysite/3.png'),
  ],
} as Song;

export const AuthoringTool = {
  name: 'AUTHORING_TOOL_NAME',
  artist: 'AUTHORING_TOOL_ARTIST',
  length: 'AUTHORING_TOOL_LENGTH',
  type: ProjectTypesEnum.UNLP,
  description: 'AUTHORING_TOOL_DESCRIPTION',
  imageUrl: getProjectPath('authoring_tool/logo.png'),
  images: [
    getProjectPath('authoring_tool/2.jpg'),
    getProjectPath('authoring_tool/1.jpg'),
    getProjectPath('authoring_tool/3.jpg'),
    getProjectPath('authoring_tool/4.jpg'),
    getProjectPath('authoring_tool/5.jpg'),
    getProjectPath('authoring_tool/6.jpg'),
    getProjectPath('authoring_tool/7.jpg'),
    getProjectPath('authoring_tool/8.jpg'),
  ],
  skills: [tags.IONIC, tags.Firebase, tags.Android],
} as Song;

export const PersonalProjects = {
  name: 'PROJECTS',
  color: '#113066',
  songs: [
    TensorflowReactNative,
    LottieReactNative,
    AuthoringTool,
    CalmCovid,
    QwertyLandingPage,
    TFD,
    SpotifyClone,
  ],
  filters: [ProjectTypesEnum.PERSONAL_PROJECT, ProjectTypesEnum.QWERTY, ProjectTypesEnum.UNLP],
  imageUrl: getAlbumPath('wallows.jpg'),
};
