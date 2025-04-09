import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUserAuthDto} from '@entities/user/model/types';
import {noneAuthClient} from '@shared/api/clients';
import {signIn} from '@shared/hooks/use-session';

export const userSignIn = createAsyncThunk(
  'user/signIn',
  async (userData: IUserAuthDto, {rejectWithValue}) => {
    try {
      //TODO: дописать пути когда появился бэк((
      /*const response = await noneAuthClient.post('', userData);
      return response.data;*/
      await signIn('HelloUserToken');
      return userData;
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
      /*const response = await noneAuthClient.post('', userData);
      return response.data;*/
      await signIn('HelloUserToken');
      return userData;
    } catch (e) {
      console.error(`[ERROR] Cant sign in user: ${e}`);
      return rejectWithValue(e);
    }
  },
);
