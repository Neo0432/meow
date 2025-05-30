import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 24,
  },

  title: {
    width: '100%',
    textAlign: 'center',

    ...typography.t3_outfit_semibold_24,
    color: colors.orange.orange500,
  },
});
