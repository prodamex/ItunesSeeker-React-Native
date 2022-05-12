import { Text, View, TextInput, ScrollView, StyleSheet} from 'react-native'
import React, {useState, useEffect} from 'react'
import Card from '../components/card'
import { findByTitle } from '../service/search';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Boutton from '../components/boutton';
import { useDispatch, useSelector } from 'react-redux';
import { avisSelector, notesSelector } from '../store/selector/avis.selector';
import { setCurrentAvis } from '../store/reducer/avis.reducer';


export default function ListAvis() {
    const [searchTitle, setSearchTitle] = useState("");
    const [contentData, setContentData] = useState([]);
    const navigation = useNavigation();
    const notes = useSelector(notesSelector);
    const data = useSelector(notesSelector);
    const dispatch = useDispatch();


    return (
        <View>
          <TextInput style={styles.TextInput} onChangeText={value => setSearchTitle(value)} value={searchTitle}/>
      <Boutton onPress={()=> console.log(notes)} item={<Text>Afficher liste</Text>}/>
          <SafeAreaView>
          
              <ScrollView>
                  {data && data.map((item, index) => {
                      const handler = () =>{
                        dispatch(setCurrentAvis(item))
                        navigation.navigate('avis_show')
                        
                      }
    
                      return(
                        <Card content={item} title={item.title} artist={item.artistName} image={item.imageUrl} note={item.note} key={index} handler={handler} />
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

