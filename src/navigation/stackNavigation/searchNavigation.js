import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import MusicList from '../../screen/MusicList';
import AddAvis from '../../screen/addAvis';

const Stack = createStackNavigator();

export default function Searchnavigation() {
  return (
    <Stack.Navigator>
        <Stack.Screen name="list_music" component={MusicList} />
        <Stack.Screen name="add_avis" component={AddAvis} />
    </Stack.Navigator>
  )
}