import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
  },

  text: {
    ...typography.t1_outfit_semibold_28,
    color: colors.grayscale.grayscale0,
  },
});
