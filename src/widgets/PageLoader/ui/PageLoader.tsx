import { Flex } from '@shared/ui/Flex';
import { Loader } from '@shared/ui/Loader';
import cls from './PageLoader.module.scss';

export function PageLoader() {
  return (
    <Flex justify="center" align="center" className={cls.pageLoader}>
      <Loader />
    </Flex>
  );
}
