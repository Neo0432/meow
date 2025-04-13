import {ICreatePetFormData} from '@features/pets/pet-create-form/model/types';
import {useAppDispatch} from '@shared/store';
import {petCreateNewPet} from '@entities/pet/model/actions';

export const useSubmitAction = () => {
  return async (data: ICreatePetFormData) => {
    const dispatch = useAppDispatch();

    const cleanData = Object.fromEntries(
      Object.entries(data).map(([key, value]) => {
        if (value === null || value === undefined || value === '') {
          return [key, ''];
        }
        return [key, value];
      }),
    );

    console.log(cleanData);

    // dispatch(petCreateNewPet(cleanData));
  };
};
