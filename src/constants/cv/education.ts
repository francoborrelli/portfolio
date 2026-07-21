import type { Playlist, Song } from '../../interfaces/types';

import { getAlbumPath, getEducationPath } from '../../utils/getPublicPath';

import { THESIS_MASTER_2024, THESIS_SYSTEMS } from '../cv/publications';

export enum EducationTypesEnum {
  EXAM = 'EXAM',
  COURSE = 'COURSE',
  DEGREE = 'DEGREE',
}

const APU = {
  name: 'APU_NAME',
  artist: 'APU_ARTIST',
  length: 'APU_LENGTH',
  description: 'APU_DESCRIPTION',
  types: [EducationTypesEnum.DEGREE],
  link: 'https://www.info.unlp.edu.ar/analista-programador-universitario/',
  certificate:
    'https://media.licdn.com/dms/image/v2/C4E2DAQHa6nSBaAljJw/profile-treasury-document-images_1280/profile-treasury-document-images_1280/1/1635901593694?e=1758153600&v=beta&t=bobUDIh9LSAnWz00ezFbaiE5WscDjJfqA9VXz0VkiQo',
  imageUrl: getEducationPath('unlp/logo.jpg'),
  skills: [],
  youtube: 'https://youtu.be/1K9kQka8wCw?si=Y3igrp8prZ54u3Hg&t=1602',
} as Song;

const LICENCIATURA = {
  name: 'LICENCIATURA_NAME',
  artist: 'LICENCIATURA_ARTIST',
  length: 'LICENCIATURA_LENGTH',
  types: [EducationTypesEnum.DEGREE],
  description: 'LICENCIATURA_DESCRIPTION',
  certificate: 'https://drive.google.com/file/d/1k-wec2UzgiCbM52n1AieJNdfqWa-xOuM/view?usp=sharing',
  link: 'https://www.info.unlp.edu.ar/licenciatura-en-sistemas/',
  imageUrl: getEducationPath('unlp/logo.jpg'),
  relatedSongs: [THESIS_SYSTEMS],
  skills: [],
} as Song;

const ENGLISH_CAMBRIDGE = {
  name: 'ENGLISH_CAMBRIDGE_NAME',
  artist: 'ENGLISH_CAMBRIDGE_ARTIST',
  length: 'ENGLISH_CAMBRIDGE_LENGTH',
  types: [EducationTypesEnum.EXAM],
  description: 'ENGLISH_CAMBRIDGE_DESCRIPTION',
  link: 'https://www.cambridgeenglish.org/',
  imageUrl: getEducationPath('cambridge/logo.jpg'),
  skills: [],
} as Song;

const MIKROWAYS_KUBERNETES = {
  types: [EducationTypesEnum.COURSE],
  name: 'MIKROWAYS_KUBERNETES_NAME',
  artist: 'MIKROWAYS_KUBERNETES_ARTIST',
  length: 'MIKROWAYS_KUBERNETES_LENGTH',
  description: 'MIKROWAYS_KUBERNETES_DESCRIPTION',
  link: 'https://www.mikroways.net/es/training/kubernetes/',
  imageUrl: getEducationPath('mikroways/logo.png'),
  certificate: 'https://drive.google.com/file/d/1sQktJh7oXisfT6P99jjqGgEV9F9nObqV/view',
  skills: [],
} as Song;

const REACT_UDEMY = {
  name: 'REACT_UDEMY_NAME',
  artist: 'REACT_UDEMY_ARTIST',
  length: 'REACT_UDEMY_LENGTH',
  types: [EducationTypesEnum.COURSE],
  description: 'REACT_UDEMY_DESCRIPTION',
  link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
  imageUrl: getEducationPath('udemy/logo.png'),
  skills: [],
} as Song;

const FISCALIA = {
  name: 'FISCALIA_NAME',
  artist: 'FISCALIA_ARTIST',
  length: 'FISCALIA_LENGTH',
  types: [EducationTypesEnum.COURSE],
  description: 'FISCALIA_DESCRIPTION',
  link: 'https://www2.fepba.gov.ar/',
  imageUrl: getEducationPath('fiscalia/logo.jpg'),
  skills: [],
  certificate: 'https://drive.google.com/file/d/1CrfhE12BtlsjXW1-Z-2RjRecDXlgBo09/view',
} as Song;

