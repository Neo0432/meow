import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';
import {typography} from '@shared/styles/typography';

export const styles = StyleSheet.create({
  container: {
    position: 'fixed',
    alignItems: 'center',
    gap: 12,
    paddingInline: 17,
  },

  textArea: {
    flexDirection: 'row',
    gap: 8,
  },

  textAreaText: {
    ...typography.b4_itim_regular_14,
    color: colors.orange.orange500,
  },
});
