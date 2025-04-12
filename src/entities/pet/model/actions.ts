import {createAsyncThunk} from '@reduxjs/toolkit';
import {authClient} from '@shared/api/clients';

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

      if (response) return response.data;
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

      if (response) return response.data;
    } catch (e) {
      console.error(
        `[ERROR] Can't post request on medication for ${petId}: ${e}`,
      );
      return rejectWithValue(e);
    }
  },
);
