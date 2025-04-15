import {View} from 'react-native';
import {PetsInfo} from '@widgets/pet-info';
import {PetsActionsRows} from '@features/pets';
import {SafeAreaViewLayout} from '@entrypoint/layouts/safe-area-layout';
import {Image} from 'expo-image';
import {styles} from './style';
import {PetCardHeader} from '@entrypoint/headers/pet-card-header';
import {useLocalSearchParams} from 'expo-router';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {selectCurrentPet} from '@entities/pet/model/selectors';
import {useEffect} from 'react';
import {petGetPetById} from '@entities/pet/model/actions';

export function PetCardOpened() {
  console.log('PetCardOpened');
  const {id} = useLocalSearchParams<{id: string}>();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(petGetPetById(id));
  }, [dispatch, id]);

  const pet = useAppSelector(selectCurrentPet);
  return (
    <>
      <Image source={pet.imageSource} contentFit="cover" style={styles.image} />
      <SafeAreaViewLayout>
        <PetCardHeader />
        <View style={styles.screen}>
          <View style={styles.substrate}>
            <PetsInfo pet={pet} />
            <PetsActionsRows
              petId={pet.id}
              lastFeed={pet.lastFeed}
              lastWalk={pet.lastWalk}
              lastMedication={pet.lastMedical}
            />
          </View>
        </View>
      </SafeAreaViewLayout>
    </>
  );
}
