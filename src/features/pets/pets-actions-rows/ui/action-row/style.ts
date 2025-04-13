import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  textArea: {
    justifyContent: 'space-between',
  },

  rowName: {
    ...typography.h4_outfit_light_18,
    color: colors.blue.blue250,
  },

  value: {
    ...typography.h2_outfit_regular_20,
    color: colors.blue.blue250,
  },
});
