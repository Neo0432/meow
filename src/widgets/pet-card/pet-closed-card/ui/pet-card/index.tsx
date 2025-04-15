import {TouchableOpacity, View} from 'react-native';
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
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={onPress}
        style={styles.imagePressable}>
        <PetImage pet={pet} />
      </TouchableOpacity>
      <PetActions onFeed={onFeed} onWalk={onWalk} onMedication={onMedication} />
    </View>
  );
}
