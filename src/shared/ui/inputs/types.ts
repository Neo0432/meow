import {StyleProp, TextStyle} from 'react-native';
import {ReactNode} from 'react';

export interface InputBaseProps {
  value?: string;
  placeholder?: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onChange?: () => void;
  isSecure?: boolean;
  multiline?: boolean;
  disabled?: boolean;
}

export interface IInputUnderlineProps extends InputBaseProps {
  title: ReactNode;
}
