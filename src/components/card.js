import React from 'react'
import { View, Text, StyleSheet } from 'react-native';


export default function card({title}) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
        container: {
        height: "10%",
        width: " 100%",
        margin: 10,
    },
    title: {
        textAlign : "center"
    }
})