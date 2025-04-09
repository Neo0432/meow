import {IPetState} from '@entities/pet/model/types';
import {createSlice} from '@reduxjs/toolkit';

const initialState: IPetState = {pets: []};

const petsSlice = createSlice({
  name: 'pets',
  initialState,
  reducers: {},
  extraReducers: builder => {},
});

export const {} = petsSlice.actions;
export default petsSlice.reducer;
