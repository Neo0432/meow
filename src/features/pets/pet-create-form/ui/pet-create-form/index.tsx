import {FormProvider} from 'react-hook-form';
import {useCreatePetsForm} from '@features/pets/pet-create-form/hooks/use-create-pet-form';
import {ICreatePetFormData} from '@features/pets/pet-create-form/model/types';
import {petCreateNewPet} from '@entities/pet/model/actions';
import {useAppDispatch} from '@shared/store';
import {PetUpsertForm} from '@widgets/pet-forms/pet-upsert-form';

export function PetCreateForm() {
  const methods = useCreatePetsForm();
  const dispatch = useAppDispatch();

  // const onSubmit = useSubmitAction();
  const onSubmit = async (data: ICreatePetFormData) => {
    console.log(data);
    dispatch(petCreateNewPet(data));
  };

  return (
    <FormProvider {...methods}>
      <PetUpsertForm onSubmit={onSubmit} formType="create" />
    </FormProvider>
  );
}
