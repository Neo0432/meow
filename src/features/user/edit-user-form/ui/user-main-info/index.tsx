import {Controller, useFormContext} from 'react-hook-form';
import {ImagePickerArea} from '@widgets/image-picker/ui/image-picker-area';
import {ChangeableUserName} from '@features/user/edit-user-form/ui/changeable-user-name';
import {UIButtonWithText} from '@shared/ui/buttons/button-with-text';
import {IEditUserForm} from '@features/user/edit-user-form/model/types';
import {styles} from './style';
import {View} from 'react-native';
import {useAppDispatch} from '@shared/store';
import {updateUserData} from '@entities/user/model/slice';

export function UserMainInfo() {
  const {
    control,
    formState: {isLoading, isSubmitting, isValid},
    handleSubmit,
  } = useFormContext<IEditUserForm>();
  const formDisabled = isSubmitting || isLoading || !isValid;

  const dispatch = useAppDispatch();

  const onSubmit = (data: IEditUserForm) => {
    dispatch(updateUserData(data));
  };

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {value, onChange}}) => (
          <ImagePickerArea
            mediaUrl={value}
            setImageUrl={onChange}
            type="avatar"
          />
        )}
        name="imageUrl"
      />
      <Controller
        control={control}
        render={({field}) => {
          return <ChangeableUserName field={field} />;
        }}
        name="name"
      />
      {/* TODO: Bug. Button pressed styles */}
      <UIButtonWithText
        disabled={formDisabled}
        isLoading={formDisabled}
        onPress={handleSubmit(onSubmit)}
        textStyle={styles.submitButtonText}
        initialStyle={styles.submitButton}>
        Save profile
      </UIButtonWithText>
    </View>
  );
}
