import {Image} from 'expo-image';
import {SvgUserPlaceholderIcon38Dp} from '@shared/assets/icons/components/profile/user-placeholder-icon-38dp';
import {styles} from './style';

export function UserHeaderImage({imageUrl}: {imageUrl: string}) {
  return imageUrl ? (
    <Image source={imageUrl} style={styles.image} contentFit="cover" />
  ) : (
    <SvgUserPlaceholderIcon38Dp width={38} height={38} />
  );
}
