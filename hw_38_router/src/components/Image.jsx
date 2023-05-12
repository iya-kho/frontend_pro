import { Image as AntImage } from 'antd';

export const Image = ({ children, ...props }) => {
  return <AntImage {...props}>{children}</AntImage>;
};
