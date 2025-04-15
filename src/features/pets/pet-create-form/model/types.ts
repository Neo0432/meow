import * as yup from 'yup';
import {petCreateFormScheme} from '@features/pets/pet-create-form/model/scheme';

// export type ICreatePetFormData = yup.InferType<typeof petCreateFormScheme>;

export interface ICreatePetFormData {
  imageUrl: string;
  name: string;
  type: string;
  sex: 'Male' | 'Female';
  vaccine: boolean;
  birthDate: string;
  breed: string;
  chipNumber: string;
}
