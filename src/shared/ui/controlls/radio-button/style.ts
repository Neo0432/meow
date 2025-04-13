import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  button: {
    width: 20,
    height: 20,

    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 24,
    borderWidth: 2,
    borderColor: colors.orange.orange300,
  },

  inner: {
    width: 8,
    height: 8,
    borderRadius: 24,
    backgroundColor: colors.blue.blue250,
  },
});
