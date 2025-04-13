import {ReactNode} from 'react';
import {SafeAreaViewLayout} from '../safe-area-layout';
import {colors} from '@shared/styles/colors';
import {StyleSheet, View} from 'react-native';

export function DarkBgLayout({children}: {children: ReactNode}) {
  return (
    <View style={styles.screen}>
      <SafeAreaViewLayout>{children}</SafeAreaViewLayout>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {flex: 1, backgroundColor: colors.orange.orange500},
});
