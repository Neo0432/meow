import {Slot} from 'expo-router';
import {ReduxProvider} from '@entrypoint/providers/redux-provider';

export default function RootLayout() {
  return (
    <ReduxProvider>
      <Slot />
    </ReduxProvider>
  );
}
