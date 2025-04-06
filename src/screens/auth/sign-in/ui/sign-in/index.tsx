import {Keyboard, TouchableWithoutFeedback, View} from 'react-native';
import {HeadTitle} from '@screens/auth/sign-in/ui/head-title';
import {AuthLayout} from '@entrypoint/layouts/auth-layout';

import {styles} from './style';
import {BottomPicture} from '@shared/ui/auth/bottom-picture';
import {SignInForm} from '@features/auth/signin-form';

export default function LoginScreen() {
  return (
    <AuthLayout>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <HeadTitle />
          <SignInForm />
          <BottomPicture />
        </View>
      </TouchableWithoutFeedback>
    </AuthLayout>
  );
}
