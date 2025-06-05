import {Text, View} from 'react-native';
import {ButtonPetAction} from '@shared/ui/buttons/button-pet-action';
import {styles} from './style';
import {getTimeSince} from '@features/pets/pets-actions-rows/lib/get-time-since';

export interface ActionRowProps {
  actionName: string;
  icon: 'feed' | 'walk' | 'pill';
  value?: string | Date;
  onActionClick: () => void;
  buttonDisabled?: boolean;
}

export function ActionRow({
  actionName,
  value,
  icon,
  onActionClick,
  buttonDisabled,
}: ActionRowProps) {
  const valueToDisplay = getTimeSince(value) + ' ago';
  return (
    <View style={styles.row}>
      <View style={styles.textArea}>
        <Text style={styles.rowName}>{actionName}</Text>
        <Text style={styles.value}>{valueToDisplay}</Text>
      </View>

      <ButtonPetAction
        icon={icon}
        onPress={onActionClick}
        disabled={buttonDisabled}
      />
    </View>
  );
}
