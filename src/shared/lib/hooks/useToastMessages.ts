// src/shared/hooks/useToastMessages.ts
import { message } from 'antd';
import { useEffect } from 'react';

interface UseToastMessagesProps {
  isSuccess: boolean;
  isError: boolean;
  successMessage?: string;
  errorMessage?: string;
}

export const useToastMessages = ({
  isSuccess,
  isError,
  successMessage = 'Успешно!',
  errorMessage = 'Ошибка!',
}: UseToastMessagesProps) => {
  useEffect(() => {
    if (isSuccess) {
      message.success(successMessage);
    }
    if (isError) {
      message.error(errorMessage);
    }
  }, [isSuccess, isError, successMessage, errorMessage]);
};
