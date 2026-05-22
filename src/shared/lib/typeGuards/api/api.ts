import type { SerializedError } from '@reduxjs/toolkit';
import type { FetchBaseQueryErrorCustom } from '@shared/types/api';

export function isFetchError(
  result?:
    | {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        data: any;
      }
    | {
        error: FetchBaseQueryErrorCustom | SerializedError;
      },
): result is {
  error: FetchBaseQueryErrorCustom;
} {
  if (!result) {
    return false;
  }
  if ('error' in result) {
    const authError = result.error;
    if ('data' in authError) {
      return true;
    }
  }
  return false;
}
