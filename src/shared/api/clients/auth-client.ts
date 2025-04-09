import * as SecureStore from 'expo-secure-store';
import axios, {InternalAxiosRequestConfig} from 'axios';
import {config} from '@shared/api/config';
import {signOut} from '@shared/hooks/use-session';

export const authClient = axios.create({
  baseURL: config.API_URL,
  headers: {'Content-Type': 'application/json'},
});

authClient.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const token = await SecureStore.getItemAsync('USER_TOKEN');

      if (!token || !config.headers) {
        throw new Error('[authClient] Missing token or headers');
      }

      config.headers.Authorization = `Bearer ${token}`;
    } catch (e) {
      console.error(`[ERROR] Failed to attach token: ${e}`);
    }
    return config;
  },
);

authClient.interceptors.response.use(
  response => response,
  async error => {
    const status = error.response?.status;

    if (status === 401) {
      await signOut();
    }

    return Promise.reject(error);
  },
);
