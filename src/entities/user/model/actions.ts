import {createAsyncThunk} from '@reduxjs/toolkit';
import {IUserAuthDto, IUserAuthResponseDto, IUserUpdateDto} from './types';
import {signIn} from '@shared/hooks/use-session';
import {noneAuthClient} from '@shared/api/clients';
import {AxiosResponse} from 'axios';
import uuid from 'react-native-uuid';

export const userSignIn = createAsyncThunk(
  'user/signIn',
  async (userData: IUserAuthDto, {rejectWithValue}) => {
    try {
      // const response: AxiosResponse<IUserAuthResponseDto> =
      //   await noneAuthClient.post('/user/signin', userData);

      const response = {
        data: {
          token: uuid.v4(),
          user: {
            id: uuid.v4(),
            name: '',
            imageUrl: '',
            phoneNumber: '',
            email: userData.email,
          },
        },
      };

      if (response.data.token) {
        await signIn(response.data.token);
      }

      return response.data.user;
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
      // const response = await noneAuthClient.post('/user/signup', userData);

      const response = {
        data: {
          token: uuid.v4(),
          user: {
            id: uuid.v4(),
            name: '',
            imageUrl: '',
            phoneNumber: '',
            email: userData.email,
          },
        },
      };

      if (response.data.token) {
        await signIn(response.data.token);
      }

      console.log(response.data);

      return response.data.user;
    } catch (e) {
      console.error(`[ERROR] Cant sign in user: ${e}`);
      return rejectWithValue(e);
    }
  },
);
