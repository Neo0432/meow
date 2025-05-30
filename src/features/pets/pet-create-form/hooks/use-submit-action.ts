import {ICreatePetFormData} from '@features/pets/pet-create-form/model/types';
import {useAppDispatch} from '@shared/store';
import {petCreateNewPet} from '@entities/pet/model/actions';

export const useSubmitAction = () => {
  const dispatch = useAppDispatch();
  return async (data: ICreatePetFormData) => {
    console.log(data);

    dispatch(petCreateNewPet(data));
  };
};
// const cleanData: ICreatePetFormData = Object.fromEntries(
//   Object.entries(data).map(([key, value]) => {
//     if (value === null || value === undefined || value === '') {
//       return [key, ''];
//     }
//     return [key, value];
//   }),
// );
