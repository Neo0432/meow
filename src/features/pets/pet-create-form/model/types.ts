import * as yup from 'yup';
import {petCreateFormSchema} from '@features/pets/pet-create-form/model/scheme';

export type ICreateFormData = yup.InferType<typeof petCreateFormSchema>;

// export interface ICreateFormData {
//   imageUrl: string | null;
//   name: string;
//   type: string | null;
//   gender?: 'male' | 'female';
//   vaccine: boolean;
//   dateOfBirth: string | null;
//   breed: string | null;
//   chipNumber: string | null;
// }
