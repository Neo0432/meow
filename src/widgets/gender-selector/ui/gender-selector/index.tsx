import {Text, View} from 'react-native';
import {RadioButton} from '@shared/ui/controlls/radio-button';
import {styles} from './style';

export interface IGenderSelectorProps {
  value: 'male' | 'female' | undefined;
  onChange: (...event: any[]) => void;
}

export function GenderSelector({value, onChange}: IGenderSelectorProps) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <RadioButton
          isSelected={value === 'male'}
          setSelected={() => onChange('male')}
        />
        <Text style={styles.text}>Male</Text>
      </View>
      <View style={styles.row}>
        <RadioButton
          isSelected={value === 'female'}
          setSelected={() => onChange('female')}
        />
        <Text style={styles.text}>Female</Text>
      </View>
    </View>
  );
}
