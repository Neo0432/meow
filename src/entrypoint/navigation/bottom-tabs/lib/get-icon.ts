import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';

export function getIcon(
  options: BottomTabNavigationOptions,
  isFocused: boolean,
  color: string,
  size: number,
) {
  return typeof options.tabBarIcon === 'function'
    ? options.tabBarIcon({focused: isFocused, color, size})
    : options.tabBarIcon || null;
}
