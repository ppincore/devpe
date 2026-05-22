import { baseApi } from '@shared/api/baseApi';
import type { User } from '@entities/User/model/types/user';

export const profileApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getProfileData: builder.query<User, string>({
      query: (userId) => ({
        url: `/profile/${userId}`,
        method: 'GET',
      }),
    }),
    updateUser: builder.mutation<User, { userId: string; data: Partial<User> }>(
      {
        query: ({ userId, data }) => ({
          url: `/profile/${userId}`,
          method: 'POST',
          body: data,
        }),
      },
    ),
    uploadAvatar: builder.mutation<User, { userId: string; file: File }>({
      query: ({ userId, file }) => {
        const formData = new FormData();
        console.debug(formData);
        formData.append('avatar', file);
        return {
          url: `/profile/${userId}/avatar`,
          method: 'POST',
          body: formData,
        };
      },
    }),
  }),
});

const useGetProfileDataQuery = profileApi.useGetProfileDataQuery;
const useUpdateUserMutation = profileApi.useUpdateUserMutation;
const useUploadAvatarMutation = profileApi.useUploadAvatarMutation;

export {
  useGetProfileDataQuery,
  useUpdateUserMutation,
  useUploadAvatarMutation,
};
