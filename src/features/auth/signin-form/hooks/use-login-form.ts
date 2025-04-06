import {useForm} from 'react-hook-form';
import {ISignInForm} from '@features/auth/signin-form/model/types';
import {yupResolver} from '@hookform/resolvers/yup/src';
import {scheme} from '@features/auth/signin-form/model/scheme';

export function useLoginForm() {
  return useForm<ISignInForm>({
    resolver: yupResolver(scheme),
    criteriaMode: 'all',
    mode: 'onBlur',
    defaultValues: {
      email: '',
      password: '',
    },
  });
}
