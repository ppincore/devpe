import { baseApi } from '@shared/api/baseApi';
import type {
  ILoginResponse,
  IAuthData,
  IRegisterResponse,
  IRegisterData,
} from '../types/types';

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation<ILoginResponse, IAuthData>({
      query: (body) => ({
        url: '/login',
        method: 'POST',
        body,
      }),
    }),
    signUp: builder.mutation<IRegisterResponse, IRegisterData>({
      query: (body) => ({
        url: '/signup',
        method: 'POST',
        body,
      }),
    }),
    // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
    logout: builder.mutation<Response, void>({
      query: () => ({
        url: '/logout',
        method: 'POST',
      }),
    }),
  }),
});

const useLoginMutation = authApi.useLoginMutation;
const useSignUpMutation = authApi.useSignUpMutation;
const useLogoutMutation = authApi.useLogoutMutation;

export { useLoginMutation, useSignUpMutation, useLogoutMutation };
