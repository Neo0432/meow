import {Pressable, StyleProp, ViewStyle} from 'react-native';
import {Icon} from '@shared/ui/buttons/rounded-icon-button/ui/icon';
import {colors} from '@shared/styles/colors';
import {styles} from './style';
import {IIconRoundedButtonType} from '@shared/ui/buttons/types';

export interface RoundedIconButtonProps {
  icon: IIconRoundedButtonType['icon'];
  onPress: () => void;
  disabled?: boolean;
  initialStyle?: StyleProp<ViewStyle>;
  pressedStyle?: StyleProp<ViewStyle>;
  disabledStyle?: StyleProp<ViewStyle>;
  iconSize?: number;
}

export function RoundedIconButton({
  icon,
  onPress,
  initialStyle,
  pressedStyle,
  disabledStyle,
  disabled,
  iconSize,
}: RoundedIconButtonProps) {
  return (
    <Pressable
      style={({pressed}) => [
        styles.button,
        initialStyle,
        pressed && pressedStyle,
        disabled && disabledStyle,
      ]}
      onPress={onPress}
      disabled={disabled}>
      <Icon
        icon={icon}
        color={colors.grayscale.grayscale100}
        size={iconSize || 24}
      />
    </Pressable>
  );
}
