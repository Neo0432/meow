import {useAppDispatch} from '@shared/store';
import {
  petActionFeed,
  petActionMedication,
  petActionWalk,
} from '@entities/pet/model/actions';

export function usePetActions(petId: string) {
  const dispatch = useAppDispatch();
  const onFeed = () => dispatch(petActionFeed(petId));
  const onWalk = () => dispatch(petActionWalk(petId));
  const onMedication = () => dispatch(petActionMedication(petId));

  return {onFeed, onWalk, onMedication};
}
