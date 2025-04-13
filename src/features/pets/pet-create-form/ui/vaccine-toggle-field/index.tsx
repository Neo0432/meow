import {ToggleControl} from '@shared/ui/controlls';
import {Text, View} from 'react-native';
import {IToggleControlProps} from '@shared/ui/controlls/toggle';
import {styles} from './style';

export function VaccineToggleField({
  ...toggleControlProps
}: IToggleControlProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Vaccine</Text>
      <ToggleControl {...toggleControlProps} />
    </View>
  );
}
