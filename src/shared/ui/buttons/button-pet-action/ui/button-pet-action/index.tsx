import {IconButton} from '@shared/ui/buttons/icon-button';
import {IconButtonProps} from '@shared/ui/buttons/types';
import {styles} from './style';
import {colors} from '@shared/styles/colors';

export function ButtonPetAction({
  onPress,
  disabled,
  icon,
  iconSize,
}: IconButtonProps) {
  return (
    <IconButton
      icon={icon}
      disabled={disabled}
      onPress={onPress}
      iconSize={iconSize}
      initialColor={colors.blue.blue250}
      pressedColor={colors.blue.blue500}
      disabledColor={colors.grayscale.grayscale600}
      buttonStyle={styles.button}
      pressedButtonStyle={styles.buttonPressed}
      disabledButtonStyle={styles.buttonDisabled}
    />
  );
}
