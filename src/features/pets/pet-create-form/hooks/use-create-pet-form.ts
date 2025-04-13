import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {petCreateFormSchema} from '@features/pets/pet-create-form/model/scheme';
import {ICreateFormData} from '@features/pets/pet-create-form/model/types';

export function useCreatePetsForm() {
  return useForm<ICreateFormData>({
    //TODO: бля как он заебал, похуй так будет
    resolver: yupResolver(petCreateFormSchema),
    mode: 'onBlur',
    criteriaMode: 'all',

    defaultValues: {
      imageUrl: null,
      name: '',
      type: null,
      gender: undefined,
      vaccine: false,
      dateOfBirth: null,
      breed: null,
      chipNumber: null,
    },
  });
}
