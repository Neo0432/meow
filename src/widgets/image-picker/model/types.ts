import {Dispatch, SetStateAction} from 'react';

export interface IImagePickerProps {
  mediaUrl: string;
  setImageUrl: Dispatch<SetStateAction<string | null>>;
  isAreaDisabled?: boolean;
}
