import { TagType } from '../interfaces/types';

const Tag = ({ tag }: { tag: TagType }) => {
  //create a tag that looks like a pill
  return (
    <div
      className='text-white px-2 py-1 rounded-full text-xs font-semibold'
      style={{ backgroundColor: tag.color }}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        {tag.icon}
        {tag.text}
      </div>
    </div>
  );
};

export default Tag;
