import {Pressable, Text, View} from 'react-native';
import {SvgLogoutIcon24Dp} from '@shared/assets/icons/components/navigation/logout-icon-24dp';
import {styles} from './style';
import {signOut} from '@shared/hooks/use-session';

export function ProfileHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Profile</Text>
      <Pressable onPress={() => signOut()} style={styles.button}>
        <SvgLogoutIcon24Dp width={24} height={24} />
      </Pressable>
    </View>
  );
}
