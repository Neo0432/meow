import {useCreateUserEditForm} from '../../hooks/use-create-user-edit-form';
import {FormProvider} from 'react-hook-form';
import {UserMainInfo} from '@features/user/edit-user-form/ui/user-main-info';
import {UserAddedInfo} from '@features/user/edit-user-form/ui/user-added-info';

export function EditUserForm() {
  const methods = useCreateUserEditForm();

  const {
    control,
    formState: {isValid, isLoading, isSubmitting},
    handleSubmit,
  } = methods;

  const formDisabled = isLoading || isSubmitting;

  return (
    <FormProvider {...methods}>
      <UserMainInfo
        control={control}
        formDisabled={formDisabled}
        handleSubmit={handleSubmit}
        isValid={isValid}
      />
      <UserAddedInfo control={control} formDisabled={formDisabled} />
    </FormProvider>
  );
}
