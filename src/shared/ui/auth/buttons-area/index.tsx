import {UIButtonWithText} from '@shared/ui/buttons/button-with-text';
import {Text, View} from 'react-native';
import {styles} from '@shared/ui/auth/buttons-area/style';
import {ButtonTextButton} from '@shared/ui/buttons/button-text-button';

interface ButtonsAreaProps {
  disabled: boolean;
  onSubmit: () => void;
  isLoading: boolean;
  type: 'reg' | 'login';
  navigateTo: () => void;
}

export function ButtonsArea({
  onSubmit,
  isLoading,
  disabled,
  type,
  navigateTo,
}: ButtonsAreaProps) {
  return (
    <View style={styles.container}>
      <UIButtonWithText
        isLoading={isLoading}
        onPress={onSubmit}
        disabled={disabled}>
        {type === 'reg' ? 'REGISTER' : 'LOG IN'}
      </UIButtonWithText>

      <View style={styles.textArea}>
        <Text style={styles.textAreaText}>
          {type === 'reg'
            ? 'Already has an account?'
            : 'Don’t have an account?'}
        </Text>
        <ButtonTextButton onPress={navigateTo}>
          {type === 'reg' ? 'Log in' : 'Sign up'}
        </ButtonTextButton>
      </View>
    </View>
  );
}
