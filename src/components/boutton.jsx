import {  TouchableOpacity, StyleSheet, Text } from 'react-native'
import React from 'react'

export default function Boutton({onPress, item, style}) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      
      <Text style={styles.text}>{item}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
    width:350,
    marginLeft:30,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
})