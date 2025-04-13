import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    gap: 8,
  },

  row: {
    flexDirection: 'row',
    gap: 6,
  },

  text: {
    ...typography.b1_itim_regular_16,
    color: colors.orange.orange500,
  },
});
