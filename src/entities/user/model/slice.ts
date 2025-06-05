import {IUserState, IUserUpdateDto} from './types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {userSignIn, userSignUp} from './actions';
import {IEditUserForm} from '@features/user/edit-user-form/model/types';

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

    updateUserData: (state, action: PayloadAction<IEditUserForm>) => {
      state.user = {id: state.user.id, ...action.payload};
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

export const {logout, updateUserData} = userSlice.actions;
export default userSlice.reducer;
