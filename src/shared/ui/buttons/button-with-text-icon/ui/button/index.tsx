import {PropsWithChildren} from 'react';
import {IButtonWithTextIconProps} from '@shared/ui/buttons/types';
import {useButtonIcon} from '@shared/ui/buttons/button-with-text-icon/hooks/use-button-icon';
import {UIButtonWithLoading} from '@shared/ui/buttons/button-with-loading';
import {Text, View} from 'react-native';
import {styles} from './style';

export function UIButtonWithTextIcon({
  children,
  icon,
  iconPosition = 'left',
  initialStyle,
  pressedStyle,
  disabledStyle,
  ...buttonProps
}: PropsWithChildren<IButtonWithTextIconProps>) {
  const ButtonIcon = useButtonIcon(icon);
  return (
    <UIButtonWithLoading
      {...buttonProps}
      initialStyle={initialStyle || styles.initialStyle}
      pressedStyle={pressedStyle || styles.pressedStyle}
      disabledStyle={disabledStyle || styles.disabledStyle}>
      <View style={styles.buttonContent}>
        {iconPosition === 'left' && <ButtonIcon />}
        <Text style={styles.text}>{children}</Text>
        {iconPosition === 'right' && <ButtonIcon />}
      </View>
    </UIButtonWithLoading>
  );
}
