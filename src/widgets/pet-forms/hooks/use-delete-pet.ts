import {useAppDispatch, useAppSelector} from '@shared/store';
import {selectCurrentPet} from '@entities/pet/model/selectors';
import {petDeletePet} from '@entities/pet/model/actions';
import {useRouter} from 'expo-router';

export const useDeletePet = () => {
  const dispatch = useAppDispatch();
  const pet = useAppSelector(selectCurrentPet);
  const router = useRouter();

  return () => {
    if (pet) {
      dispatch(petDeletePet(pet.id));
    }

    router.navigate('/home');
  };
};
