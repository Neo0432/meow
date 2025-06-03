import {useEffect} from 'react';
import {View} from 'react-native';
import Animated, {
  Easing,
  ReduceMotion,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {SvgSplashLogo256Dp} from '@shared/assets/icons/components/splash/splash-logo-256dp';
import {styles} from './style';

export function SplashScreen() {
  const logoSize = useSharedValue(256);

  useEffect(() => {
    logoSize.value = withTiming(1500, {
      easing: Easing.in(Easing.back(2)),
      duration: 1000,
      reduceMotion: ReduceMotion.System,
    });
  }, []);

  const boxAnimatedStyles = useAnimatedStyle(() => ({
    width: logoSize.value,
    height: logoSize.value,
  }));

  return (
    <View style={styles.screen}>
      <Animated.View style={[boxAnimatedStyles, styles.container]}>
        <SvgSplashLogo256Dp width="100%" height="100%" />
      </Animated.View>
    </View>
  );
}
