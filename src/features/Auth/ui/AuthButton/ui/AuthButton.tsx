import { Button } from '@shared/ui/Button';
import { memo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLogoutMutation } from '@features/Auth/model/api/authApi';
import { useToastMessages } from '@shared/lib/hooks/useToastMessages';
import { useSelector } from 'react-redux';
import { isAuthenticated } from '@entities/User/model/selectors/selectors';
import { userActions } from '@entities/User/model/slice/userSlice';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { AuthModal } from '../../AuthModal';

export const AuthButton = memo(function AuthButton() {
  const isAuth = useSelector(isAuthenticated);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [logoutUser, { isError, isSuccess }] = useLogoutMutation();
  const dispatch = useAppDispatch();
  const { t } = useTranslation();

  useToastMessages({
    isSuccess,
    isError,
  });

  const logOut = async () => {
    await logoutUser();
    dispatch(userActions.logOutUser());
  };

  const textButton = isAuth ? 'Log Out' : 'Sign in';

  const onClick = () => {
    if (!isAuth) {
      setIsModalOpen(true);
    } else {
      logOut();
    }
  };

  return (
    <>
      <Button onClick={onClick} color="primary">
        {t(textButton)}
      </Button>
      <AuthModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      />
    </>
  );
});
