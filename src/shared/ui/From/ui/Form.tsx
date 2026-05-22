import { Form as AntForm } from 'antd';
import type { FormProps as AntFormProps } from 'antd';
import React, { memo } from 'react';

interface FormProps extends AntFormProps {
  className?: string;
  children?: React.ReactNode;
}

export const Form = memo(function Form(props: FormProps) {
  const { className, children, ...rest } = props;

  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntForm className={className} {...rest}>
      {children}
    </AntForm>
  );
});
