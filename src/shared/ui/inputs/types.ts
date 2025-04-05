import {StyleProp, TextStyle} from 'react-native';

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
