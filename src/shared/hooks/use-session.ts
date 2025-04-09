import * as SecureStore from 'expo-secure-store';
import {useSyncExternalStore} from 'react';
import {useAppDispatch} from '@shared/store';
import {logout} from '@entities/user/model/slice';

export type SessionState = string | null;
type Listener = () => void;

const SessionStore = {
  _session: null as SessionState,
  _listeners: new Set<Listener>(),

  getSnapshot() {
    return this._session;
  },

  subscribe(listener: Listener) {
    this._listeners.add(listener);
    return () => {
      this._listeners.delete(listener);
    };
  },

  setSession(newSession: SessionState) {
    this._session = newSession;
    this._listeners.forEach(listener => listener());
  },
};

export async function loadSession() {
  try {
    const token = await SecureStore.getItemAsync('USER_TOKEN');
    SessionStore.setSession(token);
  } catch (error) {
    console.error(`[ERROR] Cant load session: ${error}`);
    SessionStore.setSession(null);
  }
}

export async function setSessionAsync(token: string | null) {
  try {
    if (!token) {
      await SecureStore.deleteItemAsync('USER_TOKEN');
    } else {
      await SecureStore.setItemAsync('USER_TOKEN', token);
    }

    SessionStore.setSession(token);
  } catch (error) {
    console.error(`[ERROR] Cant set session: ${error}`);
  }
}

export async function signIn(token: string) {
  await setSessionAsync(token);
}

export async function signOut() {
  await setSessionAsync(null);
  useAppDispatch()(logout());
}

export function useSession() {
  return useSyncExternalStore(
    listener => SessionStore.subscribe(listener),
    () => SessionStore.getSnapshot(),
  );
}
