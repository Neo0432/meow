import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  label: {
    ...typography.b3_outfit_semibold_14,
    color: colors.blue.blue250,
  },
});
