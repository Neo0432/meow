import {IPet, IPetState} from '@entities/pet/model/types';
import {createSlice} from '@reduxjs/toolkit';
import {
  petActionFeed,
  petActionMedication,
  petActionWalk,
  petCreateNewPet,
} from '@entities/pet/model/actions';
import {updatePetField} from '@entities/pet/model/utils';

const initialState: IPetState = {pets: [] as IPet[]};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(petCreateNewPet.fulfilled, (state, action) => {
        state.pets.push(action);
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
          action.payload.lastMedication,
        );
      });
  },
});

export const {} = petsSlice.actions;
export default petsSlice.reducer;
