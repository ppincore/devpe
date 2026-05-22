import { memo, type FC } from 'react';
import { Modal as AntdModal } from 'antd';
import type { ModalProps } from 'antd';

export const Modal: FC<ModalProps> = memo(function Modal(props) {
  const { ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AntdModal {...rest} />;
});
