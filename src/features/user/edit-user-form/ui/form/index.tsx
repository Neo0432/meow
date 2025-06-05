import {useCreateUserEditForm} from '../../hooks/use-create-user-edit-form';
import {FormProvider} from 'react-hook-form';
import {UserMainInfo} from '@features/user/edit-user-form/ui/user-main-info';
import {UserAddedInfo} from '@features/user/edit-user-form/ui/user-added-info';

export function EditUserForm() {
  const methods = useCreateUserEditForm();

  return (
    <FormProvider {...methods}>
      <UserMainInfo />
      <UserAddedInfo />
    </FormProvider>
  );
}
