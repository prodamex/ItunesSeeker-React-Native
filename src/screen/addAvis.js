import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'
import NoteEtoiles from '../components/noteEtoiles'
import { useRoute } from '@react-navigation/native';

export default function AddAvis() {
    const route = useRoute();
    console.log(route)

    const [avis, setAvis] = useState({title: route.params.titre, description: "", note: 0, imageUrl: route.params.artworkUrl100 })

    const changeAvisTitle = (value) =>{
        setAvis(currentState => {
            return {
                ...currentState,
                title: value,
            }
        })
    }

    const changeAvisDescription = (value) =>{
        setAvis(currentState => {
            return {
                ...currentState,
                description: value,
            }
        })
    }

    const changeAvisNote= (value) =>{
        setAvis(currentState => {
            return {
                ...currentState,
                note: value,
            }
        })
    }

    



    return (
    <View>
      <Text>donner voter avis</Text>
      <TextInput style={style.TextInput} onChangeText={changeAvisTitle} value={avis.title}/>
      <TextInput style={style.TextInput} onChangeText={changeAvisDescription} value={avis.description}/>
      <Image style={style.artistPhoto} source={{
          uri: avis.imageUrl,
        }}/>

      <NoteEtoiles note={avis.note} noteMax={5} setNote={changeAvisNote} />
      <Boutton item={() => {}}/>
    </View>
  )
}

const style = StyleSheet.create({
    TextInput:{
        height:39,
        width: '90%',
        backgroundColor: '#EBEBEB',
        borderRadius:20,
        marginTop:15,
        paddingLeft:15
    },
    artistPhoto:{
        backgroundColor:'rgba (0,0,0,0.06)',
         width:50,
         height:50,
         borderRadius:50,
     }
})