import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';
import {typography} from '@shared/styles/typography';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'column',
  },

  input: {
    borderBottomWidth: 1,
    borderBottomColor: colors.blue.blue250,

    ...typography.b1_itim_regular_16,
    color: colors.orange.orange500,
  },

  inputFocused: {
    borderBottomColor: colors.blue.blue200,
  },
});
