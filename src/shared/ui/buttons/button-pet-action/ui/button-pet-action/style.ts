import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',

    borderRadius: 16,
    backgroundColor: colors.blue.blue100,

    width: 48,
    height: 48,
  },

  buttonPressed: {
    backgroundColor: colors.blue.blue250,
  },

  buttonDisabled: {
    backgroundColor: colors.grayscale.grayscale300,
  },
});
