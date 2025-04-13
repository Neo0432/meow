import {Stack} from 'expo-router';

export default function AppNavigator() {
  return (
    <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen name="create-pet-card" />
      <Stack.Screen name="edit-pet-card" />
      <Stack.Screen name="pet-card" />
    </Stack>
  );
}
