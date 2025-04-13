import {PropsWithChildren} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';

export function FieldsCategory({
  categoryName,
  children,
}: PropsWithChildren<{categoryName: string}>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryName}</Text>
      {children}
    </View>
  );
}
