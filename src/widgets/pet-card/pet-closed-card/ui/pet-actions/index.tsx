import {View} from 'react-native';
import {IconButton} from '@shared/ui/buttons/icon-button';
import {styles} from './style';

interface IPetActions {
  onFeed: () => void;
  onWalk: () => void;
  onMedication: () => void;
}

export function PetActions({onFeed, onWalk, onMedication}: IPetActions) {
  return (
    <View style={styles.container}>
      <IconButton icon="feed" onPress={onFeed} />
      <IconButton icon="walk" onPress={onWalk} />
      <IconButton icon="pill" onPress={onMedication} />
    </View>
  );
}
