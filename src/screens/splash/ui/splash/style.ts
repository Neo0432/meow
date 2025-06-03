import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  screen: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,

    flex: 1,
    width: '100%',

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.orange.orange500,
  },

  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 256,
    height: 256,
  },
});
