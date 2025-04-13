import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingInline: 16,
  },

  label: {
    ...typography.t1_outfit_semibold_28,
    color: colors.orange.orange100,
  },

  button: {
    position: 'absolute',
    right: 16,
    top: '50%',
    transform: [{translateY: -18}],
  },
});
