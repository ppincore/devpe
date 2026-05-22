import { Empty as AntdEmpty } from 'antd';
import type { EmptyProps as AntdEmptyProps } from 'antd';
import type { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';

interface EmptyProps extends AntdEmptyProps {
  className?: string;
}

export function Empty(props: EmptyProps) {
  const { className, description: descriptionProps, ...rest } = props;

  const { t } = useTranslation();

  let description: string | ReactNode =
    'Nothing for now, but it’ll be here soon :)';
  if (descriptionProps) {
    description = descriptionProps;
  }

  return (
    <AntdEmpty
      className={className}
      // eslint-disable-next-line @typescript-eslint/no-base-to-string, @typescript-eslint/restrict-template-expressions
      description={t(`${description}`)}
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
    />
  );
}
