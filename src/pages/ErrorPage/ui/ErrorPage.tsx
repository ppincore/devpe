import { Button } from '@shared/ui/Button';
import { Flex } from '@shared/ui/Flex';
import { Typography } from '@shared/ui/Typography';
import { useTranslation } from 'react-i18next';
// import { BrokenCable } from '@shared/assets';
import cls from './ErrorPage.module.scss';

export function ErrorPage() {
  const { t } = useTranslation();

  return (
    <Flex
      className={cls.errorPage}
      vertical
      justify="center"
      align="center"
      gap={8}
    >
      <Typography.Title className={cls.title}>
        {t('Sorry.. there was an error')}{' '}
      </Typography.Title>
      {/* <BrokenCable className={cls.errorImage} /> */}
      <Button
        color="primary"
        size="large"
        onClick={() => {
          window.location.reload();
        }}
      >
        {t('Reload Page')}
      </Button>
    </Flex>
  );
}
