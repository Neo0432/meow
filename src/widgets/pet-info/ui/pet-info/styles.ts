import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 12,
  },

  name: {
    ...typography.t1_outfit_semibold_28,
    color: colors.blue.blue250,
  },
});
