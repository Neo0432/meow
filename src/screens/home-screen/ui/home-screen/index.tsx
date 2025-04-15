import {ScrollView, View} from 'react-native';
import {styles} from './style';
import {PetClosedCardWithActions} from '@features/pets';
import {IPet} from '@entities/pet/model/types';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {selectAllPets} from '@entities/pet/model/selectors';
import {PostPlaceholder} from '@screens/home-screen/ui/placeholder';
import {UserHeader} from '@features/user/user-header';
import {DarkBgLayout} from '@entrypoint/layouts/dark-bg-layout';
//TODO: Remove mocks
import {petArray} from '@mocks/pet';
import {useRouter} from 'expo-router';
import {useEffect} from 'react';
import {petGetAll} from '@entities/pet/model/actions';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function HomeScreen() {
  const router = useRouter();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const a = AsyncStorage.removeItem('root');
  }, []);

  useEffect(() => {
    dispatch(petGetAll());
  }, [dispatch]);

  let pets: IPet[] = useAppSelector(selectAllPets);

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
                    router.push(`../pet-card/${pet.id}`);
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
