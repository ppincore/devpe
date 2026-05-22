import { Layout as AntdLayout } from 'antd';
import type { LayoutProps as AntdLayoutProps } from 'antd';
import type { ReactNode } from 'react';

interface LayoutProps extends AntdLayoutProps {
  className?: string;
  children: ReactNode;
}

export function Layout(props: LayoutProps) {
  const { className, children, ...rest } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdLayout className={className} {...rest}>
      {children}
    </AntdLayout>
  );
}
