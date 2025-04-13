import {Pressable, View} from 'react-native';
import {SvgGoBackArrowIcon24Dp} from '@shared/assets/icons/components/navigation/go-back-arrow-icon-24dp';
import {colors} from '@shared/styles/colors';
import {SvgEditIcon24Dp} from '@shared/assets/icons/components/navigation/edit-icon-24dp';
import {styles} from './styles';
import {useRouter} from 'expo-router';
import {PetCardHeaderProps} from '@entrypoint/headers/model/types';

export function PetCardHeader({onGoBack}: PetCardHeaderProps) {
  const router = useRouter();

  const iconColor = colors.grayscale.grayscale700;
  const iconPressed = colors.grayscale.grayscale300;
  return (
    <View style={styles.container}>
      <Pressable
        onPress={
          onGoBack
            ? onGoBack
            : () => {
                router.canGoBack() && router.back();
              }
        }>
        {({pressed}) => (
          <SvgGoBackArrowIcon24Dp color={pressed ? iconPressed : iconColor} />
        )}
      </Pressable>
      <Pressable>
        {({pressed}) => (
          <SvgEditIcon24Dp color={pressed ? iconPressed : iconColor} />
        )}
      </Pressable>
    </View>
  );
}
