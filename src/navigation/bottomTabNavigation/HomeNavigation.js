import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MusicList from '../../screen/MusicList';
import Reviews from '../../screen/Reviews';

const Tab = createBottomTabNavigator();

export default function Homenavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="MusicList" component={MusicList} />
        <Tab.Screen name="avis" component={MusicList} />
    </Tab.Navigator>
  )
}