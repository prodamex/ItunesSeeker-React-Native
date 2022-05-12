import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MusicList from '../../screen/MusicList';
import DetailsAvis from '../../screen/DetailsAvis'
import ListAvis from '../../screen/ListAvis';
const Stack = createStackNavigator();

export default function ShowNavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="list_avis" component={ListAvis} />
        <Stack.Screen name="avis_show" component={DetailsAvis} />
    </Stack.Navigator>
  )
}