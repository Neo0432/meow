import {Dispatch, SetStateAction} from 'react';
import {TouchableWithoutFeedback, View} from 'react-native';
import {styles} from './style';

export function RadioButton({
  isSelected,
  setSelected,
}: {
  isSelected: boolean;
  setSelected: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <TouchableWithoutFeedback
      onPress={() => setSelected(prevState => !prevState)}>
      <View style={styles.button}>
        {isSelected && <View style={styles.inner} />}
      </View>
    </TouchableWithoutFeedback>
  );
}
