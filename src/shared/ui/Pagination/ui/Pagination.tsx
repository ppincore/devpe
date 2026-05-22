import { Pagination as AntdPagination } from 'antd';
import type { PaginationProps as AntdPaginationProps } from 'antd';
import { memo } from 'react';

interface PaginationProps extends AntdPaginationProps {
  className?: string;
  total: number;
}
export const Pagination = memo(function Pagination(props: PaginationProps) {
  const { className, total, ...rest } = props;
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <AntdPagination className={className} total={total} {...rest} />;
});
