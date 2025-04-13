import {Text} from 'react-native';
import {PropsWithChildren} from 'react';
import {styles} from './style';
import {InputLabelProps} from '@shared/ui/inputs/input-label/model/types';

export function InputFilledLabel({
  customStyles,
  children,
}: PropsWithChildren<InputLabelProps>) {
  return <Text style={[styles.label, customStyles]}>{children}</Text>;
}
