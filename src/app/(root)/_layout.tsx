import {Stack} from 'expo-router';

export default function RootNavigator() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="(app)" />
      <Stack.Screen name="auth" />
    </Stack>
  );
}
