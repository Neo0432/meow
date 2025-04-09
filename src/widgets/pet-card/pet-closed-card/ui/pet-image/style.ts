import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  image: {
    position: 'relative',

    flex: 1,
    borderRadius: 24,
    minWidth: 200,
    width: '80%',

    flexDirection: 'row',
    alignItems: 'flex-end',
    overflow: 'hidden',
  },

  container: {
    flex: 1,
    width: '100%',

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    overflow: 'hidden',
    padding: 20,
  },

  text: {
    color: colors.grayscale.grayscale0,
  },

  name: {
    // TODO Сделать шрифт
  },

  age: {
    // TODO Сделать шрифт
  },

  sex: {
    // TODO Сделать шрифт
  },
});
