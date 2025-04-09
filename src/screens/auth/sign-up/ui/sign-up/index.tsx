import {
  Keyboard,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {HeadTitle} from '@screens/auth/sign-up/ui/head-title';
import {AuthLayout} from '@entrypoint/layouts/auth-layout';
import {RegistrationForm} from '@features/auth/signup-form';
import {styles} from './style';
import {BottomPicture} from '@shared/ui/auth/bottom-picture';

export default function RegistrationScreen() {
  return (
    <AuthLayout>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.screen}>
          <HeadTitle />
          <RegistrationForm />
          <BottomPicture />
        </View>
      </TouchableWithoutFeedback>
    </AuthLayout>
  );
}
