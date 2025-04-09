import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
    width: '100%',
    height: 184,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: colors.orange.orange50,
  },
});
