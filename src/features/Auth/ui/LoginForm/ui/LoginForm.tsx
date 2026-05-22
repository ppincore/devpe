import { userActions } from '@entities/User/model/slice/userSlice';
import { useLoginMutation } from '@features/Auth/model/api/authApi';
import type { IAuthData } from '@features/Auth/model/types/types';
import { LockOutlined, MailOutlined } from '@shared/assets';
import { useAppDispatch } from '@shared/lib/hooks/useAppDispatch';
import { useToastMessages } from '@shared/lib/hooks/useToastMessages';
import { isFetchError } from '@shared/lib/typeGuards/api/api';
import { rules } from '@shared/lib/utils/rules';
import { Button } from '@shared/ui/Button';
import { Form, FormItem } from '@shared/ui/From';
import { Input } from '@shared/ui/Input';
import { Typography } from '@shared/ui/Typography';
import { useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

interface LoginFormProps {
  onCloseModal: () => void;
}

export function LoginForm(props: LoginFormProps) {
  const { onCloseModal } = props;

  const dispatch = useAppDispatch();
  const [loginUser, { isLoading, isError, isSuccess }] = useLoginMutation();
  const [loginError, setLoginError] = useState<string>('');
  const { t } = useTranslation();

  useToastMessages({
    isSuccess,
    isError,
  });

  const onAuth = useCallback(
    async (values: IAuthData) => {
      const result = await loginUser(values);
      if (isFetchError(result)) {
        setLoginError(result.error.data?.message ?? 'Server error');
        return;
      }
      if ('data' in result && result.data) {
        const { accessToken: token, user: userData } = result.data;
        dispatch(userActions.login({ token, userData }));
        onCloseModal();
      }
    },
    [dispatch, loginUser, onCloseModal],
  );

  const onFinish = async (values: IAuthData) => {
    await onAuth(values);
  };

  const clearErrors = () => {
    setLoginError('');
  };

  useEffect(() => {
    clearErrors();
  }, []);

  return (
    // eslint-disable-next-line @typescript-eslint/no-misused-promises
    <Form onFinish={onFinish}>
      <FormItem
        name="email"
        rules={[
          rules.required(t('Email required')),
          rules.validEmail(t('Email incorrect')),
        ]}
      >
        <Input placeholder="Email" prefix={<MailOutlined />} />
      </FormItem>
      <FormItem
        name="password"
        rules={[
          rules.required(t('Password required')),
          rules.validPassword(t('Password incorrect')),
        ]}
      >
        <Input.Password placeholder="Password" prefix={<LockOutlined />} />
      </FormItem>
      {loginError && (
        <Typography.Text type="danger">{loginError}</Typography.Text>
      )}
      <FormItem>
        <Button htmlType="submit" color="primary" loading={isLoading}>
          {t('Sign in')}
        </Button>
      </FormItem>
    </Form>
  );
}
