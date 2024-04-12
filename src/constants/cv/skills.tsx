import { Avatar } from 'antd';

// Utils
import { getAlbumPath } from '../../utils/getPublicPath';

// Constants
import { tags } from '../tags';

// Interfaces
import type { Song } from '../../interfaces/types';

const songs = Object.values(tags)
  .map(
    (tag) =>
      ({
        skills: [],
        name: tag.text,
        color: tag.color,
        length: tag.years,
        description: tag.years,
        avatar: <Avatar style={{ backgroundColor: tag.color }} icon={tag.icon}></Avatar>,
      } as Song)
  )
  .sort((a, b) => a.name.localeCompare(b.name));

export const Skills = {
  name: 'SKILLS',
  color: '#4b4b4b',
  description: 'Description 5',
  songs: songs,
  imageUrl: getAlbumPath('artic-monkeys.jpeg'),
};
