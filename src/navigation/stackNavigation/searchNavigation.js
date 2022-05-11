import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListeMusic from '../../screen/MusicList';
import AddAvis from '../../screen/addAvis';

const Stack = createNativeStackNavigator();

export default function Searchnavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="MusicList" component={ListeMusic} />
        <Stack.Screen name="avis" component={AddAvis} />
    </Stack.Navigator>
  )
}