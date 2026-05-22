import { memo } from 'react';
import { Header as HeaderComponent } from '@shared/ui/Layout';
import { Flex } from '@shared/ui/Flex';
import { AuthButton } from '@features/Auth';
import { useSelector } from 'react-redux';
import {
  getUserAuthData,
  isAuthenticated,
} from '@entities/User/model/selectors/selectors';
import { Avatar } from '@shared/ui/Avatar';
import { getFirstChar } from '@shared/lib/utils/getFirstChar';
import { Logo } from '@widgets/Logo';
import cls from './Header.module.scss';

export const Header = memo(function Header() {
  const isAuth = useSelector(isAuthenticated);
  const userData = useSelector(getUserAuthData);
  let firstCharName = null;

  if (userData) {
    firstCharName = getFirstChar(userData.userName);
  }

  return (
    <HeaderComponent className={cls.header}>
      <Flex
        justify="space-between"
        gap={5}
        align="center"
        style={{ height: '100%' }}
      >
        <Logo />
        <Flex
          justify="flex-end"
          gap={5}
          align="center"
          style={{ height: '100%' }}
        >
          {isAuth && (
            <Avatar style={{ backgroundColor: '#fde3cf', color: '#f56a00' }}>
              {firstCharName}
            </Avatar>
          )}
          <AuthButton />
        </Flex>
      </Flex>
    </HeaderComponent>
  );
});
