import {Text, View} from 'react-native';
import {RadioButton} from '@shared/ui/controlls/radio-button';
import {styles} from './style';

export interface IGenderSelectorProps {
  value: 'Male' | 'Female' | undefined;
  onChange: (...event: any[]) => void;
}

export function GenderSelector({value, onChange}: IGenderSelectorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <RadioButton
          isSelected={value === 'Male'}
          setSelected={() => onChange('Male')}
        />
        <Text style={styles.text}>Male</Text>
      </View>
      <View style={styles.row}>
        <RadioButton
          isSelected={value === 'Female'}
          setSelected={() => onChange('Female')}
        />
        <Text style={styles.text}>Female</Text>
      </View>
    </View>
  );
}
