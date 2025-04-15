import {combineReducers} from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import persistReducer from 'redux-persist/es/persistReducer';
import userReducer from '@entities/user/model/slice';
import petsReducer from '@entities/pet/model/slice';

const combineReducer = combineReducers({
  user: userReducer,
  pet: petsReducer,
});

const persistConfig = {key: 'root', storage: AsyncStorage, whitelist: ['user']};
export const persistedReducer = persistReducer(persistConfig, combineReducer);
