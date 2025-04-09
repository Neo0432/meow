import {Text, View} from 'react-native';
import {Image} from 'expo-image';
import {styles} from './style';

export function HeadTitle() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@shared/assets/images/auth-screens/cat/cat.webp')}
        style={{width: 110, height: 165}}
      />
      <Text style={styles.title}>Your pet’s story starts here.</Text>
    </View>
  );
}
