import {Keyboard, Platform} from 'react-native';
import {AndroidDatePicker} from '../android-date-picker';
import {IOSDatePicker} from '../ios-date-picker';
import {DatePickerProps} from '@widgets/date-picker/types';
import {InputUnderlinedLabel} from '@shared/ui/inputs/input-label';
import {InputUnderlined} from '@shared/ui/inputs/input-underlined';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';
import {prettierDate} from '@widgets/date-picker/lib/prettier-date';

dayjs.extend(utc);
dayjs.extend(timezone);

export function DatePickerField({
  field,
  setShowPicker,
  showPicker,
  loadingForm,
}: DatePickerProps) {
  const showDatepicker = () => {
    Keyboard.dismiss();
    if (Platform.OS === 'android') {
      AndroidDatePicker({field});
    } else {
      setShowPicker(true);
    }
  };

  return (
    <>
      <InputUnderlined
        title={<InputUnderlinedLabel>Date of birth</InputUnderlinedLabel>}
        value={prettierDate(field.value)}
        onBlur={field.onBlur}
        onChange={field.onChange}
        disabled={loadingForm}
        onFocus={() => {
          Keyboard.dismiss();
          showDatepicker();
        }}
      />
      {Platform.OS === 'ios' && showPicker && (
        <IOSDatePicker field={field} setShowPicker={setShowPicker} />
      )}
    </>
  );
}
