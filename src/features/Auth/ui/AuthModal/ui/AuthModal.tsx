import { Modal } from '@shared/ui/Modal';
import { Tabs } from 'antd';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { LoginForm } from '../../LoginForm';
import { RegisterForm } from '../../RegisterForm';

interface AuthModalProp {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal(props: AuthModalProp) {
  const { isOpen, onClose } = props;
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'login' | 'signup'>('login');

  const handleSwitchToLogin = () => {
    setActiveTab('login');
  };

  return (
    <Modal open={isOpen} onCancel={onClose} footer={null} centered>
      <Tabs
        activeKey={activeTab}
        onChange={(key) => {
          setActiveTab(key as 'login' | 'signup');
        }}
      >
        <Tabs.TabPane tab={t('Sign in')} key="login">
          <LoginForm onCloseModal={onClose} />
        </Tabs.TabPane>
        <Tabs.TabPane tab={t('Sign up')} key="signup">
          <RegisterForm onSuccess={handleSwitchToLogin} />
        </Tabs.TabPane>
      </Tabs>
    </Modal>
  );
}
