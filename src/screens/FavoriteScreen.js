import React from 'react';
import { StyleSheet, Text, View ,Platform, Image,ScrollView , TouchableOpacity,FlatList} from 'react-native';
// import Header from '../components/Header';
import Card from '../components/Card';
import { useSelector } from 'react-redux';


const FavoriteScreen = (props) => {
    const favorites = useSelector(state=>state.news.favorites);
    return (
        // <ScrollView style={{backgroundColor:'black'}}>
          <FlatList 
              
              data={favorites}
              keyExtractor={item => item.url}
              renderItem={({item}) => (
                
                <Card 
                  navigation={props.navigation}
                  title={item.title} 
                  image={item.urlToImage}
                  description={item.description}
                  url={item.url}
                />
              )}
              />
        // </ScrollView>
    )
}
const styles= StyleSheet.create({
    
})

export default FavoriteScreen