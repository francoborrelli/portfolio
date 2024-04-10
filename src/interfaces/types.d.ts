export type Song = {
  name: string;
  length?: string;
  artist?: string;
  imageUrl?: string;
  skills: TagType[];
  description?: string;

  link?: string;
  github?: string;
  images?: string[];
};

export type Playlist = {
  name: string;
  description?: string;
  songs: Song[];
  imageUrl?: string;
  color: string;
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
  help?: string;
  icon?: any;
};

export type SocialNetwork = {
  name: string;
  imageUrl: string;
  link: string;
  icon: any;
};
