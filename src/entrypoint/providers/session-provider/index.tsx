import {ReactNode, useEffect} from 'react';
import {loadSession, useSession} from '@shared/hooks/use-session';
import {useRouter} from 'expo-router';
import {InteractionManager} from 'react-native';
import {useAppDispatch} from '@shared/store';
import {logout} from '@entities/user/model/slice';

export function SessionProvider({children}: {children: ReactNode}) {
  const dispatch = useAppDispatch();
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    loadSession();
  }, []);

  useEffect(() => {
    if (!session) dispatch(logout());
  }, [session, dispatch]);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      if (session) router.replace('/auth/login');
      else router.replace('/(app)/(root)/(tabs)/home');
    });

    return () => task.cancel();
  }, [session]);
  return <>{children}</>;
}
