import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

import {Dispatch, SetStateAction} from 'react';

export function IOSDatePicker({
  field,
  setShowPicker,
}: {
  field: any;
  setShowPicker: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <DateTimePicker
      value={new Date(field.value) || new Date()}
      mode="date"
      display="spinner"
      onChange={(event: DateTimePickerEvent, selectedDate?: Date) => {
        if (event.type === 'set' && selectedDate) {
          field.onChange(dayjs.utc(selectedDate).local().format('DD.MM.YYYY'));
        }
        setShowPicker(false);
      }}
    />
  );
}
