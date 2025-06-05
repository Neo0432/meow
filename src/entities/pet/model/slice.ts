import {IPet, IPetState} from '@entities/pet/model/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  petActionFeed,
  petActionMedication,
  petActionWalk,
  petCreateNewPet,
  petDeletePet,
  petGetAll,
  petGetPetById,
  petUpdatePet,
} from './actions';
import {updatePetField} from '@entities/pet/model/utils';

const initialState: IPetState = {
  pets: [] as IPet[],
  selectedPetId: null,
};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {
    setOpenedPet: (state, action: PayloadAction<string>) => {
      state.selectedPetId = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(petCreateNewPet.fulfilled, (state, action) => {
        state.pets.push(action.payload);
      })

      .addCase(petUpdatePet.fulfilled, (state, action) => {
        const outdatedPetIndex = state.pets.findIndex(
          pet => pet.id === action.payload.id,
        );

        if (outdatedPetIndex === -1) return;

        state.pets[outdatedPetIndex] = {...action.payload};
      })

      .addCase(petDeletePet.fulfilled, (state, action) => {
        state.pets = state.pets.filter(pet => pet.id !== action.payload);

        if (state.selectedPetId === action.payload) {
          state.selectedPetId = null;
        }
      })

      .addCase(petActionFeed.fulfilled, (state, action) => {
        updatePetField(
          state,
          action.payload.id,
          'lastFeed',
          action.payload.lastFeed,
        );
      })

      .addCase(petActionWalk.fulfilled, (state, action) => {
        updatePetField(
          state,
          action.payload.id,
          'lastWalk',
          action.payload.lastWalk,
        );
      })

      .addCase(petActionMedication.fulfilled, (state, action) => {
        updatePetField(
          state,
          action.payload.id,
          'lastMedical',
          action.payload.lastMedical,
        );
      })

      .addCase(petGetPetById.fulfilled, (state, action) => {
        state.selectedPetId = action.payload;
      })

      .addCase(petGetAll.fulfilled, (state, action) => {
        state.pets = action.payload;
      });
  },
});

export const {setOpenedPet} = petsSlice.actions;
export default petsSlice.reducer;
