import { Card as AntCard } from 'antd';

export const Card = ({ children, ...props }) => {
  return <AntCard {...props}>{children}</AntCard>;
};
