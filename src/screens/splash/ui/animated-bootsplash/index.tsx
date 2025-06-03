import {Animated} from 'react-native';
import {useEffect, useState} from 'react';
import BootSplash from 'react-native-bootsplash';
import {SplashScreen} from '../splash';
import {colors} from '@shared/styles/colors';

type Props = {
  onAnimationEnd: () => void;
};

export const AnimatedBootSplash = ({onAnimationEnd}: Props) => {
  const [opacity] = useState(() => new Animated.Value(1));

  useEffect(() => {
    BootSplash.hide({fade: true}).then(() => {
      Animated.timing(opacity, {
        useNativeDriver: true,
        toValue: 0,
        duration: 300,
        delay: 700,
      }).start(() => {
        onAnimationEnd();
      });
    });
  }, []);

  return (
    <>
      <Animated.View
        style={[
          {opacity},
          {
            position: 'absolute',
            width: '100%',
            flex: 1,
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            backgroundColor: colors.orange.orange500,
          },
        ]}>
        <SplashScreen />
      </Animated.View>
    </>
  );
};
