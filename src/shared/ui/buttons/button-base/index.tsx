import {Pressable} from 'react-native';
import {styles} from './style';
import {IButtonProps} from '@shared/ui/buttons/types';

export function UIButtonBase({
  initialStyle,
  pressedStyle,
  disabledStyle,
  onPress,
  disabled,
  children,
}: IButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={({pressed}) => [
        styles.button,
        initialStyle,
        pressed && pressedStyle,
        disabled && disabledStyle,
      ]}>
      {children}
    </Pressable>
  );
}
