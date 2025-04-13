import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';
import {colors} from '@shared/styles/colors';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 200,
    borderRadius: 24,
    overflow: 'hidden',
    backgroundColor: colors.grayscale.grayscale300,
  },

  contentPlaceholder: {
    alignItems: 'center',
    gap: 24,
  },

  placeholderText: {
    ...typography.h5_outfit_semibold_16,
    color: colors.grayscale.grayscale600,
  },

  image: {
    width: '100%',
    height: '100%',
  },
});
