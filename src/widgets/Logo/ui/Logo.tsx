import { TentLogo } from '@shared/assets';
import { getRouteMain } from '@shared/const/router';
import { Avatar } from '@shared/ui/Avatar';
import { useNavigate } from 'react-router-dom';
import cls from './Logo.module.scss';

export function Logo() {
  const navigate = useNavigate();

  const onClick = () => {
    navigate(getRouteMain());
  };

  return (
    <Avatar
      onClick={onClick}
      shape="square"
      size={38}
      icon={<TentLogo />}
      className={cls.logo}
    ></Avatar>
  );
}
