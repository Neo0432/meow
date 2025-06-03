import {Slot} from 'expo-router';
import {ReduxProvider} from '@entrypoint/providers/redux-provider';
import {BootSplashProvider} from '@entrypoint/providers/bootsplash-provider';

export default function RootLayout() {
  return (
    <ReduxProvider>
      <Slot />
    </ReduxProvider>
  );
}
