import {View} from 'react-native';
import {RoundedIconButton} from '@shared/ui/buttons/rounded-icon-button';
import {styles} from './style';
import {Image} from 'expo-image';
import {SvgPersonOutlineIcon128Dp} from '@shared/assets/icons/components/placeholders/user-avatar/person-outline-icon-128dp';

interface AvatarPropsProps {
  imageUrl?: string;
  onButtonPress: () => void;
}

export function AvatarPicker({imageUrl, onButtonPress}: AvatarPropsProps) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarBox}>
        <View style={styles.avatar}>
          {imageUrl ? (
            <Image source={imageUrl} style={styles.image} contentFit="cover" />
          ) : (
            <SvgPersonOutlineIcon128Dp width={128} height={128} />
          )}
        </View>
        <RoundedIconButton
          icon={'camera'}
          onPress={onButtonPress}
          iconSize={24}
          initialStyle={styles.button}
          pressedStyle={styles.buttonPressed}
        />
      </View>
    </View>
  );
}
