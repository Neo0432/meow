import {Text, View} from 'react-native';
import {ButtonPetAction} from '@shared/ui/buttons/button-pet-action';
import {styles} from './style';
import {getHoursSince} from '@features/pets/pets-actions-rows/lib/get-hours-since';

export interface ActionRowProps {
  actionName: string;
  icon: 'feed' | 'walk' | 'pill';
  value?: string;
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
  const valueToDisplay = getHoursSince(value) + 'h ago';
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
