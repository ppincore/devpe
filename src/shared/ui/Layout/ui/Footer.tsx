import { Footer as AntdFooter } from 'antd/es/layout/layout';
import type { LayoutProps as AntdFooterProps } from 'antd';
import type { ReactNode } from 'react';

interface FooterProps extends AntdFooterProps {
  className?: string;
  children?: ReactNode;
}

export function Footer(props: FooterProps) {
  const { className, children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdFooter className={className} {...rest}>
      {children}
    </AntdFooter>
  );
}
