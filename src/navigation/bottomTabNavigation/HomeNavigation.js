import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MusicList from '../../screen/MusicList';
import Reviews from '../../screen/Reviews';
import addAvis from '../../screen/addAvis';

const Tab = createBottomTabNavigator();

export default function Homenavigation() {
  return (
    <Tab.Navigator>
        <Tab.Screen name="MusicList" component={MusicList} />
        <Tab.Screen name="votre_avis" component={addAvis} />
    </Tab.Navigator>
  )
}