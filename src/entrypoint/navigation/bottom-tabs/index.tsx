import {PlatformPressable} from '@react-navigation/elements';
import {Text, View} from 'react-native';
import {styles} from './style';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import {getLabel} from '@entrypoint/navigation/bottom-tabs/lib/get-label';
import {getIcon} from '@entrypoint/navigation/bottom-tabs/lib/get-icon';
import {getColor} from '@entrypoint/navigation/bottom-tabs/lib/get-color';
import {AddButton} from '@entrypoint/navigation/bottom-tabs/ui/add-button';

export function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const currentRouteName = state.routes[state.index].name;
  return (
    <View style={styles.background}>
      <View style={styles.container}>
        {currentRouteName === 'home' && (
          <AddButton
            onPress={() => {
              navigation.navigate('create-pet-card');
            }}
          />
        )}
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const size = 24;

          const isFocused = state.index === index;
          const color = getColor(isFocused);

          const icon = getIcon(options, isFocused, color, size);
          const renderedLabel = getLabel(options, route, color, isFocused);

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name, route.params);
            }
          };

          return (
            <PlatformPressable
              style={styles.button}
              accessibilityState={isFocused ? {selected: true} : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarButtonTestID}
              key={index}
              pressColor={'transparent'}
              pressOpacity={0.9}
              onPress={onPress}>
              {icon}
              <Text style={[styles.label, {color: color}]}>
                {renderedLabel}
              </Text>
            </PlatformPressable>
          );
        })}
      </View>
    </View>
  );
}
