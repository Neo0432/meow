import {Tabs} from 'expo-router';
import React from 'react';
import {CustomTabBar} from '@entrypoint/navigation/bottom-tabs';
import {SvgHome24Dp} from '@shared/assets/icons/components/navigation/home-24dp';
import {SvgAccountCircle24Dp} from '@shared/assets/icons/components/navigation/account-circle-24dp';

export default function TabLayout() {
  return (
    <Tabs tabBar={CustomTabBar} screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="home"
        options={{title: 'Home', tabBarIcon: SvgHome24Dp}}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: SvgAccountCircle24Dp,
        }}
      />
    </Tabs>
  );
}
