import {Text, View} from 'react-native';
import {IPet} from '@entities/pet/model/types';
import {PetBubbles} from '@widgets/pet-info/ui/pet-bubbles';
import {styles} from './styles';

export function PetsInfo({pet}: {pet: IPet}) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{pet.name}</Text>
      <PetBubbles age={pet.age} sex={pet.sex} vaccine={pet.medication} />
    </View>
  );
}
