import {colors} from '@shared/styles/colors';

export function getColor(isFocused: boolean) {
  return isFocused ? colors.orange.orange250 : colors.blue.blue250;
}
