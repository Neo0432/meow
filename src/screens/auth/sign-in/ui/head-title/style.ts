import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 165,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 32,
  },

  title: {
    ...typography.t2_itim_regular_28,
    color: colors.grayscale.grayscale800,
    flexWrap: 'wrap',
    textAlign: 'left',
    flexShrink: 1,
  },
});
