import {Stack} from 'expo-router';
import {SessionProvider} from '@entrypoint/providers/session-provider';
import {ReduxProvider} from '@entrypoint/providers/redux-provider';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'expo-status-bar';
import {LoadFontsProvider} from '@entrypoint/providers/load-fonts-provider';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

export default function RootNavigator() {
  return (
    <GestureHandlerRootView>
      <LoadFontsProvider>
        <SessionProvider>
          <ReduxProvider>
            <SafeAreaProvider>
              <StatusBar style="auto" />

              <Stack
                screenOptions={{
                  headerShown: false,
                }}>
                <Stack.Screen name="index" />
                <Stack.Screen name="auth" />
              </Stack>
            </SafeAreaProvider>
          </ReduxProvider>
        </SessionProvider>
      </LoadFontsProvider>
    </GestureHandlerRootView>
  );
}
