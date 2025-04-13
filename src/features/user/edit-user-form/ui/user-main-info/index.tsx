import {Control, Controller, UseFormHandleSubmit} from 'react-hook-form';
import {ImagePickerArea} from '@widgets/image-picker/ui/image-picker-area';
import {ChangeableUserName} from '@features/user/edit-user-form/ui/changeable-user-name';
import {UIButtonWithText} from '@shared/ui/buttons/button-with-text';
import {IEditUserForm} from '@features/user/edit-user-form/model/types';
import {styles} from './style';
import {View} from 'react-native';

interface UserMainInfoProps {
  control: Control<IEditUserForm>;
  formDisabled: boolean;
  handleSubmit: UseFormHandleSubmit<IEditUserForm>;
  isValid: boolean;
}

export function UserMainInfo({
  control,
  formDisabled,
  handleSubmit,
  isValid,
}: UserMainInfoProps) {
  const onSubmit = async (data: IEditUserForm) => {
    console.log(data);
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
        disabled={formDisabled || !isValid}
        isLoading={formDisabled}
        onPress={handleSubmit(onSubmit)}
        textStyle={styles.submitButtonText}
        initialStyle={styles.submitButton}>
        Save profile
      </UIButtonWithText>
    </View>
  );
}
