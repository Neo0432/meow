import {TextInput} from 'react-native';
import {InputBaseProps} from '@shared/ui/inputs/types';

export function InputBase({
  value,
  placeholder,
  style,
  onPress,
  onBlur,
  onFocus,
  onChange,
  isSecure,
  multiline,
  disabled,
}: InputBaseProps) {
  return (
    <TextInput
      secureTextEntry={isSecure}
      value={value}
      onPress={onPress}
      placeholder={placeholder}
      onBlur={onBlur}
      onFocus={onFocus}
      style={style}
      onChange={onChange}
      multiline={multiline}
      readOnly={disabled}
    />
  );
}
