import {DarkBgLayout} from '@entrypoint/layouts/dark-bg-layout';
import {ProfileHeader} from '@entrypoint/headers';
import {EditUserForm} from '@features/user/edit-user-form';
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {styles} from './style';

export function UserProfile() {
  return (
    <DarkBgLayout>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
          }}>
          <View style={styles.screen}>
            <ProfileHeader />
            <View style={styles.lightBox}>
              <EditUserForm />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </DarkBgLayout>
  );
}
