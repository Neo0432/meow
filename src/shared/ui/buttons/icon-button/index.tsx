import {Pressable, TouchableWithoutFeedback} from 'react-native';
import {IconButtonProps} from '@shared/ui/buttons/types';
import {Icon} from '@shared/ui/buttons/icon-button/ui/icon/icon';
import {useState} from 'react';
import {colors} from '@shared/styles/colors';

export function IconButton({
  onPress,
  disabled,
  icon,
  iconSize = 24,
  initialColor = colors.orange.orange250,
  pressedColor = colors.orange.orange500,
  disabledColor = colors.grayscale.grayscale500,
  buttonStyle,
  children,
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[{flexDirection: 'row'}, buttonStyle]}>
      {({pressed}) => {
        const iconColor = disabled
          ? disabledColor
          : pressed
            ? pressedColor
            : initialColor;

        return (
          <>
            <Icon icon={icon} size={iconSize} color={iconColor} />
            {children}
          </>
        );
      }}
    </Pressable>
  );
}
