import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
  },

  text: {
    width: '50%',
    ...typography.b3_outfit_semibold_14,
    color: colors.blue.blue250,
  },
});
