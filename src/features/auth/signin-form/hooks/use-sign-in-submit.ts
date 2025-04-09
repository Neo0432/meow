import {useAppDispatch} from '@shared/store';
import {ISignInForm} from '@features/auth/signin-form/model/types';
import {userSignIn} from '@entities/user/model/actions';

export const useSignInSubmit = () => {
  const dispatch = useAppDispatch();

  return async (data: ISignInForm) => {
    console.log(data);
    dispatch(userSignIn(data));
  };
};
