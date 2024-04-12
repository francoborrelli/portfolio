import { Avatar } from 'antd';

// Utils
import { getAlbumPath } from '../../utils/getPublicPath';

// Constants
import { tags } from '../tags';

// Interfaces
import type { Song } from '../../interfaces/types';

export const SKILLS_SONGS = Object.values(tags)
  .map((tag) => {
    const key = tag.text.toUpperCase().replace(' ', '_');
    return {
      skills: [],
      link: tag.link,
      name: tag.text,
      color: tag.color,
      imageUrl: tag.image,
      length: `${key}_YEARS`,
      explanation: `${key}_HELP`,
      description: `${key}_EXPERIENCE`,

      avatar: (
        <Avatar
          shape='square'
          size={'large'}
          className='avatar-tag'
          style={{ backgroundColor: tag.color, fontSize: '1.5rem', marginRight: 15 }}
          icon={tag.icon}
        ></Avatar>
      ),
    } as Song;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export const Skills = {
  name: 'SKILLS',
  color: '#4b4b4b',
  songs: SKILLS_SONGS,
  description: 'Description 5',
  imageUrl: getAlbumPath('artic-monkeys.jpeg'),
};
