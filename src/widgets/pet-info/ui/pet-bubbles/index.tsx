import {View} from 'react-native';
import {styles} from './style';
import {Bubble} from '@shared/ui/bubbles';

export function PetBubbles({
  age,
  sex = 'Male',
  vaccine,
}: {
  age?: string;
  sex?: 'Male' | 'Female';
  vaccine: boolean;
}) {
  const sexValue = sex === 'Female' ? 'girl' : 'boy';

  return (
    <View style={styles.container}>
      <Bubble title="age" value={age} color="blue" />
      <Bubble title="sex" value={sexValue} color="orange" />
      <Bubble title="vaccine" value={String(vaccine || '')} color="green" />
    </View>
  );
}
