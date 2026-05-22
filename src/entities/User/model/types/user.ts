export interface User {
  userName: string;
  avatar?: string;
  id: string;
  email: string;
  activationLink?: string;
  isActivated: boolean;
}
export interface UserSchema {
  userData?: User;
  token?: string;
  _init?: boolean;
}
