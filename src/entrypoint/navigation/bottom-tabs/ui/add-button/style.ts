import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    top: -16,
    left: '50%',
    transform: [{translateX: 32}],

    backgroundColor: colors.orange.orange300,
  },

  addButtonPressed: {
    backgroundColor: colors.orange.orange500,
  },
});
