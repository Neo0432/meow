import {UIButtonBase} from '@shared/ui/buttons/button-base';
import {PropsWithChildren} from 'react';
import {Text} from 'react-native';
import {styles} from './style';
import {UITextButton} from '@shared/ui/buttons/types';

export function ButtonTextButton({
  onPress,
  disabled,
  children,
}: PropsWithChildren<UITextButton>) {
  return (
    <UIButtonBase disabled={disabled} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </UIButtonBase>
  );
}
