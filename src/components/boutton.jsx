import {  TouchableOpacity } from 'react-native'
import React from 'react'

export default function Boutton({onPress, item,  style}) {
  return (
    <TouchableOpacity style={style} onPress={onPress}>
      {item}
    </TouchableOpacity>
  )
}