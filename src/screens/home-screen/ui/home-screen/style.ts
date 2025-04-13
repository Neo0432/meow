import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';
import {typography} from '@shared/styles/typography';

export const styles = StyleSheet.create({
  screen: {gap: 8, flex: 1},
  content: {
    flex: 1,
    width: '100%',
    backgroundColor: colors.orange.orange100,
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scroll: {
    width: '100%',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingInline: 16,
    paddingBottom: 24,
    gap: 8,
  },
});
