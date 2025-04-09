import {TouchableWithoutFeedback, View} from 'react-native';
import {IPet} from '@entities/pet/model/types';
import {PetImage} from '@widgets/pet-card/pet-closed-card/ui/pet-image';
import {PetActions} from '@widgets/pet-card/pet-closed-card/ui/pet-actions';
import {styles} from './style';

const petMocs: IPet = {
  imageSource:
    'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
  name: 'Astrodestroyer',
  age: '3 m',
  sex: 'male',
  breed: '',
  birthDate: '12.12.2012',
  chipNumber: '12345678',
  type: 'cat',
  lastFeed: new Date().toString(),
  lastWalk: new Date().toString(),
  lastMedical: new Date().toString(),
  medication: true,
  id: '123456123',
};

export function PetClosedCard({pet = petMocs}: {pet?: IPet}) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={() => {}}>
        <PetImage pet={pet} />
      </TouchableWithoutFeedback>
      <PetActions onFeed={() => {}} onWalk={() => {}} onMedication={() => {}} />
    </View>
  );
}
