import {StyleSheet} from 'react-native';
import {colors} from '@shared/styles/colors';
import {typography} from '@shared/styles/typography';

export const styles = StyleSheet.create({
  component: {
    flexShrink: 1,
    height: '100%',
    flexDirection: 'row',
    flex: 1,
  },
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
    ...typography.h5_outfit_semibold_16,
    color: colors.grayscale.grayscale0,
  },

  age: {
    ...typography.b6_outfit_medium_12,
    color: colors.grayscale.grayscale0,
  },

  sex: {
    ...typography.b8_outfit_light_12,
    color: colors.grayscale.grayscale0,
  },
});
