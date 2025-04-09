import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

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
    color: colors.orange.orange500,
  },
});
