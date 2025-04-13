import {Text, TouchableOpacity} from 'react-native';
import {style} from './style';

interface ActionSheetItemProps {
  text: string;
  onPress: () => void;
  isCansel?: boolean;
}

export function ActionSheetItem({
  text,
  onPress,
  isCansel,
}: ActionSheetItemProps) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[style.button, isCansel && style.canselButton]}>
      <Text style={[style.text, isCansel && style.textCansel]}>{text}</Text>
    </TouchableOpacity>
  );
}
