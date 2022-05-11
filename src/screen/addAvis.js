import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, {useState} from 'react'
import NoteEtoiles from '../components/noteEtoiles'

export default function AddAvis({navigation, route }) {

    const [avis, setAvis] = useState({title: "", description: "", note: 0})

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
      <NoteEtoiles note={avis.note} noteMax={5} setNote={changeAvisNote} />
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
})