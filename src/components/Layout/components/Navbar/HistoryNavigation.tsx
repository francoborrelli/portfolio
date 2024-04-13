import ForwardBackwardsButton from '../../../../pages/Home/ForwardBackwardsButton';

const HistoryNavigation = () => {
  return (
    <div className='flex flex-row items-center gap-1 h-full'>
      <ForwardBackwardsButton flip />
      <ForwardBackwardsButton flip={false} />
    </div>
  );
};

export default HistoryNavigation;
