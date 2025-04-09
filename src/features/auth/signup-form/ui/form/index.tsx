import {Text, View} from 'react-native';
import {Controller} from 'react-hook-form';
import {useSignUpForm} from '@features/auth/signup-form/hooks/use-signup-form';
import {InputFilled} from '@shared/ui/inputs/input-fiilled';
import {styles} from './style';
import {ButtonsArea} from '@shared/ui/auth/buttons-area';
import {InputLabel} from '@shared/ui/inputs/input-label';
import {ISignUpForm} from '@features/auth/signup-form/model/types';
import {useRouter} from 'expo-router';
import {useAppDispatch} from '@shared/store';
import {userSignUp} from '@entities/user/model/actions';
import {useSignUpSubmit} from '@features/auth/signup-form/hooks/use-sign-up-submit';

export function RegistrationForm() {
  const router = useRouter();
  const onSubmit = useSignUpSubmit();

  const dispatch = useAppDispatch();

  const methods = useSignUpForm();
  const {
    handleSubmit,
    formState: {isSubmitting, isLoading, isValid},
    control,
  } = methods;

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <Controller
          control={control}
          render={({field, fieldState: {invalid, isTouched, isDirty}}) => (
            <InputFilled
              title={<InputLabel>EMAIL</InputLabel>}
              iconType="check"
              placeholder="Enter email"
              value={field.value}
              isCorrect={!invalid && isDirty && isTouched}
              onChange={field.onChange}
              onBlur={field.onBlur}
            />
          )}
          name="email"
        />
        <Controller
          control={control}
          render={({field, fieldState: {error}}) => (
            <>
              <InputFilled
                title={<InputLabel>PASSWORD</InputLabel>}
                iconType="password"
                placeholder="Enter password"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
              {error && <Text>{error.message}</Text>}
            </>
          )}
          name="password"
        />
        <Controller
          control={control}
          render={({field, fieldState: {error}}) => (
            <>
              <InputFilled
                title={<InputLabel>CONFIRM</InputLabel>}
                iconType="password"
                placeholder="Confirm password"
                value={field.value}
                onChange={field.onChange}
                onBlur={field.onBlur}
              />
              {error && <Text>{error.message}</Text>}
            </>
          )}
          name="passwordConfirm"
        />
      </View>
      <ButtonsArea
        onSubmit={handleSubmit(onSubmit)}
        disabled={isSubmitting || !isValid}
        isLoading={isLoading}
        type="reg"
        navigateTo={() => {
          router.navigate('/auth/login');
        }}
      />
    </View>
  );
}
