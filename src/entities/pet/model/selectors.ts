import {createSelector} from 'reselect';
import {RootState} from '@shared/store';
import {IPetState} from '@entities/pet/model/types';

export const selectPets = createSelector(
  [(state: RootState) => state.pet],
  (petState: IPetState) => ({...petState}),
);

export const selectAllPets = createSelector(
  [selectPets],
  (petState: IPetState) => petState.pets ?? [],
);

export const selectCurrentPet = createSelector(
  [selectPets],
  (petState: IPetState) => petState.selectedPet,
);
