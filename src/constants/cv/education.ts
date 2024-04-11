import type { Song } from '../../interfaces/types';

import { getAlbumPath, getEducationPath } from '../../utils/getPublicPath';

const APU = {
  name: 'APU_TITLE',
  artist: 'APU_ARTIST',
  length: 'APU_DURATION',
  description: 'APU_DESCRIPTION',
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
  description: 'ENGLISH_CAMBRIDGE_DESCRIPTION',
  link: 'https://www.cambridgeenglish.org/',
  imageUrl: getEducationPath('cambridge/logo.jpg'),
  skills: [],
} as Song;

export const Education = {
  name: 'EDUCATION',
  description: 'Description 3',
  songs: [LICENCIATURA, APU, ENGLISH_CAMBRIDGE],
  color: '#90803c',
  imageUrl: getAlbumPath('kooks.jpg'),
};
