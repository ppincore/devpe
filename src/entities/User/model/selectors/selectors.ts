import { userSlice } from '../slice/userSlice';

export const { selectIsInit, getUserAuthData, isAuthenticated } =
  userSlice.selectors;
