import type { User } from '@entities/User/model/types/user';

export interface IResponse {
  message: string;
}

export interface IAuthData {
  email: string;
  password: string;
}

export interface IRegisterData {
  userName: string;
  email: string;
  password: string;
}

export interface ILoginResponse {
  refreshToken?: string;
  accessToken?: string;
  user: User;
}

export interface IRegisterResponse {
  refreshToken?: string;
  accessToken?: string;
  user: User;
}
