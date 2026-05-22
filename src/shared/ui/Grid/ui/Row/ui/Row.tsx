import { Row as AntdRow } from 'antd';
import type { RowProps as AntdRowProps } from 'antd';

interface RowProps extends AntdRowProps {
  className?: string;
}

export function Row(props: RowProps) {
  const { className, ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AntdRow className={className} {...rest} />;
}
