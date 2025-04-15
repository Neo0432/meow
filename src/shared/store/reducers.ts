// @shared/store/index.ts

import {combineReducers, AnyAction} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import userReducer from '@entities/user/model/slice';
import petsReducer from '@entities/pet/model/slice';

const combineReducer = combineReducers({
  user: userReducer,
  pet: petsReducer,
});

const rootReducer = (
  state: ReturnType<typeof combineReducer> | undefined,
  action: AnyAction,
) => {
  if (action.type === RESET_APP) {
    state = undefined;
  }
  return combineReducer(state, action);
};

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['user'], // или всё, что нужно
};

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const RESET_APP = 'RESET_APP';
export const resetApp = () => ({type: RESET_APP});
