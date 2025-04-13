import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-around',

    width: '100%',
  },

  leftAction: {
    position: 'absolute',
    left: 0,
    top: '50%',
    transform: [{translateY: -12}],
  },

  rightAction: {
    position: 'absolute',
    right: 0,
    top: '50%',
    transform: [{translateY: -12}],
  },

  rightActionText: {
    ...typography.h3_itim_regular_18,
    color: colors.blue.blue250,

    flexShrink: 0,
  },

  rightActionTextPressed: {
    color: colors.blue.blue500,
  },

  title: {
    ...typography.t1_outfit_semibold_28,
    color: colors.orange.orange500,
  },
});
