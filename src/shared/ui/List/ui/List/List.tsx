import { List as AntdList } from 'antd';
import type { ListProps as AntdListProps } from 'antd';
interface ListProps extends AntdListProps<string> {
  className?: string;
}

export function List(props: ListProps) {
  const { className, children, ...rest } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdList className={className} {...rest}>
      {children}
    </AntdList>
  );
}
