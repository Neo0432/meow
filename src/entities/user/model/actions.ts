import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUser, IUserAuthDto} from './types';
import {signIn} from '@shared/hooks/use-session';

export const userSignIn = createAsyncThunk(
  'user/signIn',
  async (userData: IUserAuthDto, {rejectWithValue}) => {
    try {
      //TODO: дописать пути когда появился бэк((
      /*const response = await noneAuthClient.post('/user/signin', userData);
      return response.data;*/
      await signIn('HelloUserToken');
      const response: IUser = {
        ...userData,
        name: '',
        imageUrl: '',
        phoneNumber: '',
        id: '',
      };
      return response;
    } catch (e) {
      console.error(`[ERROR] Cant sign in user: ${e}`);
      return rejectWithValue(e);
    }
  },
);

export const userSignUp = createAsyncThunk(
  'user/signUp',
  async (userData: IUserAuthDto, {rejectWithValue}) => {
    try {
      userData = {email: userData.email, password: userData.password};
      //TODO: дописать пути когда появился бэк((
      /*const response = await noneAuthClient.post('/user/signup', userData);
      return response.data;*/
      await signIn('HelloUserToken');
      const response: IUser = {
        ...userData,
        name: '',
        imageUrl: '',
        phoneNumber: '',
        id: '',
      };
      return response;
    } catch (e) {
      console.error(`[ERROR] Cant sign in user: ${e}`);
      return rejectWithValue(e);
    }
  },
);
