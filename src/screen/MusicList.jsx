import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { TextInput } from 'react-native-web'
import Card from '../components/card'
import { findByTitle } from '../service/search';


export default function MusicList() {
    const [searchTitle, setSearchTitle] = useState("");
    const [contentData, setContentData] = useState({})

    useEffect(() => {
        findByTitle(searchTitle).then(data =>{
            if(data){
                console.log("**data**")
                console.log(data)

                setContentData(data.results)
            }
        }).catch(err => console.error(err))
        console.log(contentData)
    }, [searchTitle])



  return (
    <View>
      <TextInput onChangeText={value => setSearchTitle(value)} value={searchTitle}/>
      <FlatList/>
    </View>
  )
}