import {Image} from 'expo-image';
import {View} from 'react-native';
import {styles} from './style';

export function BottomPicture() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@shared/assets/images/auth-screens/dog/dog.webp')}
        style={styles.image}
      />
    </View>
  );
}
