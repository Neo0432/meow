import {InputBaseProps} from '@shared/ui/inputs/types';
import {ReactNode} from 'react';
import {StyleProp, ViewStyle} from 'react-native';

export interface InputFilledProps extends InputBaseProps {
  title?: ReactNode;
  iconType?: 'check' | 'password';
  customFilled?: StyleProp<ViewStyle>;
  isCorrect?: boolean;
}
