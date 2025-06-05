import {View} from 'react-native';
import {PetsInfo} from '@widgets/pet-info';
import {PetsActionsRows} from '@features/pets';
import {SafeAreaViewLayout} from '@entrypoint/layouts/safe-area-layout';
import {Image} from 'expo-image';
import {styles} from './style';
import {PetCardHeader} from '@entrypoint/headers/pet-card-header';
import {useLocalSearchParams, useRouter} from 'expo-router';
import {useAppDispatch, useAppSelector} from '@shared/store';
import {selectCurrentPet} from '@entities/pet/model/selectors';
import {useEffect} from 'react';
import {petGetPetById} from '@entities/pet/model/actions';
import {pet as petInfo} from '@mocks/pet';
import {setOpenedPet} from '@entities/pet/model/slice';

export function PetCardOpened() {
  const {petId} = useLocalSearchParams<{petId: string}>();
  const dispatch = useAppDispatch();
  const router = useRouter();

  useEffect(() => {
    dispatch(setOpenedPet(petId));
  }, [petId]);

  // useEffect(() => {
  //   dispatch(petGetPetById(id));
  // }, [dispatch, id]);

  let pet = useAppSelector(selectCurrentPet);

  if (!pet?.id) return null;

  return (
    <>
      <Image source={pet.imageUrl} contentFit="cover" style={styles.image} />
      <SafeAreaViewLayout>
        <PetCardHeader
          onRightAction={() => {
            router.push(`../edit-pet-card/[${pet.id}]`);
          }}
        />
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
