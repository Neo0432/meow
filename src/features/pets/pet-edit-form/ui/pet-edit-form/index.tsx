import {FormProvider} from 'react-hook-form';
import {useEditPetsForm} from '@features/pets/pet-edit-form/hooks/use-edit-pet-form';
import {PetUpsertForm} from '@widgets/pet-forms';

export function PetEditForm() {
  const methods = useEditPetsForm();
  const onSubmit = () => {};

  return (
    <FormProvider {...methods}>
      <PetUpsertForm onSubmit={onSubmit} formType="update" />
    </FormProvider>
  );
}
