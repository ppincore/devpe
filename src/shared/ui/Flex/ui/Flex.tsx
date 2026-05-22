import { Flex as AntdFlex } from 'antd';
import type { FlexProps as AntdFlexProps } from 'antd';
import type { ReactNode } from 'react';

interface FlexProps extends AntdFlexProps {
  className?: string;
  children: ReactNode;
}

export function Flex(props: FlexProps) {
  const { className, children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdFlex className={className} {...rest}>
      {children}
    </AntdFlex>
  );
}
