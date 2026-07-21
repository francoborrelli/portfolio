import type { ReactNode } from 'react';
import type { Song } from '../interfaces/types';
import { PiCertificateFill } from 'react-icons/pi';
import {
  FaApple,
  FaEye,
  FaGithub,
  FaGooglePlay,
  FaLink,
  FaMicrosoft,
  FaYoutube,
} from 'react-icons/fa6';

export type SongContextAction = {
  key: string;
  href?: string;
  labelKey: string;
  icon: ReactNode;
  dividerBefore?: boolean;
};

export const getSongContextActions = (song: Song): SongContextAction[] => {
  const actions: SongContextAction[] = [
    {
      key: 'see',
      labelKey: 'See details',
      icon: <FaEye />,
    },
  ];

  const links: Array<{
    key: keyof Song;
    href?: string;
    labelKey: string;
    icon: ReactNode;
  }> = [
    { key: 'link', href: song.link, labelKey: 'Go to website', icon: <FaLink /> },
    {
      key: 'certificate',
      href: song.certificate,
      labelKey: 'View certificate',
      icon: <PiCertificateFill />,
    },
    { key: 'github', href: song.github, labelKey: 'Go to GitHub', icon: <FaGithub /> },
    { key: 'youtube', href: song.youtube, labelKey: 'Watch on YouTube', icon: <FaYoutube /> },
    {
      key: 'microsoft',
      href: song.microsoft,
      labelKey: 'Open Microsoft Store',
      icon: <FaMicrosoft />,
    },
    {
      key: 'playstore',
      href: song.playstore,
      labelKey: 'Open Google Play',
      icon: <FaGooglePlay />,
    },
    { key: 'appstore', href: song.appstore, labelKey: 'Open App Store', icon: <FaApple /> },
  ];

  const availableLinks = links.filter((link) => Boolean(link.href));

  availableLinks.forEach((link, index) => {
    actions.push({
      key: String(link.key),
      href: link.href,
      labelKey: link.labelKey,
      icon: link.icon,
      dividerBefore: index === 0,
    });
  });

  return actions;
};
