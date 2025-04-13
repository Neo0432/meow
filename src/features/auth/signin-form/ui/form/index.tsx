import {View} from 'react-native';
import {Controller} from 'react-hook-form';
import {useLoginForm} from '@features/auth/signin-form/hooks/use-login-form';
import {InputFilled} from '@shared/ui/inputs/input-fiilled';
import {InputFilledLabel} from '@shared/ui/inputs/input-label';
import {ButtonsArea} from '@shared/ui/auth/buttons-area';
import {styles} from './style';
import {useRouter} from 'expo-router';
import {useSignInSubmit} from '@features/auth/signin-form/hooks/use-sign-in-submit';

export function SignInForm() {
  const router = useRouter();
  const onSubmit = useSignInSubmit();

  const methods = useLoginForm();
  const {
    handleSubmit,
    control,
    formState: {isSubmitting, isLoading, isValid},
  } = methods;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Controller
          control={control}
          render={({field}) => (
            <InputFilled
              title={<InputFilledLabel>EMAIL</InputFilledLabel>}
              placeholder="Enter email"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({field}) => (
            <InputFilled
              title={<InputFilledLabel>PASSWORD</InputFilledLabel>}
              iconType={'password'}
              placeholder="Enter password"
              value={field.value}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
          name="password"
        />
      </View>

      <ButtonsArea
        onSubmit={handleSubmit(onSubmit)}
        disabled={isSubmitting || !isValid}
        isLoading={isLoading}
        type="login"
        navigateTo={() => {
          router.navigate('/auth/registration');
        }}
      />
    </View>
  );
}
