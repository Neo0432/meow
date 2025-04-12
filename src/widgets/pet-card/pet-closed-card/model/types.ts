import {IPet} from '@entities/pet/model/types';

export interface PetClosedCardProps {
  pet: IPet;
  onPress: () => void;
  onFeed: () => void;
  onWalk: () => void;
  onMedication: () => void;
}
