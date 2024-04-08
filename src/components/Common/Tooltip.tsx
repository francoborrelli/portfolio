import { TooltipProps, Tooltip as TooltipAntd } from 'antd';

export const Tooltip = (props: TooltipProps) => {
  return <TooltipAntd {...props} color='#242424' arrow={false} placement='top' />;
};
