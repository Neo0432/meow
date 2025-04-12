import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
  },

  image: {
    width: 187,
    height: 187,
    borderRadius: 8,
  },

  text: {
    ...typography.h3_itim_regular_18,
    color: colors.grayscale.grayscale800,
  },
});
