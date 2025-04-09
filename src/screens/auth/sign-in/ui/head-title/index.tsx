import {Text, View} from 'react-native';
import {Image} from 'expo-image';
import {styles} from './style';

export function HeadTitle() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Back for more tail wags?</Text>
      <Image
        source={require('@shared/assets/images/auth-screens/cat/cat.webp')}
        style={{width: 110, height: 165, transform: [{scaleX: -1}]}}
      />
    </View>
  );
}
