import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    bottom: 0,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingInline: 64,
    paddingTop: 16,
    paddingBottom: 16,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    width: '100%',
    backgroundColor: colors.orange.orange50,
  },

  background: {
    backgroundColor: colors.orange.orange100,
    marginTop: -16,
  },

  button: {
    alignItems: 'center',
    padding: 8,
    borderRadius: 32,
  },

  label: {
    ...typography.c1_outfit_semibold_12,
    lineHeight: 15,
  },
});
