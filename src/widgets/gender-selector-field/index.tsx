import {GenderSelector} from '@widgets/gender-selector';
import {Text, View} from 'react-native';
import {styles} from './style';
import {IGenderSelectorProps} from '@widgets/gender-selector/ui/gender-selector';

export function GenderSelectorField({
  ...genderSelectorProps
}: IGenderSelectorProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gender</Text>
      <GenderSelector {...genderSelectorProps} />
    </View>
  );
}
