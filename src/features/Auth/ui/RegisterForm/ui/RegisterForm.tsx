import type { IRegisterData } from '@features/Auth/model/types/types';
import { Button } from '@shared/ui/Button';
import { Form, FormItem } from '@shared/ui/From';
import { Input } from '@shared/ui/Input';
import { useCallback, useState } from 'react';
import { useSignUpMutation } from '@features/Auth/model/api/authApi';
import { isFetchError } from '@shared/lib/typeGuards/api/api';
import { Typography } from '@shared/ui/Typography';
import { rules } from '@shared/lib/utils/rules';
import { useTranslation } from 'react-i18next';
import { LockOutlined, MailOutlined, UserOutlined } from '@shared/assets';
import { useToastMessages } from '@shared/lib/hooks/useToastMessages';

interface RegisterFormProps {
  onSuccess: () => void;
}

export function RegisterForm(props: RegisterFormProps) {
  const { onSuccess } = props;

  const [signUpError, setSignUpError] = useState<string>('');
  const [signUp, { isLoading, isError, isSuccess }] = useSignUpMutation();
  const { t } = useTranslation();

  useToastMessages({
    isSuccess,
    isError,
  });

  const onSignUp = useCallback(
    async (value: IRegisterData) => {
      const result = await signUp(value);
      if (isFetchError(result)) {
        setSignUpError(result.error.data?.message ?? 'Server error');
        return;
      }
      if ('data' in result && result.data) {
        console.debug('Success signup');
      }
    },
    [signUp],
  );

  const onFinish = async (values: IRegisterData) => {
    await onSignUp(values);
    setTimeout(() => {
      onSuccess();
    }, 500);
  };

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
        name="userName"
        rules={[rules.required(t('Username is required'))]}
      >
        <Input placeholder="Username" prefix={<UserOutlined />} />
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
      {signUpError && (
        <Typography.Text type="danger">{signUpError}</Typography.Text>
      )}
      <FormItem>
        <Button htmlType="submit" color="primary" loading={isLoading}>
          {t('Sign up')}
        </Button>
      </FormItem>
    </Form>
  );
}
