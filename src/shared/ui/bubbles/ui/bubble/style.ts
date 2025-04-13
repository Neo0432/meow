import {StyleSheet} from 'react-native';
import {typography} from '@shared/styles/typography';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingInline: 8,
    paddingVertical: 12,

    borderRadius: 16,
    width: 64,
    height: 64,
  },

  title: {
    ...typography.b5_outfit_extralight_14,
  },

  value: {
    ...typography.b2_outfit_light_16,
  },
});
