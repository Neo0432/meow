import {Text, View} from 'react-native';
import {ImageBackground} from 'expo-image';
import {IPet} from '@entities/pet/model/types';
import {styles} from './style';
import {LinearGradient} from 'expo-linear-gradient';

export function PetImage({pet}: {pet: IPet}) {
  return (
    <View style={styles.component}>
      <ImageBackground
        source={pet.imageUrl}
        contentFit="cover"
        style={styles.image}>
        <LinearGradient
          colors={[
            'rgba(186,120,59,1)',
            'rgba(255,154,92,0.4)',
            'rgba(255,255,255,0)',
          ]}
          start={{x: 0.5, y: 1}}
          end={{x: 0.5, y: 0}}
          style={styles.container}>
          <Text style={[styles.name, styles.text]}>{pet.name}</Text>
          <View>
            <Text style={[styles.sex, styles.text]}>{pet.sex}</Text>
            <Text style={[styles.age, styles.text]}>{pet.age}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
}
