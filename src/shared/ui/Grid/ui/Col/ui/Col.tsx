import { Col as AntdCol } from 'antd';
import type { ColProps as AntdColProps } from 'antd';

interface RowProps extends AntdColProps {
  className?: string;
}

export function Col(props: RowProps) {
  const { className, ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AntdCol className={className} {...rest} />;
}
