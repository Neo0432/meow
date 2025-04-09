import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup/src';
import {scheme} from '@features/auth/signup-form/model/scheme';
import {ISignUpForm} from '@features/auth/signup-form/model/types';

export const useSignUpForm = () => {
  return useForm<ISignUpForm>({
    resolver: yupResolver(scheme),
    mode: 'onChange',
    criteriaMode: 'all',
    defaultValues: {
      email: '',
      password: '',
      passwordConfirm: '',
    },
  });
};
