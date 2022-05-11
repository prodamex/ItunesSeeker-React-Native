import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';


export default function card({title, artist, image, handler}) {
    
    console.log(handler)
  return (
      
    <TouchableOpacity onPress={handler}>
    <View style={styles.postView}>
        <View style={styles.postTitle}>
            <View style={styles.imageView}>
            <Image style={styles.artistPhoto} source={{uri:image}}/>
                    <View style={styles.titleView}>
                        <Text style={styles.title}>{title}</Text>
                        <Text style={styles.artist}>{artist}</Text>
                    </View>
            </View>
        </View>
    </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
        container: {
        height: "10%",
        width: " 100%",
        margin: 10,
    },
    artist:{
        fontSize:11,
        color:'#989898'
    },
    title: {
        textAlign : "center"
    },
    titleView:{
        marginLeft:15,
    },
    postTitle:{
        width: '90%',
        display:'flex',
        justifyContent:'space-between',
        flexDirection: 'row'
    },
    postView:{
        width:'100%',
        alignItems: 'center',
        marginTop:20,
    },
    artistPhoto:{
        backgroundColor:'rgba (0,0,0,0.06)',
         width:50,
         height:50,
         borderRadius:50,
     },
     imageView:{
        display:'flex',
        flexDirection: 'row',
        alignItems:'center'
    },
    
})