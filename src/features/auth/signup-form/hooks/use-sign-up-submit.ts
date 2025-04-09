import {useAppDispatch} from '@shared/store';
import {ISignUpForm} from '@features/auth/signup-form/model/types';
import {userSignUp} from '@entities/user/model/actions';

export const useSignUpSubmit = () => {
  const dispatch = useAppDispatch();
  return async (data: ISignUpForm) => {
    console.log(data);
    dispatch(userSignUp({...data}));
  };
};
