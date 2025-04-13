import {IUserState} from './types';
import {createSlice} from '@reduxjs/toolkit';
import {userSignIn, userSignUp} from './actions';

const initialState: IUserState = {
  user: {
    id: '',
    email: '',
    name: '',
    imageUrl: '',
    phoneNumber: '',
  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: state => {
      state.user = initialState.user;
    },
  },
  extraReducers: builder => {
    builder.addCase(userSignIn.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(userSignUp.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

export const {logout} = userSlice.actions;
export default userSlice.reducer;
