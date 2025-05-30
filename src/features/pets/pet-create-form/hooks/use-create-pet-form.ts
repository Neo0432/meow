import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {petCreateFormScheme} from '@features/pets/pet-create-form/model/scheme';
import {ICreatePetFormData} from '@features/pets/pet-create-form/model/types';

export function useCreatePetsForm() {
  return useForm<ICreatePetFormData>({
    //TODO: FIX IT
    resolver: yupResolver(petCreateFormScheme),
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
