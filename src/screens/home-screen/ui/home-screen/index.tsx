import {ScrollView, View} from 'react-native';
import {styles} from './style';
import {PetClosedCardWithActions} from '@features/pets';
import {IPet} from '@entities/pet/model/types';
import {useAppSelector} from '@shared/store';
import {selectAllPets} from '@entities/pet/model/selectors';
import {PostPlaceholder} from '@screens/home-screen/ui/placeholder';
import {UserHeader} from '@features/user/user-header';
import {DarkBgLayout} from '@entrypoint/layouts/dark-bg-layout';
//TODO: Remove mocks
import {petArray} from '@mocks/pet';
import {useRouter} from 'expo-router';

export default function HomeScreen() {
  let pets: IPet[] = useAppSelector(selectAllPets);

  const router = useRouter();
  //TODO: Remove mocks
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
                  onPress={() => {
                    router.push(`/edit-pet-card/${pet.id}`);
                  }}
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
