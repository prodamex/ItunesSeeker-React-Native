import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { currentAvisSelector } from '../store/selector/avis.selector'

export default function DetailsAvis() {

  const currentAvis = useSelector(currentAvisSelector)

  console.log(currentAvis)

  return (
    <View>
      <Text>{currentAvis.title}</Text>
        <Text>{currentAvis.description}</Text>
        <Image style={styles.artistPhoto} source={{uri:currentAvis.imageUrl}}></Image>
        <Text>{currentAvis.note}</Text>

    </View>
  )
}

const styles = StyleSheet.create({
    artistPhoto:{
        backgroundColor:'#0000000f',
         width:50,
         height:50,
         borderRadius:50,
     },

})