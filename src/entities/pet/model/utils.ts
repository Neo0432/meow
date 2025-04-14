import {IPet, IPetState} from '@entities/pet/model/types';

export function updatePetField<T extends keyof IPet>(
  state: IPetState,
  id: string,
  field: T,
  value: IPet[T],
) {
  const index = state.pets.findIndex(pet => pet.id === id);
  if (index === -1) return;

  state.pets[index] = {
    ...state.pets[index],
    [field]: value,
  };
}
