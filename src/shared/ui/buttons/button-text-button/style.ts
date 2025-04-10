import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';
import {typography} from '@shared/styles/typography';

export const styles = StyleSheet.create({
  text: {
    ...typography.b4_itim_regular_14,
    color: colors.blue.blue250,
    textDecorationLine: 'underline',
  },
});
