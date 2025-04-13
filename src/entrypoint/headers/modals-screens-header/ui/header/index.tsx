import {Pressable, Text, View} from 'react-native';
import {SvgGoBackArrowIcon24Dp} from '@shared/assets/icons/components/navigation/go-back-arrow-icon-24dp';
import {ModalScreenHeaderProps} from '@entrypoint/headers/model/types';
import {useRouter} from 'expo-router';
import {useNavigationState} from '@react-navigation/core';
import {styles} from './style';
import {colors} from '@shared/styles/colors';

export function ModalScreenHeader({
  title,
  goBackButton,
  onGoBack,
  rightActionName,
  onRightAction,
  rightActionDisabled,
}: ModalScreenHeaderProps) {
  const router = useRouter();

  const routeName = useNavigationState(state => {
    const currentRoute = state.routes[state.index];
    return currentRoute.name;
  });

  return (
    <View style={styles.container}>
      {goBackButton && (
        <Pressable
          style={styles.leftAction}
          onPress={
            onGoBack
              ? onGoBack
              : () => {
                  router.canGoBack() && router.back();
                }
          }>
          {({pressed}) => (
            <SvgGoBackArrowIcon24Dp
              width={24}
              height={24}
              color={pressed ? colors.blue.blue500 : colors.blue.blue250}
            />
          )}
        </Pressable>
      )}
      <Text style={styles.title}>{title || routeName}</Text>
      <Pressable
        style={styles.rightAction}
        disabled={rightActionDisabled}
        onPress={onRightAction}>
        {({pressed}) => (
          <Text
            style={[
              styles.rightActionText,
              pressed && styles.rightActionTextPressed,
            ]}>
            {rightActionName}
          </Text>
        )}
      </Pressable>
    </View>
  );
}
