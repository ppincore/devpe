import { triggerLogoutEvent } from '@entities/User/model/event/logout';
import {
  fetchBaseQuery,
  createApi,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryMeta,
} from '@reduxjs/toolkit/query/react';
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from '@shared/const/browserStorage';
import type { FetchBaseQueryErrorCustom } from '@shared/types/api';

const baseQuery = fetchBaseQuery({
  baseUrl: import.meta.env.VITE_API_URL,
  credentials: 'include',
  prepareHeaders: (headers) => {
    const token = localStorage.getItem(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
    if (token) {
      headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions,
) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error?.status === 401) {
    triggerLogoutEvent();
  }
  return result;
};

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth as BaseQueryFn<
    string | FetchArgs,
    unknown,
    FetchBaseQueryErrorCustom,
    object,
    FetchBaseQueryMeta
  >,

  endpoints: () => ({}),
});
