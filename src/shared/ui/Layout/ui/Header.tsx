import { Header as AntdHeader } from 'antd/es/layout/layout';
import type { LayoutProps as AntdHeaderProps } from 'antd';
import type { ReactNode } from 'react';

interface HeaderProps extends AntdHeaderProps {
  className?: string;
  children?: ReactNode;
}

export function Header(props: HeaderProps) {
  const { className, children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdHeader className={className} {...rest}>
      {children}
    </AntdHeader>
  );
}
