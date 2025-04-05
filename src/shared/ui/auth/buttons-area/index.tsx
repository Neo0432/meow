import {UIButtonWithText} from '@shared/ui/buttons/button-with-text';
import {Text, View} from 'react-native';
import {styles} from '@shared/ui/auth/buttons-area/style';

interface ButtonsAreaProps {
  disabled: boolean;
  onSubmit: () => void;
  isLoading: boolean;
  type: 'reg' | 'login';
}

export function ButtonsArea({
  onSubmit,
  isLoading,
  disabled,
  type,
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
        <Text>
          {type === 'reg'
            ? 'Already has an account?'
            : 'Don’t have an account?'}
        </Text>
        <Text>Log in</Text>
      </View>
    </View>
  );
}
