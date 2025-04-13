import {PetClosedCard} from '@widgets/pet-card';
import {IPet} from '@entities/pet/model/types';
import {usePetActions} from '../../hooks/use-pet-actions';

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
