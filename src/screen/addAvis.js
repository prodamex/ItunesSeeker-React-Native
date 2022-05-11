import { View, Text, TextInput, StyleSheet, Image } from 'react-native'
import React, {useState} from 'react'
import NoteEtoiles from '../components/noteEtoiles'
import Boutton from '../components/boutton';
import { useRoute } from '@react-navigation/native';
import {setAvis} from '../store/reducer/avis.reducer'
import { useDispatch } from 'react-redux';



export default function AddAvis() {
    const route = useRoute();
    const dispatch = useDispatch();
    console.log(route)
    

    const [newAvis, setNewAvis] = useState({title: route.params.titre, description: "", note: 0, imageUrl: route.params.artworkUrl100 })

    const changeAvisTitle = (value) =>{
        setNewAvis(currentState => {
            return {
                ...currentState,
                title: value,
            }
        })
    }

    const changeAvisDescription = (value) =>{
        setNewAvis(currentState => {
            return {
                ...currentState,
                description: value,
            }
        })
    }

    const changeAvisNote= (value) =>{
        setNewAvis(currentState => {
            return {
                ...currentState,
                note: value,
            }
        })
    }

    const save = () => {
        dispatch(setAvis(newAvis));
    }

    



    return (
    <View>
      <Text>donner voter avis</Text>
      <TextInput style={style.TextInput} onChangeText={changeAvisTitle} value={newAvis.title}/>
      <TextInput style={style.TextInput} onChangeText={changeAvisDescription} value={newAvis.description}/>
      <Image style={style.artistPhoto} source={{
          uri: newAvis.imageUrl,
        }}/>

      <NoteEtoiles note={newAvis.note} noteMax={5} setNote={changeAvisNote} />
      <Boutton item={<Text>save</Text>} onPress={save}/>
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