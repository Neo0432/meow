import {ReactNode} from 'react';
import {useLoadFonts} from '@shared/hooks/use-load-fonts';
import {Text} from 'react-native';

export function LoadFontsProvider({children}: {children: ReactNode}) {
  const {loaded, error} = useLoadFonts();

  if (error) {
    console.error(`[ERROR] Cant load fonts: ${error}`);
  }

  return loaded ? (
    <>{children}</>
  ) : error ? (
    <>{error.message}</>
  ) : (
    <Text>Loading...</Text>
  );
}
