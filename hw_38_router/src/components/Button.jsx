import { Button as AntButton } from 'antd';

export const Button = ({ children, ...props }) => {
  return <AntButton {...props}>{children}</AntButton>;
};
