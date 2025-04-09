import {Slot, Stack} from 'expo-router';
import {AuthLayout} from '@entrypoint/layouts/auth-layout';

export default function AuthNavigation() {
  return (
    <AuthLayout>
      <Stack initialRouteName="login" screenOptions={{headerShown: false}}>
        <Stack.Screen name="login" options={{animation: 'slide_from_left'}} />
        <Stack.Screen
          name="registration"
          options={{animation: 'slide_from_right'}}
        />
      </Stack>
    </AuthLayout>
  );
}
