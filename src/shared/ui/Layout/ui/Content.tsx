import { Content as AntdContent } from 'antd/es/layout/layout';
import type { LayoutProps as AntdContentProps } from 'antd';
import type { ReactNode } from 'react';

interface ContentProps extends AntdContentProps {
  className?: string;
  children?: ReactNode;
}

export function Content(props: ContentProps) {
  const { className, children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdContent className={className} {...rest}>
      {children}
    </AntdContent>
  );
}
