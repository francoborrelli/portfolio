import type { Languages } from '../interfaces/languages';

export const AVAILABLE_LANGUAGES = [
  { value: 'en', label: 'English', englishLabel: 'English' },
  {
    value: 'es',
    label: 'Español (Argentina)',
    englishLabel: 'Spanish',
  },
  {
    value: 'fr',
    label: 'Français',
    englishLabel: 'French',
  },
  {
    value: 'it',
    label: 'Italiano',
    englishLabel: 'Italian',
  },
  {
    value: 'de',
    label: 'Deutsch',
    englishLabel: 'German',
  },
] as {
  label: string;
  value: Languages;
  englishLabel: string;
}[];
