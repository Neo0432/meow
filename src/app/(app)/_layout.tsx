import {Slot, Stack} from 'expo-router';
import {SessionProvider} from '@entrypoint/providers/session-provider';
import {ReduxProvider} from '@entrypoint/providers/redux-provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';

export default function RootNavigator() {
  return (
    <SessionProvider>
      <ReduxProvider>
        <SafeAreaProvider>
          <StatusBar style="auto" />

          <Stack
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="(app)" />
            <Stack.Screen name="auth" />
          </Stack>
        </SafeAreaProvider>
      </ReduxProvider>
    </SessionProvider>
  );
}
