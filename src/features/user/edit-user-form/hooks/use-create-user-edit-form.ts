import {useForm} from 'react-hook-form';
import {IEditUserForm} from '../model/types';
import {yupResolver} from '@hookform/resolvers/yup';
import {userEditFormScheme} from '@features/user/edit-user-form/model/scheme';
import {useAppSelector} from '@shared/store';
import {selectUser} from '@entities/user/model/selectors';

export function useCreateUserEditForm() {
  const user = useAppSelector(selectUser);

  return useForm<IEditUserForm>({
    resolver: yupResolver(userEditFormScheme),
    mode: 'onChange',
    defaultValues: {
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      imageUrl: user.imageUrl,
    },
  });
}
