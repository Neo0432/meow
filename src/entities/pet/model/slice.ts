import {IPet, IPetState} from '@entities/pet/model/types';
import {createSlice} from '@reduxjs/toolkit';
import {
  petActionFeed,
  petActionMedication,
  petActionWalk,
  petCreateNewPet,
  petGetAll,
  petGetPetById,
} from '@entities/pet/model/actions';
import {updatePetField} from '@entities/pet/model/utils';

const initialState: IPetState = {pets: [] as IPet[], selectedPet: {} as IPet};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder;
    // .addCase(petCreateNewPet.fulfilled, (state, action) => {
    //   state.pets.push(action.payload);
    // })
    //
    // .addCase(petActionFeed.fulfilled, (state, action) => {
    //   updatePetField(
    //     state,
    //     action.payload.id,
    //     'lastFeed',
    //     action.payload.lastFeed,
    //   );
    // })
    //
    // .addCase(petActionWalk.fulfilled, (state, action) => {
    //   updatePetField(
    //     state,
    //     action.payload.id,
    //     'lastWalk',
    //     action.payload.lastWalk,
    //   );
    // })
    //
    // .addCase(petActionMedication.fulfilled, (state, action) => {
    //   updatePetField(
    //     state,
    //     action.payload.id,
    //     'lastMedical',
    //     action.payload.lastMedication,
    //   );
    // })
    //
    // .addCase(petGetPetById.fulfilled, (state, action) => {
    //   state.selectedPet = action.payload;
    // })
    //
    // .addCase(petGetAll.fulfilled, (state, action) => {
    //   state.pets = action.payload;
    // });
  },
});

export const {} = petsSlice.actions;
export default petsSlice.reducer;
