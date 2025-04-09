import {TouchableWithoutFeedback} from 'react-native';
import {IconButtonProps} from '@shared/ui/buttons/types';
import {Icon} from '@shared/ui/buttons/icon-button/ui/icon/icon';
import {useState} from 'react';
import {colors} from '@shared/styles/colors';

export function IconButton({
  onPress,
  disabled,
  icon,
  iconSize,
  initialColor = colors.orange.orange250,
  pressedColor = colors.orange.orange500,
  disabledColor = colors.grayscale.grayscale500,
  buttonStyle,
  children,
}: IconButtonProps) {
  const [pressed, setPressed] = useState<boolean>(false);

  const iconColor = disabled
    ? disabledColor
    : pressed
      ? pressedColor
      : initialColor;

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled}
      style={[{flexDirection: 'row'}, buttonStyle]}>
      <>
        <Icon icon={icon} size={iconSize || 24} color={iconColor ?? ''} />
        {children}
      </>
    </TouchableWithoutFeedback>
  );
}
