import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function Searchnavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="MusicList" component={HomeScreen} />
        <Tab.Screen name="avis" component={SettingsScreen} />
    </Tab.Navigator>
  )
}