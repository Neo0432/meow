import {FormProvider} from 'react-hook-form';
import {useEditPetsForm} from '@features/pets/pet-edit-form/hooks/use-edit-pet-form';
import {PetUpsertForm} from '@widgets/pet-forms';
import {IEditPetFormData} from '@features/pets/pet-edit-form/model/types';
import {ModalScreenHeader} from '@entrypoint/headers';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {updateUserData} from '@entities/user/model/slice';
import {petUpdatePet} from '@entities/pet/model/actions';
import {selectCurrentPet} from '@entities/pet/model/selectors';

export function PetEditForm() {
  const methods = useEditPetsForm();
  const dispatch = useAppDispatch();
  const pet = useAppSelector(selectCurrentPet);

  const onSubmit = (data: IEditPetFormData) => {
    if (!pet) return;
    dispatch(petUpdatePet({id: pet.id, petData: data}));
  };

  return (
    <FormProvider {...methods}>
      <PetUpsertForm onSubmit={onSubmit} formType="update" />
    </FormProvider>
  );
}
