import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {IEditPetFormData} from '@features/pets/pet-edit-form/model/types';
import {petEditFormScheme} from '@features/pets/pet-edit-form/model/scheme';

export function useEditPetsForm() {
  return useForm<IEditPetFormData>({
    //TODO: FIX IT
    resolver: yupResolver(petEditFormScheme),
    mode: 'onBlur',
    criteriaMode: 'all',
    defaultValues: {
      imageUrl: '',
      name: '',
      type: '',
      sex: 'Male',
      vaccine: false,
      birthDate: '',
      breed: '',
      chipNumber: '',
    },
  });
}
