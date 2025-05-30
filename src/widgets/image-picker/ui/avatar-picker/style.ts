import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    position: 'relative',

    justifyContent: 'center',
    alignItems: 'center',
  },

  avatarBox: {
    width: 230,
    height: 230,
    position: 'relative',
  },

  avatar: {
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 110,

    backgroundColor: colors.blue.blue100,
    width: 230,
    height: 230,

    overflow: 'hidden',
  },

  image: {
    width: '100%',
    height: '100%',
  },

  button: {
    position: 'absolute',
    bottom: 0,
    right: 0,

    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: colors.blue.blue250,
    borderRadius: 32,

    width: 56,
    height: 56,
  },

  buttonPressed: {
    backgroundColor: colors.blue.blue500,
  },
});
