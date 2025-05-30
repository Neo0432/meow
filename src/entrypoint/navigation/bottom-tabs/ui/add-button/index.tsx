import {RoundedIconButton} from '@shared/ui/buttons/rounded-icon-button';
import {styles} from './style';

export function AddButton({onPress}: {onPress: () => void}) {
  return (
    <RoundedIconButton
      icon={'add'}
      onPress={onPress}
      initialStyle={styles.addButton}
      pressedStyle={styles.addButtonPressed}
      iconSize={32}
    />
  );
}
