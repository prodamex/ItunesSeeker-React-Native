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
          <Text style={styles.titre}>Mes favoris :</Text>
          <SafeAreaView>
          
              <ScrollView>
                  {data && data.map((item, index) => {
                      const handler = () =>{
                        dispatch(setCurrentAvis(item))
                        navigation.navigate('Infos music')
                        
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
        marginLeft:20
    },
    mainView:{
        flex:1,
        alignItems:'center'
    },
    titre:{
      marginTop:30,
     textAlign: "center",
     fontSize: 30,
    },
    

})

