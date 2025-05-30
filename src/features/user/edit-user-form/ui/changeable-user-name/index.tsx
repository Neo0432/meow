import {Text, TextInput, View} from 'react-native';
import {useState} from 'react';
import {ControllerRenderProps} from 'react-hook-form';
import {styles} from './style';

export function ChangeableUserName({
  field,
}: {
  field: ControllerRenderProps<any, any>;
}) {
  const {value, onChange, onBlur} = field;
  const [isEditing, setIsEditing] = useState(false);
  return (
    <View style={styles.container}>
      {isEditing ? (
        <TextInput
          value={value}
          onChangeText={onChange}
          onBlur={() => {
            onBlur();
            setIsEditing(false);
          }}
          autoFocus={true}
          style={styles.text}
        />
      ) : (
        <Text onLongPress={() => setIsEditing(true)} style={styles.text}>
          {value || 'UserName'}
        </Text>
      )}
    </View>
  );
}
