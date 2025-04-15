import {createAsyncThunk} from '@reduxjs/toolkit';
import {authClient} from '@shared/api/clients';
import {IPet} from './types';
import {ICreatePetFormData} from '@features/pets/pet-create-form/model/types';
import {AxiosResponse} from 'axios';

export const petActionFeed = createAsyncThunk(
  'pet/action/feed',
  async (petId: string, {rejectWithValue}) => {
    try {
      // const response = await authClient.post(`/pets/feed/${petId}`);

      // if (response) return response.data;

      const response = {
        id: petId,
        lastFeed: new Date().toString(),
      };
      return response;
    } catch (e) {
      console.error(`[ERROR] Can't post request on feed for ${petId}: ${e}`);
      return rejectWithValue(e);
    }
  },
);

export const petActionWalk = createAsyncThunk(
  'pet/action/walk',
  async (petId: string, {rejectWithValue}) => {
    try {
      const response = await authClient.post(`/pets/walk/${petId}`);

      return response.data;
    } catch (e) {
      console.error(`[ERROR] Can't post request on walk for ${petId}: ${e}`);
      return rejectWithValue(e);
    }
  },
);

export const petActionMedication = createAsyncThunk(
  'pet/action/medication',
  async (petId: string, {rejectWithValue}) => {
    try {
      const response = await authClient.post(`/pets/medication/${petId}`);

      return response.data;
    } catch (e) {
      console.error(
        `[ERROR] Can't post request on medication for ${petId}: ${e}`,
      );
      return rejectWithValue(e);
    }
  },
);

export const petCreateNewPet = createAsyncThunk(
  'pet/create/new-pet',
  async (petData: ICreatePetFormData, {rejectWithValue}) => {
    console.log(petData);
    // try {
    //   const response: AxiosResponse<IPet> = await authClient.post(
    //     '/pet/create-new',
    //     petData,
    //   );
    //
    //   if (response) {
    //     console.log('response');
    //     console.log(response?.data);
    //   }
    //TODO: Fix it
    return {
      id: '123145',
      ...petData,
      lastFeed: new Date().toISOString(),
      lastWalk: new Date().toISOString(),
      lastMedical: new Date().toISOString(),
    } as IPet;
    // return response.data;
    // } catch (e) {
    //   console.error(`[ERROR] Cant create pet with data ${petData}: ${e}`);
    //
    //   return rejectWithValue(e);
    // }
  },
);

export const petGetPetById = createAsyncThunk(
  'pet/get/petById',
  async (petId: string, {rejectWithValue}) => {
    try {
      const response = await authClient.get(`/pet/${petId}`);

      return response.data;
    } catch (e) {
      console.error(`[ERROR] Can't get pet by id: ${petId}, ${e}`);
      return rejectWithValue(e);
    }
  },
);

export const petGetAll = createAsyncThunk(
  'pet/getAll',
  async (_, {rejectWithValue}) => {
    try {
      const response = await authClient.get('/pet/all');

      return response.data;
    } catch (e) {
      console.error(`[ERROR] Can't get all pets: ${e}`);
      return rejectWithValue(e);
    }
  },
);
