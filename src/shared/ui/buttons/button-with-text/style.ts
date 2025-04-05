import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';
import {shadows} from '@shared/styles/effects';

export const styles = StyleSheet.create({
  initialStyle: {
    width: '100%',
    height: 56,
    borderRadius: 24,
    backgroundColor: colors.orange.orange250,
    ...shadows.peachInput,
  },
  pressedStyle: {
    backgroundColor: colors.orange.orange500,
  },
  disabledStyle: {
    backgroundColor: colors.grayscale.grayscale500,
    shadowOpacity: 0,
  },

  text: {
    //TODO Добавить шрифт
    fontSize: 18,
    color: colors.orange.orange100,
  },
});
