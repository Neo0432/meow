import {StyleSheet} from 'react-native';
import {shadows} from '@shared/styles/effects';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',
    width: '100%',
    height: 56,
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    paddingVertical: 11,
    paddingLeft: 18,
    paddingRight: 8,
    borderRadius: 12,
    backgroundColor: colors.orange.orange50,
    ...shadows.peachInput,
  },

  textArea: {
    flexDirection: 'column',
    gap: 0,
    maxWidth: '80%',
    flex: 1,
  },
});
