import { SkillsTypesEnum } from '../constants/cv/skills';
import { JobTypesEnum } from '../constants/cv/experience';
import { EducationTypesEnum } from '../constants/cv/education';
import { ProjectTypesEnum } from '../constants/cv/personalProjects';
import { PublicationsTypesEnum } from '../constants/cv/publications';

type SongType =
  | JobTypesEnum
  | SkillsTypesEnum
  | ProjectTypesEnum
  | EducationTypesEnum
  | PublicationsTypesEnum;

export type Song = {
  name: string;
  length?: string;
  artist?: string;
  imageUrl?: string;
  skills: TagType[];
  description?: string;
  experience?: string;
  relatedSongs?: Song[];
  explanation?: string;
  avatar?: any;

  types?: SongType[];

  link?: string;
  github?: string;
  images?: string[];
  youtube?: string;
  certificate?: string;
};

export type Playlist = {
  name: string;
  description?: string;
  songs: Song[];
  color: string;
  filters?: string[];
  defaultFilter?: string;
  getImage: (lang: string) => string;
};

export type Description = {
  bulletPoints: string[];
  link?: string;
  tags?: TagType[];
};

export type User = {
  name: string;
  imageUrl?: string;
  playlists: Playlist[];
  linkedIn?: string;
  github?: string;
};

export type TagType = {
  text: string;
  color: string;
  icon?: any;
  link?: string;
  years?: string;
  experience?: string;
  image?: string;
};

export type SocialNetwork = {
  name: string;
  imageUrl: string;
  link: string;
  icon: any;
};
