import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

export function Loader() {
  return (
    <Spin indicator={<LoadingOutlined style={{ fontSize: 128 }} spin />} />
  );
}
