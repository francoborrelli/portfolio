import type { SocialNetwork } from '../interfaces/types';
import { getSocialNetworkPath } from '../utils/getPublicPath';

export const SOCIAL_NETWORKS = [
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/francoborrelli/',
    imageUrl: getSocialNetworkPath('linkedin.jpg'),
  },
  {
    name: 'GitHub',
    link: 'https://github.com/francoborrelli',
    imageUrl: getSocialNetworkPath('github.png'),
  },
  {
    name: 'Gitlab',
    link: 'https://gitlab.com/francoborrelli',
    imageUrl: getSocialNetworkPath('gitlab.png'),
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/user/21dzxax5geyjawwrgvrjogqwa?si=54468bda2a7e422d',
    imageUrl: getSocialNetworkPath('spotify.jpeg'),
  },
] as SocialNetwork[];
