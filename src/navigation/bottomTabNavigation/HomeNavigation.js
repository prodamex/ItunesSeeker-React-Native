import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Searchnavigation from '../stackNavigation/searchNavigation';



const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}
    >
        <Tab.Screen name="list_music" component={Searchnavigation} />
        <Tab.Screen name="votre_avis" component={Searchnavigation} />
    </Tab.Navigator>
  )
}