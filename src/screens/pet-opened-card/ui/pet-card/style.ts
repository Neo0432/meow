import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'space-between',
  },

  image: {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,

    width: '100%',
    height: 283,
  },

  substrate: {
    top: 165,

    flex: 1,
    padding: 32,
    gap: 24,

    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    backgroundColor: colors.grayscale.grayscale50,
  },
});
