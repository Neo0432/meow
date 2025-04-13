import {View} from 'react-native';
import {useState} from 'react';
import {InputBase} from '@shared/ui/inputs/input-base';
import {IInputUnderlineProps} from '@shared/ui/inputs/types';
import {styles} from './style';

export function InputUnderlined({
  title,
  value,
  onFocus,
  onBlur,
  ...InputBaseProps
}: IInputUnderlineProps) {
  const [isFocused, setFocused] = useState(false);
  return (
    <View>
      {title}
      <InputBase
        style={[styles.input, (isFocused || value) && styles.inputFocused]}
        value={value}
        onFocus={() => {
          onFocus?.();
          setFocused(true);
        }}
        onBlur={() => {
          onBlur?.();
          setFocused(false);
        }}
        {...InputBaseProps}
      />
    </View>
  );
}
