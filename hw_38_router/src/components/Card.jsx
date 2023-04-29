import { Card as AntCard } from 'antd';

const Card = ({ children, ...props }) => {
  return <AntCard {...props}>{children}</AntCard>;
};

export default Card;
