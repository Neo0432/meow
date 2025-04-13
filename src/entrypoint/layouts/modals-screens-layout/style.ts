import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    gap: 24,
    paddingInline: 16,
    paddingVertical: 20,

    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,

    backgroundColor: colors.orange.orange50,
  },
});
