import type { FormItemProps } from 'antd';
import { Form } from 'antd';

const { Item } = Form;

export function FormItem(props: FormItemProps) {
  const { ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Item {...rest} />;
}
