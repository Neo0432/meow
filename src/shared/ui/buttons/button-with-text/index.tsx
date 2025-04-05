import {PropsWithChildren} from 'react';
import {UIButtonWithLoading} from '@shared/ui/buttons/button-with-loading';
import {Text} from 'react-native';
import {IButtonWithTextProps} from '@shared/ui/buttons/types';
import {styles} from './style';

export function UIButtonWithText({
  children,
  initialStyle,
  pressedStyle,
  disabledStyle,
  textStyle,
  ...buttonProps
}: PropsWithChildren<IButtonWithTextProps>) {
  return (
    <UIButtonWithLoading
      initialStyle={initialStyle || styles.initialStyle}
      pressedStyle={pressedStyle || styles.pressedStyle}
      disabledStyle={disabledStyle || styles.disabledStyle}
      {...buttonProps}>
      <Text style={[styles.text, textStyle]}>{children}</Text>
    </UIButtonWithLoading>
  );
}
