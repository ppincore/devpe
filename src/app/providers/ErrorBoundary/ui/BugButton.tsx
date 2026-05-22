import { Button } from '@shared/ui/Button';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

export function BugButton() {
  const [error, setError] = useState(false);
  const { t } = useTranslation();

  const onThrow = () => {
    setError(true);
  };
  useEffect(() => {
    if (error) {
      throw new Error();
    }
  }, [error]);

  return (
    <Button onClick={onThrow} color="danger">
      {t('Catch a bug')}
    </Button>
  );
}
