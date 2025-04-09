import {ReactNode, useEffect} from 'react';
import {loadSession, useSession} from '@shared/hooks/use-session';
import {useRouter} from 'expo-router';
import {InteractionManager} from 'react-native';

export function SessionProvider({children}: {children: ReactNode}) {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    loadSession();
  }, []);

  useEffect(() => {
    const task = InteractionManager.runAfterInteractions(() => {
      if (!session) router.replace('/auth/login');
      else router.replace('/(app)/(root)/(tabs)');
    });

    return () => task.cancel();
  }, [session]);
  return <>{children}</>;
}
