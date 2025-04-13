import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';
import {typography} from '@shared/styles/typography';

export const styles = StyleSheet.create({
  container: {
    gap: 18,
    alignItems: 'center',

    paddingInline: 16,
    paddingBottom: 56,

    width: '100%',
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
    backgroundColor: colors.orange.orange500,
  },

  submitButton: {
    paddingInline: 16,
    paddingVertical: 8,
    borderRadius: 24,
    backgroundColor: colors.orange.orange300,

    width: 155,
  },

  submitButtonText: {
    ...typography.h1_outfit_semibold_20,
    color: colors.orange.orange100,
  },
});
