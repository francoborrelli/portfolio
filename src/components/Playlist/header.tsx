import { Col, Row, Space } from 'antd';
import Header from '../Home/Header';

// I18n
import { useTranslation } from 'react-i18next';

// Interfaces
import type { FC } from 'react';
import type { Playlist } from '../../interfaces/types';

interface PlaylistHeaderProps {
  playlist: Playlist;
}

export const PlaylistHeader: FC<PlaylistHeaderProps> = ({ playlist }) => {
  const { t } = useTranslation(['playlist', 'cv']);

  return (
    <div
      style={{
        background: `linear-gradient(180deg, transparent 0px, ${playlist.color} 80%), url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=")`,
      }}
    >
      <div style={{ padding: 20 }}>
        <Header opacity={1} />
      </div>

      <div style={{ padding: 40, paddingTop: 20 }}>
        <Row gutter={[24, 24]} align={'middle'}>
          <Col xs={24} sm={6} lg={5}>
            <img src={playlist.imageUrl} alt='' className='playlist-img' />
          </Col>
          <Col xs={24} sm={18} lg={19}>
            <Row justify='space-between'>
              <Col span={24}>
                <p className='text-white'>{t('Public playlist')}</p>
                <h1 className='playlist-title'>{t(playlist.name)}</h1>
              </Col>
              <Col span={24}>
                <Space className='owner'>
                  <img
                    className='avatar'
                    id='user-avatar'
                    alt='User Avatar'
                    src={`${process.env.PUBLIC_URL}/images/profile.jpeg`}
                  />
                  <h3 className='text-sm font-semibold text-white'>
                    Franco Borrelli •{' '}
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
