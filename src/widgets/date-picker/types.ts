import {Dispatch, SetStateAction} from 'react';
import {
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
} from 'react-hook-form';

export interface DatePickerProps {
  field: ControllerRenderProps<FieldValues, string>;
  loadingForm: boolean;
  showPicker: boolean;
  setShowPicker: Dispatch<SetStateAction<boolean>>;
}
