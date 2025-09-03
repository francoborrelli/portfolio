import { SKILLS } from './skills';
import { PROJECTS } from './projects';
import { EDUCATION } from './education';
import { EXPERIENCE } from './experience';
import { PUBLICATIONS } from './publications';

export const cv = {
  // Titles
  EXPERIENCE: 'Erfahrung',
  EDUCATION: 'Ausbildung',
  PROJECTS: 'Projekte',
  PUBLICATIONS: 'Publikationen',
  SKILLS: 'Fähigkeiten',

  WEB_SITE: 'Website',
  Certificate: 'Zertifikat',

  // Experience
  ...SKILLS,
  ...PROJECTS,
  ...EDUCATION,
  ...EXPERIENCE,
  ...PUBLICATIONS,
} as const;
