import { Button as AntdButton } from 'antd';
import type { ButtonProps as AntdButtonProps } from 'antd';
interface ButtonProps extends AntdButtonProps {
  className?: string;
}

export function Button(props: ButtonProps) {
  const { children, className, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdButton className={className} {...rest} variant="solid">
      {children}
    </AntdButton>
  );
}
