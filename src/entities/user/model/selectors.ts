import {createSelector} from 'reselect';
import {RootState} from '@shared/store';
import {IUserState} from './types';

export const selectUser = createSelector(
  [(state: RootState) => state.user],
  (userState: IUserState) => ({...userState}),
);

export const selectUserHeader = createSelector(
  [selectUser],
  (userState: IUserState) => ({
    id: userState.user.id,
    name: userState.user.name,
    imageUrl: userState.user.imageUrl,
  }),
);
