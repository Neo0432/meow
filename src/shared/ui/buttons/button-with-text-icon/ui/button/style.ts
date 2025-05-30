import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';
import {shadows} from '@shared/styles/effects';
import {typography} from '@shared/styles/typography';

export const styles = StyleSheet.create({
  initialStyle: {
    width: '100%',
    height: 56,
    borderRadius: 24,
    backgroundColor: colors.red.red300,
    ...shadows.peachInput,
  },
  pressedStyle: {
    backgroundColor: colors.red.red200,
  },
  disabledStyle: {
    backgroundColor: colors.grayscale.grayscale500,
    shadowOpacity: 0,
  },

  buttonContent: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
  },

  text: {
    ...typography.h3_itim_regular_18,
    color: colors.grayscale.grayscale50,
  },
});
