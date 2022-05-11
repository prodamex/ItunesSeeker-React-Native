import React from 'react'
import { View, Text, Stylesheet } from 'react-native';


export default function card({title}) {
  return (
    <View>
        <Text>{title}</Text>
    </View>
  )
}

const style = Stylesheet.create({
    container: {
        height: "10%",
        width: " 100%",
        margin: 10,
    },
    title: {
        textAlign : "center"
    }
})