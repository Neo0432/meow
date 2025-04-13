import {DarkBgLayout} from '@entrypoint/layouts/dark-bg-layout';
import {ReactNode} from 'react';
import {View} from 'react-native';
import {styles} from './style';

export function ModalsScreensLayout({children}: {children: ReactNode}) {
  return (
    <DarkBgLayout>
      <View style={styles.screen}>{children}</View>
    </DarkBgLayout>
  );
}
