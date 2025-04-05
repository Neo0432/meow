import {Image, StyleSheet, Platform, View, Text} from 'react-native';

import {InputFilled} from '@shared/ui/inputs/input-fiilled';
import {colors} from '@shared/styles/colors';

export default function HomeScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: colors.orange.orange500,
        padding: 24,
      }}>
      <InputFilled
        title={<Text style={{fontSize: 12, height: 14}}>Hello</Text>}
        iconType={'password'}
        hasIcon={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
