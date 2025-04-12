import {TouchableWithoutFeedback, View} from 'react-native';
import {PetImage} from '@widgets/pet-card/pet-closed-card/ui/pet-image';
import {PetActions} from '@widgets/pet-card/pet-closed-card/ui/pet-actions';
import {styles} from './style';
import {PetClosedCardProps} from '@widgets/pet-card/pet-closed-card/model/types';

export function PetClosedCard({
  pet,
  onPress,
  onFeed,
  onWalk,
  onMedication,
}: PetClosedCardProps) {
  return (
    <View style={styles.card}>
      <TouchableWithoutFeedback onPress={onPress}>
        <PetImage pet={pet} />
      </TouchableWithoutFeedback>
      <PetActions onFeed={onFeed} onWalk={onWalk} onMedication={onMedication} />
    </View>
  );
}
