import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';
export const style = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    padding: 12,
    backgroundColor: colors.grayscale.grayscale0,
  },
  text: {
    ...typography.h5_outfit_semibold_16,
    color: colors.grayscale.grayscale600,
  },

  textCansel: {
    ...typography.h5_outfit_semibold_16,
    color: colors.red.red300,
  },

  canselButton: {
    borderRadius: 15,
  },
});
