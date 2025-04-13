import {colors} from '@shared/styles/colors';
import {Switch} from 'react-native';

export interface IToggleControlProps {
  value: boolean;
  onChange: (...event: any[]) => void;
}

export function ToggleControl({value, onChange}: IToggleControlProps) {
  return (
    <Switch
      value={value}
      onChange={() => onChange(!value)}
      thumbColor={value ? colors.blue.blue250 : colors.blue.blue200}
      trackColor={{
        false: colors.orange.orange250,
        true: colors.orange.orange250,
      }}
      ios_backgroundColor={colors.orange.orange250}
    />
  );
}
