import { List as AntdList } from 'antd';
import type { ListItemMetaProps } from 'antd/es/list';
interface ListItemProps extends ListItemMetaProps {
  className?: string;
}

export function ListItem(props: ListItemProps) {
  const { className, children, ...rest } = props;

  return (
    <AntdList.Item.Meta className={className} {...rest}>
      {children}
    </AntdList.Item.Meta>
  );
}
