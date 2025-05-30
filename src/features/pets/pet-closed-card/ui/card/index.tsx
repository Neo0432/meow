import {PetClosedCard} from '@widgets/pet-card';
import {IPet} from '@entities/pet/model/types';
import {usePetActions} from '@shared/hooks/use-pet-actions';
import {useLocalSearchParams} from 'expo-router';
import {useAppSelector} from '@shared/store';
import {selectCurrentPet} from '@entities/pet/model/selectors';

interface PetClosedWithActionsProps {
  pet: IPet;
  onPress: () => void;
}

export function PetClosedCardWithActions({
  pet,
  onPress,
}: PetClosedWithActionsProps) {
  const {onWalk, onMedication, onFeed} = usePetActions(pet.id);

  return (
    <PetClosedCard
      pet={pet}
      onPress={onPress}
      onFeed={onFeed}
      onWalk={onWalk}
      onMedication={onMedication}
    />
  );
}
