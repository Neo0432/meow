export interface IUser {
  id: string;
  name: string;
  email: string;

  imageUrl: string;
  phoneNumber: string;
}

export interface IUserState {
  user: IUser;
}

export interface IUserAuthDto {
  email: string;
  password: string;
}

export interface IUserAuthResponseDto {
  token: string;
  user: IUser;
}
