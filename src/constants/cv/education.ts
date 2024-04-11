import type { Playlist, Song } from '../../interfaces/types';

import { getAlbumPath, getEducationPath } from '../../utils/getPublicPath';

enum EducationTypesEnum {
  COURSE = 'COURSE',
  EXAM = 'EXAM',
  DEGREE = 'DEGREE',
}

const APU = {
  name: 'APU_TITLE',
  artist: 'APU_ARTIST',
  length: 'APU_DURATION',
  description: 'APU_DESCRIPTION',
  type: EducationTypesEnum.DEGREE,
  link: 'https://www.info.unlp.edu.ar/analista-programador-universitario/',
  certificate:
    'https://media.licdn.com/dms/image/C4E2DAQHa6nSBaAljJw/profile-treasury-document-images_1280/1/1635901593694?e=1714003200&v=beta&t=xAenJC3dNl5fY2K7tXhSNU9r0cp3jsSYdT847GaoCVw',
  imageUrl: getEducationPath('unlp/logo.jpg'),
  skills: [],
  youtube: 'https://youtu.be/1K9kQka8wCw?si=Y3igrp8prZ54u3Hg&t=1602',
} as Song;

const LICENCIATURA = {
  name: 'LICENCIATURA_TITLE',
  artist: 'LICENCIATURA_ARTIST',
  length: 'LICENCIATURA_DURATION',
  type: EducationTypesEnum.DEGREE,
  description: 'LICENCIATURA_DESCRIPTION',
  certificate:
    'https://media.licdn.com/dms/image/C562DAQGoK0otbQBOFA/profile-treasury-document-images_1280/1/1638312707731?e=1714003200&v=beta&t=aSVjxWuddbRJkURndnWW5U4pO4B-jpInkczMh5RTxI0',
  link: 'https://www.info.unlp.edu.ar/licenciatura-en-sistemas/',
  imageUrl: getEducationPath('unlp/logo.jpg'),
  skills: [],
} as Song;

const ENGLISH_CAMBRIDGE = {
  name: 'ENGLISH_CAMBRIDGE_TITLE',
  artist: 'ENGLISH_CAMBRIDGE_ARTIST',
  length: 'ENGLISH_CAMBRIDGE_DURATION',
  type: EducationTypesEnum.EXAM,
  description: 'ENGLISH_CAMBRIDGE_DESCRIPTION',
  link: 'https://www.cambridgeenglish.org/',
  imageUrl: getEducationPath('cambridge/logo.jpg'),
  skills: [],
} as Song;

const MIKROWAYS_KUBERNETES = {
  type: EducationTypesEnum.COURSE,
  name: 'MIKROWAYS_KUBERNETES_TITLE',
  artist: 'MIKROWAYS_KUBERNETES_ARTIST',
  length: 'MIKROWAYS_KUBERNETES_DURATION',
  description: 'MIKROWAYS_KUBERNETES_DESCRIPTION',
  link: 'https://www.mikroways.net/es/training/kubernetes/',
  imageUrl: getEducationPath('mikroways/logo.png'),
  certificate: 'https://drive.google.com/file/d/1sQktJh7oXisfT6P99jjqGgEV9F9nObqV/view',
  skills: [],
} as Song;

const REACT_UDEMY = {
  name: 'REACT_UDEMY_TITLE',
  artist: 'REACT_UDEMY_ARTIST',
  length: 'REACT_UDEMY_DURATION',
  type: EducationTypesEnum.COURSE,
  description: 'REACT_UDEMY_DESCRIPTION',
  link: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
  imageUrl: getEducationPath('udemy/logo.png'),
  skills: [],
} as Song;

const FISCALIA = {
  name: 'FISCALIA_TITLE',
  artist: 'FISCALIA_ARTIST',
  length: 'FISCALIA_DURATION',
  type: EducationTypesEnum.COURSE,
  description: 'FISCALIA_DESCRIPTION',
  link: 'https://www2.fepba.gov.ar/',
  imageUrl: getEducationPath('fiscalia/logo.jpg'),
  skills: [],
  certificate: 'https://drive.google.com/file/d/1CrfhE12BtlsjXW1-Z-2RjRecDXlgBo09/view',
} as Song;

const ANGULAR_UDEMY = {
  name: 'ANGULAR_UDEMY_TITLE',
  artist: 'ANGULAR_UDEMY_ARTIST',
  type: EducationTypesEnum.COURSE,
  length: 'ANGULAR_UDEMY_DURATION',
  description: 'ANGULAR_UDEMY_DESCRIPTION',
  link: 'https://www.udemy.com/course/angular-fernando-herrera/',
  imageUrl: getEducationPath('udemy/logo.png'),
  skills: [],
} as Song;

export const Education = {
  name: 'EDUCATION',
  description: 'Description 3',
  songs: [
    LICENCIATURA,
    MIKROWAYS_KUBERNETES,
    APU,
    ANGULAR_UDEMY,
    FISCALIA,
    REACT_UDEMY,
    ENGLISH_CAMBRIDGE,
  ],
  color: '#181432',
  imageUrl: getAlbumPath('imagine-dragons.jpg'),
  filters: [EducationTypesEnum.DEGREE, EducationTypesEnum.COURSE, EducationTypesEnum.EXAM],
} as Playlist;