const ANGULAR_UDEMY = {
  name: 'ANGULAR_UDEMY_NAME',
  artist: 'ANGULAR_UDEMY_ARTIST',
  types: [EducationTypesEnum.COURSE],
  length: 'ANGULAR_UDEMY_LENGTH',
  description: 'ANGULAR_UDEMY_DESCRIPTION',
  link: 'https://www.udemy.com/course/angular-fernando-herrera/',
  imageUrl: getEducationPath('udemy/logo.png'),
  skills: [],
} as Song;

const MAGISTER_DATA_ANALYSIS = {
  types: [EducationTypesEnum.DEGREE],
  name: 'MAGISTER_DATA_ANALYSIS_NAME',
  artist: 'MAGISTER_DATA_ANALYSIS_ARTIST',
  length: 'MAGISTER_DATA_ANALYSIS_LENGTH',
  description: 'MAGISTER_DATA_ANALYSIS_DESCRIPTION',
  certificate: 'https://drive.google.com/file/d/1tMDxat3R6wt3KO-ulx1SF2_UxT-b-xRb/view?usp=sharing',
  link: 'https://postgrado.info.unlp.edu.ar/inteligencia-de-datos-orientada-a-big-data/',
  imageUrl: getEducationPath('unlp/logo.jpg'),
  skills: [],
  relatedSongs: [THESIS_MASTER_2024],
} as Song;

const AI_FUNDAMENTALS = {
  types: [EducationTypesEnum.COURSE],
  name: 'AI_FUNDAMENTALS_NAME',
  artist: 'AI_FUNDAMENTALS_ARTIST',
  length: 'AI_FUNDAMENTALS_LENGTH',
  description: 'AI_FUNDAMENTALS_DESCRIPTION',
  link: 'https://www.coursera.org/learn/google-ai-fundamentals',
  certificate: 'https://www.coursera.org/account/accomplishments/verify/EORSXS15NW8P',
  imageUrl: getEducationPath('coursera/logo.png'),
  skills: [],
} as Song;

const AI_BRAINSTORMING_PLANNING = {
  types: [EducationTypesEnum.COURSE],
  name: 'AI_BRAINSTORMING_PLANNING_NAME',
  artist: 'AI_BRAINSTORMING_PLANNING_ARTIST',
  length: 'AI_BRAINSTORMING_PLANNING_LENGTH',
  description: 'AI_BRAINSTORMING_PLANNING_DESCRIPTION',
  link: 'https://www.coursera.org/learn/google-ai-for-brainstorming-and-planning',
  certificate: 'https://www.coursera.org/account/accomplishments/verify/P4UXUSO37LVH',
  imageUrl: getEducationPath('coursera/logo.png'),
  skills: [],
} as Song;

const AI_RESEARCH_INSIGHTS = {
  types: [EducationTypesEnum.COURSE],
  name: 'AI_RESEARCH_INSIGHTS_NAME',
  artist: 'AI_RESEARCH_INSIGHTS_ARTIST',
  length: 'AI_RESEARCH_INSIGHTS_LENGTH',
  description: 'AI_RESEARCH_INSIGHTS_DESCRIPTION',
  link: 'https://www.coursera.org/learn/google-ai-for-research-and-insights',
  certificate: 'https://www.coursera.org/account/accomplishments/verify/LB77OB0YBR1I',
  imageUrl: getEducationPath('coursera/logo.png'),
  skills: [],
} as Song;

