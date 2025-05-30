import {Dispatch, SetStateAction} from 'react';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';
import {ICreatePetFormData} from '@features/pets/pet-create-form/model/types';

export interface DatePickerProps {
  field: ControllerRenderProps<ICreatePetFormData>;
  loadingForm: boolean;
  showPicker: boolean;
  setShowPicker: Dispatch<SetStateAction<boolean>>;
}
