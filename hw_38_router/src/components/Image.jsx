import { Image as AntImage } from 'antd';

const Image = ({ children, ...props }) => {
  return <AntImage {...props}>{children}</AntImage>;
};

export default Image;
