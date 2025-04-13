import {ScrollView, View} from 'react-native';
import {styles} from './style';
import {PetClosedCardWithActions} from '@features/pets';
import {IPet} from '@entities/pet/model/types';
import {useAppSelector} from '@shared/store';
import {selectAllPets} from '@entities/pet/model/selectors';
import {PostPlaceholder} from '@screens/home-screen/ui/placeholder';
import {UserHeader} from '@features/user/user-header';
import {DarkBgLayout} from '@entrypoint/layouts/dark-bg-layout';

export default function HomeScreen() {
  let pets: IPet[] = useAppSelector(selectAllPets);

  if (!pets.length) {
    pets = petArray;
  }

  return (
    <DarkBgLayout>
      <View style={styles.screen}>
        <UserHeader />

        <View style={styles.content}>
          {pets.length ? (
            <ScrollView contentContainerStyle={styles.scroll}>
              {pets.map(pet => (
                <PetClosedCardWithActions
                  pet={pet}
                  onPress={() => {}}
                  key={pet.id}
                />
              ))}
            </ScrollView>
          ) : (
            <PostPlaceholder />
          )}
        </View>
      </View>
    </DarkBgLayout>
  );
}

const petArray: IPet[] = [
  {
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
  },

  {
    imageSource:
      'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
    name: 'Astrodestroyer',
    age: '3 m',
    sex: 'male',
    breed: '',
    birthDate: '12.12.2012',
    chipNumber: '13345678',
    type: 'cat',
    lastFeed: new Date().toString(),
    lastWalk: new Date().toString(),
    lastMedical: new Date().toString(),
    medication: true,
    id: '133456123',
  },

  {
    imageSource:
      'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
    name: 'Astrodestroyer',
    age: '3 m',
    sex: 'male',
    breed: '',
    birthDate: '12.12.2012',
    chipNumber: '14345678',
    type: 'cat',
    lastFeed: new Date().toString(),
    lastWalk: new Date().toString(),
    lastMedical: new Date().toString(),
    medication: true,
    id: '143456123',
  },

  {
    imageSource:
      'https://img.freepik.com/free-photo/cute-cat-spending-time-indoors_23-2150649127.jpg?t=st=1744092868~exp=1744096468~hmac=4c6d603e67bd38d402cf6eb7728c186affa4686466cc6f6420c28d2c2d6ac92b&w=1380',
    name: 'Astrodestroyer',
    age: '3 m',
    sex: 'male',
    breed: '',
    birthDate: '12.12.2012',
    chipNumber: '15345678',
    type: 'cat',
    lastFeed: new Date().toString(),
    lastWalk: new Date().toString(),
    lastMedical: new Date().toString(),
    medication: true,
    id: '153456123',
  },
];
