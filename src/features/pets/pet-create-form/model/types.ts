import * as yup from 'yup';
import {petCreateFormScheme} from '@features/pets/pet-create-form/model/scheme';

// export type ICreatePetFormData = yup.InferType<typeof petCreateFormScheme>;

export interface ICreatePetFormData {
  imageUrl: string;
  name: string;
  type: string;
  gender: 'male' | 'female';
  vaccine: boolean;
  dateOfBirth: Date | string;
  breed: string;
  chipNumber: string;
}
