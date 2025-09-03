import { SKILLS } from './skills';
import { PROJECTS } from './projects';
import { EDUCATION } from './education';
import { EXPERIENCE } from './experience';
import { PUBLICATIONS } from './publications';

export const cv = {
  // Titles
  EXPERIENCE: 'Expérience',
  EDUCATION: 'Formation',
  PROJECTS: 'Projets',
  PUBLICATIONS: 'Publications',
  SKILLS: 'Compétences',

  WEB_SITE: 'Site Web',
  Certificate: 'Certificat',

  // Experience
  ...SKILLS,
  ...PROJECTS,
  ...EDUCATION,
  ...EXPERIENCE,
  ...PUBLICATIONS,
} as const;
