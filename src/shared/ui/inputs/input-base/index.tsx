import {TextInput} from 'react-native';
import {InputBaseProps} from '@shared/ui/inputs/types';
import {colors} from '@shared/styles/colors';

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
      placeholderTextColor={colors.orange.orange200}
      onBlur={onBlur}
      onFocus={onFocus}
      style={style}
      onChangeText={onChange}
      multiline={multiline}
      readOnly={disabled}
    />
  );
}
