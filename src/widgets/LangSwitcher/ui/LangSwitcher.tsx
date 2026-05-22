import { GlobalOutlined } from '@shared/assets';
import { Button } from 'antd';
import { useTranslation } from 'react-i18next';

export function LangSwitcher() {
  const { i18n } = useTranslation();

  const onToggle = () =>
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');

  return (
    <Button
      // eslint-disable-next-line @typescript-eslint/no-misused-promises
      onClick={onToggle}
      color="primary"
      variant="solid"
      icon={<GlobalOutlined />}
    />
  );
}
