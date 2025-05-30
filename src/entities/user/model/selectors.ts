import {createSelector} from 'reselect';
import {RootState} from '@shared/store';
import {IUserState} from './types';

export const selectUserState = createSelector(
  [(state: RootState) => state.user],
  (userState: IUserState) => ({...userState}),
);

export const selectUser = createSelector(
  [selectUserState],
  (userState: IUserState) => userState.user,
);

export const selectUserHeader = createSelector(
  [selectUserState],
  (userState: IUserState) => ({
    id: userState.user.id,
    name: userState.user.name,
    imageUrl: userState.user.imageUrl,
  }),
);
