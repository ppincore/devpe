import { Typography as AntdTypography } from 'antd';
import type { TypographyProps as AntdTypographyProps } from 'antd/es/typography';
import React from 'react';

interface TypographyProps extends React.FC<AntdTypographyProps> {
  Title: typeof AntdTypography.Title;
  Paragraph: typeof AntdTypography.Paragraph;
  Text: typeof AntdTypography.Text;
  Link: typeof AntdTypography.Link;
}

export const Typography = AntdTypography as TypographyProps;
