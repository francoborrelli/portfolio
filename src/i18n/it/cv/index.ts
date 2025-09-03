import { SKILLS } from './skills';
import { PROJECTS } from './projects';
import { EDUCATION } from './education';
import { EXPERIENCE } from './experience';
import { PUBLICATIONS } from './publications';

export const cv = {
  // Titles
  EXPERIENCE: 'Esperienza',
  EDUCATION: 'Formazione',
  PROJECTS: 'Progetti',
  PUBLICATIONS: 'Pubblicazioni',
  SKILLS: 'Competenze',

  WEB_SITE: 'Sito Web',
  Certificate: 'Certificato',

  // Experience
  ...SKILLS,
  ...PROJECTS,
  ...EDUCATION,
  ...EXPERIENCE,
  ...PUBLICATIONS,
} as const;
