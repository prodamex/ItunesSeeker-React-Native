import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Searchnavigation from '../stackNavigation/searchNavigation';
import ShowNavigation from '../stackNavigation/ShowNavigation';

import ListAvis from '../../screen/ListAvis';


const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="list_music" component={Searchnavigation} />
        <Tab.Screen name="votre_avis" component={ShowNavigation}/>
       
    </Tab.Navigator>
  )
}