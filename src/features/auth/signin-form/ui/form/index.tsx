import {View} from 'react-native';
import {Controller} from 'react-hook-form';
import {useLoginForm} from '@features/auth/signin-form/hooks/use-login-form';
import {InputFilled} from '@shared/ui/inputs/input-fiilled';
import {InputLabel} from '@shared/ui/inputs/input-label';
import {ButtonsArea} from '@shared/ui/auth/buttons-area';
import {styles} from './style';
import {ISignInForm} from '@features/auth/signin-form/model/types';
import {useRouter} from 'expo-router';
import login from '@app/(root)/auth/login';

export function SignInForm() {
  const router = useRouter();

  const methods = useLoginForm();
  const {
    handleSubmit,
    control,
    formState: {isSubmitting, isLoading, isValid},
  } = methods;

  const onSubmit = async (data: ISignInForm) => {
    console.log('Submitting...');
    console.log(data);
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Controller
          control={control}
          render={({field}) => (
            <InputFilled
              title={<InputLabel>EMAIL</InputLabel>}
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
              title={<InputLabel>PASSWORD</InputLabel>}
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
