import { Avatar as AntdAvatars } from 'antd';
import type { AvatarProps as AntdAvatarProps } from 'antd';

interface AvatarProps extends AntdAvatarProps {
  className?: string;
}

export function Avatar(props: AvatarProps) {
  const { className, ...otherProps } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AntdAvatars className={className} {...otherProps} />;
}