const AI_WRITING_COMMUNICATING = {
  types: [EducationTypesEnum.COURSE],
  name: 'AI_WRITING_COMMUNICATING_NAME',
  artist: 'AI_WRITING_COMMUNICATING_ARTIST',
  length: 'AI_WRITING_COMMUNICATING_LENGTH',
  description: 'AI_WRITING_COMMUNICATING_DESCRIPTION',
  link: 'https://www.coursera.org/learn/google-ai-for-writing-and-communicating',
  certificate: 'https://www.coursera.org/account/accomplishments/verify/155C91O1EBQL',
  imageUrl: getEducationPath('coursera/logo.png'),
  skills: [],
} as Song;

const AI_CONTENT_CREATION = {
  types: [EducationTypesEnum.COURSE],
  name: 'AI_CONTENT_CREATION_NAME',
  artist: 'AI_CONTENT_CREATION_ARTIST',
  length: 'AI_CONTENT_CREATION_LENGTH',
  description: 'AI_CONTENT_CREATION_DESCRIPTION',
  link: 'https://www.coursera.org/learn/google-ai-for-content-creation',
  certificate: 'https://www.coursera.org/account/accomplishments/verify/7SK8QMTQUI4D',
  imageUrl: getEducationPath('coursera/logo.png'),
  skills: [],
} as Song;

const AI_DATA_ANALYSIS = {
  types: [EducationTypesEnum.COURSE],
  name: 'AI_DATA_ANALYSIS_NAME',
  artist: 'AI_DATA_ANALYSIS_ARTIST',
  length: 'AI_DATA_ANALYSIS_LENGTH',
  description: 'AI_DATA_ANALYSIS_DESCRIPTION',
  link: 'https://www.coursera.org/learn/google-ai-for-data-analysis',
  certificate: 'https://www.coursera.org/account/accomplishments/verify/FAF1ZIPAHAIN',
  imageUrl: getEducationPath('coursera/logo.png'),
  skills: [],
} as Song;

const AI_APP_BUILDING = {
  types: [EducationTypesEnum.COURSE],
  name: 'AI_APP_BUILDING_NAME',
  artist: 'AI_APP_BUILDING_ARTIST',
  length: 'AI_APP_BUILDING_LENGTH',
  description: 'AI_APP_BUILDING_DESCRIPTION',
  link: 'https://www.coursera.org/learn/google-ai-for-app-building',
  certificate: 'https://www.coursera.org/account/accomplishments/verify/4MQJKXU8SMIU',
  imageUrl: getEducationPath('coursera/logo.png'),
  skills: [],
} as Song;

const GOOGLE_AI_SPECIALIZATION = {
  types: [EducationTypesEnum.COURSE],
  name: 'GOOGLE_AI_SPECIALIZATION_NAME',
  artist: 'GOOGLE_AI_SPECIALIZATION_ARTIST',
  length: 'GOOGLE_AI_SPECIALIZATION_LENGTH',
  description: 'GOOGLE_AI_SPECIALIZATION_DESCRIPTION',
  link: 'https://www.coursera.org/professional-certificates/google-ai',
  certificate: 'https://www.coursera.org/account/accomplishments/specialization/SUA7WJRYGZ4Y',
  imageUrl: getEducationPath('coursera/logo.png'),
  skills: [],
  relatedSongs: [
    AI_FUNDAMENTALS,
    AI_BRAINSTORMING_PLANNING,
    AI_RESEARCH_INSIGHTS,
    AI_WRITING_COMMUNICATING,
    AI_CONTENT_CREATION,
    AI_DATA_ANALYSIS,
    AI_APP_BUILDING,
  ],
} as Song;

export const Education = {
  name: 'EDUCATION',
  description: 'Description 3',
  songs: [
    GOOGLE_AI_SPECIALIZATION,
    MAGISTER_DATA_ANALYSIS,
    LICENCIATURA,
    MIKROWAYS_KUBERNETES,
    APU,
    ANGULAR_UDEMY,
    FISCALIA,
    REACT_UDEMY,
    ENGLISH_CAMBRIDGE,
  ],
  color: '#74725f',
  getImage(lang) {
    return getAlbumPath('Education-cover', lang, 'png');
  },
  filters: [EducationTypesEnum.DEGREE, EducationTypesEnum.COURSE, EducationTypesEnum.EXAM],
} as Playlist;
