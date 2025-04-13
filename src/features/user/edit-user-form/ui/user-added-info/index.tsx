import {Control, Controller} from 'react-hook-form';
import {InputUnderlined} from '@shared/ui/inputs/input-underlined';
import {InputUnderlinedLabel} from '@shared/ui/inputs/input-label';
import {View} from 'react-native';
import {IEditUserForm} from '@features/user/edit-user-form/model/types';
import {styles} from './style';

interface UserAddedInfoProps {
  control: Control<IEditUserForm>;
  formDisabled: boolean;
}

export function UserAddedInfo({control, formDisabled}: UserAddedInfoProps) {
  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({field: {value, onChange, onBlur}}) => (
          <InputUnderlined
            title={<InputUnderlinedLabel>E-mail</InputUnderlinedLabel>}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={formDisabled}
          />
        )}
        name="email"
      />
      <Controller
        control={control}
        render={({field: {value, onChange, onBlur}}) => (
          <InputUnderlined
            title={<InputUnderlinedLabel>Phone</InputUnderlinedLabel>}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={formDisabled}
          />
        )}
        name="phoneNumber"
      />
    </View>
  );
}
