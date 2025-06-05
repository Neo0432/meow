import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IEditPetFormData} from '@features/pets/pet-edit-form/model/types';
import {petEditFormScheme} from '@features/pets/pet-edit-form/model/scheme';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {selectCurrentPet} from '@entities/pet/model/selectors';

export function useEditPetsForm() {
  const defaultPetData = useAppSelector(selectCurrentPet);

  return useForm<IEditPetFormData>({
    //TODO: FIX IT
    resolver: yupResolver(petEditFormScheme),
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      ...defaultPetData,
    },
  });
}
