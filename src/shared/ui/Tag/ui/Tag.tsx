import { Tag as AntdTag } from 'antd';
import type { TagProps as AntdTagProps } from 'antd';
import type { ReactNode } from 'react';

interface TagProps extends AntdTagProps {
  className?: string;
  children: ReactNode;
}

export function Tag(props: TagProps) {
  const { className, children, variant = 'solid', ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdTag className={className} variant={variant} {...rest}>
      {children}
    </AntdTag>
  );
}
