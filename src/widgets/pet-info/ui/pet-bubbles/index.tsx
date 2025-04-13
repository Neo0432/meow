import {View} from 'react-native';
import {styles} from './style';
import {Bubble} from '@shared/ui/bubbles';

export function PetBubbles({
  age,
  sex = 'male',
  vaccine,
}: {
  age: number;
  sex?: 'male' | 'female';
  vaccine: boolean;
}) {
  const sexValue = sex === 'female' ? 'girl' : 'boy';

  return (
    <View style={styles.container}>
      <Bubble title="age" value={age.toString()} color="blue" />
      <Bubble title="sex" value={sexValue} color="orange" />
      <Bubble title="vaccine" value={String(vaccine)} color="green" />
    </View>
  );
}
