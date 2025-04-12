import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {NavigationRoute, ParamListBase} from '@react-navigation/native';

export function getLabel(
  options: BottomTabNavigationOptions,
  route: NavigationRoute<ParamListBase, string>,
  color: string,
  isFocused: boolean,
) {
  const label = options.tabBarLabel
    ? options.tabBarLabel
    : options.title !== undefined
      ? options.title
      : route.name;

  return typeof label === 'function'
    ? label({
        focused: isFocused,
        color,
        position: 'below-icon',
        children: route.name,
      })
    : label;
}
