import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import { currentAvisSelector } from '../store/selector/avis.selector'
import { Rating } from 'react-native-ratings';


export default function DetailsAvis() {

  const currentAvis = useSelector(currentAvisSelector)


  return (
    <View>
      <Text style={styles.titre}>{currentAvis.title}</Text>
      <View style={styles.photo}>
        <Image style={styles.artistPhoto} source={{uri:currentAvis.imageUrl}}></Image>
        </View>
        <Text style={styles.description}>{currentAvis.description}</Text>
        
      
<Rating
  showRating
  value={currentAvis.note}
  readonly
  style={{ paddingVertical: 10 }}
/>
    </View>
  )
}

const styles = StyleSheet.create({
    artistPhoto:{
      
      backgroundColor:'#0000000f',
      width:80,
      height:80,
      borderRadius:50,   
     },
     photo:{
      justifyContent: 'center',
      alignItems: 'center'
     },
     titre:{
       marginTop:30,
      textAlign: "center",
      fontSize: 30,
     },
     description:{
       marginTop:20,
       textAlign:"center",
       marginEnd:40
       
     }

})