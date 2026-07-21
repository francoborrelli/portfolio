import { Avatar, Image, Space } from 'antd';
import { NowPlayingCard } from './card';
import { Tooltip } from '../../../../Tooltip';
import { useAppDispatch, useAppSelector } from '../../../../../store/store';

import { NowPlayingLayout } from '../layout';
import { useTranslation } from 'react-i18next';

// Interfaces
import { memo, useMemo, type FC } from 'react';
import type { Song } from '../../../../../interfaces/types';

import { PiCertificateFill } from 'react-icons/pi';
import { FaApple, FaGithub, FaGooglePlay, FaLink, FaMicrosoft, FaYoutube } from 'react-icons/fa6';
import { libraryActions } from '../../../../../store/slices/library';
import { SKILLS_SONGS } from '../../../../../constants/cv/skills';

import parse from 'html-react-parser';
import shuffle from 'lodash/shuffle';
import { RelatedSong } from './related';
import { EducationTypesEnum } from '../../../../../constants/cv/education';

const EDUCATION_TYPES = new Set<string>(Object.values(EducationTypesEnum));

const SKILLS_BY_NAME = new Map(SKILLS_SONGS.map((skill) => [skill.name, skill]));

const isEducationSong = (song: Song) =>
  song.types?.some((type) => EDUCATION_TYPES.has(type)) ?? false;

const Profile: FC<{ song: Song }> = memo(({ song }) => {
  const [t] = useTranslation(['cv']);

  const hasButtons = song.link || song.github || song.youtube || song.certificate;

  const explanationBullets = useMemo(() => {
    if (!song.explanation) return null;
    return t(song.explanation)
      .split('\n')
      .map((bullet, index) => (
        <div className='playing-now-card-body' key={index}>
          {parse(bullet)}
        </div>
      ));
  }, [song.explanation, t]);

  return (
    <NowPlayingCard title={t(song.name)!} subtitle={t(song.artist || '')} image={song.imageUrl}>
      {explanationBullets}
      {hasButtons ? (
        <Space style={{ marginTop: 10 }}>
          {song.link ? (
            <Tooltip title={t('WEB_SITE')} placement='top'>
              <a target={'_blank'} href={song.link} className='link-social-button' rel='noreferrer'>
                <FaLink />
              </a>
            </Tooltip>
          ) : null}

          {song.certificate ? (
            <Tooltip title={t('Certificate')} placement='top'>
              <a
                target={'_blank'}
                href={song.certificate}
                className='link-social-button'
                rel='noreferrer'
              >
                <PiCertificateFill />
              </a>
            </Tooltip>
          ) : null}

          {song.youtube ? (
            <Tooltip title={t('Youtube')} placement='top'>
              <a
                target={'_blank'}
                href={song.youtube}
                className='link-social-button'
                rel='noreferrer'
              >
                <FaYoutube />
              </a>
            </Tooltip>
          ) : null}

          {song.github ? (
            <Tooltip title={t('Github')} placement='top'>
              <a
                target={'_blank'}
                href={song.github}
                className='link-social-button'
                rel='noreferrer'
              >
                <FaGithub />
              </a>
            </Tooltip>
          ) : null}

          {song.microsoft ? (
            <Tooltip title={t('Microsoft Store')} placement='top'>
              <a
                target={'_blank'}
                href={song.microsoft}
                className='link-social-button'
                rel='noreferrer'
              >
                <FaMicrosoft />
              </a>
            </Tooltip>
          ) : null}

          {song.playstore ? (
            <Tooltip title={t('Google Play Store')} placement='top'>
              <a
                target={'_blank'}
                href={song.playstore}
                className='link-social-button'
                rel='noreferrer'
              >
                <FaGooglePlay />
              </a>
            </Tooltip>
          ) : null}

          {song.appstore ? (
            <Tooltip title={t('Apple App Store')} placement='top'>
              <a
                target={'_blank'}
                href={song.appstore}
                className='link-social-button'
                rel='noreferrer'
              >
                <FaApple />
              </a>
            </Tooltip>
          ) : null}
        </Space>
      ) : null}
    </NowPlayingCard>
  );
});

const Experience: FC<{ song: Song }> = memo(({ song }) => {
  const [t] = useTranslation(['playingBar']);
  const [tcv] = useTranslation(['cv']);

  const bullets = useMemo(() => {
    if (!song.experience) return null;
    return tcv(song.experience)
      .split('\n')
      .map((bullet, index) => (
        <div className='playing-now-card-body' key={index}>
          {bullet}
        </div>
      ));
  }, [song.experience, tcv]);

  if (!bullets) return null;

  return <NowPlayingCard title={t('Experience')}>{bullets}</NowPlayingCard>;
});

const Description: FC<{ song: Song }> = memo(({ song }) => {
  const [t] = useTranslation(['playingBar']);
  const [tcv] = useTranslation(['cv']);

  const bullets = useMemo(() => {
    if (!song.description) return null;
    return tcv(song.description)
      .split('\n')
      .map((bullet, index) => (
        <div className='playing-now-card-body' key={index}>
          {parse(bullet)}
        </div>
      ));
  }, [song.description, tcv]);

  if (!bullets) return null;

  return <NowPlayingCard title={t('Description')}>{bullets}</NowPlayingCard>;
});

const Skills: FC<{ song: Song }> = memo(({ song }) => {
  const dispatch = useAppDispatch();
  const [t] = useTranslation(['playingBar']);

  if (!song.skills || !song.skills.length) return null;

  return (
    <NowPlayingCard title={t('Skills')}>
      {song.skills.map((tag) => (
        <Tooltip title={tag.text} placement='top' key={tag.text}>
          <button
            onClick={() => {
              dispatch(libraryActions.setSongPlaying(SKILLS_BY_NAME.get(tag.text)));
            }}
          >
            <Avatar style={{ backgroundColor: '#5c5c5c26' }} icon={tag.icon} />
          </button>
        </Tooltip>
      ))}
    </NowPlayingCard>
  );
});

const Images: FC<{ song: Song }> = memo(({ song }) => {
  const [t] = useTranslation(['playingBar']);
  if (!song.images || !song.images.length) return null;

  return (
    <NowPlayingCard title={t('Images')}>
      <Image.PreviewGroup items={song.images}>
        <Image width={'100%'} src={song.images[0]} />
      </Image.PreviewGroup>
    </NowPlayingCard>
  );
});

const RelatedSongs: FC<{ song: Song }> = memo(({ song }) => {
  const [t] = useTranslation(['playingBar']);

  const relatedSongs = useMemo(() => {
    if (!song.relatedSongs?.length) return null;
    return isEducationSong(song) ? song.relatedSongs : shuffle(song.relatedSongs).slice(0, 3);
  }, [song]);

  if (!relatedSongs) return null;

  const isCourse = song.types?.includes(EducationTypesEnum.COURSE) ?? false;

  return (
    <NowPlayingCard title={t(isCourse ? 'Related courses' : 'Related projects')}>
      {relatedSongs.map((relatedSong) => (
        <RelatedSong key={relatedSong.name} song={relatedSong} />
      ))}
    </NowPlayingCard>
  );
});

export const Details = () => {
  const song = useAppSelector((state) => state.library.songPlaying);

  if (!song) return null;

  return (
    <NowPlayingLayout>
      <Profile song={song} />
      <Skills song={song} />
      <Description song={song} />
      <Experience song={song} />
      <Images song={song} />
      <RelatedSongs song={song} />
    </NowPlayingLayout>
  );
};
