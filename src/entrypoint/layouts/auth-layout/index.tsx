import {SafeAreaView} from 'react-native-safe-area-context';
import {View, StatusBar, KeyboardAvoidingView, Platform} from 'react-native';
import {ReactNode} from 'react';
import {colors} from '@shared/styles/colors';

export function AuthLayout({children}: {children: ReactNode}) {
  StatusBar.setBarStyle('dark-content');
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.orange.orange100,
      }}>
      <SafeAreaView style={{flex: 1}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          keyboardVerticalOffset={-230}
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
          {children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    </View>
  );
}
