import { Col, Row, Space } from 'antd';

// I18n
import { useTranslation } from 'react-i18next';

// Interfaces
import { RefObject, useEffect, useState, type CSSProperties, type FC } from 'react';
import type { Playlist } from '../../interfaces/types';
import { Link } from 'react-router-dom';

// Utils
import tinycolor from 'tinycolor2';
import { useAppSelector } from '../../store/store';
import { PlayCircleButton } from './playCircle';

interface PlaylistHeaderProps {
  playlist: Playlist;
  container: RefObject<HTMLDivElement | null>;
}

export const PlaylistHeader: FC<PlaylistHeaderProps> = ({ playlist, container }) => {
  const { t } = useTranslation(['playlist']);
  const { t: cvt } = useTranslation(['cv']);

  const [headerWidth, setHeaderWidth] = useState(0);
  const [activeHeader, setActiveHeader] = useState(false);
  const language = useAppSelector((state) => state.language.language);
  const collapsed = useAppSelector((state) => state.library.collapsed);
  const detailsOpen = useAppSelector((state) => state.library.detailsOpen);

  useEffect(() => {
    const ref = container.current;
    if (!ref) return;

    let scrollRaf = 0;
    let resizeRaf = 0;

    const handleScroll = () => {
      if (scrollRaf) return;
      scrollRaf = requestAnimationFrame(() => {
        scrollRaf = 0;
        const next = ref.scrollTop > 260;
        setActiveHeader((prev) => (prev === next ? prev : next));
      });
    };

    const handleResize = () => {
      if (resizeRaf) return;
      resizeRaf = requestAnimationFrame(() => {
        resizeRaf = 0;
        setHeaderWidth(ref.clientWidth);
      });
    };

    setHeaderWidth(ref.clientWidth);
    ref.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(scrollRaf);
      cancelAnimationFrame(resizeRaf);
      ref.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [container, detailsOpen, collapsed]);

  return (
    <div
      className='playlist-page-header'
      style={{ '--playlist-color': playlist.color } as CSSProperties}
    >
      <div
        className={`nav-header ${activeHeader ? 'active' : ''}`}
        style={
          {
            '--playlist-header-width': `${headerWidth}px`,
            '--playlist-header-opacity': headerWidth ? 1 : 0,
            '--playlist-header-bg': !activeHeader
              ? 'transparent'
              : tinycolor(playlist.color).darken(10).toRgbString(),
          } as CSSProperties
        }
      >
        <Space>
          <PlayCircleButton size={20} />
          <h1 className='nav-header-playlist-title'>{cvt(playlist.name)}</h1>
        </Space>
      </div>

      <div className='playlist-page-header__body'>
        <Row gutter={[24, 24]} align={'middle'}>
          <Col xs={24} sm={6} lg={5}>
            <img src={playlist.getImage(language)} alt='' className='playlist-img' />
          </Col>
          <Col xs={24} sm={18} lg={19}>
            <Row justify='space-between'>
              <Col span={24}>
                <p className='text-white'>{t('Public playlist')}</p>
                <h1 className='playlist-title'>{cvt(playlist.name)}</h1>
              </Col>
              <Col span={24}>
                <Space className='owner'>
                  <Link to='/profile'>
                    <img
                      className='playlist-avatar'
                      id='user-avatar'
                      alt='User Avatar'
                      src={`${import.meta.env.BASE_URL}images/profile.jpeg`}
                    />
                  </Link>
                  <h3 className='text-sm font-semibold text-white'>
                    <Link className='link-text' to='/profile'>
                      Franco Borrelli
                    </Link>{' '}
                    •{' '}
                    <span className='songs-number'>
                      {playlist.songs.length} {t('songs')}
                    </span>
                  </h3>
                </Space>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};
