import { Card as AntdCard } from 'antd';
import type { CardProps as AntdCardProps } from 'antd';
import type { ReactNode } from 'react';
import './Card.css';

interface CardProps extends AntdCardProps {
  className?: string;
  children: ReactNode;
}

export function Card(props: CardProps) {
  const { className, children, ...rest } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <AntdCard className={className} {...rest}>
      {children}
    </AntdCard>
  );
}
