import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  userHeader: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingInline: 32,
  },

  headerText: {
    ...typography.h2_outfit_regular_20,
    color: colors.orange.orange50,
  },
});
