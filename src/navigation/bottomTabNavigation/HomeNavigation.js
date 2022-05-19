import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Searchnavigation from '../stackNavigation/searchNavigation';
import ShowNavigation from '../stackNavigation/ShowNavigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import ListAvis from '../../screen/ListAvis';


const Tab = createBottomTabNavigator();

export default function HomeNavigation() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Recherche" component={Searchnavigation} 
        options={{
          tabBarIcon: ({size, color}) => (<Icon name={"search"} color={color} size={size} />)
      }} />
        <Tab.Screen name="Bibliothéque" component={ShowNavigation} 
        options={{
          tabBarIcon: ({size, color}) => (<Icon name={"music"} color={color} size={size} />)
      }}/>
       
    </Tab.Navigator>
  )
}