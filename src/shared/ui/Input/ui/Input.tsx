import { Input as AntdInput } from 'antd';
import type { InputProps as AntdInputProps } from 'antd/es/input';
import React from 'react';

interface CustomInputProps extends React.FC<AntdInputProps> {
  Password: typeof AntdInput.Password;
  Search: typeof AntdInput.Search;
  TextArea: typeof AntdInput.TextArea;
  Group: typeof AntdInput.Group;
  OTP: typeof AntdInput.OTP;
}

export const Input = AntdInput as CustomInputProps;
