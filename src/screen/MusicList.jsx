import { View, TextInput, ScrollView, StyleSheet} from 'react-native'
import React, {useState, useEffect} from 'react'
import Card from '../components/card'
import { findByTitle } from '../service/search';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

export default function ListeMusic() {
    const [searchTitle, setSearchTitle] = useState("");
    const [contentData, setContentData] = useState({})
    const navigation = useNavigation();

    useEffect(() => {
        if (searchTitle.length <= 3) 
        return;
        
        findByTitle(searchTitle).then(data =>{
            if(data){
                console.log("**data**")
                console.log(data)

                setContentData(data)
            }
        }).catch(err => console.error(err))
        console.log(contentData)
    }, [searchTitle])



    return (
        <View>
          <TextInput onChangeText={value => setSearchTitle(value)} value={searchTitle}/>
          <SafeAreaView>
              <ScrollView>
                  {contentData.results && contentData.results.map((item, index) => {
                      const handler = () =>{
                        navigation.navigate('add_avis', {titre: item.collectionName, artworkUrl100: item.artworkUrl100})
                        
                      }
    
                      return(
                        <Card content={item} title={item.collectionName} artist={item.artistName} image={item.artworkUrl100} key={index} handler={handler} />
                  )})}
              </ScrollView>
          </SafeAreaView>
        </View>
      )



  
 }
  const styles = StyleSheet.create({
    TextInput:{
        height:39,
        width: '90%',
        backgroundColor: '#EBEBEB',
        borderRadius:20,
        marginTop:15,
        paddingLeft:15
    },
    mainView:{
        flex:1,
        alignItems:'center'
    },
    

})

