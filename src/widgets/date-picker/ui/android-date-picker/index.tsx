import {DateTimePickerAndroid} from '@react-native-community/datetimepicker';
import {ControllerRenderProps, FieldValues} from 'react-hook-form';

export function AndroidDatePicker({
  field,
}: {
  field: ControllerRenderProps<FieldValues, string>;
}) {
  DateTimePickerAndroid.open({
    value: field.value ? new Date(field.value) : new Date(),
    mode: 'date',
    is24Hour: true,
    onChange: (_, selectedDate) => {
      if (selectedDate) {
        field.onChange(String(selectedDate));
      }
    },
  });
}
