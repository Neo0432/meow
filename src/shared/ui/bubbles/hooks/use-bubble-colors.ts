import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';

const bubbleStyles = {
  ['blue']: StyleSheet.create({
    text: {
      color: colors.blue.blue250,
    },
    bubble: {
      backgroundColor: colors.blue.blue150,
    },
  }),
  ['orange']: StyleSheet.create({
    text: {
      color: colors.orange.orange550,
    },
    bubble: {
      backgroundColor: colors.orange.orange250,
    },
  }),
  ['green']: StyleSheet.create({
    text: {
      color: colors.green.green500,
    },
    bubble: {
      backgroundColor: colors.green.green200,
    },
  }),
};

export const useBubbleColors = (color: 'blue' | 'orange' | 'green') => {
  return bubbleStyles[color];
};
