import {Text, View} from 'react-native';
import {useBubbleColors} from '@shared/ui/bubbles/hooks/use-bubble-colors';
import {styles} from './style';
import {BubblesProps} from '@shared/ui/bubbles/model/types';

export function Bubble({title, value, color}: BubblesProps) {
  const {text, bubble} = useBubbleColors(color);

  return (
    <View style={[styles.container, bubble]}>
      <Text style={[styles.title, text]}>{title}</Text>
      <Text style={[styles.value, text]}>{value}</Text>
    </View>
  );
}
