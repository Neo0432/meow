import {Image} from 'expo-image';
import {Text, View} from 'react-native';
import {styles} from './style';

export function PostPlaceholder() {
  return (
    <View style={styles.container}>
      <Image
        source={require('@shared/assets/images/home-screen/placeholders/no-data-placeholder.jpg')}
        style={styles.image}
      />
      <Text style={styles.text}>Pets are not added</Text>
    </View>
  );
}
